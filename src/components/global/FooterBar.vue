<template>
  <div class="footer" style="display: flex; margin-bottom: 1rem !important">
    <div
      style="
        width: 60%;
        display: flex;
        justify-content: space-around;
        align-items: center;
      "
    >
      <div class="location flex-col">
        <p class="style-9">location</p>
        <p class="style-4">
          Address: 1st Settlement,<br />
          New Cairo, Egypt
        </p>
      </div>

      <div class="get-in-touch flex-col">
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

      <div class="social-media flex-col" style="display: flex">
        <p class="style-9 m-0">Social media</p>
        <SocialIcon class="mb-5"></SocialIcon>
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

<style lang="scss" scoped>
.flex-col {
  height: 100%;
  display: flex;
  justify-content: space-between !important;
  align-items: start;
  flex-direction: column;
}
</style>
