<template>
  <div class="section-layout text-center">
    <div class="style-1">services</div>
    <div style="display: flex; justify-content: space-around; margin: 9rem 0">
      <div
        style="width: fit-content"
        v-for="(item, i) in servicesItems"
        :key="i"
      >
        <div
          style="
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          "
        >
          <img
            :src="item.img"
            alt="service icon"
            style="width: 5.6rem; height: 5.6rem; margin-bottom: 4rem"
          />
          <div class="style-9">{{ item.title }}</div>
          <div class="style-5 my-3" v-for="(e, j) in item.items">{{ e }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const servicesItems = ref([
  {
    img: "/src/assets/media/Servises/Group 1969.png",
    title: "websites and platforms",
    items: [
      "Web Development",
      "Implementation & Deployment",
      "API Development",
      "System Integrations",
      "UX / UI Design",
    ],
  },
  {
    img: "/src/assets/media/Servises/Group 1968.png",
    title: "websites and platforms",
    items: [
      "Application Development",
      "Application Maintenance",
      "API Integrations",
      "UX/UI Design",
    ],
  },
  {
    img: "/src/assets/media/Servises/Group 1967.png",
    title: "websites and platforms",
    items: ["Design", "Development"],
  },
]);
</script>

<style lang="scss" scoped></style>
