<template>
  <div>
    <div class="about-us w-100 h-100" v-motion-slide-bottom>
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
        <swiper-slide v-for="(slide, i) in slides" :key="i" class="my-auto">
          <div class="question-card h-100 mx-auto">
            <div style="position: relative">
              <img :src="slide.img" style="width: 100%" alt="slide image" />
              <div :class="`${slide.styl}`" style="position: absolute">
                {{ slide.title }}
              </div>
            </div>
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
    <PopupModal
      v-if="show"
      :modalBody="data"
      @closeModal="handleClose"
    ></PopupModal>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
const modules = ref([Pagination, Navigation, Autoplay]);
import PopupModal from "@/reusables/PopupModal.vue";
import { ref } from "vue";
const show = ref(false);
const data = ref("");
const handleHover = (e) => {
  data.value = e.target.innerHTML;
  show.value = true;
};
const handleClose = () => {
  setTimeout(() => {}, 200);
  show.value = false;
};
const slides = ref([
  {
    img: `/src/assets/media/Images/about1.png`,
    title: "WE ARE WOLVES",
    styl: "slide-1",
  },
  {
    img: `/src/assets/media/Images/about2.png`,
    title: "WOLVES ARE SURPRISINGLY DIVERSE",
    styl: "slide-2",
  },
  {
    img: `/src/assets/media/Images/about3.png`,
    title: "WOLVES ARE HIGHLY INTELLIGENT",
    styl: "slide-3",
  },
  {
    img: `/src/assets/media/Images/about4.jpg`,
    title: "WOLVES ARE FAMILY ORIENTED",
    styl: "slide-4",
  },
  {
    img: `/src/assets/media/Images/about5.jpg`,
    title: "WOLVES ARE SKILLED COMMUNICATORS",
    styl: "slide-4",
  },
]);
</script>

<style lang="scss" scoped>
// .about-us {
//   height: 101.188rem;
//   width: 100%;
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: contain;
//   position: relative;
// }

.slide-1 {
  font-family: var(--ft-roboto);
  font-weight: 100;
  font-size: 21.1rem;
  line-height: 24.854rem;
  color: #2e2e2e;
  left: 0;
  top: 5%;
  width: 100%;
  text-align: center;
}

.slide-2 {
  font-family: var(--ft-roboto);
  font-weight: 300;
  font-size: 3.5rem;
  line-height: 5rem;
  color: var(--col-second);
  left: 38%;
  top: 35%;
  transform: translateX(-50%);
  text-align: start;
  width: 25rem;
}

.slide-3 {
  font-family: var(--ft-roboto);
  font-weight: 300;
  font-size: 3.5rem;
  line-height: 5rem;
  color: var(--col-blk);
  left: 40%;
  top: 45%;
  text-align: center;
  width: 25rem;
}

.slide-4 {
  font-family: var(--ft-roboto);
  font-weight: 300;
  font-size: 3.5rem;
  line-height: 5rem;
  color: var(--col-white);
  left: 18%;
  top: 30%;
  text-align: start;
  width: 25rem;
}

// swiper controls
.about-us {
  .swiper-button-next,
  .swiper-button-prev {
    margin: 0 20rem;
    width: 10rem;
    height: 10rem;

    &::after {
      font-size: 0;
    }
  }
}

.swiper-pagination-bullets {
  bottom: 25%;
  & * {
    background-color: var(--col-white) !important;
    width: 1.5rem;
    height: 0.5rem;
    border-radius: 0.2rem;
  }
}

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
