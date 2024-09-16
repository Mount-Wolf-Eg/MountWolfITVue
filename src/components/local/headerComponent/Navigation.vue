<template>
  <div class="style-7 d-flex gap-5 w-auto">
    <router-link class="nav-link" active-class="active" :to="{ name: 'home' }"
      >Home</router-link
    >

    <router-link
      class="nav-link"
      active-class="active"
      :to="{ name: 'work-process' }"
    >
      Work Process
    </router-link>
    <router-link
      class="nav-link"
      active-class="active"
      :to="{ name: 'projects' }"
    >
      Projects
    </router-link>
    <router-link
      class="nav-link"
      active-class="active"
      :to="{ name: 'products' }"
    >
      Products
    </router-link>
    <router-link
      class="nav-link"
      active-class="active"
      :to="{ name: 'contact-us' }"
    >
      Contact us
    </router-link>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
