<template>
  <div>
    <!-- nav start-->
    <NavBar v-if="route.name !== 'Not-found'" />
    <!-- nav end-->
    <main>
      <slot></slot>
    </main>
    <!-- footer start -->
    <FooterBar v-if="route.name !== 'Not-found'" />
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
