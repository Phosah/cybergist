<template>
  <nav
    class="sticky top-0 shadow-md z-30 flex items-center justify-between px-6 py-10 bg-white z-100"
  >
    <RouterLink to="/"
      ><p
        class="font-bold font-garamond bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent"
      >
        CyberGist
      </p></RouterLink
    >

    <div class="hidden sm:flex gap-6">
      <RouterLink
        to="/"
        class="border-b-2 border-transparent hover:border-yellow-500 hover:text-yellow-500 hover:font-medium transition-all"
        active-class=" bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent font-semibold"
        >Home</RouterLink
      >
      <RouterLink
        to="/about"
        class="border-b-2 border-transparent hover:border-yellow-500 hover:text-yellow-500 hover:font-medium transition-all"
        active-class=" bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent font-semibold"
        >About</RouterLink
      >
      <RouterLink
        to="/services"
        class="border-b-2 border-transparent hover:border-yellow-500 hover:text-yellow-500 hover:font-medium transition-all"
        active-class=" bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent font-semibold"
        >Services</RouterLink
      >
      <RouterLink
        to="/blogs"
        class="border-b-2 border-transparent hover:border-yellow-500 hover:text-yellow-500 hover:font-medium transition-all"
        active-class=" bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent font-semibold"
        >Blogs</RouterLink
      >
      <RouterLink
        to="/certifications"
        class="border-b-2 border-transparent hover:border-yellow-500 hover:text-yellow-500 hover:font-medium transition-all"
        active-class=" bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent font-semibold"
        >Affliates</RouterLink
      >
      <RouterLink
        to="/contact"
        class="border-b-2 border-transparent hover:border-yellow-500 hover:text-yellow-500 hover:font-medium transition-all"
        active-class=" bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent font-semibold"
        >Contact Us</RouterLink
      >
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style></style>
