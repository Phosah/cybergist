<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainNavbar from '@/components/MainNavbar.vue'
import FooterBar from '@/components/FooterBar.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col font-nunito">
    <MainNavbar />
    <main class="flex-grow">
      <div>
        <RouterView />
      </div>
    </main>
    <FooterBar />
  </div>
</template>
