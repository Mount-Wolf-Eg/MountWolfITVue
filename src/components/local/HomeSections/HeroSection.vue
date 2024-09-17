<template>
  <div
    class="d-flex flex-column justify-content-center align-items-center main-section"
    v-motion-slide-bottom
  >
    <div class="wolf-box">
      <img
        src="/src/assets/media/Images/HeaderHero1.jpg"
        style="width: 100%"
        alt=""
      />
      <span
        style="margin-top: -7rem"
        class="d-flex justify-content-center align-items-center flex-column"
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
</script>

<style lang="scss" scoped>
.wolf-box {
  img {
    mix-blend-mode: screen;
  }
}
</style>
