<template>
  <section class="mb-20 py-20 px-3 bg-gray-50">
    <div class="max-w-3xl mx-auto flex flex-col gap-8 text-center">
      <div>
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
      <div data-aos="fade-right" data-aos-duration="2000">
        <div class="mb-6 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div class="w-full h-[15rem] md:h-[15rem] shrink-0">
            <img
              src="../assets/khalid.jpeg"
              alt="Khalid Safee"
              class="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <p class="text-xl font-semibold">Khalid Safee</p>
        <p class="text-gray-500">Chief Executive Officer and Co-Founder</p>
      </div>

      <div data-aos="fade-left" data-aos-duration="2000">
        <div class="mb-6 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div class="w-full h-[15rem] md:h-[15rem] shrink-0">
            <img
              src="../assets/cassius-2.jpeg"
              alt="Cassius Lawson"
              class="w-full h-full object-cover rounded-lg object-center"
            />
          </div>
        </div>
        <p class="text-xl font-semibold">Cassius Lawson</p>
        <p class="text-gray-500">Founder</p>
      </div>
    </div>

    <div class="flex justify-center mt-12">
      <RouterLink to="/about">
        <div
          class="inline-block px-8 py-4 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 transition-colors cursor-pointer"
        >
          View Team
        </div>
      </RouterLink>
    </div>
  </section>
</template>
