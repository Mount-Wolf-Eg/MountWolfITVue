<template>
  <div class="about-us">
    <div class="w-100 h-100" v-motion-slide-bottom>
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
        :slides-per-view="1"
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
          v-for="(slide, i) in aboutSliders"
          :key="i"
          class="my-auto"
        >
          <div class="question-card h-100 w-100 mx-auto">
            <div
              style="background-color: #868e96"
              class="w-100 h-100 flex-r gap-3"
              v-if="!show"
            >
              <div class="spinner-grow text-dark" role="status"></div>
            </div>
            <img
              v-else
              :src="slide.image"
              style="
                width: 100%;
                max-height: 100vh;
                height: auto;
                object-fit: cover;
                object-position: center;
              "
              alt="slider image"
            />
          </div>
        </swiper-slide>
        <div class="swiper-button-next">
          <svg
            class="arrow1"
            fill="#fff"
            style="height: 5rem; width: 5rem"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
            />
          </svg>
          <svg
            class="arrow2"
            fill="#fff"
            style="height: 5rem; width: 5rem"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
            />
          </svg>
          <svg
            class="arrow3"
            fill="#fff"
            style="height: 5rem; width: 5rem"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
            />
          </svg>
        </div>
        <div class="swiper-button-prev" style="transform: scaleX(-1)">
          <svg
            class="arrow1"
            fill="#fff"
            style="height: 5rem; width: 5rem"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
            />
          </svg>
          <svg
            class="arrow2"
            fill="#fff"
            style="height: 5rem; width: 5rem"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
            />
          </svg>
          <svg
            class="arrow3"
            fill="#fff"
            style="height: 5rem; width: 5rem"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
            />
          </svg>
        </div>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation, Autoplay } from "swiper";
const modules = ref([Pagination, Navigation, Autoplay]);
import { ref, watch } from "vue";

const show = ref(false);
const props = defineProps({
  aboutSliders: {
    type: Object,
    Required: true,
    default: {},
  },
});

watch(
  () => props.aboutSliders,
  (newVal) => {
    if (newVal.length > 0) {
      show.value = true;
    }
  }
);
</script>

<style lang="scss" scoped>
// slider buttons
.arrow1 {
  animation: moveArrow1 0.8s linear infinite;
}

.arrow2 {
  animation: moveArrow2 0.8s linear infinite;
}

.arrow3 {
  animation: moveArrow3 0.8s linear infinite;
}

@keyframes moveArrow1 {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(10px);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes moveArrow2 {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(15px);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes moveArrow3 {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(20px);
  }

  100% {
    transform: translateX(0);
  }
}
</style>
