
// --- GSAP import & init ---

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- Image Reveal Animation ---

const animationImageReveal = document.querySelectorAll('[gsap-animation="image-reveal"]');
const isMobile = window.innerWidth < 768;

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
