<template>
  <div class="max-w-7xl mx-auto">
    <div
      class="my-12 text-4xl font-garamond font-semibold bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent"
    >
      Contact Us
    </div>

    <div class="mb-6">
      <p class="font-bold text-gray-900">Contact Us</p>
    </div>
  </div>

  <form action="{FORM_ENDPOINT}" method="POST" class="max-w-[120rem] mx-auto flex justify-center">
    <div class="relatve z-10 w-4/6 md:w-3/6">
      <div class="grid md:grid-cols-2 gap-x-10 gap-y-5">
        <div class="pt-0 mb-3">
          <input
            type="text"
            placeholder="Company name"
            name="name"
            class="focus:outline-none focus:ring focus:ring-blue-700 focus:border-0 relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-2 border-yellow-500 rounded shadow outline-none"
            required
          />
        </div>

        <div class="pt-0 mb-3">
          <input
            type="text"
            placeholder="First name"
            name="name"
            class="focus:outline-none focus:ring focus:ring-blue-700 focus:border-0 relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-2 border-yellow-500 rounded shadow outline-none"
            required
          />
        </div>

        <div class="pt-0 mb-3">
          <input
            type="text"
            placeholder="Last name"
            name="name"
            class="focus:outline-none focus:ring focus:ring-blue-700 focus:border-0 relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-2 border-yellow-500 rounded shadow outline-none"
            required
          />
        </div>

        <div class="pt-0 mb-3">
          <input
            type="text"
            placeholder="Phone number"
            name="number"
            class="focus:outline-none focus:ring focus:ring-blue-700 focus:border-0 relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-2 border-yellow-500 rounded shadow outline-none"
            required
          />
        </div>

        <div class="pt-0 mb-3">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            class="focus:outline-none focus:ring focus:ring-blue-700 focus:border-0 relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-2 border-yellow-500 rounded shadow outline-none"
            required
          />
        </div>
      </div>

      <div class="pt-0 my-5">
        <textarea
          placeholder="Your message"
          name="message"
          class="h-32 focus:outline-none focus:ring focus:ring-blue-700 focus:border-0 relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-2 border-yellow-500 rounded shadow outline-none"
          required
        />
      </div>

      <div class="pt-0 mb-3">
        <button
          class="bg-gradient-to-r from-blue-300 to-blue-700 focus:outline-none px-6 py-3 my-1 text-sm font-bold uppercase transition-all duration-150 ease-linear hover:bg-yellow-400 rounded shadow outline-none cursor-pointer text-white"
          type="submit"
        >
          Submit
        </button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts"></script>
