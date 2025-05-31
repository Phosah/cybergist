<script setup lang="ts">
import CheckCircleIcon from './icons/CheckCircleIcon.vue'
</script>

<template>
  <main class="h-[90vh] bg-gradient-to-br from-white via-white to-blue-50 relative">
    <div class="absolute inset-0 z-0"></div>

    <header
      class="max-w-7xl mx-auto absolute inset-0 h-[90vh] py-2 md:flex md:items-center justify-between gap-20 z-10"
    >
      <div class="flex-1 relative z-50">
        <h1
          class="mb-12 text-4xl md:text-6xl font-medium font-garamond bg-gradient-to-r from-yellow-500 to-blue-700 bg-clip-text text-transparent"
        >
          Welcome to CyberGist
        </h1>

        <div>
          <p class="mb-6 text-black md:text-lg font-medium tracking-wide">
            Our Vision: To empower organizations with comprehensive, secure, and innovative data
            management solutions by seamlessly integrating Data Center Infrastructure Management
            (DCIM), data strategy, and cybersecurity. We envision a future where businesses are
            equipped to harness the full potential of their data, with infrastructure that adapts,
            strategies that drive value, and security that ensures trust. Through cutting-edge
            technology and industry-leading expertise, we strive to be the backbone of resilient,
            data-driven enterprises globally
          </p>
        </div>
      </div>

      <div class="flex-1 relative">
        <div class="bg-gradient-to-br from-blue-100 to-blue-600 rounded-2xl p-8 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
            alt="Data Center Infrastructure"
            class="rounded-lg shadow-lg w-full h-64 object-cover"
          />
        </div>
        <div class="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl">
          <div class="flex items-center space-x-2">
            <CheckCircleIcon class="w-6 h-6" />
            <span class="font-semibold text-gray-800">Trusted by 100+ Companies</span>
          </div>
        </div>
      </div>
    </header>
  </main>
  <!--   
  <main class="h-[90vh] bg-white relative">
    <div class="absolute inset-0 z-0"></div>

    <header
      class="absolute inset-0 h-[90vh] py-2 flex items-center justify-center text-center z-10"
    >
      <div class="max-w-7xl mx-auto relative z-50">
        <h1
          class="mb-12 text-4xl md:text-6xl font-medium font-garamond bg-gradient-to-r from-yellow-500 to-blue-700 bg-clip-text text-transparent"
        >
          Welcome to CyberGist
        </h1>

        <div>
          <p class="mb-6 text-black md:text-lg font-medium tracking-wide">
            Our Vision: To empower organizations with comprehensive, secure, and innovative data
            management solutions by seamlessly integrating Data Center Infrastructure Management
            (DCIM), data strategy, and cybersecurity. We envision a future where businesses are
            equipped to harness the full potential of their data, with infrastructure that adapts,
            strategies that drive value, and security that ensures trust. Through cutting-edge
            technology and industry-leading expertise, we strive to be the backbone of resilient,
            data-driven enterprises globally
          </p>
        </div>
      </div>
    </header>
  </main> -->
</template>

<style>
.bg-hero {
  /* background-image: url('@/assets/circuit-board.svg'); */
  /* background-image: url('@/assets/ai-plug.jpeg'); */
  /* background-image: url('@/assets/hero-bg.jpg'); */
  background-size: cover;
  /* background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='red' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"); */
}

.bg-layer {
  /* background-image: url('@/assets/random-shapes.svg'); */
  /* background-image: url('@/assets/diagonal-lines.svg'); */
  /* background-image: url('@/assets/layer.png'); */
  /* background-size: cover; */
}
</style>
