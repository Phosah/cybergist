<template>
  <nav
    class="sticky top-0 shadow-md z-30 flex items-center justify-between px-6 py-10 bg-white z-100"
  >
    <RouterLink to="/"
      ><p class="font-bold text-lg text-red-300 font-garamond">CyberGist</p></RouterLink
    >

    <div class="hidden sm:flex gap-6">
      <RouterLink
        to="/"
        class="border-b-2 border-transparent hover:border-yellow-500 hover:text-yellow-500 hover:font-medium transition-all"
        active-class="text-red-300 font-semibold"
        >Home</RouterLink
      >
      <RouterLink
        to="/about"
        class="border-b-2 border-transparent hover:border-yellow-500 hover:text-yellow-500 hover:font-medium transition-all"
        active-class="text-red-300 font-semibold"
        >About</RouterLink
      >
      <RouterLink
        to="/services"
        class="border-b-2 border-transparent hover:border-yellow-500 hover:text-yellow-500 hover:font-medium transition-all"
        active-class="text-red-300 font-semibold"
        >Services</RouterLink
      >
      <RouterLink
        to="/blogs"
        class="border-b-2 border-transparent hover:border-yellow-500 hover:text-yellow-500 hover:font-medium transition-all"
        active-class="text-red-300 font-semibold"
        >Blogs</RouterLink
      >
      <RouterLink
        to="/contact"
        class="border-b-2 border-transparent hover:border-yellow-500 hover:text-yellow-500 hover:font-medium transition-all"
        active-class="text-red-300 font-semibold"
        >Contact Us</RouterLink
      >
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style></style>
