/* ============================================================
   Jamu Pegal Linu Alami — Landing Page Interactions
   - Mobile hamburger menu
   - Navbar scroll effect
   - Smooth scroll for anchor links
   - CTA / WhatsApp click tracking
   - Scroll-reveal animation (respects prefers-reduced-motion)
============================================================ */

(function () {
  'use strict';

  // ---------- Mobile Menu ----------
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu && hamburger) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('open');
      navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(!isOpen));
      hamburger.classList.toggle('open');

      // Prevent body scroll when menu open
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    // Close menu when clicking a nav link
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        hamburger.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ---------- Navbar Scroll Effect ----------
  const navbar = document.getElementById('navbar');
  let lastScrollY = window.scrollY;

  function onScroll() {
    const currentScrollY = window.scrollY;
    if (navbar) {
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
    lastScrollY = currentScrollY;
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  // ---------- Smooth Scroll for Anchor Links ----------
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update URL without jumping
        history.pushState(null, null, targetId);
      }
    });
  });

  // ---------- Scroll Reveal Animation ----------
  const revealElements = document.querySelectorAll('.reveal');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );

  if (!prefersReducedMotion.matches && revealElements.length) {
    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // If reduced motion, show all immediately
    revealElements.forEach((el) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }

  // ---------- CTA / WhatsApp Click Tracking ----------
  function trackCta(ctaName) {
    // Placeholder for analytics. Replace with your tracking provider.
    // eslint-disable-next-line no-console
    console.log('[CTA] Click:', ctaName, '-', new Date().toISOString());
  }

  document.querySelectorAll('.btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const text = btn.textContent.trim();
      trackCta(text);
    });
  });

  // ---------- Year in footer (if needed) ----------
  // const yearEl = document.querySelector('.footer-year');
  // if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
