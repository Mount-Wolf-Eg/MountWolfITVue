<template>
  <div>
    <div class="about-us w-100" v-motion-slide-bottom>
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
    styl: "",
  },
  {
    img: `/src/assets/media/Images/about2.png`,
    title: "WOLVES ARE SURPRISINGLY DIVERSE",
    styl: "",
  },
  {
    img: `/src/assets/media/Images/about3.png`,
    title: "WOLVES ARE HIGHLY INTELLIGENT",
    styl: "",
  },
  {
    img: `/src/assets/media/Images/about4.jpg`,
    title: "WOLVES ARE FAMILY ORIENTED",
    styl: "",
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
</style>
