<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainNavbar from '@/components/MainNavbar.vue'
import FooterBar from '@/components/FooterBar.vue'
import { ArrowUp, Loader2 } from 'lucide-vue-next'
import { ref, onMounted, onUnmounted } from 'vue'

const showScrollTop = ref(false)
const isLoading = ref(true)

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Simulate loading time
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="min-h-screen flex flex-col font-nunito text-gray-600">
    <!-- Loading Overlay -->
    <div v-if="isLoading" class="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div class="text-center">
        <Loader2 class="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
        <p class="text-gray-600 font-medium">Loading...</p>
      </div>
    </div>

    <MainNavbar />
    <main class="flex-grow px-6">
      <div>
        <RouterView />
      </div>
    </main>
    <FooterBar />

    <!-- Scroll to Top Button -->
    <button
      v-show="showScrollTop"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 z-50"
    >
      <ArrowUp class="w-6 h-6" />
    </button>
  </div>
</template>
