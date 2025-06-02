<template>
  <div class="max-w-7xl mx-auto font-nunito">
    <div class="my-12 text-center">
      <h1
        class="text-4xl font-garamond font-semibold bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent"
      >
        Latest Insights
      </h1>
      <p class="mt-4 text-gray-600 max-w-2xl mx-auto text-xl">
        Explore our latest articles on Data Center Infrastructure Management, Data Strategy, and
        Cybersecurity best practices.
      </p>
    </div>

    <section class="grid grid-cols-1 gap-8 my-12 max-w-4xl mx-auto">
      <RouterLink
        to="/blogs/dcim"
        class="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
      >
        <div class="md:flex">
          <div class="md:w-1/3">
            <img
              class="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
              src="@/assets/ai-plug.jpeg"
              alt="Data Center Infrastructure Management"
            />
          </div>
          <div class="p-6 md:w-2/3">
            <div class="flex items-center gap-2 text-sm text-gray-500 mb-3">
              <span class="px-3 py-1 bg-blue-50 text-blue-700 rounded-full">DCIM</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
            <h2
              class="text-2xl font-garamond font-semibold mb-3 group-hover:bg-gradient-to-r group-hover:from-yellow-500 group-hover:to-blue-900 group-hover:bg-clip-text group-hover:text-transparent transition-all"
            >
              Data Center Infrastructure Management
            </h2>
            <p class="text-gray-600 mb-4 line-clamp-2">
              Discover how modern DCIM solutions are revolutionizing data center operations, from
              asset management to real-time monitoring and optimization.
            </p>
            <div class="flex items-center justify-between text-sm">
              <div class="flex items-center gap-2">
                <img
                  src="@/assets/hero-bg.jpg"
                  alt="Cassius Lawson"
                  class="w-8 h-8 rounded-full object-cover"
                />
                <span class="text-gray-700">Cassius Lawson</span>
              </div>
              <span class="text-gray-500">May 23, 2025</span>
            </div>
          </div>
        </div>
      </RouterLink>

      <RouterLink
        to="/blogs/data-strategy"
        class="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
      >
        <div class="md:flex">
          <div class="md:w-1/3">
            <img
              class="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
              src="@/assets/ai-plug.jpeg"
              alt="Data Strategy"
            />
          </div>
          <div class="p-6 md:w-2/3">
            <div class="flex items-center gap-2 text-sm text-gray-500 mb-3">
              <span class="px-3 py-1 bg-green-50 text-green-700 rounded-full">Strategy</span>
              <span>•</span>
              <span>7 min read</span>
            </div>
            <h2
              class="text-2xl font-garamond font-semibold mb-3 group-hover:bg-gradient-to-r group-hover:from-yellow-500 group-hover:to-blue-900 group-hover:bg-clip-text group-hover:text-transparent transition-all"
            >
              Data Strategy
            </h2>
            <p class="text-gray-600 mb-4 line-clamp-2">
              Learn how to develop and implement effective data strategies that drive business
              growth and enable data-driven decision making.
            </p>
            <div class="flex items-center justify-between text-sm">
              <div class="flex items-center gap-2">
                <img
                  src="@/assets/hero-bg.jpg"
                  alt="Cassius Lawson"
                  class="w-8 h-8 rounded-full object-cover"
                />
                <span class="text-gray-700">Cassius Lawson</span>
              </div>
              <span class="text-gray-500">May 23, 2025</span>
            </div>
          </div>
        </div>
      </RouterLink>

      <RouterLink
        to="/blogs/cybersecurity"
        class="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
      >
        <div class="md:flex">
          <div class="md:w-1/3">
            <img
              class="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
              src="@/assets/ai-plug.jpeg"
              alt="Cybersecurity"
            />
          </div>
          <div class="p-6 md:w-2/3">
            <div class="flex items-center gap-2 text-sm text-gray-500 mb-3">
              <span class="px-3 py-1 bg-red-50 text-red-700 rounded-full">Security</span>
              <span>•</span>
              <span>6 min read</span>
            </div>
            <h2
              class="text-2xl font-garamond font-semibold mb-3 group-hover:bg-gradient-to-r group-hover:from-yellow-500 group-hover:to-blue-900 group-hover:bg-clip-text group-hover:text-transparent transition-all"
            >
              Cybersecurity
            </h2>
            <p class="text-gray-600 mb-4 line-clamp-2">
              Stay ahead of emerging threats with our comprehensive guide to modern cybersecurity
              practices and technologies.
            </p>
            <div class="flex items-center justify-between text-sm">
              <div class="flex items-center gap-2">
                <img
                  src="@/assets/hero-bg.jpg"
                  alt="Cassius Lawson"
                  class="w-8 h-8 rounded-full object-cover"
                />
                <span class="text-gray-700">Cassius Lawson</span>
              </div>
              <span class="text-gray-500">May 23, 2025</span>
            </div>
          </div>
        </div>
      </RouterLink>
    </section>
  </div>
</template>

<script setup lang="ts">
// Component logic will be added here
</script>
