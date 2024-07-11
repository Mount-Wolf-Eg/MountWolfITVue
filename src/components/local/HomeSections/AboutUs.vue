<template>
  <div class="section-layout">
    <div class="about-us">
      <div
        class="style-6"
        style="left: 0%; top: 15%"
        @mouseover="handleHover($event)"
      >
        Alpha Wolves Are Just Moms and Dads
      </div>
      <div
        class="style-6"
        style="left: 25%; top: 5%"
        @mouseover="handleHover($event)"
      >
        Wolves are highly intelligent
      </div>
      <div
        class="style-6"
        style="left: 42%; top: -10%"
        @mouseover="handleHover($event)"
      >
        Wolves are skilled communicators
      </div>
      <div
        class="style-6"
        style="left: 65%; top: 10%"
        @mouseover="handleHover($event)"
      >
        Wolves are family oriented
      </div>
      <div
        class="style-6"
        style="left: 85%; top: 20%"
        @mouseover="handleHover($event)"
      >
        Wolves are surprisingly diverse
      </div>
    </div>
    <PopupModal
      v-if="show"
      :modalBody="data"
      @closeModal="handleClose"
    ></PopupModal>
  </div>
</template>

<script setup>
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
</script>

<style lang="scss" scoped>
.about-us {
  background-image: url("/src/assets/media/Images/Group\ 1970.png");
  height: 101.188rem;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  .div {
    transition: all 0.3s ease-in;
  }
}
</style>
