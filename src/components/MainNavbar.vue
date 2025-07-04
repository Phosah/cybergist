<template>
  <nav
    class="sticky top-0 shadow-md z-30 flex items-center justify-between px-6 py-4 bg-white z-100"
  >
    <RouterLink to="/"
      ><p
        class="text-2xl font-bold font-garamond bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent hover:border-yellow-500 hover:text-yellow-500 hover:font-medium transition-all"
      >
        CyberGist
      </p></RouterLink
    >

    <!-- Mobile Menu Button -->
    <button
      @click="isMenuOpen = !isMenuOpen"
      class="sm:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
    >
      <Menu v-if="!isMenuOpen" class="w-6 h-6" />
      <X v-else class="w-6 h-6" />
    </button>

    <!-- Desktop Menu -->
    <div class="hidden sm:flex gap-6">
      <RouterLink
        v-for="item in menuItems"
        :key="item.path"
        :to="item.path"
        class="border-b-2 border-transparent hover:border-yellow-500 hover:text-yellow-500 hover:font-medium transition-all"
        active-class="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent font-semibold"
        >{{ item.name }}</RouterLink
      >
    </div>

    <!-- Mobile Menu -->
    <div v-show="isMenuOpen" class="absolute top-full left-0 right-0 bg-white shadow-lg sm:hidden">
      <div class="flex flex-col p-4 space-y-4">
        <RouterLink
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          @click="isMenuOpen = false"
          class="border-b-2 border-transparent hover:border-yellow-500 hover:text-yellow-500 hover:font-medium transition-all py-2"
          active-class="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent font-semibold"
          >{{ item.name }}</RouterLink
        >
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const isMenuOpen = ref(false)

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'Partners', path: '/partners' },
  { name: 'Contact Us', path: '/contact' },
]
</script>

<style></style>
