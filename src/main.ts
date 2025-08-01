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
