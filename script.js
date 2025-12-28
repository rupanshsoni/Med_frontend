/* ============================================
   MedCare - script.js
   Handles: Navbar scroll, mobile menu, 
   scroll-reveal animations, hotspot interactivity
   ============================================ */

(function () {
  'use strict';

  // --------------------------------------
  // 1. NAVBAR: Scroll Effect
  // --------------------------------------
  const navbar = document.getElementById('navbar');

  function handleNavbarScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll(); // Run once on load

  // --------------------------------------
  // 2. MOBILE HAMBURGER MENU
  // --------------------------------------
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
      });
    });
  }

  // --------------------------------------
  // 3. SCROLL-TRIGGERED REVEAL ANIMATIONS
  // --------------------------------------
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion) {
    document.querySelectorAll(
      '.holistic h2, .holistic p, .specialists h2, .specialists__item, .anatomy h2, .testimonials h2, .testimonials p, .footer-cta h2, .btn-pill'
    ).forEach((el) => {
      if (!el.classList.contains('reveal')) {
        el.classList.add('reveal');
      }
    });
  }

  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target); // Only animate once
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  if (prefersReducedMotion) {
    revealElements.forEach(el => el.classList.add('visible'));
  } else {
    revealElements.forEach(el => revealObserver.observe(el));
  }

  // --------------------------------------
  // 4. INTERACTIVE HOTSPOTS (Anatomy Section)
  // --------------------------------------
  const hotspots = document.querySelectorAll('.hotspot');

  hotspots.forEach(spot => {
    // Toggle on click (for mobile)
    spot.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = spot.classList.contains('active');

      // Close all others
      hotspots.forEach(s => s.classList.remove('active'));

      // Toggle current
      if (!isActive) {
        spot.classList.add('active');
      }
    });
  });

  // Close hotspot cards when clicking elsewhere
  document.addEventListener('click', () => {
    hotspots.forEach(s => s.classList.remove('active'));
  });

  // --------------------------------------
  // 5. SMOOTH SCROLL FOR ANCHOR LINKS
  // --------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });

  // --------------------------------------
  // 6. PARALLAX-LIKE SUBTLE EFFECT ON HERO
  // --------------------------------------
  const heroContent = document.querySelector('.hero__content');
  const parallaxMedia = document.querySelectorAll('.parallax-media');

  if (heroContent || parallaxMedia.length) {
    let ticking = false;

    function updateScrollMotion() {
      const scrolled = window.scrollY;
      const heroHeight = window.innerHeight;

      if (heroContent && scrolled < heroHeight) {
        const opacity = 1 - (scrolled / heroHeight) * 0.7;
        const translateY = scrolled * 0.25;
        heroContent.style.opacity = opacity;
        heroContent.style.transform = `translateY(${translateY}px)`;
      }

      parallaxMedia.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const depth = Number(el.dataset.parallaxDepth || 0.05);
        const viewportCenter = window.innerHeight / 2;
        const elementCenter = rect.top + rect.height / 2;
        const offset = (viewportCenter - elementCenter) * depth;
        el.style.setProperty('--parallax-y', `${offset.toFixed(2)}px`);
      });

      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!prefersReducedMotion && !ticking) {
        window.requestAnimationFrame(updateScrollMotion);
        ticking = true;
      }
    }, { passive: true });

    updateScrollMotion();
  }

  // --------------------------------------
  // 7. MARQUEE SPEED ADJUSTMENT ON HOVER
  // --------------------------------------
  const marqueeTrack = document.querySelector('.marquee__track');

  if (marqueeTrack) {
    const marquee = document.querySelector('.marquee');

    marquee.addEventListener('mouseenter', () => {
      marqueeTrack.style.animationDuration = '40s';
    });

    marquee.addEventListener('mouseleave', () => {
      marqueeTrack.style.animationDuration = '20s';
    });
  }

  // --------------------------------------
  // 8. FLOATING CTA VISIBILITY ON SCROLL
  // --------------------------------------
  const floatingCta = document.getElementById('floatingCta');
  const footerCta = document.getElementById('footer-cta');

  if (floatingCta) {
    function handleFloatingCta() {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      const showThreshold = heroHeight * 0.85;

      // Hide when near the footer CTA section
      let hideNearFooter = false;
      if (footerCta) {
        const footerRect = footerCta.getBoundingClientRect();
        hideNearFooter = footerRect.top < window.innerHeight;
      }

      if (scrollY > showThreshold && !hideNearFooter) {
        floatingCta.classList.add('visible');
      } else {
        floatingCta.classList.remove('visible');
      }
    }

    window.addEventListener('scroll', handleFloatingCta, { passive: true });
    handleFloatingCta(); // Run once on load
  }

  // --------------------------------------
  // 9. ACCESSIBILITY: KEYBOARD EVENTS
  // --------------------------------------
  document.querySelectorAll('[tabindex="0"]').forEach(el => {
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        el.click();
      }
    });
  });

})();
