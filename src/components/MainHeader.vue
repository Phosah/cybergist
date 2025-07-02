<script setup lang="ts">
// import CheckCircleIcon from './icons/CheckCircleIcon.vue'
</script>

<template>
  <main class="h-[90vh] bg-gradient-to-br from-white via-white to-blue-50 relative">
    <div class="absolute inset-0 z-0"></div>

    <header
      class="max-w-7xl mx-auto absolute inset-0 h-[90vh] py-2 md:flex md:items-center justify-between gap-20 z-10"
    >
      <div class="flex-1 relative z-50" data-aos="fade-up" data-aos-duration="2000">
        <h1
          class="mb-12 text-4xl md:text-9xl font-medium font-garamond bg-gradient-to-r from-yellow-500 to-blue-700 bg-clip-text text-transparent text-center"
          data-aos="flip-down"
          data-aos-duration="2000"
        >
          Welcome to CyberGist
        </h1>

        <div>
          <p class="mb-6 text-black md:text-xl font-medium tracking-wide leading-relaxed">
            CyberGist (also referred to as UNHACKABLE) is a startup-in-progress focused on building
            a cybersecurity system capable of autonomous decision-making and protection. The concept
            combines visual network modeling, machine intelligence, and kernel-level security to
            detect, mitigate, and neutralize threats in real-time. The system aims to:
          </p>

          <div class="text-black md:text-lg font-medium">
            <p
              class="mb-2 tracking-wide leading-relaxed"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              - Provide a visual representation of network topology and data flow
            </p>
            <p
              class="mb-2 tracking-wide leading-relaxed"
              data-aos="fade-left"
              data-aos-duration="4000"
            >
              - Protect sensitive network data
            </p>
            <p
              class="mb-2 tracking-wide leading-relaxed"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              - Secure access points and enforce Single Sign-On (SSO) protection
            </p>
            <p
              class="mb-2 tracking-wide leading-relaxed"
              data-aos="fade-left"
              data-aos-duration="4000"
            >
              - Detect and respond to abnormal network behavior
            </p>

            <p
              class="mb-2 tracking-wide leading-relaxed"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              - Secure the kernel virtual address space and memory
            </p>
            <p
              class="mb-2 tracking-wide leading-relaxed"
              data-aos="fade-left"
              data-aos-duration="4000"
            >
              - Deploy an AI that learns its environment and isolates threats for investigation
            </p>
          </div>
        </div>
      </div>

      <!-- <div class="flex-1 relative">
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
      </div> -->
    </header>
  </main>
</template>
