'use strict';

// Mobile Navigation
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-menu');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      const active = nav.classList.toggle('active');
      hamburger.classList.toggle('active', active);
      hamburger.setAttribute('aria-expanded', String(active));
    });
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        nav.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }
});

// Smooth scroll for internal links
addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href');
  const target = document.querySelector(id);
  if (target) {
    e.preventDefault();
    const y = target.getBoundingClientRect().top + scrollY - 70;
    scrollTo({ top: y, behavior: 'smooth' });
  }
});

// Gallery Slideshow + Lightbox
document.addEventListener('DOMContentLoaded', () => {
  const wrap = document.getElementById('gallerySlideshow');
  if (!wrap) return;
  const slides = Array.from(wrap.querySelectorAll('.slide'));
  const dots = Array.from(wrap.querySelectorAll('.dot'));
  const btnPrev = wrap.querySelector('.slide-btn.prev');
  const btnNext = wrap.querySelector('.slide-btn.next');
  let i = 0;
  let timer;
  const AUTOPLAY = 4500;

  const show = (n) => {
    i = (n + slides.length) % slides.length;
    slides.forEach((s, idx) => s.classList.toggle('active', idx === i));
    dots.forEach((d, idx) => d.classList.toggle('active', idx === i));
  };
  const next = () => show(i + 1);
  const prev = () => show(i - 1);
  const start = () => { stop(); timer = setInterval(next, AUTOPLAY); };
  const stop = () => { if (timer) clearInterval(timer); timer = null; };

  btnNext?.addEventListener('click', next);
  btnPrev?.addEventListener('click', prev);
  dots.forEach((d, idx) => d.addEventListener('click', () => show(idx)));
  wrap.addEventListener('mouseenter', stop);
  wrap.addEventListener('mouseleave', start);

  // swipe
  let sx = 0, dx = 0;
  wrap.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; dx = 0; stop(); }, { passive: true });
  wrap.addEventListener('touchmove', (e) => { dx = e.touches[0].clientX - sx; }, { passive: true });
  wrap.addEventListener('touchend', () => { if (Math.abs(dx) > 40) (dx < 0 ? next() : prev()); start(); });

  // Lightbox
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const lbCap = document.getElementById('lightbox-cap');
  const openLB = (img, cap) => {
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lbCap.textContent = cap?.textContent || '';
    lb.removeAttribute('aria-hidden');
    lb.classList.add('open');
  };
  const closeLB = () => {
    lb.setAttribute('aria-hidden', 'true');
    lb.classList.remove('open');
    lbImg.src = '';
  };
  wrap.querySelectorAll('.slide img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => openLB(img, img.closest('figure')?.querySelector('figcaption')));
  });
  lb?.addEventListener('click', (e) => { if (e.target.hasAttribute('data-close') || e.target === lb) closeLB(); });
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && lb?.classList.contains('open')) closeLB(); });

  // Fallback: if image fails, use placeholder to ensure visibility
  wrap.querySelectorAll('img').forEach((img, idx) => {
    img.addEventListener('error', () => {
      if (!img.dataset.fallback) {
        img.dataset.fallback = '1';
        img.src = `https://picsum.photos/seed/pillart-${idx}/1200/800`;
        img.alt = img.alt || 'Placeholder kép';
      }
    }, { once: true });
  });

  show(0); start();
});

// Testimonials rotator
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('testiSlider');
  if (!root) return;
  const items = Array.from(root.querySelectorAll('.testi'));
  const dots = Array.from(root.querySelectorAll('.tdot'));
  let i = 0, t;
  const show = (n) => {
    i = (n + items.length) % items.length;
    items.forEach((el, idx) => el.classList.toggle('active', idx === i));
    dots.forEach((d, idx) => d.classList.toggle('active', idx === i));
  };
  const next = () => show(i + 1);
  const start = () => { stop(); t = setInterval(next, 5000); };
  const stop = () => { if (t) clearInterval(t); t = null; };
  dots.forEach((d, idx) => d.addEventListener('click', () => show(idx)));
  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', start);
  show(0); start();
});

// Booking form basic validation + UX
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('bookingForm');
  if (!form) return;
  const dateInput = form.querySelector('input[name="date"]');
  if (dateInput) {
    const today = new Date();
    const min = new Date(today.getFullYear(), today.getMonth(), today.getDate()+1);
    dateInput.min = min.toISOString().split('T')[0];
  }
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    if (!data.name || !data.phone || !data.email || !data.service || !data.date) {
      alert('Kérlek töltsd ki a kötelező mezőket.');
      return;
    }
    alert('Köszönjük! Hamarosan felvesszük veled a kapcsolatot.');
    form.reset();
  });
});

// Footer year
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
