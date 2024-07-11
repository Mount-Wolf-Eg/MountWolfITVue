<template>
  <div class="modal-box">
    <div
      style="width: 100%; height: 100%; z-index: 1"
      @click="console.log('hiiii')"
    >
      <div class="modal-container">
        <div class="header">
          <div class="modal-title">Mount Wolf</div>
          <button class="close" @click="closeModalView">X</button>
        </div>
        <div class="modal-body">
          <div class="p-3 text">{{ data }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

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
    background-image: url("/src/assets/media/Images/download(1).png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: all 0.2s ease-in-out;
    color: white;
    font-size: 14px;
    background-color: white;
    position: absolute;
    text-align: center;
    width: 80vw;
    opacity: 0;
    left: 10%;
    transform: translateX(-50%);
    min-height: 400px;
    border-radius: 12px;
    padding: 10px;
    transform: scale(0);
    .header {
      width: 100%;
      height: 30px;
      display: flex;
      justify-content: center;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
      .modal-title {
        font-size: 18px;
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
        font-size: 20px;
        text-align: center;
        line-height: 3rem;
        border-radius: 5px;
        background-color: transparent;
        &:hover {
          background-color: gray;
        }
      }
    }
  }
  .modal-body {
    color: white;
    .text {
      font-size: 16px;
      font-weight: 500;
    }
  }
}
</style>
