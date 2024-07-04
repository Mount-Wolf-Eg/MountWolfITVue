<template>
  <div class="style-7">
    <!-- style="width: 15%; height: 100%; color: #9a9a9a; font-size: 1.8rem" -->
    <router-link class="nav-link" active-class="active" :to="{ name: 'home' }"
      >Home</router-link
    >
    <router-link
      class="nav-link"
      active-class="active"
      :to="{ name: 'services' }"
    >
      Services <
    </router-link>
    <router-link
      class="nav-link"
      active-class="active"
      :to="{ name: 'projects' }"
      >Projects</router-link
    >
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
