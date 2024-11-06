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
        disableOnInteraction: false,
      }"
      :Autoplay="{
        delay: 1000,
        disableOnInteraction: true,
        waitForTransition: true,
      }"
      :pagination="{
        el: '.swiper-pagination',
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
      <div class="swiper-button-next" style="z-index: 1">
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
      <div class="swiper-pagination" style="transform: rotate(90deg)"></div>
    </swiper>
    <div class="hero-text">
      <span
        class="d-flex justify-content-center align-items-center flex-column w-100"
      >
        <p class="hero-text-tilte" style="margin-bottom: 3rem">let's hunt</p>
        <p class="hero-text-body">
           The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters
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

<style lang="scss" scoped></style>
