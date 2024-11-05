<template>
  <div>
    <HeroSection :headSliders="headerSlider"></HeroSection>
    <ServicesHome
      id="services"
      :transiStart="trans"
      :serviceData="AllServices"
    ></ServicesHome>
    <serviceProcess id="serviceProc" :transiSt="procesTrans"></serviceProcess>
    <AboutUs :aboutSliders="aboutSlider"></AboutUs>
    <!--   <OurProjects></OurProjects>
    <ourProducts></ourProducts>
    <ContactMe></ContactMe>
    <OurClients></OurClients> -->
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
import { useSlidersStore } from "@/stores/Sliders";
import { storeToRefs } from "pinia";
const {
  headerSlider,
  aboutSlider,
  servicesLeft,
  servicesRight,
  servicesBottom,
} = storeToRefs(useSlidersStore());
const trans = ref(false);
const procesTrans = ref(false);
const AllServices = ref({});
onMounted(async () => {
  await useSlidersStore().getAllSliders();
  AllServices.value = {
    left: servicesLeft.value,
    right: servicesRight.value,
    bottom: servicesBottom.value,
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
      threshold: 0.5,
    }
  );
  const el = document.querySelector("#services");
  const el2 = document.querySelector("#serviceProc");
  observer.observe(el);
  observer.observe(el2);
});
</script>
