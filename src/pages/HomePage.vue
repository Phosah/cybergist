<script setup lang="ts">
import MainHeader from '@/components/MainHeader.vue'
import SettingsIcon from '@/components/icons/SettingsIcon.vue'
import { Server, Network } from 'lucide-vue-next'
import AboutCompany from '@/components/AboutCompany.vue'
</script>

<template>
  <MainHeader />

  <section class="max-w-7xl mx-auto my-24">
    <p class="mb-4 text-3xl md:text-4xl font-garamond font-semibold">
      <span
        class="bg-gradient-to-r from-yellow-500 to-blue-900 bg-clip-text text-transparent md:text-black"
        >Data Center Infrastructure</span
      >
      <span class="text-black"> Management</span>
    </p>
    <div class="grid md:grid-cols-3 gap-8 text-gray-700 font-semibold">
      <ul
        class="relative p-6 bg-red-300 rounded-xl group hover:shadow-xl transition-all duration-300"
      >
        <div class="absolute inset-0 bg-layer rounded-xl"></div>
        <div class="relative z-20">
          <Server class="w-24 h-24 mb-8 text-black" />
          <li class="mb-3">IT Managed Services</li>
          <li class="mb-3">Data Center Support / Network Management Services</li>
          <li class="mb-3">IT Project Management Services</li>
          <li class="mb-3">Outsource Services</li>
          <li class="mb-3">IT Helpdesk Support</li>
          <li class="mb-3">24\7 Response Center</li>
        </div>
      </ul>

      <ul
        class="relative p-6 bg-yellow-500 rounded-xl group hover:shadow-xl transition-all duration-300"
      >
        <div class="absolute inset-0 bg-layer rounded-xl"></div>
        <div class="relative z-20">
          <SettingsIcon class="w-24 h-24 mb-8 text-white animate-spin-slow" />
          <li class="mb-3">Managed Services</li>
          <li class="mb-3">OEM Platform & Network Services</li>
          <li class="mb-3">Data Center Solutions</li>
          <li class="mb-3">Middle East, Asia, European and Global IT Support Services</li>
          <li class="mb-3">Cloud Computing Services</li>
          <li class="mb-3">Worldwide spare parts warehouse</li>
        </div>
      </ul>

      <ul
        class="relative p-6 bg-blue-400 rounded-xl group hover:shadow-xl transition-all duration-300"
      >
        <div class="absolute inset-0 bg-layer rounded-xl"></div>
        <div class="relative z-20">
          <Network class="w-24 h-24 mb-8 text-black" />
          <li class="mb-3">OEM Disk & Tape</li>
          <li class="mb-3">IT Consulting Services</li>
          <li class="mb-3">IT Support Services</li>
          <li class="mb-3">Recycle & Dismantle</li>
          <li class="mb-3">IT Helpdesk Support Services</li>
          <li class="mb-3">A Modern Style of Approach to the Data Center by our Engineers</li>
        </div>
      </ul>
    </div>
  </section>

  <AboutCompany />
</template>

<style>
.bg-layer {
  background-image: url('@/assets/layer.png');
  background-size: cover;
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
}
</style>
