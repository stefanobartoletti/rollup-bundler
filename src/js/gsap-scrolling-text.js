
// --- GSAP import & init ---

import { gsap } from 'gsap';

// --- Scrolling Text Animation ---

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
