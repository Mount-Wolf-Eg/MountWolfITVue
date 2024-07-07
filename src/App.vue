<script setup>
import { RouterLink, RouterView } from "vue-router";
import MainLayout from "@/components/global/MainLayout.vue";
</script>

<template>
  <MainLayout>
    <div class="content">
      <RouterView />
    </div>
  </MainLayout>
</template>

<style scoped></style>
