<template>
  <div class="max-w-7xl mx-auto">
    <div
      class="my-12 text-4xl font-garamond font-semibold bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent"
    >
      Blogs
    </div>

    <section class="grid grid-cols-1 gap-6 my-12">
      <RouterLink
        to="/blogs/dcim"
        class="md:flex items-center gap-3 pb-3 border-b border-yellow-500 hover:bg-gray-50 transition-colors"
      >
        <div>
          <img
            class="w-full md:w-64"
            src="@/assets/ai-plug.jpeg"
            width="250"
            height="250"
            alt="DCIM"
          />
        </div>
        <div class="flex-grow flex-col justify-between">
          <h2
            class="mb-10 text-xl font-semibold font-garamond transition-all hover:bg-gradient-to-r hover:from-yellow-500 hover:to-blue-900 hover:bg-clip-text hover:text-transparent"
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
        class="md:flex items-center gap-3 pb-3 border-b border-yellow-500 hover:bg-gray-50 transition-colors"
      >
        <div>
          <img
            src="@/assets/ai-plug.jpeg"
            class="w-full md:w-64"
            width="250"
            height="250"
            alt="Data Strategy"
          />
        </div>
        <div class="flex-grow flex-col justify-between">
          <h2
            class="mb-10 text-xl font-semibold font-garamond transition-all hover:font-medium hover:bg-gradient-to-r hover:from-yellow-500 hover:to-blue-900 hover:bg-clip-text hover:text-transparent"
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
        class="md:flex items-center gap-3 pb-3 border-b border-yellow-500 hover:bg-gray-50 transition-colors"
      >
        <div>
          <img
            src="@/assets/ai-plug.jpeg"
            class="w-full md:w-64"
            width="250"
            height="250"
            alt="Cybersecurity"
          />
        </div>
        <div class="flex-grow flex-col justify-between">
          <h2
            class="mb-10 text-xl font-semibold font-garamond transition-all hover:font-medium hover:bg-gradient-to-r hover:from-yellow-500 hover:to-blue-900 hover:bg-clip-text hover:text-transparent"
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
