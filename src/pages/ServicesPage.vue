<template>
  <div class="max-w-7xl mx-auto">
    <div
      class="my-12 text-4xl font-garamond font-semibold bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent"
    >
      Our Services
    </div>

    <!-- Main Services -->
    <!-- <section class="py-10 md:py-20 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="space-y-16">
          <div
            v-for="(service, index) in mainServices"
            :key="index"
            :class="[
              'flex flex-col',
              index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row',
              'items-center gap-12',
            ]"
            :data-aos="index === 0 ? 'fade-right' : index === 1 ? 'fade-left' : 'fade-up'"
            :data-aos-duration="index === 0 ? '2000' : index === 1 ? '2500' : '3000'"
          >
            <div class="flex-1 space-y-6">
              <div
                :class="[
                  'inline-flex p-4 rounded-2xl bg-gradient-to-r',
                  service.color,
                  'text-white',
                ]"
              >
                <component :is="service.icon" class="w-8 h-8" />
              </div>
              <h2 class="text-3xl font-garamond font-semibold text-gray-900">
                {{ service.title }}
              </h2>
              <p class="text-lg text-gray-600">{{ service.description }}</p>

              <div class="grid grid-cols-2 gap-3">
                <div
                  v-for="(feature, featureIndex) in service.features"
                  :key="featureIndex"
                  class="flex items-center space-x-2"
                >
                  <CheckCircle class="w-5 h-5 text-green-500" />
                  <span class="text-gray-700">{{ feature }}</span>
                </div>
              </div>

              <button
                class="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center group"
              >
                Learn More
                <ArrowRight class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div class="flex-1">
              <div class="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 shadow-xl">
                <img
                  :src="`https://images.unsplash.com/photo-${index === 0 ? '1518770660439-4636190af475' : index === 1 ? '1451187580459-43490279c0fa' : '1518770660439-4636190af475'}?auto=format&fit=crop&w=600&q=80`"
                  :alt="service.title"
                  class="rounded-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Additional Services -->
    <!-- <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2
            class="text-4xl font-garamond font-semibold bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent mb-4"
          >
            Additional Services
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive support services to ensure your infrastructure operates at peak
            performance.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(service, index) in additionalServices"
            :key="index"
            class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            :data-aos="index % 2 === 0 ? 'fade-up' : 'fade-down'"
            :data-aos-duration="index % 2 === 0 ? '2000' : '2500'"
          >
            <div class="text-blue-600 mb-4">
              <component :is="service.icon" class="w-12 h-12" />
            </div>
            <h3 class="text-2xl font-garamond font-semibold text-gray-900 mb-3">
              {{ service.title }}
            </h3>
            <p class="text-gray-600">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section> -->

    <!-- CTA Section -->
    <!-- <section
      class="py-20 bg-gradient-to-r from-blue-800 to-blue-900"
      data-aos="flip-left"
      data-aos-duration="3000"
    >
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h2 class="text-4xl font-garamond font-semibold text-white mb-6">
          Ready to Transform Your Infrastructure?
        </h2>
        <p class="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Let's work together to optimize your data center and secure your digital assets.
        </p>
        <RouterLink
          to="/contact"
          class="inline-block px-8 py-4 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition-colors"
        >
          Contact Us Today
        </RouterLink>
      </div>
    </section> -->

    <section class="py-8">
      <div>
        <!-- <p>
          Cybersecurity Services to Feature: A strong cybersecurity website should clearly showcase
          these core offerings:
        </p> -->

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
          <div
            class="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition"
            v-for="service in services"
            :key="service.category"
          >
            <h4
              class="text-lg font-semibold text-blue-700 mb-2 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-blue-900 hover:bg-clip-text hover:text-transparent hover:font-medium"
            >
              {{ service.category }}
            </h4>
            <p class="text-gray-700">{{ service.description }}</p>
          </div>
        </div>
      </div>

      <!-- <p>
        🧩 Website Features & Content Strategy To make the site both functional and persuasive:
        Clear Navigation: Use a sticky menu with sections like Services, Solutions, Resources,
        About, and Contact. Hero Section: Bold headline with a value proposition like “Protect Your
        Business from Evolving Threats.” Call-to-Action (CTA): Prominent buttons like “Request a
        Demo,” “Get a Free Assessment,” or “Start Trial.” Trust Signals: Display client logos,
        certifications (ISO, SOC), and testimonials. Educational Content: Include blogs,
        whitepapers, case studies, and webinars to show thought leadership. Live Chat or Chatbot:
        For instant support and lead capture. Security Badges: SSL, GDPR-compliant, and other trust
        indicators. Responsive Design: Optimized for mobile, tablet, and desktop. Fast Load Times:
        Speed matters for both UX and SEO.
      </p>

      <p class="py-4">
        🎨 Design Elements That Build Credibility Color Palette: Use blues, blacks, and whites to
        convey trust, professionalism, and security. Typography: Clean, modern fonts like Roboto or
        Open Sans for readability. Imagery: Use abstract tech visuals, secure lock icons, and team
        photos to humanize the brand. Animations: Subtle scroll effects or radar-style graphics to
        illustrate threat detection. 🔍 Examples for Inspiration You can explore these standout
        cybersecurity websites for ideas: CyberOptik’s Top 20 Cybersecurity Website Designs Amply’s
        Top 25 Cybersecurity Website Examples Tomorrow Web Design’s Cybersecurity Portfolio
      </p> -->
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  Database,
  Shield,
  Cloud,
  Settings,
  Users,
  Zap,
  CheckCircle,
  ArrowRight,
} from 'lucide-vue-next'

const mainServices = [
  {
    icon: Database,
    title: 'Data Center Infrastructure Management',
    description: 'Comprehensive DCIM solutions for optimal data center performance and efficiency.',
    features: [
      'Asset Management',
      'Capacity Planning',
      'Power Management',
      'Environmental Monitoring',
    ],
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Shield,
    title: 'Cybersecurity Solutions',
    description: 'Advanced security protocols to protect your critical data and infrastructure.',
    features: ['Threat Detection', 'Security Audits', 'Compliance Management', 'Incident Response'],
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Cloud,
    title: 'Cloud Integration Services',
    description: 'Seamless cloud migration and hybrid infrastructure management solutions.',
    features: [
      'Cloud Migration',
      'Hybrid Solutions',
      'Multi-Cloud Management',
      'Cost Optimization',
    ],
    color: 'from-green-500 to-green-600',
  },
]

const additionalServices = [
  {
    icon: Settings,
    title: 'IT Consulting',
    description: 'Strategic technology guidance for digital transformation initiatives.',
  },
  {
    icon: Users,
    title: '24/7 Support',
    description: 'Round-the-clock expert support from certified professionals.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Continuous monitoring and optimization of your infrastructure.',
  },
]

const services = [
  {
    category: 'Threat Detection & Response',
    description: 'Real-time monitoring, incident response, and threat intelligence',
  },
  {
    category: 'Network Security',
    description: 'Firewalls, intrusion prevention systems (IPS), and secure VPNs',
  },
  {
    category: 'Endpoint Protection',
    description: 'Antivirus, anti-malware, and device control solutions',
  },
  {
    category: 'Cloud Security',
    description: 'Secure cloud configurations, access controls, and data encryption',
  },
  {
    category: 'Compliance & Auditing',
    description: 'GDPR, HIPAA, ISO 27001, SOC 2 compliance support',
  },
  {
    category: 'Penetration Testing',
    description: 'Ethical hacking to identify vulnerabilities',
  },
  {
    category: 'Security Awareness Training',
    description: 'Employee education on phishing, social engineering, and safe practices',
  },
  {
    category: 'Identity & Access Management (IAM)',
    description: 'Multi-factor authentication, role-based access control',
  },
  {
    category: 'Data Loss Prevention (DLP)',
    description: 'Tools to prevent unauthorized data sharing or leaks',
  },
]
</script>

<!-- <table class="table-auto w-full border-collapse border border-gray-300 my-4">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-300 px-4 py-2 text-left">Service Category</th>
      <th class="border border-gray-300 px-4 py-2 text-left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-4 py-2">Threat Detection & Response</td>
      <td class="border border-gray-300 px-4 py-2">
        Real-time monitoring, incident response, and threat intelligence
      </td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 py-2">Network Security</td>
      <td class="border border-gray-300 px-4 py-2">
        Firewalls, intrusion prevention systems (IPS), and secure VPNs
      </td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 py-2">Endpoint Protection</td>
      <td class="border border-gray-300 px-4 py-2">
        Antivirus, anti-malware, and device control solutions
      </td>
    </tr>
</table> -->
