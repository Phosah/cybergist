<template>
  <footer class="mt-20 bg-gray-900 text-gray-400">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="space-y-4">
          <h3
            class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            CyberGist
          </h3>
          <p class="text-gray-400">
            Empowering organizations with comprehensive, secure, and innovative data management
            solutions.
          </p>
          <div class="flex space-x-4">
            <Linkedin
              class="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors"
            />
            <Twitter
              class="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors"
            />
            <Facebook
              class="w-5 h-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors"
            />
          </div>
        </div>

        <div class="space-y-4">
          <h4 class="text-lg font-semibold">Quick Links</h4>
          <ul class="space-y-2">
            <li>
              <RouterLink
                to="/"
                class="border-b-2 border-transparent hover:text-white hover:font-medium transition-all"
                active-class=" bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent font-semibold"
                >Home</RouterLink
              >
            </li>

            <li>
              <RouterLink
                to="/about"
                class="border-b-2 border-transparent hover:text-white hover:font-medium transition-all"
                active-class=" bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent font-semibold"
                >About</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/services"
                class="border-b-2 border-transparent hover:text-white hover:font-medium transition-all"
                active-class=" bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent font-semibold"
                >Services</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/blogs"
                class="border-b-2 border-transparent hover:text-white hover:font-medium transition-all"
                active-class=" bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent font-semibold"
                >Blog</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/affiliates"
                class="border-b-2 border-transparent hover:text-white hover:font-medium transition-all"
                active-class=" bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent font-semibold"
                >Affiliates</RouterLink
              >
            </li>

            <li>
              <Link
                to="/services"
                class="border-b-2 border-transparent hover:text-white hover:font-medium transition-all"
                active-class=" bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent font-semibold"
                >Services</Link
              >
            </li>
          </ul>
        </div>

        <div class="space-y-4">
          <h4 class="text-lg font-semibold">Services</h4>
          <ul class="space-y-2">
            <li class="text-gray-400">Data Center Management</li>
            <li class="text-gray-400">Cybersecurity Solutions</li>
            <li class="text-gray-400">IT Consulting</li>
            <li class="text-gray-400">Cloud Services</li>
          </ul>
        </div>

        <div class="space-y-4">
          <h4 class="text-lg font-semibold">Contact Info</h4>
          <div class="space-y-2">
            <div class="flex items-center space-x-2">
              <Mail class="w-4 h-4 text-blue-400" />
              <span class="text-gray-400">info@cybergist.com</span>
            </div>
            <div class="flex items-center space-x-2">
              <Phone class="w-4 h-4 text-blue-400" />
              <span class="text-gray-400">+1 (555) 123-4567</span>
            </div>
            <div class="flex items-center space-x-2">
              <MapPin class="w-4 h-4 text-blue-400" />
              <span class="text-gray-400">123 Tech Street, Silicon Valley, CA</span>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-8 pt-8 text-center">
        <p class="text-gray-400">© 2025 CyberGist. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Mail, Phone, MapPin } from 'lucide-vue-next'
</script>
