
// --- GSAP import & init ---

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- Parallax Y Animation ---

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
