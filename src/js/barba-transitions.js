
// --- Libraries import ---

import barba from '@barba/core';
import { gsap } from 'gsap';

// --- Barba.js Page Transitions ---

barba.init({
  transitions: [{
    name: 'opacity-transition',
    leave (data) {
      return gsap.to(data.current.container, {
        opacity: 0,
        backgroundColor: 'red',
        y: '5vh'
      });
    },
    enter (data) {
      return gsap.from(data.next.container, {
        opacity: 0,
        backgroundColor: 'blue',
        y: '-5vh'
      });
    }
  }]
});
