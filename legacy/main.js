// ── Mobile nav burger ────────────────────────────────
const burger = document.querySelector('.nav__burger');
const navLinks = document.querySelector('.nav__links');

burger?.addEventListener('click', () => {
  navLinks.classList.toggle('is-open');
  burger.classList.toggle('is-active');
});

// Close mobile nav on link click
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    burger.classList.remove('is-active');
  });
});

// ── Nav scroll shadow ────────────────────────────────
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 40
    ? '0 4px 24px rgba(0,0,0,0.3)'
    : 'none';
}, { passive: true });

// ── Scroll-in animations ─────────────────────────────
// IntersectionObserver fallback for browsers without
// native CSS scroll-driven animations (animation-timeline: view()).
// In supporting browsers the CSS @supports block handles everything
// and overrides the .fade-up transition to a no-op.

const supportsViewTimeline = CSS.supports('animation-timeline', 'view()');

if (!supportsViewTimeline) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll([
    '.section__title',
    '.section__label',
    '.value-card',
    '.dienst-card',
    '.band-card',
    '.partner-card',
    '.blog-card',
    '.agenda-item',
    '.stat',
    '.impact__quote',
    '.over-ons__text p',
  ].join(', ')).forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 70}ms`;
    el.classList.add('fade-up');
    observer.observe(el);
  });
}

// ── Contact form (placeholder handler) ───────────────
document.querySelector('.contact__form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Verzonden! ✓';
  btn.style.background = '#4caf87';
  btn.style.borderColor = '#4caf87';
  setTimeout(() => {
    btn.textContent = 'Verstuur bericht';
    btn.style.background = '';
    btn.style.borderColor = '';
    e.target.reset();
  }, 3000);
});
