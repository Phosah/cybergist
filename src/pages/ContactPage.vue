<template>
  <div class="max-w-7xl mx-auto">
    <!-- Contact Form Section -->
    <section class="my-12 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12">
          <!-- Contact Information -->
          <div class="space-y-8">
            <div>
              <h2
                class="text-4xl font-garamond font-semibold bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent mb-4"
              >
                Get in Touch
              </h2>
              <p class="text-lg text-gray-600">
                Have questions about our services? We're here to help. Reach out to us using the
                contact information below or fill out the form.
              </p>
            </div>

            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0"
                >
                  <MapPin class="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-1">Our Location</h3>
                  <p class="text-gray-600">
                    123 Business Street<br />
                    Suite 100<br />
                    City, State 12345
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0"
                >
                  <Phone class="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-1">Phone</h3>
                  <p class="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0"
                >
                  <Mail class="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-1">Email</h3>
                  <p class="text-gray-600">info@cybergist.com</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1"
                  >Email</label
                >
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-1"
                  >Subject</label
                >
                <input
                  type="text"
                  id="subject"
                  v-model="form.subject"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1"
                  >Message</label
                >
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="4"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2
            class="text-4xl font-garamond font-semibold bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent mb-4"
          >
            Find Us
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit our office or get in touch with us for a consultation.
          </p>
        </div>

        <div class="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104097.825191!2d9.097431!3d48.7758459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799db1c5941a695%3A0x97469e383ded480f!2sStuttgart%2C%20Germany!5e0!3m2!1sen!2s!4v1710861234567!5m2!1sen!2s"
            width="100%"
            height="450"
            style="border: 0"
            allowfullscreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { MapPin, Phone, Mail } from 'lucide-vue-next'
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const handleSubmit = () => {
  // Handle form submission
  console.log('Form submitted:', form.value)
}
</script>
