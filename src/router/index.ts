import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ServicesPage from '../pages/ServicesPage.vue'
import BlogsPage from '../pages/BlogsPage.vue'
import CertificationsPage from '../pages/CertificationsPage.vue'
import ContactPage from '../pages/ContactPage.vue'
import BlogDCIMPage from '../pages/BlogDCIMPage.vue'
import BlogDataStrategyPage from '../pages/BlogDataStrategyPage.vue'
import BlogCybersecurityPage from '../pages/BlogCybersecurityPage.vue'
// import PartnersPage from '../pages/PartnersPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/AboutPage.vue'),
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesPage,
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: BlogsPage,
    },
    {
      path: '/blogs/dcim',
      name: 'blog-dcim',
      component: BlogDCIMPage,
    },
    {
      path: '/blogs/data-strategy',
      name: 'blog-data-strategy',
      component: BlogDataStrategyPage,
    },
    {
      path: '/blogs/cybersecurity',
      name: 'blog-cybersecurity',
      component: BlogCybersecurityPage,
    },
    {
      path: '/certifications',
      name: 'certifications',
      component: CertificationsPage,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage,
    },
    {
      path: '/affiliates',
      name: 'affiliates',
      component: () => import('../pages/AffiliatesPage.vue'),
    },
    {
      path: '/partners',
      name: 'partners',
      component: () => import('../pages/PartnersPage.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0, left: 0 }
  },
})

export default router
