
// --- GSAP import & init ---

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- Dynamic Parallax Animation ---

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
