<template>
  <div
    class="service-sec section-layout p-0 d-flex flex-column align-items-center justify-content-between"
  >
    <div class="ser-bg-img w-100 h-100">
      <img
        src="/src/assets/media/Images/serBg.png"
        style="
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        "
        alt="service img"
      />
    </div>
    <div class="service-img d-flex flex-column justify-content-between">
      <div class="ser-title">SERVICES</div>

      <div class="row box-responsive m-0 p-0">
        <div
          class="service-list col-12 col-md-4 d-flex flex-column align-items-end justify-content-center"
          style="gap: 4rem"
        >
          <div
            class="serv-item left"
            v-for="(elL, i) in props.serviceData.left"
            :key="i"
          >
            <img
              :src="elL.image"
              alt="service image"
              style="width: 2.5rem; height: 2.5rem"
            />

            <p class="m-0 p-0">{{ elL.title }}</p>
          </div>
        </div>
        <div class="col-12 col-md-4 img-circle" style="z-index: 99">
          <div class="big-c"></div>
          <div class="small-c"></div>
          <img
            src="/src/assets/media/Servises/servicce 1.png"
            alt="service image"
            class="serv-image"
            style="
              width: 66.9rem;
              height: auto;
              object-fit: cover;
              object-position: center;
            "
          />
        </div>
        <div
          class="service-list col-12 col-md-4 d-flex flex-column align-items-start justify-content-center"
          style="gap: 4rem"
        >
          <div
            class="serv-item right"
            v-for="(elR, i) in props.serviceData.right"
            :key="i"
          >
            <img
              style="width: 2.5rem; height: 2.5rem"
              :src="elR.image"
              alt="service image"
            />

            <p class="m-0 p-0">{{ elR.title }}</p>
          </div>
        </div>
      </div>
      <div class="service-feat">
        <div class="w-75 w-md-50 mx-auto row">
          <div
            class="col-6 col-md-3 d-flex align-items-center gap-2 flex-column justify-content-center"
            v-for="(item, k) in props.serviceData.bottom"
            :key="k"
          >
            <img
              style="width: auto; height: 2.7rem"
              :src="item.image"
              alt="service image"
            />

            <p class="feat">{{ item.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";

const props = defineProps({
  transiStart: {
    type: Boolean,
    Required: false,
    default: false,
  },
  serviceData: {
    type: Object,
    Required: true,
    default: {},
  },
});

watch(
  () => props.transiStart,
  (newVal) => {
    if (newVal == true) {
      let el = document.querySelector(".img-circle");
      if (!el.classList.contains("slide-enter")) {
        el.classList.add("slide-enter");
      }

      setTimeout(() => {
        document.querySelectorAll(".serv-item.right").forEach((e) => {
          if (!e.classList.contains("fade-enter-right")) {
            e.classList.add("fade-enter-right");
          }
        });
        document.querySelectorAll(".serv-item.left").forEach((e) => {
          if (!e.classList.contains("fade-enter-left")) {
            e.classList.add("fade-enter-left");
          }
        });

        document.querySelectorAll(".service-feat").forEach((e) => {
          if (!e.classList.contains("slide-enter")) {
            e.classList.add("slide-enter");
          }
        });
      }, 500);
    }
  }
);
</script>

<style lang="scss" scoped>
.serv-image {
  filter: saturate(0);
  transition: all 0.2s ease-in-out;
  &:hover {
    filter: saturate(1);
  }
}
// animate each feat
@keyframes slideTo {
  0% {
    transform: translatey(100%);
    opacity: 0;
  }

  100% {
    transform: translatey(0);
    opacity: 1;
  }
}

.slide-enter {
  animation: slideTo 0.9s ease-in forwards;
}

.img-circle {
  opacity: 0;
  animation-fill-mode: forwards;
}
.service-feat {
  opacity: 0;
  animation-fill-mode: forwards;
}
//                             animate each feat
@keyframes slideIn {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.fade-enter-right {
  animation: fadeIn 1s ease-in;
}

.serv-item {
  z-index: 1 !important;
  opacity: 0;
  transform: translateX(-100%);
  animation-fill-mode: forwards;
  padding-right: 9rem !important;
  &.left:nth-child(2) {
    margin-right: 7rem;
  }
  &.left:nth-child(3) {
    margin-right: 15rem;
  }
  &.right:nth-child(2) {
    margin-left: 7rem;
  }
  &.right:nth-child(3) {
    margin-left: 15rem;
  }
}

.fade-enter-right:nth-child(1) {
  animation: slideIn 1s ease-in-out forwards;
  animation-delay: 0.2s;
}

.fade-enter-right:nth-child(2) {
  animation: slideIn 1s ease-in-out forwards;
  animation-delay: 0.6s;
}

.fade-enter-right:nth-child(3) {
  animation: slideIn 1s ease-in-out forwards;
  animation-delay: 1.1s;
}

.fade-enter-right:nth-child(4) {
  animation: slideIn 1s ease-in-out forwards;
  animation-delay: 1.4s;
}

.fade-enter-right:nth-child(5) {
  animation: slideIn 1s ease-in-out forwards;
  animation-delay: 1.7s;
}
.fade-enter-right:nth-child(6) {
  animation: slideIn 1s ease-in-out forwards;
  animation-delay: 2s;
}

// animate each feat
@keyframes slideInLeft {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.fade-enter-left {
  animation: slideInLeft 1s ease-in;
}

.fade-enter-left:nth-child(1) {
  animation: slideInLeft 1s ease-in-out forwards;
  animation-delay: 0.2s;
}

.fade-enter-left:nth-child(2) {
  animation: slideInLeft 1s ease-in-out forwards;
  animation-delay: 0.6s;
}

.fade-enter-left:nth-child(3) {
  animation: slideInLeft 1s ease-in-out forwards;
  animation-delay: 1.1s;
}

.fade-enter-left:nth-child(4) {
  animation: slideInLeft 1s ease-in-out forwards;
  animation-delay: 1.4s;
}

.fade-enter-left:nth-child(5) {
  animation: slideInLeft 1s ease-in-out forwards;
  animation-delay: 1.7s;
}
.fade-enter-left:nth-child(6) {
  animation: slideInLeft 1s ease-in-out forwards;
  animation-delay: 2s;
}
</style>
