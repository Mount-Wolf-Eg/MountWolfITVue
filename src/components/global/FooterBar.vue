<template>
  <div class="section-layout" style="display: flex">
    <div
      style="
        width: 60%;
        display: flex;
        justify-content: space-around;
        align-items: center;
      "
    >
      <div class="location">
        <p class="style-9">location</p>
        <p class="style-4">Address: 1st Settlement, New Cairo, Egypt</p>
      </div>

      <div class="get-in-touch">
        <p class="style-9">Get in touch</p>
        <p style="display: flex; flex-direction: column">
          <a
            class="style-4"
            style="text-decoration: none; color: white"
            href="tel:+01233456789"
            >01233456789</a
          >
          <a
            class="style-4"
            style="text-decoration: none; color: white"
            href="mailto:info@mount-wolf.com"
            >E-mail : info@mount-wolf.com</a
          >
        </p>
      </div>

      <div class="social-media">
        <p class="style-9">Social media</p>
        <SocialIcon></SocialIcon>
      </div>
    </div>

    <div
      class="copyright style-4"
      style="
        width: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
      "
    >
      © 2024, MOUNT WOLF | Privacy Policy | Terms of Use | Cookie Policy
    </div>
  </div>
</template>

<script setup>
import SocialIcon from "../local/headerComponent/SocialIcon.vue";
</script>

<style lang="scss" scoped></style>
