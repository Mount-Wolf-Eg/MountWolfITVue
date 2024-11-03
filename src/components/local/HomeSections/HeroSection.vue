<template>
  <div
    class="hero-sec d-flex flex-column justify-content-center align-items-center main-section m-0 p-0"
    style="position: relative"
    v-motion-slide-bottom
  >
    <swiper
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      class="w-100 h-100"
      :modules="modules"
      :pagination="{
        el: '.swiper-pagination',
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
      <swiper-slide v-for="(slide, i) in slides" :key="i" class="h-100">
        <div class="h-100 f-flex flex-column">
          <!-- loading placeholder -->
          <div
            style="background-color: #868e96"
            class="w-100 h-100 flex-r gap-3"
            v-if="!show"
          >
            <div class="spinner-grow text-dark" role="status"></div>
            <div class="spinner-grow text-dark" role="status"></div>
            <div class="spinner-grow text-dark" role="status"></div>
            <div class="spinner-grow text-dark" role="status"></div>
          </div>
          <!-- images -->

          <div class="question-card h-100" v-else>
            <img
              :src="slide.img"
              style="
                width: 100%;
                height: auto;
                object-fit: contain;
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
        <p class="style-2" style="margin-bottom: 3rem">let's hunt</p>
        <p class="style-10">
           The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters
        </p>
      </span>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
const modules = ref([Pagination, Navigation, Autoplay]);
const show = ref(false);
onMounted(() => {
  show.value = true;
});
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

.swiper-button-next,
.swiper-button-prev {
  width: 3.8rem;
  height: 3.8rem;
  &::after {
    content: "";
  }
}
.swiper-button-next {
  right: 20rem;
}
.swiper-button-prev {
  left: 20rem;
}
.swiper-pagination {
  left: 10rem !important;
  & * {
    width: 1.2rem;
    height: 1.2rem;
    background-color: white !important;
  }
}
.hero-sec {
  .swiper-horizontal
    > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,
  .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
    margin-bottom: 30rem;
    margin-left: 5rem;
  }
}

.hero-text {
  position: absolute;
  left: 50%;
  bottom: 10%;
  transform: translateX(-50%);
  z-index: 9999;
}
</style>
<!-- .carousel__pagination {
    position: absolute;
    top: 70%;
    flex-direction: column;
  } -->
