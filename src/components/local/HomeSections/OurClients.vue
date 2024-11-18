<template>
  <div style="margin-bottom: 200rem; width: 80%; margin: 0 auto">
    <div class="client-slid">
      <div class="slide-title thin-label text-center">
        The spoils of our hunting
      </div>

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
          v-for="(slide, i) in clients"
          :key="i"
          class="h-100 my-auto"
        >
          <a :href="slide.url" target="_blank">
            <img
              class="client-lg"
              :src="slide.image"
              alt="client image"
              style="
                width: 100%;
                height: auto;
                object-fit: contain;
                object-position: center;
              "
            />
          </a>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation, Autoplay } from "swiper";
const modules = ref([Pagination, Navigation, Autoplay]);

const breakpoints = {
  0: {
    slidesPerView: 3.5,
    spaceBetween: 30,
  },
  330: {
    slidesPerView: 4,
    spaceBetween: 30,
  },
  575: {
    slidesPerView: 8,
    spaceBetween: 30,
  },
  1299: {
    slidesPerView: 8,
    spaceBetween: 30,
  },
};

const props = defineProps({
  clients: {
    type: Object,
    required: true,
    default: {},
  },
});
</script>

<style lang="scss" scoped>
.feat {
  margin: 10rem;
  span {
    color: var(--col-second);
    font-weight: bold;
    font-size: 2.4rem;
    line-height: 2.9rem;
  }
}

.client-slid {
  margin-bottom: 10rem;
  .slide-title {
    margin: 20rem 0 8rem;
  }
}

.client-lg {
  filter: saturate(0);
  transition: all 0.2s ease-in-out;
  &:hover {
    filter: saturate(1);
  }
}
</style>
