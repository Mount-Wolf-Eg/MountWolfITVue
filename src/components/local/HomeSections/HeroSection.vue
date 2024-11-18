<template>
  <div
    v-if="props.headSliders.length > 0"
    class="hero-sec d-flex flex-column justify-content-center align-items-center main-section"
    style="position: relative"
    v-motion-slide-bottom
  >
    <swiper
      class="w-100 h-100"
      :modules="modules"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: true,
        waitForTransition: true,
      }"
      :pagination="{
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
      }"
      :loop="true"
      :slides-per-view="1"
      :space-between="10"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      :preload-images="false"
      :Lazy="true"
    >
      <swiper-slide
        v-for="(slide, i) in props.headSliders"
        :key="i"
        class="h-100"
      >
        <div class="h-100 f-flex flex-column">
          <!-- loading placeholder -->
          <div
            style="background-color: #868e96"
            class="w-100 h-100 flex-r gap-3"
            v-if="!show"
          >
            <div class="spinner-grow text-dark" role="status"></div>
          </div>
          <!-- images -->

          <div class="question-card h-100" v-else>
            <img
              :src="slide.image"
              style="
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
              "
              alt="slider image"
            />
          </div>
        </div>
      </swiper-slide>
      <div
        class="swiper-button-next"
        style="z-index: 1"
        v-if="props.headSliders.length != 0"
      >
        <svg
          style="width: 3.8rem; height: 3.8rem"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33.7071 19.7071C34.0976 19.3166 34.0976 18.6834 33.7071 18.2929L27.3431 11.9289C26.9526 11.5384 26.3195 11.5384 25.9289 11.9289C25.5384 12.3195 25.5384 12.9526 25.9289 13.3431L31.5858 19L25.9289 24.6569C25.5384 25.0474 25.5384 25.6805 25.9289 26.0711C26.3195 26.4616 26.9526 26.4616 27.3431 26.0711L33.7071 19.7071ZM5 20L33 20L33 18L5 18L5 20Z"
            fill="white"
          />
        </svg>
      </div>

      <div class="swiper-button-prev" v-if="props.headSliders.length != 0">
        <svg
          style="width: 3.8rem; height: 3.8rem"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071L10.6569 26.0711C11.0474 26.4616 11.6805 26.4616 12.0711 26.0711C12.4616 25.6805 12.4616 25.0474 12.0711 24.6569L6.41421 19L12.0711 13.3431C12.4616 12.9526 12.4616 12.3195 12.0711 11.9289C11.6805 11.5384 11.0474 11.5384 10.6569 11.9289L4.29289 18.2929ZM33 18L5 18L5 20L33 20L33 18Z"
            fill="white"
          />
        </svg>
      </div>
      <div class="swiper-pagination"></div>
    </swiper>
    <div class="hero-text">
      <span
        class="d-flex justify-content-center align-items-center flex-column w-100"
      >
        <p class="hero-text-tilte" style="margin-bottom: 3rem">let's hunt</p>
        <p class="hero-text-body">
          Every brand is a lone wolf, powerful and ready to thrive. Mount Wolf
          builds custom software solutions, each crafted with the focus and
          resilience of the wild. Join us as we bring your brand to life and
          guide it to claim its ground.
        </p>
      </span>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation, Autoplay } from "swiper";
const modules = ref([Pagination, Navigation, Autoplay]);
import { useSlidersStore } from "@/stores/dataStore";
import { storeToRefs } from "pinia";
const { headerSlider } = storeToRefs(useSlidersStore());
const show = ref(false);

const props = defineProps({
  headSliders: {
    type: Object,
    Required: true,
    default: {},
  },
});

watch(
  () => props.headSliders,
  (newVal) => {
    if (newVal.length > 0) {
      show.value = true;
    }
  }
);
</script>

<style lang="scss" scoped>
.swiper-pagination {
  left: 11% !important;
  top: 50%;
  height: 45px !important;
  transform: rotate(90deg) !important;
  & * {
    background-color: white;
    width: 1rem;
    height: 1rem;
  }
}
</style>
