/* ============================================================
   VILLA FRANCA – Main JavaScript
   ============================================================ */

// ── CONFIG ──
// Shared across pages via config.js (window.VILLA_FRANCA_CONFIG).
const API_BASE_URL  = (window.VILLA_FRANCA_CONFIG && window.VILLA_FRANCA_CONFIG.apiBaseUrl) || 'https://localhost:7121';
const RESTAURANT_ID = (window.VILLA_FRANCA_CONFIG && window.VILLA_FRANCA_CONFIG.restaurantId) || 'REPLACE_WITH_RESTAURANT_ID';

// ── PRELOADER ──
window.addEventListener('load', () => {
  setTimeout(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.classList.add('hidden');
      setTimeout(() => preloader.remove(), 900);
    }
    // Trigger hero reveals
    document.querySelectorAll('.hero-content .reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 160);
    });
  }, 1000);
});

// ── CUSTOM CURSOR ──
const dot    = document.querySelector('.cursor-dot');
const circle = document.querySelector('.cursor-circle');
let mouseX = 0, mouseY = 0;
let circX  = 0, circY  = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX; mouseY = e.clientY;
  if (dot) {
    dot.style.left = mouseX + 'px';
    dot.style.top  = mouseY + 'px';
  }
});

function animateCursor() {
  circX += (mouseX - circX) * 0.12;
  circY += (mouseY - circY) * 0.12;
  if (circle) {
    circle.style.left = circX + 'px';
    circle.style.top  = circY + 'px';
  }
  requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll('a, button, .pill, .tab-btn, .guest-btn').forEach(el => {
  el.addEventListener('mouseenter', () => {
    if (circle) { circle.style.width = '56px'; circle.style.height = '56px'; circle.style.borderColor = 'rgba(200,168,110,0.8)'; }
  });
  el.addEventListener('mouseleave', () => {
    if (circle) { circle.style.width = '36px'; circle.style.height = '36px'; circle.style.borderColor = 'rgba(200,168,110,0.5)'; }
  });
});

// ── NAVBAR SCROLL ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }
});

// ── MOBILE NAV ──
const burger   = document.getElementById('navBurger');
const mobileNav = document.getElementById('navMobile');
if (burger && mobileNav) {
  burger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    const spans = burger.querySelectorAll('span');
    if (mobileNav.classList.contains('open')) {
      spans[0].style.transform = 'translateY(6px) rotate(45deg)';
      spans[1].style.opacity   = '0';
      spans[2].style.transform = 'translateY(-6px) rotate(-45deg)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity   = '';
      spans[2].style.transform = '';
    }
  });
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileNav.classList.remove('open'));
  });
}

// ── REVEAL ON SCROLL ──
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, idx) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), idx * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── COUNTER ANIMATION ──
function animateCounter(el, target, duration = 1800) {
  let start = 0;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(ease * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target.toLocaleString();
  };
  requestAnimationFrame(step);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.stat-num').forEach(el => {
        animateCounter(el, parseInt(el.dataset.target));
      });
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.5 });

const statsSection = document.getElementById('stats');
if (statsSection) statsObserver.observe(statsSection);

// ── GUEST COUNTER ──
let guestCount = 2;
const guestDisplay = document.getElementById('guestCount');
const guestInput   = document.getElementById('res-guests');

document.getElementById('guestMinus')?.addEventListener('click', () => {
  if (guestCount > 1) {
    guestCount--;
    if (guestDisplay) guestDisplay.textContent = guestCount;
    if (guestInput)   guestInput.value = guestCount;
  }
});

document.getElementById('guestPlus')?.addEventListener('click', () => {
  if (guestCount < 100) {
    guestCount++;
    if (guestDisplay) guestDisplay.textContent = guestCount;
    if (guestInput)   guestInput.value = guestCount;
  }
});

// ── OCCASION PILLS ──
document.querySelectorAll('.pill').forEach(pill => {
  pill.addEventListener('click', () => {
    document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    const input = document.getElementById('res-occasion');
    if (input) input.value = pill.dataset.val;
  });
});
// Default: first pill active
document.querySelector('.pill')?.classList.add('active');

// ── RESERVATION FORM ──
const form    = document.getElementById('reservationForm');
const success = document.getElementById('resSuccess');

// Set min date to today
const dateInput = document.getElementById('res-date');
if (dateInput) {
  const today = new Date();
  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 30);
  dateInput.min = today.toISOString().split('T')[0];
  dateInput.max = maxDate.toISOString().split('T')[0];
}

// Work out the UTC offset Berlin is observing on a given calendar date
// (handles CET/CEST so the API gets a correct ISO 8601 offset).
function getBerlinOffset(dateStr) {
  const probe = new Date(`${dateStr}T12:00:00Z`);
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Berlin',
    timeZoneName: 'shortOffset'
  }).formatToParts(probe);
  const tzPart = parts.find(p => p.type === 'timeZoneName');
  const match = tzPart && tzPart.value.match(/GMT([+-]\d+)/);
  const hours = match ? parseInt(match[1], 10) : 1;
  const sign = hours >= 0 ? '+' : '-';
  const abs = String(Math.abs(hours)).padStart(2, '0');
  return `${sign}${abs}:00`;
}

function buildStartTimeIso(dateStr, timeStr) {
  return `${dateStr}T${timeStr}:00${getBerlinOffset(dateStr)}`;
}

form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name      = document.getElementById('res-name').value.trim();
  const email     = document.getElementById('res-email').value.trim();
  const phone     = document.getElementById('res-phone').value.trim();
  const date      = document.getElementById('res-date').value;
  const time      = document.getElementById('res-time').value;
  const guests    = parseInt(document.getElementById('res-guests').value, 10) || 1;
  const occasion  = document.getElementById('res-occasion').value.trim();
  const allergies = document.getElementById('res-allergies').value.trim();
  const message   = document.getElementById('res-message').value.trim();

  if (!name || !email || !phone || !date || !time) {
    showFormError(window.t ? window.t('form.error.required') : 'Please fill in all required fields.');
    return;
  }

  const nameParts = name.split(/\s+/);
  const firstName = nameParts.shift();
  const lastName  = nameParts.join(' ');

  // The backend only has a single free-text Notes field — fold the
  // occasion/allergies/message inputs into it.
  const noteParts = [];
  if (occasion)  noteParts.push(`Occasion: ${occasion}`);
  if (allergies) noteParts.push(`Dietary/Allergies: ${allergies}`);
  if (message)   noteParts.push(`Special requests: ${message}`);

  const payload = {
    RestaurantId: RESTAURANT_ID,
    FirstName: firstName,
    LastName: lastName || null,
    Email: email,
    Phone: phone,
    StartTime: buildStartTimeIso(date, time),
    PartySize: guests,
    Notes: noteParts.join(' | ') || null,
    MarketingConsent: false
  };

  const btn = form.querySelector('button[type="submit"]');
  const originalBtnHtml = btn.innerHTML;
  btn.textContent = window.t ? window.t('form.processing') : 'Processing…';
  btn.disabled = true;

  try {
    const res = await fetch(`${API_BASE_URL}/api/reservations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      const msg = (data && (data.error || (Array.isArray(data.errors) && data.errors.join(' '))))
        || 'Something went wrong submitting your reservation. Please try again.';
      showFormError(msg);
      btn.innerHTML = originalBtnHtml;
      btn.disabled = false;
      return;
    }

    const confirmationCode = data.confirmationCode || data.ConfirmationCode;
    const codeEl = document.getElementById('resConfirmationCode');
    if (codeEl) {
      if (confirmationCode) {
        codeEl.textContent = `Confirmation code: ${confirmationCode}`;
        codeEl.style.display = '';
      } else {
        codeEl.style.display = 'none';
      }
    }

    form.style.display = 'none';
    success.classList.add('show');
    success.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } catch (err) {
    console.error('Reservation request failed:', err);
    showFormError('Could not reach the reservation service. Please check your connection and try again.');
    btn.innerHTML = originalBtnHtml;
    btn.disabled = false;
  }
});

function showFormError(msg) {
  let err = document.getElementById('formError');
  if (!err) {
    err = document.createElement('p');
    err.id = 'formError';
    err.style.cssText = 'color:#c8a86e;font-size:13px;text-align:center;margin-top:-8px;';
    form.appendChild(err);
  }
  err.textContent = msg;
  setTimeout(() => err.remove(), 4000);
}

function resetForm() {
  if (form && success) {
    form.reset();
    guestCount = 2;
    if (guestDisplay) guestDisplay.textContent = 2;
    if (guestInput) guestInput.value = 2;
    document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
    document.querySelector('.pill')?.classList.add('active');
    const btn = form.querySelector('button[type="submit"]');
    if (btn) { btn.textContent = window.t ? window.t('form.submit.text') : 'Confirm Reservation'; btn.disabled = false; }
    success.classList.remove('show');
    form.style.display = 'flex';
  }
  return false;
}

// ── SMOOTH SCROLL FOR HASH LINKS ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 80;
      const top  = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
