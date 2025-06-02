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

    <div class="grid md:grid-cols-3 gap-8 text-gray-700">
      <ul
        class="relative p-8 bg-gradient-to-br from-red-300 to-red-400 rounded-xl group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
      >
        <div class="absolute inset-0 bg-layer opacity-30 rounded-xl"></div>
        <div class="relative z-20 font-bold text-lg text-black">
          <Server
            class="w-24 h-24 mb-8 text-black group-hover:scale-110 transition-transform duration-300"
          />
          <li class="mb-4 flex items-center">
            <span class="w-2 h-2 bg-black rounded-full mr-3"></span>
            Enterprise IT Managed Services
          </li>
          <li class="mb-4 flex items-center">
            <span class="w-2 h-2 bg-black rounded-full mr-3"></span>
            Advanced Data Center Support
          </li>
          <li class="mb-4 flex items-center">
            <span class="w-2 h-2 bg-black rounded-full mr-3"></span>
            Strategic IT Project Management
          </li>
          <li class="mb-4 flex items-center">
            <span class="w-2 h-2 bg-black rounded-full mr-3"></span>
            Comprehensive Outsource Solutions
          </li>
          <li class="mb-4 flex items-center">
            <span class="w-2 h-2 bg-black rounded-full mr-3"></span>
            24/7 Expert Helpdesk Support
          </li>
          <li class="mb-4 flex items-center">
            <span class="w-2 h-2 bg-black rounded-full mr-3"></span>
            Global Response Center
          </li>
        </div>
      </ul>

      <ul
        class="relative p-8 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
      >
        <div class="absolute inset-0 bg-layer opacity-50 rounded-xl"></div>
        <div class="relative z-20 font-bold text-lg text-white">
          <SettingsIcon
            class="w-24 h-24 mb-8 text-white animate-spin-slow group-hover:scale-110 transition-transform duration-300"
          />
          <li class="mb-4 flex items-center">
            <span class="w-2 h-2 bg-white rounded-full mr-3"></span>
            Enterprise Managed Services
          </li>
          <li class="mb-4 flex items-center">
            <span class="w-2 h-2 bg-white rounded-full mr-3"></span>
            Global OEM Platform Solutions
          </li>
          <li class="mb-4 flex items-center">
            <span class="w-2 h-2 bg-white rounded-full mr-3"></span>
            Next-Gen Data Center Solutions
          </li>
          <li class="mb-4 flex items-center">
            <span class="w-2 h-2 bg-white rounded-full mr-3"></span>
            Worldwide IT Support Network
          </li>
          <li class="mb-4 flex items-center">
            <span class="w-2 h-2 bg-white rounded-full mr-3"></span>
            Advanced Cloud Computing
          </li>
          <li class="mb-4 flex items-center">
            <span class="w-2 h-2 bg-white rounded-full mr-3"></span>
            Global Parts Distribution
          </li>
        </div>
      </ul>

      <ul
        class="relative p-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
      >
        <div class="absolute inset-0 bg-layer opacity-70 rounded-xl"></div>
        <div class="relative z-20 font-bold text-lg text-white">
          <Network
            class="w-24 h-24 mb-8 text-white group-hover:scale-110 transition-transform duration-300"
          />
          <li class="mb-4 flex items-center">
            <span class="w-2 h-2 bg-white rounded-full mr-3"></span>
            Premium OEM Storage Solutions
          </li>
          <li class="mb-4 flex items-center">
            <span class="w-2 h-2 bg-white rounded-full mr-3"></span>
            Strategic IT Consulting
          </li>
          <li class="mb-4 flex items-center">
            <span class="w-2 h-2 bg-white rounded-full mr-3"></span>
            Enterprise IT Support
          </li>
          <li class="mb-4 flex items-center">
            <span class="w-2 h-2 bg-white rounded-full mr-3"></span>
            Sustainable IT Recycling
          </li>
          <li class="mb-4 flex items-center">
            <span class="w-2 h-2 bg-white rounded-full mr-3"></span>
            Advanced Helpdesk Solutions
          </li>
          <li class="mb-4 flex items-center">
            <span class="w-2 h-2 bg-white rounded-full mr-3"></span>
            Modern Data Center Innovation
          </li>
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
