<template>
  <div>
    <!-- nav start-->
    <NavBar />
    <!-- nav end-->
    <main>
      <slot></slot>
    </main>
    <!-- footer start -->
    <FooterBar></FooterBar>
    <!-- footer end -->
  </div>
</template>

<script setup>
import NavBar from "./NavBar.vue";
import FooterBar from "./FooterBar.vue";
</script>

<style lang="scss" scoped></style>
