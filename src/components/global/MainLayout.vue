<template>
  <div
    style="min-height: 100vh"
    class="d-flex flex-column justify-content-start"
  >
    <!-- nav start-->
    <NavBar
      style="
        background-color: var(--col-bg);
        z-index: 9999;
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
      "
      class="mx-auto"
      v-if="route.name !== 'Not-found'"
    />
    <!-- nav end-->
    <main style="flex-grow: 1">
      <slot></slot>
    </main>
    <!-- footer start -->
    <!-- <FooterBar v-if="route.name !== 'Not-found'" /> -->
    <!-- footer end -->
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import NavBar from "./NavBar.vue";
import FooterBar from "./FooterBar.vue";
const route = useRoute();
</script>

<style lang="scss" scoped></style>
