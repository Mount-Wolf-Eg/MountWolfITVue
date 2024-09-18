<template>
  <div>
    <div class="about-us w-100" v-motion-slide-bottom>
      <carousel :items-to-show="1" :wrap-around="true" :transition="500">
        <slide v-for="(slide, i) in slides" :key="i">
          <div style="position: relative">
            <img :src="slide.img" style="width: 100%" alt="slide image" />
            <div :class="`${slide.styl}`" style="position: absolute">
              {{ slide.title }}
            </div>
          </div>
        </slide>

        <template #addons>
          <navigation class="custom-nav" />
          <pagination class="custom-pagination" />
        </template>
      </carousel>
    </div>
    <PopupModal
      v-if="show"
      :modalBody="data"
      @closeModal="handleClose"
    ></PopupModal>
  </div>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
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

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
  background-color: yellow !important;
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>
