<template>
  <div
    class="d-flex flex-column justify-content-center align-items-center main-section"
    v-motion-slide-bottom
  >
    <p class="style-8">we are wolves</p>
    <p class="style-2" style="margin-bottom: 9rem">
      websites and platforms - mobile application - mobile games
    </p>
    <div class="wolf-box">
      <img
        src="/src/assets/media/Images/dire-wolf-beautiful-mythical-wolf-legendary-creature.png"
        alt="wolf image"
        style="width: 41.8rem; height: 61rem"
      />
      <img
        class="wolf-eye"
        src="/src/assets/media/Images/eye.png"
        alt="wolf eye"
        data-speed="0.005"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

let xVal = ref(0),
  yVal = ref(0);

let sec = ref(null);
let eye = ref(null);

onMounted(() => {
  eye.value = document.querySelector(".wolf-eye");
  sec.value = document.querySelector(".main-section");
});

window.addEventListener("mousemove", (e) => {
  xVal.value = e.clientX - window.innerWidth / 2;
  yVal.value = e.clientY - window.innerHeight / 2;
  let speedX = eye.value.dataset.speed;
  eye.value.style.transform = `translateX(${
    xVal.value * speedX
  }px) translateY(${yVal.value * speedX}px)`;
});
</script>

<style lang="scss" scoped>
.wolf-box {
  position: relative;
  overflow: hidden;
  .wolf-eye {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY();
  }
}
</style>
