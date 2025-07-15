<template>
  <div class="max-w-7xl mx-auto">
    <div
      class="my-12 text-4xl font-garamond font-semibold bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent"
    >
      Our Services
    </div>

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
              class="text-lg font-semibold text-blue-700 mb-2 hover:text-xl hover:bg-gradient-to-r hover:from-yellow-500 hover:to-blue-900 hover:bg-clip-text hover:text-transparent hover:font-medium transition-all"
            >
              {{ service.category }}
            </h4>
            <p class="text-gray-700">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
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
