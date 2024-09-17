<template>
  <div
    class="section-layout d-flex flex-column justify-content-center align-items-center main-section"
    v-motion-slide-bottom
  >
    <div class="wolf-box">
      <div>
        <carousel :items-to-show="1">
          <slide v-for="(slide, i) in slides" :key="i">
            <img :src="slide.img" style="width: 100%" alt="" />
          </slide>

          <template #addons>
            <navigation class="custom-nav" />
            <pagination class="custom-pagination" />
          </template>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const slides = ref([
  { img: `/src/assets/media/Images/HeaderHero1.jpg` },
  { img: `/src/assets/media/Images/HeaderHero1.jpg` },
  { img: `/src/assets/media/Images/HeaderHero1.jpg` },
  { img: `/src/assets/media/Images/HeaderHero1.jpg` },
]);
</script>

<style lang="scss" scoped>
.wolf-box {
  img {
    mix-blend-mode: screen;
  }
}

.carousel {
  position: relative;
  .carousel__pagination {
    position: absolute;
    top: 70%;
    flex-direction: column;
  }
}
</style>
