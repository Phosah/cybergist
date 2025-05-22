<template>
  <div class="max-w-7xl mx-auto">
    <div class="my-12 text-4xl text-red-600 font-garamond font-semibold">Blogs</div>

    <section class="grid grid-cols-1 gap-6 my-12">
      <RouterLink
        to="/blogs/dcim"
        class="flex items-center gap-3 px-3 pb-3 border-b border-yellow-500 hover:bg-gray-50 transition-colors"
      >
        <div><img src="@/assets/ai-plug.jpeg" width="250" height="250" alt="DCIM" /></div>
        <div class="flex-grow flex-col justify-between">
          <h2
            class="mb-10 text-xl font-semibold font-garamond hover:border-yellow-500 hover:text-yellow-500 hover:font-medium transition-all"
          >
            DCIM
          </h2>
          <div class="flex items-center justify-between gap-2 text-gray-400">
            <p>Cassius Lawson</p>
            <p>23/05/2025</p>
          </div>
        </div>
      </RouterLink>

      <RouterLink
        to="/blogs/data-strategy"
        class="flex items-center gap-3 px-3 pb-3 border-b border-yellow-500 hover:bg-gray-50 transition-colors"
      >
        <div><img src="@/assets/ai-plug.jpeg" width="250" height="250" alt="Data Strategy" /></div>
        <div class="flex-grow flex-col justify-between">
          <h2
            class="mb-10 text-xl font-semibold font-garamond hover:border-yellow-500 hover:text-yellow-500 hover:font-medium transition-all"
          >
            Data Strategy
          </h2>
          <div class="flex items-center justify-between gap-2 text-gray-400">
            <p>Cassius Lawson</p>
            <p>23/05/2025</p>
          </div>
        </div>
      </RouterLink>

      <RouterLink
        to="/blogs/cybersecurity"
        class="flex items-center gap-3 px-3 pb-3 border-b border-yellow-500 hover:bg-gray-50 transition-colors"
      >
        <div><img src="@/assets/ai-plug.jpeg" width="250" height="250" alt="Cybersecurity" /></div>
        <div class="flex-grow flex-col justify-between">
          <h2
            class="mb-10 text-xl font-semibold font-garamond hover:border-yellow-500 hover:text-yellow-500 hover:font-medium transition-all"
          >
            CYBERSECURITY
          </h2>
          <div class="flex items-center justify-between gap-2 text-gray-400">
            <p>Cassius Lawson</p>
            <p>23/05/2025</p>
          </div>
        </div>
      </RouterLink>
    </section>
  </div>
</template>

<script setup lang="ts"></script>
