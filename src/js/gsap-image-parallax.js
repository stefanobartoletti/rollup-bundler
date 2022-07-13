
// --- GSAP import & init ---

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- Image Parallax Animation ---

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
