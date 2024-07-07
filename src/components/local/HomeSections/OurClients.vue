<template>
  <div class="section-layout text-center">
    <div class="style-1">our clients</div>
    <div class="clients w-75 mx-auto my-5">
      <div class="test"></div>
      <div class="test"></div>
      <div class="test"></div>
      <div class="test"></div>
    </div>
    <div class="clients w-75 mx-auto my-5">
      <div class="test"></div>
      <div class="test"></div>
      <div class="test"></div>
      <div class="test"></div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.clients {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.test {
  margin: 30px;
  width: 10rem;
  height: 10rem;
  background-color: gray;
  border-radius: 50%;
}
</style>
