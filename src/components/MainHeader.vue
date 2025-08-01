<template>
  <main class="h-[90vh] bg-gradient-to-br from-white via-white to-blue-50 relative">
    <header
      class="max-w-7xl mx-auto absolute inset-0 h-[90vh] py-2 md:flex md:items-center justify-between gap-20 z-10"
    >
      <div class="flex-1 relative z-50">
        <!-- Safari: show gradient text -->
        <div v-if="isSafari" class="safari-text-container">
          <h1 class="safari-text" data-aos="flip-up" data-aos-duration="1000">
            Welcome to CyberGist
          </h1>
        </div>

        <!-- Chrome/Firefox/Edge: your original video-mask -->
        <div v-else class="video-text-mask">
          <svg width="100%" height="200" viewBox="0 0 1000 200">
            <defs>
              <mask id="text-mask">
                <rect width="100%" height="100%" fill="black" />
                <text
                  x="50%"
                  y="50%"
                  text-anchor="middle"
                  dominant-baseline="middle"
                  font-size="100"
                  font-family="Garamond, serif"
                  font-weight="500"
                  fill="white"
                  data-aos="flip-up"
                  data-aos-duration="1000"
                >
                  Welcome to CyberGist
                </text>
              </mask>
            </defs>
            <foreignObject width="100%" height="100%" mask="url(#text-mask)">
              <video autoplay loop muted playsinline class="object-cover w-full h-full">
                <source src="../assets/cybergist-video.mp4" type="video/mp4" />
              </video>
            </foreignObject>
          </svg>
        </div>

        <div>
          <p class="mb-6 text-black md:text-xl font-medium tracking-wide leading-relaxed">
            CyberGist is a startup-in-progress focused on building a cybersecurity model capable of
            autonomous decision-making and protection. The concept combines visual network modeling,
            machine intelligence, and kernel-level security to detect, mitigate, and neutralize
            threats in real-time. The system aims to:
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
    </header>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isSafari = ref(false)

onMounted(() => {
  // Exclude other iOS browsers (CriOS, FxiOS) as well
  const ua = navigator.userAgent
  const safariRegex = /^((?!chrome|crios|fxios|android).)*safari/i
  isSafari.value = safariRegex.test(ua)
})
</script>

<style scoped>
/* Safari fallback: gradient-filled text */
.safari-text-container {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.safari-text {
  font-size: clamp(3rem, 12vw, 6rem);
  font-weight: 500;
  font-family: 'Garamond', serif;
  background: linear-gradient(to right, #d97706, #fbbf24, #3b82f6);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  animation: gradientShift 4s ease-in-out infinite;
}

@keyframes gradientShift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Optional: ensure your video-text-mask sits where your h1 would */
.video-text-mask {
  height: 200px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
