<template>
  <div
    class="d-flex justify-content-center align-items-center flex-column"
    v-motion-slide-bottom
  >
    <div class="style-3" style="margin: 8rem 0 10rem">Projects</div>

    <div style="width: 80%">
      <carousel :items-to-show="3" :wrap-around="true" :transition="500">
        <slide v-for="(slide, i) in 15" :key="i">
          <ProjectCard></ProjectCard>
        </slide>

        <template #addons>
          <navigation class="custom-nav" />
          <pagination class="custom-pagination" />
        </template>
      </carousel>
    </div>
  </div>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import ProjectCard from "@/reusables/ProjectCard.vue";
</script>

<style lang="scss" scoped></style>
