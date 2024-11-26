<template>
  <div class="modal-box">
    <div style="width: 100%; height: 100%; z-index: 1">
      <div class="modal-container">
        <div class="header">
          <div class="modal-title">Mount Wolf</div>
          <button class="close" @click="closeModalView">X</button>
        </div>

        <div class="modal-body d-flex">
          <div class="pop-bg w-25">
            <img
              src="../assets/media/Images/dire-wolf-beautiful-mythical-wolf-legendary-creature.png"
              alt="wolf image"
              style="height: 100%; padding: 0; margin: 0; width: 30rem"
              loading="lazy"
            />
          </div>
          <div class="p-3 text w-75">{{ data }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- <PopupModal
      v-if="show"
      :modalBody="data"
      @closeModal="handleClose"
    ></PopupModal> -->
<script setup>
import { onMounted, watch, ref } from "vue";

const emits = defineEmits("closeModal");
const props = defineProps(["modalBody"]);
const data = ref("");

onMounted(() => {
  const el = document.querySelector(".modal-container");
  window.scrollTo(0, window.innerHeight / 2 + 200);
  el.style.top = `${window.innerHeight + 100}px`;
  el.style.opacity = 1;
  el.style.transform = "scale(1)";
  el.style.width = "80vw";
  el.style.minHeight = "450px";

  data.value = props.modalBody;
});

const closeModalView = () => {
  const el = document.querySelector(".modal-container");
  el.style.opacity = 0;
  setTimeout(() => {
    emits("closeModal");
  }, 200);
};
</script>

<style lang="scss" scoped>
.modal-box {
  background-color: rgba(49, 49, 49, 0.397) !important;
  position: absolute;
  color: white !important;
  left: 0;
  top: 0;
  background-color: rgba(27, 27, 27, 0.719);
  height: 100%;
  width: 100vw;
  .modal-container {
    background-color: #4c4c4c !important;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: all 0.3s ease-in-out;
    color: white;
    font-size: 1.4rem;
    background-color: white;
    position: absolute;
    text-align: center;
    width: 0;
    opacity: 0;
    left: 10%;
    transform: translateX(-50%);
    height: 0;
    border-radius: 1.2rem;
    padding: 1rem;
    transform: scale(0);
    .header {
      width: 100%;
      height: 3rem;
      display: flex;
      justify-content: center;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
      .modal-title {
        font-size: 1.8rem;
        color: white;
        font-weight: bold;
        margin-left: auto;
      }
      .close {
        margin-left: auto;
        width: 4rem;
        height: 3rem;
        border: none;
        color: white;
        font-size: 2rem;
        text-align: center;
        line-height: 3rem;
        border-radius: 5rem;
        background-color: transparent;
        &:hover {
          background-color: gray;
        }
      }
    }
  }
  .modal-body {
    color: white;
    height: 100% !important;
    text-align: start;

    .text {
      font-size: 1.6rem;
      font-weight: 500;
    }
  }
}
</style>
