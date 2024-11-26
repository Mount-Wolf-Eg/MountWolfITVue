<template>
  <div class="d-flex flex-column align-items-center text-center">
    <router-link to="/">
      <img
        class="brand-logo"
        :src="props.logSrc"
        style="
          height: 6.2rem;
          width: auto;
          object-fit: contain;
          object-position: center;
        "
        loading="lazy"
        alt="brand logo"
      />
    </router-link>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

const props = defineProps({
  logSrc: {
    type: String,
    Required: true,
    default: "",
  },
});
</script>

<style lang="scss" scoped></style>
