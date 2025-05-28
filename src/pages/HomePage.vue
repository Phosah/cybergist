<script setup lang="ts">
import MainHeader from '@/components/MainHeader.vue'
import SettingsIcon from '@/components/icons/SettingsIcon.vue'
import ArrowIcon from '@/components/icons/ArrowIcon.vue'
import PuzzleIcon from '@/components/icons/PuzzleIcon.vue'
import AboutCompany from '@/components/AboutCompany.vue'
</script>

<template>
  <MainHeader />

  <section class="max-w-7xl mx-auto my-20 mb-48">
    <p class="mb-4 text-xl md:text-3xl font-garamond font-semibold">
      Data Center Infrastructure Management
    </p>
    <div class="grid md:grid-cols-3 gap-8 text-gray-700 font-semibold">
      <ul class="relative p-4 bg-red-300 rounded-lg group">
        <div class="absolute inset-0 bg-layer rounded-lg"></div>
        <div class="relative z-20">
          <ArrowIcon class="w-24 h-24 mb-8 text-black" />
          <li class="mb-3">IT Managed Services</li>
          <li class="mb-3">Data Center Support / Network Management Services</li>
          <li class="mb-3">IT Project Management Services</li>
          <li class="mb-3">Outsource Services</li>
          <li class="mb-3">IT Helpdesk Support</li>
          <li class="mb-3">24\7 Response Center</li>
        </div>
      </ul>

      <ul class="relative p-4 bg-yellow-500 rounded-lg group">
        <div class="absolute inset-0 bg-layer rounded-lg"></div>
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

      <ul class="relative p-4 bg-blue-400 rounded-lg group">
        <div class="absolute inset-0 bg-layer rounded-lg"></div>
        <div class="relative z-20">
          <PuzzleIcon class="w-24 h-24 mb-8 text-black" />
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
