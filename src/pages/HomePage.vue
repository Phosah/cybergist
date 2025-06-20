<script setup lang="ts">
import MainHeader from '@/components/MainHeader.vue'
import AboutCompany from '@/components/AboutCompany.vue'
</script>

<template>
  <MainHeader />
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
