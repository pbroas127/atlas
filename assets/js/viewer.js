/* Atlas — markdown reader
 *
 * ?doc=content/whatever.md&title=Nice%20Name
 *
 * Renders with marked (vendored locally, no CDN), then post-processes the DOM:
 * heading ids that match GitHub's slug rules so in-document anchor links work,
 * tables wrapped so they scroll instead of blowing out the layout on a phone,
 * external links opened in a new tab, and a table of contents built from h2/h3.
 */

const params = new URLSearchParams(location.search);
const src = params.get('doc');
const title = params.get('title');

const docEl = document.getElementById('doc');
const titleEl = document.getElementById('doc-title');

/* GitHub-compatible slugs: lowercase, drop punctuation, whitespace -> hyphen.
   Whitespace is replaced per-character so "A — B" gives "a--b", matching the
   double-hyphen anchors GitHub generates for em-dashed headings. */
function slugify(text) {
  return text.toLowerCase().trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s/g, '-');
}

function fail(msg, detail) {
  docEl.innerHTML = `<h1>Couldn't open that</h1><p>${msg}</p>${
    detail ? `<pre><code>${detail.replace(/[<>&]/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]))}</code></pre>` : ''
  }<p><a href="index.html">← Back to Atlas</a></p>`;
}

async function boot() {
  if (!src) return fail('No document was specified.');

  // only ever load markdown from inside this site
  if (/^https?:|^\/\/|\.\./.test(src)) return fail('That path is not allowed.');

  titleEl.textContent = title || src.split('/').pop();
  document.title = `${titleEl.textContent} · Atlas`;

  let md;
  try {
    const res = await fetch(src, { cache: 'no-store' });
    if (!res.ok) return fail(`The file returned ${res.status}.`, src);
    md = await res.text();
  } catch (e) {
    return fail('The file could not be fetched.', String(e));
  }

  marked.setOptions({ gfm: true, breaks: false });
  docEl.innerHTML = marked.parse(md);

  decorate();
  buildToc();
  wireScroll();
}

function decorate() {
  // heading ids + hover anchors
  const seen = Object.create(null);
  docEl.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(h => {
    let id = slugify(h.textContent);
    if (!id) return;
    if (seen[id] != null) { seen[id]++; id = `${id}-${seen[id]}`; } else seen[id] = 0;
    h.id = id;
    if (/H[23]/.test(h.tagName)) {
      const a = document.createElement('a');
      a.className = 'anchor';
      a.href = '#' + id;
      a.textContent = '#';
      a.setAttribute('aria-hidden', 'true');
      h.appendChild(a);
    }
  });

  // tables scroll instead of overflowing
  docEl.querySelectorAll('table').forEach(t => {
    const wrap = document.createElement('div');
    wrap.className = 'table-wrap';
    t.parentNode.insertBefore(wrap, t);
    wrap.appendChild(t);
  });

  // external links open in a new tab; internal anchors scroll smoothly
  docEl.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute('href');
    if (/^https?:/.test(href)) {
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    } else if (href.startsWith('#')) {
      a.addEventListener('click', e => {
        const t = document.getElementById(decodeURIComponent(href.slice(1)));
        if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); history.replaceState(null, '', href); }
      });
    }
  });
}

/* ---------- contents ---------- */

let tocLinks = [];

function buildToc() {
  const heads = [...docEl.querySelectorAll('h2, h3')].filter(h => h.id);
  const list = document.getElementById('toc-list');
  const toc = document.getElementById('toc');
  const scrim = document.getElementById('toc-scrim');
  const btn = document.getElementById('toc-btn');

  if (heads.length < 3) { btn.style.display = 'none'; return; }

  list.innerHTML = heads.map(h =>
    `<a href="#${h.id}" class="lvl-${h.tagName[1]}">${
      h.textContent.replace(/#$/, '').trim().replace(/[<>&]/g, c => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]))
    }</a>`).join('');

  tocLinks = [...list.querySelectorAll('a')].map((a, i) => ({ a, h: heads[i] }));

  const setOpen = open => {
    toc.classList.toggle('open', open);
    scrim.classList.toggle('open', open);
  };
  btn.onclick = () => setOpen(!toc.classList.contains('open'));
  scrim.onclick = () => setOpen(false);
  list.onclick = e => {
    const a = e.target.closest('a');
    if (!a) return;
    e.preventDefault();
    document.getElementById(decodeURIComponent(a.getAttribute('href').slice(1)))
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });
}

/* ---------- scroll state ---------- */

function wireScroll() {
  const bar = document.getElementById('progress');
  const totop = document.getElementById('totop');
  let ticking = false;

  totop.onclick = e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const y = window.scrollY;
    bar.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
    totop.classList.toggle('show', y > 700);

    // highlight the section we're currently in
    let current = null;
    for (const { a, h } of tocLinks) {
      if (h.getBoundingClientRect().top <= 90) current = a; else break;
    }
    tocLinks.forEach(({ a }) => a.classList.toggle('active', a === current));
    if (current) current.scrollIntoView({ block: 'nearest' });

    ticking = false;
  };

  addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });

  update();
}

boot();
