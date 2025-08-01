import './assets/tailwind.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)
app.use(router)
app.mount('#app')

// Initialize AOS (Animate On Scroll) library for scroll animations
AOS.init({
  duration: 1000,
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
})

//  // Browser detection
//  function isSafari() {
//   return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
// }

// function isChrome() {
//   return /chrome/i.test(navigator.userAgent) && /google inc/i.test(navigator.vendor);
// }

// function isFirefox() {
//   return /firefox/i.test(navigator.userAgent);
// }

// // Show appropriate version based on browser
// document.addEventListener('DOMContentLoaded', function() {
//   const safariVersion = document.querySelector('.safari-version');
//   const chromeVersion = document.querySelector('.chrome-version');

//   if (isSafari()) {
//       console.log('Safari detected - showing gradient text');
//       safariVersion.style.display = 'block';
//   } else {
//       console.log('Non-Safari browser detected - showing video text');
//       chromeVersion.style.display = 'block';
//   }
// });
