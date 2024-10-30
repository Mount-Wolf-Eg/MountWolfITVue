<template>
  <div class="footer">
    <div class="row col-12">
      <div class="copy-right text-center">
        <p class="foot-item">By Mount Wolf</p>
      </div>
      <!-- <div class="location col">
        <p class="foot-item">Location</p>
        <p class="foot-item">Address: 1st Settlement, New Cairo, Egypt</p>
      </div>

      <div class="contacts col">
        <p class="foot-item">E-mail</p>
        <a class="foot-item" href="mailto:info@mount-wolf.com"
          >info@mount-wolf.com</a
        >
      </div>

      <div class="social col">
        <SocialIcon></SocialIcon>
      </div>

      <div class="copy-right col">
        <p class="foot-item">
          © 2024, MOUNT WOLF | Privacy Policy | Terms of Use | Cookie Policy
        </p>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import SocialIcon from "../local/headerComponent/SocialIcon.vue";
</script>

<style lang="scss" scoped>
.foot-item {
  font-family: var(--ft-roboto);
  font-size: var(--fs-18);
  font-weight: 700;
  font-weight: var(--line-s-24);
  color: var(--col-second);
}
</style>
