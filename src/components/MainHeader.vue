<template>
  <main class="h-[90vh] bg-gradient-to-br from-white via-white to-blue-50 relative">
    <div class="absolute inset-0 z-0"></div>

    <header
      class="max-w-7xl mx-auto absolute inset-0 h-[90vh] py-2 md:flex md:items-center justify-between gap-20 z-10"
    >
      <div class="flex-1 relative z-50">
        <div class="video-text-mask">
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
                  data-aos-duration="2000"
                >
                  Welcome to CyberGist
                </text>
              </mask>
            </defs>
            <foreignObject width="100%" height="100%" mask="url(#text-mask)">
              <video
                autoplay
                loop
                muted
                playsinline
                style="width: 100%; height: 100%; object-fit: cover"
              >
                <source src="../assets/cybergist-video.mp4" type="video/mp4" />
              </video>
            </foreignObject>
          </svg>
        </div>

        <div>
          <p class="mb-6 text-black md:text-xl font-medium tracking-wide leading-relaxed">
            CyberGist is a startup-in-progress focused on building a cybersecurity system capable of
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

<style scoped>
.video-text-container {
  position: relative;
  display: inline-block;
  overflow: hidden;
}

.video-text {
  font-size: clamp(3rem, 12vw, 8rem);
  font-weight: 500;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
  position: relative;
  z-index: 2;
}

.video-text::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('../assets/cybergist-video.mp4') center/cover;
  -webkit-background-clip: text;
  background-clip: text;
  z-index: -1;
}
</style>
