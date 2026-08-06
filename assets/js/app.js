/* Atlas — dashboard
 *
 * Items are seeded from data/items.json (committed to the repo) and then kept
 * in localStorage so edits / deletes / favorites survive a reload without
 * needing a backend. "Export JSON" gives you the current state to paste back
 * into data/items.json if you want a change to be permanent across devices.
 */

const STORE = 'atlas:v2';
const SEED = 'data/items.json';

let items = [];
let deleted = [];   // ids the user removed, so the seed doesn't resurrect them
let query = '';

/* ---------- icons ---------- */

const I = {
  star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3l2.6 5.6 6.1.8-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L3.3 9.4l6.1-.8z"/></svg>',
  starFill: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3l2.6 5.6 6.1.8-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L3.3 9.4l6.1-.8z"/></svg>',
  edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4L19 9a2.1 2.1 0 0 0-3-3L5 17z"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M9 7V5h6v2M6 7l1 13h10l1-13"/></svg>'
};

/* ---------- storage ---------- */

/* Always re-read the committed seed and merge anything new into the saved
 * state. Without this, a browser that loaded the site once would never see
 * an item added to data/items.json again — the whole point of committing one.
 *
 * Local edits win for items that already exist; genuinely new ids get added;
 * ids the user deleted stay deleted. */
async function load() {
  const saved = localStorage.getItem(STORE);
  if (saved) {
    try {
      const state = JSON.parse(saved);
      if (Array.isArray(state)) {           // v1 format was a bare array
        items = state;
      } else {
        items = state.items || [];
        deleted = state.deleted || [];
      }
    } catch (e) {
      console.warn('Bad saved state, reseeding', e);
    }
  }

  const seed = await fetchSeed();

  if (!items.length && !deleted.length) {
    items = seed;                            // first ever visit
  } else {
    const known = new Set(items.map(i => i.id));
    const gone = new Set(deleted);
    const fresh = seed.filter(s => !known.has(s.id) && !gone.has(s.id));
    if (fresh.length) items = [...fresh, ...items];
  }
  save();
}

async function fetchSeed() {
  try {
    const res = await fetch(SEED, { cache: 'no-store' });
    return await res.json();
  } catch (e) {
    console.error('Could not load seed', e);
    return [];
  }
}

async function reseed() {
  items = await fetchSeed();
  deleted = [];
  save();
}

function save() {
  localStorage.setItem(STORE, JSON.stringify({ items, deleted }));
}

/* ---------- helpers ---------- */

const esc = s => String(s ?? '').replace(/[&<>"']/g, c =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// Turn a prompt into a free Pollinations image URL — no key, no account.
function artUrl(img, id) {
  if (!img) return 'assets/img/default.jpg';
  if (/^(https?:)?\/\//.test(img) || img.startsWith('assets/') || img.startsWith('data:')) return img;
  // treat as a prompt
  const seed = Math.abs([...id].reduce((a, c) => (a * 31 + c.charCodeAt(0)) | 0, 7)) % 100000;
  const p = encodeURIComponent(img + ', abstract, dark, minimal, high contrast, no text');
  return `https://image.pollinations.ai/prompt/${p}?width=1200&height=800&seed=${seed}&nologo=true`;
}

function hrefFor(it) {
  if (it.type === 'md') return `viewer.html?doc=${encodeURIComponent(it.target)}&title=${encodeURIComponent(it.name)}`;
  return it.target;
}

function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove('show'), 2600);
}

/* ---------- render ---------- */

function render() {
  const board = document.getElementById('board');
  const q = query.trim().toLowerCase();

  const visible = items.filter(it =>
    !q || (it.name + ' ' + it.desc + ' ' + it.type).toLowerCase().includes(q));

  const favs = visible.filter(i => i.favorite);
  const rest = visible.filter(i => !i.favorite);

  document.getElementById('count').textContent =
    `${items.length} item${items.length === 1 ? '' : 's'}` +
    (favs.length ? ` · ${favs.length} favorited` : '');

  if (!visible.length) {
    board.innerHTML = `<div class="empty"><strong>${q ? 'Nothing matches that' : 'Atlas is empty'}</strong>${
      q ? 'Try a different search.' : 'Hit Add to put your first thing on the map.'}</div>`;
    return;
  }

  let html = '';
  if (favs.length) html += `<div class="section-label">Favorites</div><div class="grid">${favs.map(card).join('')}</div>`;
  if (rest.length) html += `<div class="section-label">${favs.length ? 'Everything else' : 'All items'}</div><div class="grid">${rest.map(card).join('')}</div>`;
  board.innerHTML = html;
}

function card(it) {
  const label = it.type === 'md' ? 'Doc' : it.type === 'game' ? 'Game' : 'Link';
  return `
  <article class="card" tabindex="0" role="link" data-id="${esc(it.id)}" data-open="${esc(hrefFor(it))}"
           data-ext="${it.type === 'md' ? '0' : '1'}" aria-label="${esc(it.name)}">
    <div class="card-art" style="background-image:url('${esc(artUrl(it.img, it.id))}')"></div>
    <div class="card-top">
      <span class="badge" data-type="${esc(it.type)}">${label}</span>
      <div class="card-actions">
        <button class="icon-btn${it.favorite ? ' is-fav' : ''}" data-act="fav" title="${it.favorite ? 'Unfavorite' : 'Favorite'}" aria-label="Favorite">${it.favorite ? I.starFill : I.star}</button>
        <button class="icon-btn" data-act="edit" title="Edit" aria-label="Edit">${I.edit}</button>
        <button class="icon-btn danger" data-act="del" title="Delete" aria-label="Delete">${I.trash}</button>
      </div>
    </div>
    <h3>${esc(it.name)}</h3>
    <p>${esc(it.desc)}</p>
  </article>`;
}

/* ---------- modal ---------- */

function openModal({ title, hint, fields, confirmText, onSave, danger }) {
  const back = document.createElement('div');
  back.className = 'modal-backdrop';
  back.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-label="${esc(title)}">
      <h2>${esc(title)}</h2>
      <p class="hint">${hint}</p>
      ${fields.map(f => `
        <div class="field">
          <label for="f-${f.key}">${esc(f.label)}</label>
          ${f.type === 'select'
            ? `<select id="f-${f.key}">${f.options.map(o =>
                `<option value="${esc(o.v)}"${o.v === f.value ? ' selected' : ''}>${esc(o.t)}</option>`).join('')}</select>`
            : f.type === 'textarea'
            ? `<textarea id="f-${f.key}" placeholder="${esc(f.ph || '')}">${esc(f.value || '')}</textarea>`
            : `<input id="f-${f.key}" type="text" value="${esc(f.value || '')}" placeholder="${esc(f.ph || '')}">`}
          ${f.sub ? `<div class="sub">${f.sub}</div>` : ''}
        </div>`).join('')}
      <div class="modal-actions">
        <button class="btn" data-x="cancel">Cancel</button>
        <button class="btn ${danger ? '' : 'btn-primary'}" data-x="ok"${danger ? ' style="border-color:rgba(242,85,90,.5);color:#f2555a"' : ''}>${esc(confirmText)}</button>
      </div>
    </div>`;

  document.body.appendChild(back);
  const first = back.querySelector('input, textarea, select');
  if (first) { first.focus(); first.select?.(); }

  const close = () => back.remove();
  back.addEventListener('click', e => { if (e.target === back) close(); });
  back.querySelector('[data-x="cancel"]').onclick = close;
  back.querySelector('[data-x="ok"]').onclick = () => {
    const vals = {};
    fields.forEach(f => vals[f.key] = back.querySelector('#f-' + f.key)?.value.trim());
    if (onSave(vals) !== false) close();
  };
  back.addEventListener('keydown', e => {
    if (e.key === 'Escape') close();
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') back.querySelector('[data-x="ok"]').click();
  });
}

const TYPE_OPTS = [
  { v: 'md', t: 'Markdown doc' },
  { v: 'link', t: 'Website link' },
  { v: 'game', t: 'Game' }
];

function editItem(it) {
  openModal({
    title: 'Edit item',
    hint: 'Rename it, rewrite the description, or point it somewhere else.',
    confirmText: 'Save',
    fields: [
      { key: 'name', label: 'Name', value: it.name, ph: 'App Ideas' },
      { key: 'desc', label: 'Short description', value: it.desc, ph: '12 new app ideas planned out' },
      { key: 'type', label: 'Type', type: 'select', value: it.type, options: TYPE_OPTS },
      { key: 'target', label: 'File path or URL', value: it.target, sub: 'A path like <code>content/notes.md</code>, or a full https:// link.' },
      { key: 'img', label: 'Image', type: 'textarea', value: it.img,
        sub: 'A path, an image URL, or just describe a picture — it gets generated free, no account.' }
    ],
    onSave(v) {
      if (!v.name) { toast('Needs a name'); return false; }
      Object.assign(it, { name: v.name, desc: v.desc, type: v.type, target: v.target, img: v.img });
      save(); render(); toast('Saved');
    }
  });
}

function addItem() {
  openModal({
    title: 'Add to Atlas',
    hint: 'A doc, a link, a game — anything you want to find again.',
    confirmText: 'Add',
    fields: [
      { key: 'name', label: 'Name', value: '', ph: 'Weekend Reading' },
      { key: 'desc', label: 'Short description', value: '', ph: 'Six essays worth a second pass' },
      { key: 'type', label: 'Type', type: 'select', value: 'link', options: TYPE_OPTS },
      { key: 'target', label: 'File path or URL', value: '', ph: 'https://example.com' },
      { key: 'img', label: 'Image', type: 'textarea', value: '', ph: 'deep teal ocean waves from above, aerial',
        sub: 'Describe a picture and it gets generated free, no account. Leave blank for the default.' }
    ],
    onSave(v) {
      if (!v.name) { toast('Needs a name'); return false; }
      const id = (v.name.toLowerCase().replace(/[^\w]+/g, '-').replace(/^-|-$/g, '') || 'item') + '-' + Date.now().toString(36).slice(-4);
      items.unshift({
        id, name: v.name, desc: v.desc, type: v.type, target: v.target,
        img: v.img, favorite: false, added: new Date().toISOString().slice(0, 10)
      });
      save(); render(); toast('Added');
    }
  });
}

function delItem(it) {
  openModal({
    title: `Delete "${it.name}"?`,
    hint: 'This removes the card from your Atlas. The underlying file in the repo is left alone.',
    confirmText: 'Delete',
    danger: true,
    fields: [],
    onSave() {
      items = items.filter(x => x.id !== it.id);
      if (!deleted.includes(it.id)) deleted.push(it.id);   // don't let the seed bring it back
      save(); render(); toast('Deleted — hit Reset to restore defaults');
    }
  });
}

/* ---------- events ---------- */

document.addEventListener('click', e => {
  const btn = e.target.closest('[data-act]');
  const cardEl = e.target.closest('.card');

  if (btn && cardEl) {
    e.preventDefault();
    e.stopPropagation();
    const it = items.find(x => x.id === cardEl.dataset.id);
    if (!it) return;
    if (btn.dataset.act === 'fav') { it.favorite = !it.favorite; save(); render(); }
    if (btn.dataset.act === 'edit') editItem(it);
    if (btn.dataset.act === 'del') delItem(it);
    return;
  }

  if (cardEl) {
    const url = cardEl.dataset.open;
    if (!url) return toast('Nothing linked yet — hit edit to add a path');
    if (cardEl.dataset.ext === '1') window.open(url, '_blank', 'noopener');
    else location.href = url;
  }
});

document.addEventListener('keydown', e => {
  const cardEl = e.target.closest?.('.card');
  if (cardEl && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); cardEl.click(); }
  if (e.key === '/' && !/input|textarea|select/i.test(e.target.tagName)) {
    e.preventDefault();
    document.getElementById('search').focus();
  }
});

document.getElementById('search').addEventListener('input', e => { query = e.target.value; render(); });
document.getElementById('add-btn').addEventListener('click', addItem);

document.getElementById('export-btn').addEventListener('click', async () => {
  const json = JSON.stringify(items, null, 2);
  try {
    await navigator.clipboard.writeText(json);
    toast('Copied — paste into data/items.json to make it permanent');
  } catch {
    openModal({
      title: 'Export', hint: 'Copy this into <code>data/items.json</code>.', confirmText: 'Done',
      fields: [{ key: 'json', label: 'items.json', type: 'textarea', value: json }],
      onSave() {}
    });
  }
});

document.getElementById('reset-btn').addEventListener('click', () => {
  openModal({
    title: 'Reset Atlas?',
    hint: 'Throws away your local edits and reloads the items committed to the repo.',
    confirmText: 'Reset',
    danger: true,
    fields: [],
    async onSave() { await reseed(); render(); toast('Reset to defaults'); }
  });
});

/* ---------- go ---------- */

load().then(render);
