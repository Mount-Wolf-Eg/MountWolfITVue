<template>
  <div
    class="d-flex justify-content-center align-items-center flex-column"
    v-motion-slide-bottom
  >
    <div class="style-3" style="margin: 8rem 0 10rem">PROJECTS</div>

    <div style="width: 80%">
      <swiper
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        class="w-100 h-100 py-2"
        :modules="modules"
        :pagination="{
          el: '.swiper-pagination',
          dynamicBullets: true,
          clickable: true,
        }"
        :loop="true"
        :breakpoints="breakpoints"
        :Autoplay="{
          delay: 1000,
          disableOnInteraction: true,
          waitForTransition: true,
        }"
        :space-between="10"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        :preload-images="false"
        :Lazy="true"
      >
        <swiper-slide
          v-for="(slide, i) in slides"
          :key="i"
          class="h-100 m-0 swiper-card"
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
import { Pagination, Navigation, Autoplay } from "swiper/modules";
const modules = ref([Pagination, Navigation, Autoplay]);
import ProjectCard from "@/reusables/ProjectCard.vue";
const slides = ref([
  "/src/assets/media/Images/Untitled-1-02.jpg",
  "/src/assets/media/Images/Untitled-1-03.jpg",
  "/src/assets/media/Images/Untitled-1-04.jpg",
  "/src/assets/media/Images/Untitled-1-05.jpg",
  "/src/assets/media/Images/Untitled-1-02.jpg",
  "/src/assets/media/Images/Untitled-1-03.jpg",
  "/src/assets/media/Images/Untitled-1-04.jpg",
  "/src/assets/media/Images/Untitled-1-05.jpg",
]);
const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
  350: {
    slidesPerView: 1.4,
    spaceBetween: 0,
  },
  400: {
    slidesPerView: 1.5,
    spaceBetween: 0,
  },
  500: {
    slidesPerView: 1.5,
    spaceBetween: 20,
  },
  650: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  800: {
    slidesPerView: 2.5,
    spaceBetween: 20,
  },
  950: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1190: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1400: {
    slidesPerView: 2.5,
    spaceBetween: 20,
  },
  1490: {
    slidesPerView: 2.8,
    spaceBetween: 20,
  },
  1600: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1700: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1800: {
    slidesPerView: 5,
    spaceBetween: 20,
  },
};
</script>

<style lang="scss" scoped>
.swiper-button-next,
.swiper-button-prev {
  width: 3.8rem;
  height: 3.8rem;
  &::after {
    content: "";
  }
}

.swiper {
  padding: 0 5rem;
}
.swiper-card {
  border-radius: 1.2rem;
  overflow: hidden !important;
}
</style>
