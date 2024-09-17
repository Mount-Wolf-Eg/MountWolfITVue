<template>
  <div
    class="layout nav-bar pb-4"
    style="display: flex; justify-content: space-between"
  >
    <NavTitle></NavTitle>
    <Navigation></Navigation>
    <SocialIcon></SocialIcon>
  </div>
</template>

<script setup>
import NavTitle from "@/components/local/headerComponent/NavTitle.vue";
import SocialIcon from "../local/headerComponent/SocialIcon.vue";
import Navigation from "../local/headerComponent/Navigation.vue";
</script>

<style lang="scss" scoped></style>
