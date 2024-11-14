<template>
  <div
    v-if="products.filter((e) => e.sticky == 1).length > 0"
    class="d-flex justify-content-center align-items-center flex-column"
    v-motion-slide-bottom
  >
    <div class="style-3 proj-title" style="margin: 8rem 0 10rem">Products</div>

    <div class="products-hero" style="width: 70vw; margin: 0 auto !important">
      <swiper
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :keyboard="{ enabled: true }"
        :slides-per-view="5"
        :breakpoints="breakpoints"
        class="w-100 h-100 py-2"
        :modules="modules"
        :space-between="30"
        :pagination="{
          el: '.swiper-pagination',
          dynamicBullets: true,
          clickable: true,
        }"
        :loop="true"
        :Autoplay="{
          delay: 1000,
          disableOnInteraction: true,
          waitForTransition: true,
        }"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        :preload-images="false"
        :Lazy="true"
      >
        <swiper-slide
          v-for="(slide, i) in [
            ...products.filter((e) => e.sticky == 1),
            ...products.filter((e) => e.sticky == 1),
          ]"
          :key="i"
          class="h-100 m-0 swiper-card mx-auto"
        >
          <ProjectCard class="mx-auto" :data="slide"></ProjectCard>
        </swiper-slide>
        <div class="swiper-button-next">
          <svg
            style="transform: scaleX(-1); font-weight: thin"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"
            />
          </svg>
        </div>
        <div class="swiper-button-prev">
          <svg
            style="font-weight: thin"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"
            />
          </svg>
        </div>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation, Autoplay } from "swiper";
const modules = ref([Pagination, Navigation, Autoplay]);
import ProjectCard from "@/reusables/ProjectCard.vue";

const props = defineProps({
  products: {
    type: Object,
    Required: true,
    default: {},
  },
});

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
  350: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
  773: {
    slidesPerView: 2,
    spaceBetween: 0,
  },
  900: {
    slidesPerView: 2,
    spaceBetween: 0,
  },
  1380: {
    slidesPerView: 2,
    spaceBetween: 0,
  },
  1700: {
    slidesPerView: 2,
    spaceBetween: 0,
  },
  1900: {
    slidesPerView: 2,
    spaceBetween: 0,
  },
};
</script>

<style lang="scss" scoped>
.swiper-button-next,
.swiper-button-prev {
  display: none;
  width: 3.8rem;
  height: 3.8rem;
  &::after {
    content: "";
  }
}
</style>
