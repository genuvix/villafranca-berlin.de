/* ============================================================
   VILLA FRANCA – Menu Page JavaScript
   Menu content is now fetched from the HostBuzz API instead of
   being hardcoded in the HTML.
   ============================================================ */

// ── CONFIG ──
// TODO: point this at the deployed API once it's live (no trailing slash).
// Local ASP.NET dev server default from launchSettings.json:
const MENU_API_BASE_URL = 'https://localhost:7121';

// TODO: replace with Villa Franca's real restaurantId GUID.
// Placeholder until the restaurant record exists / its ID is known.
const RESTAURANT_ID = 'REPLACE_WITH_RESTAURANT_ID';

const menuTabsEl = document.getElementById('menuTabs');
const tabsWrap   = document.getElementById('menuTabsWrap');

function getMenuMainEl() {
  return document.querySelector('.menu-main');
}

function slugify(str) {
  return String(str)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '') || 'category';
}

function formatPrice(price, currencyCode) {
  const num = Number(price);
  if (Number.isNaN(num)) return '';
  try {
    return new Intl.NumberFormat(undefined, { style: 'currency', currency: currencyCode || 'EUR' }).format(num);
  } catch {
    return `€${num.toFixed(2)}`;
  }
}

function showMenuLoading() {
  const menuMain = getMenuMainEl();
  if (menuTabsEl) menuTabsEl.innerHTML = '';
  if (menuMain) menuMain.innerHTML = '<p class="menu-loading">Loading menu…</p>';
}

function showMenuError(message) {
  const menuMain = getMenuMainEl();
  if (menuTabsEl) menuTabsEl.innerHTML = '';
  if (menuMain) menuMain.innerHTML = `<p class="menu-load-error">${message}</p>`;
}

function renderMenu(data) {
  const menuMain = getMenuMainEl();
  const categories = Array.isArray(data && data.categories) ? data.categories : [];

  if (!menuTabsEl || !menuMain) return;

  if (!categories.length) {
    showMenuError('This menu is currently empty. Please check back soon.');
    return;
  }

  menuTabsEl.innerHTML = '';
  menuMain.innerHTML = '';

  categories.forEach((cat, i) => {
    const slug = slugify(cat.category || `category-${i}`);

    // Tab button
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'tab-btn' + (i === 0 ? ' active' : '');
    btn.dataset.cat = slug;
    btn.textContent = cat.category || '';
    menuTabsEl.appendChild(btn);

    // Section
    const section = document.createElement('section');
    section.className = 'menu-section' + (i === 0 ? ' active' : '');
    section.dataset.cat = slug;

    const header = document.createElement('div');
    header.className = 'menu-section-header';
    const h2 = document.createElement('h2');
    h2.textContent = cat.category || '';
    const ornament = document.createElement('div');
    ornament.className = 'menu-ornament';
    ornament.textContent = '❧';
    header.appendChild(h2);
    header.appendChild(ornament);
    section.appendChild(header);

    const grid = document.createElement('div');
    grid.className = 'menu-grid';

    (cat.items || []).forEach(item => {
      const itemEl = document.createElement('div');
      itemEl.className = 'menu-item';

      const top = document.createElement('div');
      top.className = 'mi-top';

      const name = document.createElement('span');
      name.className = 'mi-name';
      name.textContent = item.name || '';

      const dots = document.createElement('span');
      dots.className = 'mi-dots';

      const price = document.createElement('span');
      price.className = 'mi-price';
      price.textContent = formatPrice(item.price, data.currencyCode);

      top.appendChild(name);
      top.appendChild(dots);
      top.appendChild(price);
      itemEl.appendChild(top);

      if (item.description) {
        const desc = document.createElement('p');
        desc.className = 'mi-desc';
        desc.textContent = item.description;
        itemEl.appendChild(desc);
      }

      grid.appendChild(itemEl);
    });

    section.appendChild(grid);
    menuMain.appendChild(section);
  });

  attachTabHandlers();
  animateActiveSection();
}

async function loadMenu() {
  showMenuLoading();
  try {
    const res = await fetch(`${MENU_API_BASE_URL}/api/menu/${RESTAURANT_ID}`, {
      headers: { Accept: 'application/json' }
    });
    if (!res.ok) {
      throw new Error(`Menu request failed with status ${res.status}`);
    }
    const data = await res.json();
    renderMenu(data);
  } catch (err) {
    console.error('Failed to load menu:', err);
    showMenuError('Sorry, the menu could not be loaded right now. Please try again later.');
  }
}

// ── TAB SWITCHING (re-attached every time the menu re-renders) ──
function attachTabHandlers() {
  const tabBtns  = document.querySelectorAll('.tab-btn');
  const menuSecs = document.querySelectorAll('.menu-section');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.cat;

      // Update buttons
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update sections
      menuSecs.forEach(sec => {
        if (sec.dataset.cat === cat) {
          sec.classList.add('active');
          // Animate menu items in
          sec.querySelectorAll('.menu-item').forEach((item, i) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(12px)';
            setTimeout(() => {
              item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            }, i * 18);
          });
        } else {
          sec.classList.remove('active');
        }
      });

      // Scroll tab into view on mobile
      btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

      // Scroll page to content
      const menuMain = getMenuMainEl();
      if (menuMain) {
        const navH = (parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 80) + 60;
        const top = menuMain.getBoundingClientRect().top + window.scrollY - navH;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ── ANIMATE INITIAL ACTIVE SECTION ──
function animateActiveSection() {
  const activeSection = document.querySelector('.menu-section.active');
  if (activeSection) {
    activeSection.querySelectorAll('.menu-item').forEach((item, i) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(12px)';
      setTimeout(() => {
        item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, 300 + i * 20);
    });
  }
}

document.addEventListener('DOMContentLoaded', loadMenu);

// ── STICKY TAB BAR SHADOW ──
window.addEventListener('scroll', () => {
  if (tabsWrap) {
    const navH = (parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 80);
    if (window.scrollY > navH + 200) {
      tabsWrap.style.boxShadow = '0 4px 24px rgba(0,0,0,0.5)';
    } else {
      tabsWrap.style.boxShadow = 'none';
    }
  }
});
