/* ============================================================
    CHANU'S CAKES — main.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── CUSTOM CURSOR ─────────────────────────────────────── */
  const cursor = document.getElementById('cursor');
  const dot    = document.getElementById('cursorDot');

  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
    dot.style.left    = e.clientX + 'px';
    dot.style.top     = e.clientY + 'px';
  });

  // Enlarge cursor when hovering interactive elements
  document.querySelectorAll('a, button, .cake-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
  });


  /* ── SCROLL PROGRESS BAR ───────────────────────────────── */
  const progressBar = document.getElementById('scrollProgress');

  window.addEventListener('scroll', () => {
    const scrolled  = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const pct       = (scrolled / maxScroll) * 100;
    progressBar.style.width = pct + '%';
  });


  /* ── SMOOTH SCROLL FOR NAV LINKS ───────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });


  /* ── NAV BACKGROUND ON SCROLL ──────────────────────────── */
  const nav = document.querySelector('nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.style.background = 'rgba(20, 7, 2, 0.95)';
    } else {
      nav.style.background = 'rgba(30, 10, 3, 0.7)';
    }
  });


  /* ── SCROLL REVEAL ANIMATION ───────────────────────────── */
  // Adds 'visible' class to elements as they enter the viewport
  const revealTargets = document.querySelectorAll(
    '.cake-card, .exp-feature, .testi-card, .exp-stat-card'
  );

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity    = '1';
        entry.target.style.transform  = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach(el => {
    // Set initial hidden state so the reveal feels intentional
    el.style.opacity   = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(el);
  });

});
