<template>
  <div class="project-card">
    <div>
      <img class="card-img" :src="data.image" alt="" />
      <div class="card-content" style="z-index: 9999">{{ data.name }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const show = ref(false);
const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: {},
  },
});
</script>

<style lang="scss" scoped></style>
