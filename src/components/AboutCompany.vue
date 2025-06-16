<template>
  <!-- <section class="my-20 py-20">
    <div class="max-w-3xl mx-auto flex flex-col gap-8">
      <div>
        <h3 class="mb-2 text-sm font-semibold text-blue-600">About our company</h3>
        <h2
          class="text-4xl font-garamond font-semibold bg-gradient-to-r from-yellow-500 to-blue-900 bg-clip-text text-transparent"
        >
          Unlock the potential of AI with the help of Cybergist today!
        </h2>
      </div>

      <div>
        <p class="font-bold text-lg text-gray-800">Our Vision:</p>
        <p class="text-gray-600">
          At Cybergist, we envision AI as a true collaborator, partnering with individuals and
          businesses to unlock their fullest potential, while nurturing societal well-being.
        </p>
      </div>

      <div>
        <p class="font-bold text-lg text-gray-800">Our Mission:</p>
        <p class="text-gray-600">
          At Cybergist, we believe the transformative power of AI should benefit small and mid-sized
          businesses and all forward-thinking organizations, regardless of size.
        </p>
      </div>

      <div>
        <p class="font-bold text-lg text-gray-800">Our Values:</p>
        <p class="text-gray-600">
          We are committed to innovation, integrity, and excellence in everything we do. Our values
          drive us to deliver exceptional solutions while maintaining the highest standards of
          professionalism and customer service.
        </p>
      </div>
    </div>
  </section> -->

  <section class="mb-20 py-20 px-3 bg-gray-50">
    <div class="max-w-3xl mx-auto flex flex-col gap-8 text-center">
      <div>
        <h3 class="mb-2 text-sm font-semibold text-blue-600">Team</h3>
        <h2
          class="text-4xl font-garamond font-semibold bg-gradient-to-r from-yellow-500 to-blue-900 bg-clip-text text-transparent"
        >
          Our Professional Team
        </h2>
      </div>

      <div>
        <p class="text-gray-600 text-xl">
          Our experienced leadership team brings together decades of expertise in data management,
          cybersecurity, and enterprise technology solutions.
        </p>
      </div>
    </div>

    <div
      class="grid md:grid-cols-2 gap-12 mt-12 max-w-5xl mx-auto text-black text-left md:text-center"
    >
      <div>
        <div class="mb-6 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div class="w-full h-[15rem] md:h-[15rem] shrink-0">
            <img
              src="../assets/hero-bg.jpg"
              alt="Khalid Safee"
              class="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <p class="text-xl font-semibold">Khalid Safee</p>
        <p class="text-gray-500">Chief Executive Officer</p>
      </div>

      <div>
        <div class="mb-6 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div class="w-full h-[15rem] md:h-[15rem] shrink-0">
            <img
              src="../assets/hero-bg.jpg"
              alt="Cassius Lawson"
              class="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <p class="text-xl font-semibold">Dilip Saini Nagpur</p>
        <p class="text-gray-500">Chief Technology Officer</p>
      </div>
    </div>

    <div class="flex justify-center mt-12">
      <RouterLink to="/about">
        <div
          class="inline-block px-8 py-4 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition-colors cursor-pointer"
        >
          View Team
        </div>
      </RouterLink>
    </div>
  </section>
</template>
