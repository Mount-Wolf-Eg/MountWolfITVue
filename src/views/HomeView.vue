<template>
  <div style="overflow: hidden !important; margin: 0 auto !important">
    <HeroSection :headSliders="headerSlider"></HeroSection>
    <ServicesHome
      id="services"
      :transiStart="trans"
      :serviceData="AllServices"
    ></ServicesHome>
    <serviceProcess
      id="serviceProc"
      :transiSt="procesTrans"
      :workerData="allWorkProcesses"
    ></serviceProcess>
    <AboutUs :aboutSliders="aboutSlider"></AboutUs>
    <OurProjects :projects="allProjects"></OurProjects>
    <ourProducts :products="allProducts"></ourProducts>
    <ContactMe :sectors="allSectors"></ContactMe>
    <OurClients :clients="allClients"></OurClients>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import HeroSection from "@/components/local/HomeSections/HeroSection.vue";
import ServicesHome from "@/components/local/HomeSections/ServicesHome.vue";
import serviceProcess from "@/components/local/HomeSections/serviceProcess.vue";
import AboutUs from "@/components/local/HomeSections/AboutUs.vue";
import OurProjects from "@/components/local/HomeSections/OurProjects.vue";
import ourProducts from "@/components/local/HomeSections/ourProducts.vue";
import ContactMe from "@/components/local/HomeSections/ContactMe.vue";
import OurClients from "@/components/local/HomeSections/OurClients.vue";
// store
import { useSlidersStore } from "@/stores/dataStore";
import { storeToRefs } from "pinia";
const {
  headerSlider,
  aboutSlider,
  servicesLeft,
  servicesRight,
  servicesBottom,
  allWorkProcesses,
  allProjects,
  allProducts,
  allClients,
  allSectors,
} = storeToRefs(useSlidersStore());
const trans = ref(false);
const procesTrans = ref(false);
const AllServices = ref({});
onMounted(async () => {
  await Promise.all([
    useSlidersStore().getAllSliders(),
    useSlidersStore().getAllSettings(),
    useSlidersStore().getAllProducts(),
    useSlidersStore().getAllProjects(),
    useSlidersStore().getAllContactSectors(),
  ]);

  AllServices.value = {
    left: servicesLeft.value.slice(-3),
    right: servicesRight.value.slice(-3),
    bottom: servicesBottom.value.slice(-4),
  };
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === "services") {
            trans.value = true;
          } else if (entry.target.id === "serviceProc") {
            procesTrans.value = true;
          }
        }
      });
    },
    {
      threshold: 0.25,
    }
  );
  const el = document.querySelector("#services");
  const el2 = document.querySelector("#serviceProc");
  observer.observe(el);
  observer.observe(el2);
});
</script>
