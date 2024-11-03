<template>
  <div>
    <HeroSection></HeroSection>
    <ServicesHome></ServicesHome>
    <serviceProcess></serviceProcess>
    <AboutUs></AboutUs>
    <OurProjects></OurProjects>
    <ContactMe></ContactMe>
    <OurClients></OurClients>
  </div>
</template>
<script setup>
import HeroSection from "@/components/local/HomeSections/HeroSection.vue";
import ServicesHome from "@/components/local/HomeSections/ServicesHome.vue";
import serviceProcess from "@/components/local/HomeSections/serviceProcess.vue";
import AboutUs from "@/components/local/HomeSections/AboutUs.vue";
import OurProjects from "@/components/local/HomeSections/OurProjects.vue";
import ContactMe from "@/components/local/HomeSections/ContactMe.vue";
import OurClients from "@/components/local/HomeSections/OurClients.vue";
</script>
