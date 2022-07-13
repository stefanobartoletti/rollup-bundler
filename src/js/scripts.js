
// --- GSAP import & init ---

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const html = document.querySelector('html');
const isMobile = window.innerWidth < 768;

// --- Header Scroll Class ---

const siteHeader = document.querySelector('.site-header');

if (siteHeader) {
  document.addEventListener('scroll', function () {
    if (html.scrollTop > 50) {
      siteHeader.classList.add('header-scrolled');
    } else {
      siteHeader.classList.remove('header-scrolled');
    }
  });
};

gsap.registerPlugin(ScrollTrigger);

// --- Homepage Hero Scrolling Text ---

const scrollingTextWrapper = document.querySelector('.scrolling-text-wrapper');
const scrollingText = document.querySelector('.scrolling-text');

if (scrollingTextWrapper) {
  const scrollingTextClone = scrollingText.cloneNode(true);
  scrollingTextClone.classList.add('clone');
  scrollingTextWrapper.appendChild(scrollingTextClone);

  const scrollingTextW = scrollingText.offsetWidth;

  gsap.timeline({ repeat: -1 })
    .to('.scrolling-text', {
      x: -scrollingTextW,
      duration: 30,
      ease: 'none'
    });
};

// --- parallax-y ---

const animationParallaxY = document.querySelectorAll('[gsap-animation="parallax-y"]');

animationParallaxY.forEach(function (el) {
  gsap.from(el, {
    y: '10vh',
    opacity: 0,
    ease: 'power2.out',
    duration: 10,
    scrollTrigger: {
      trigger: el,
      start: 'top 100%',
      end: 'top 60%',
      scrub: 2.5
    }
  });
});

// --- image-reveal ---

const animationImageReveal = document.querySelectorAll('[gsap-animation="image-reveal"]');

animationImageReveal.forEach(function (el) {
  gsap.from(el, {
    y: '10vh',
    width: 0,
    ease: 'power2.out',
    duration: 10,
    scrollTrigger: {
      trigger: el,
      start: 'top 100%',
      end: isMobile ? 'top 75%' : 'top 25%',
      scrub: 5
    }
  });
});

// --- image-parallax ---

const animationImageParallax = document.querySelectorAll('[gsap-animation="image-parallax"]');

animationImageParallax.forEach(function (el) {
  gsap.fromTo(el, {
    scale: '1.05',
    y: '-2.5%'
  }, {
    y: '2.5%',
    ease: 'power2.out',
    duration: 10,
    scrollTrigger: {
      trigger: el,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 5
    }
  });
});

// --- Dynamic Parallax ---

const parallaxElements = document.querySelectorAll('[gsap-animation="dynamic-parallax"]');

parallaxElements.forEach(function (el) {
  gsap.to(el, {
    yPercent: el.getAttribute('gsap-parallax-y'),
    xPercent: el.getAttribute('gsap-parallax-x'),
    ease: 'power2.out',
    scrollTrigger: {
      trigger: el,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });
});
