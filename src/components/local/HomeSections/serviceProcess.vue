<template>
  <div class="service-process section-layout p-0">
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
    <div class="service-proc-img row">
      <div
        class="img-container col d-flex justify-content-center justify-content-md-end align-items-center"
        style="padding: 0 5rem !important"
      >
        <img
          class="serv-process-hover"
          src="/src/assets/media/Servises/Component 16.webp"
          alt="service image"
          style="
            max-width: 62.2rem;
            width: auto;
            height: auto;
            max-height: 46.7rem;
            object-fit: contain;
            object-position: center;
            z-index: 5;
          "
          loading="lazy"
        />
      </div>

      <div class="col service-proc-features">
        <p class="service-proc-title">Work Process</p>
        <div class="service-proc-feat" v-for="(el, i) in workerData" :key="i">
          {{ el }}
          <span
            class="d-block d-md-none ms-auto"
            style="color: var(--col-text)"
            >{{ i < 10 ? "0" + (i + 1) : i }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";

const props = defineProps({
  transiSt: {
    type: Boolean,
    Required: false,
    default: false,
  },
  workerData: {
    type: Array,
    Required: true,
    default: [],
  },
});

watch(
  () => props.transiSt,
  (newVal) => {
    if (newVal == true) {
      let el = document.querySelector(".service-proc-img");
      if (!el.classList.contains("slide-enter")) {
        el.classList.add("slide-enter");
      }

      document.querySelectorAll(".service-proc-feat").forEach((e) => {
        if (!e.classList.contains("fade-enter")) {
          e.classList.add("fade-enter");
        }
      });
    }
  }
);
</script>

<style lang="scss" scoped>
.serv-process-hover {
  filter: saturate(0);
  transition: all 0.2s ease-in-out;
  &:hover {
    filter: saturate(1);
  }
}

// animate each feat
@keyframes slideTo {
  from {
    transform: translatey(100%);
    opacity: 0;
  }
  to {
    transform: translatey(0);
    opacity: 1;
  }
}

.slide-enter {
  animation: slideTo 0.7s ease-in forwards;
}
.img-container {
  animation-fill-mode: forwards;
}
.service-proc-img {
  opacity: 0;
}
// animate each feat
@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.fade-enter {
  animation: fadeIn 1s ease-in;
}

.service-proc-feat {
  z-index: 1;
  opacity: 0;
  transform: translateX(-100%);
  animation-fill-mode: forwards;
}

.fade-enter:nth-child(1) {
  animation: slideIn 1s ease-in-out forwards;
  animation-delay: 0.2s;
}

.fade-enter:nth-child(2) {
  animation: slideIn 1s ease-in-out forwards;
  animation-delay: 0.6s;
}

.fade-enter:nth-child(3) {
  animation: slideIn 1s ease-in-out forwards;
  animation-delay: 1.1s;
}

.fade-enter:nth-child(4) {
  animation: slideIn 1s ease-in-out forwards;
  animation-delay: 1.4s;
}

.fade-enter:nth-child(5) {
  animation: slideIn 1s ease-in-out forwards;
  animation-delay: 1.7s;
}
.fade-enter:nth-child(6) {
  animation: slideIn 1s ease-in-out forwards;
  animation-delay: 2s;
}
</style>
