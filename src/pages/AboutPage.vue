<template>
  <div class="max-w-7xl mx-auto font-nunito text-gray-600">
    <h1
      class="my-12 text-4xl font-garamond font-semibold bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent"
    >
      About Us
    </h1>

    <section class="my-20 md:flex md:items-center md:gap-12">
      <div class="w-full h-[20rem] md:w-[20rem] md:h-[20rem] shrink-0 mb-2">
        <img
          src="../assets/hero-bg.jpg"
          alt="Cassius Lawson"
          class="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div>
        <p class="text-3xl font-semibold font-garamond">Cassius Lawson</p>
        <p class="mb-6 text-gray-400">Founder</p>
        <p>
          Cassius Lawson is a Cybersecurity Technician with experiences as a Certificate Authority
          (CA) of the Secure Sockets Layer (SSL) for the PKI System (Public Key Infrastructure). His
          experience also include Active Directory (AD), SCCM, MaaS360, and Data Center work.
        </p>
      </div>
    </section>

    <section class="my-20 md:flex md:items-center md:gap-12">
      <div class="w-full h-[20rem] md:w-[20rem] md:h-[20rem] shrink-0 mb-2">
        <img
          src="../assets/hero-bg.jpg"
          alt="Khalid Safee"
          class="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div>
        <p class="text-3xl font-semibold font-garamond">Khalid</p>
        <p class="mb-6 text-gray-400">Founder</p>
        <p>
          Khalid Safee is qualified to manage, plan, and put into place IT network infrastructure,
          optimization & footprint, datacenter rack refresh and systems integration, development,
          maintenance, and services management. Khalid has experience dealing with IT infrastructure
          in the datacenter, such as optimization and footprint and decommissioning IT equipment in
          a DC (extensive usage of DCIM, CMDB, ITSM, ITIL, the Federal Office for Information
          Security, common criteria (CC), protection profile, and security target (ST). Jira
          Confluence, ServiceNow, Remedy, Carla, and FNT Asset Management software) and working with
          the BMC Team from scratch, and Khalid is familiar with networks and systems from companies
          like Cisco, HP, SAN, Oracle, Dell, and EMC.
        </p>
      </div>
    </section>

    <!-- Our Values -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2
            class="text-4xl font-garamond font-semibold bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent mb-4"
          >
            Our Values
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we do.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center p-6 shadow-sm hover:shadow-lg transition-all duration-300">
            <div
              class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Users class="w-8 h-8 text-blue-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
            <p
              class="text-gray-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-blue-900 hover:bg-clip-text hover:text-transparent hover:font-medium"
            >
              We strive for excellence in every aspect of our work, delivering the highest quality
              solutions to our clients.
            </p>
          </div>

          <div class="text-center p-6 shadow-sm hover:shadow-lg transition-all duration-300">
            <div
              class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Shield class="w-8 h-8 text-blue-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
            <p
              class="text-gray-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-blue-900 hover:bg-clip-text hover:text-transparent hover:font-medium"
            >
              We conduct our business with honesty, transparency, and a strong commitment to ethical
              practices.
            </p>
          </div>

          <div class="text-center p-6 shadow-sm hover:shadow-lg transition-all duration-300">
            <div
              class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Zap class="w-8 h-8 text-blue-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
            <p
              class="text-gray-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-blue-900 hover:bg-clip-text hover:text-transparent hover:font-medium"
            >
              We embrace innovation and continuously seek new ways to improve our services and
              solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Users, Shield, Zap } from 'lucide-vue-next'
</script>
