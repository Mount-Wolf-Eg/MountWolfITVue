<template>
  <div class="footer">
    <div>
      <div class="lets-hunt" v-if="!footerResponse">
        <!-- <p>LET'S HUNT</p> -->

        <img
          src="/src/assets/media/Images/FOOTO.png"
          style="
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          "
          alt="footer-image"
        />

        <div class="footer-items">
          <p class="foot-title">CONTACT US</p>

          <div class="footer-items-box row">
            <div class="col">
              <p class="footer-list-title">Egypt</p>
              <ul class="d-flex flex-column align-items-center mt-4">
                <li class="address">Address: {{ allSettings.egy_address }}</li>
                <li>
                  Mobile :
                  <a :href="`tel:${allSettings.egy_mobile}`">
                    {{ allSettings.egy_mobile }}</a
                  >
                </li>
                <li>
                  E-mail:
                  <a :href="`mailto:${allSettings.egy_email}`">
                    {{ allSettings.egy_email }}</a
                  >
                </li>
              </ul>
            </div>
            <div class="col">
              <p class="footer-list-title">UAE</p>
              <ul class="d-flex flex-column align-items-center mt-4">
                <li class="address">Address: {{ allSettings.uae_address }}</li>
                <li>
                  Mobile :
                  <a :href="`tel:${allSettings.uae_mobile}`">
                    {{ allSettings.uae_mobile }}</a
                  >
                </li>
                <li>
                  E-mail:
                  <a :href="`mailto:${allSettings.uae_email}`">
                    {{ allSettings.uae_email }}</a
                  >
                </li>
              </ul>
            </div>
            <div class="d-flex flex-column align-items-center col">
              <p class="footer-list-title" style="padding-bottom: 2rem">
                Social Media
              </p>
              <SocialIcon></SocialIcon>
            </div>
          </div>
        </div>
      </div>
      <!-- responsive -->
      <div class="footer-responsive m-0" v-else>
        <img
          src="/src/assets/media/Images/FOOTORes.png"
          style="
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          "
          alt="footer-image"
        />

        <div class="footer-items">
          <p class="foot-title">CONTACT US</p>
          <div class="footer-items-box row m-0 p-0">
            <div class="col-12 m-0 p-0">
              <p class="footer-list-title">Egypt</p>
              <ul class="d-flex flex-column mt-4">
                <li class="address">
                  Address: 1st Settlement , New Cairo , Cairo
                </li>
                <li>
                  Mobile : <a href="tel:+971 58 599 2206">+971 58 599 2206</a>
                </li>
                <li>
                  E-mail:
                  <a href="mailto:info@mount-wolf.com">info@mount-wolf.com</a>
                </li>
              </ul>
            </div>
            <div class="col-12 m-0 p-0">
              <p class="footer-list-title">UAE</p>
              <ul class="d-flex flex-column mt-4">
                <li class="address">Block C VL02-194, Al Dahid Rd, Sharjah</li>
                <li>
                  Mobile : <a href="tel:+971 58 599 2206">+971 58 599 2206</a>
                </li>
                <li>
                  E-mail:
                  <a href="mailto:info@mount-wolf.com">info@mount-wolf.com</a>
                </li>
              </ul>
            </div>
            <div class="col-12 m-0 p-0 d-flex flex-column">
              <p class="footer-list-title">Social Media</p>
              <SocialIcon style="padding: 0 2rem"></SocialIcon>
            </div>
          </div>
        </div>
      </div>
      <div class="copy-right text-center py-2">
        <p class="foot-item m-0 py-3">BY MOUNT WOLF 2024</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import SocialIcon from "../local/headerComponent/SocialIcon.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useSlidersStore } from "@/stores/dataStore";
import { storeToRefs } from "pinia";
import { all } from "axios";
const { allSettings } = storeToRefs(useSlidersStore());
let footerResponse = ref(false);

// onMounted(async () => {
//   await useSlidersStore().getAllSettings();
//   window.innerWidth <= 600
//     ? (footerResponse.value = true)
//     : (footerResponse.value = false);
//   window.onresize = () => {
//     window.innerWidth <= 600
//       ? (footerResponse.value = true)
//       : (footerResponse.value = false);
//   };
// });

onMounted(async () => {
  await useSlidersStore().getAllSettings();

  const updateFooterResponse = () => {
    footerResponse.value = window.innerWidth <= 600;
  };

  updateFooterResponse();
  window.addEventListener("resize", updateFooterResponse);

  onBeforeUnmount(() => {
    window.removeEventListener("resize", updateFooterResponse);
  });
});
</script>

<style lang="scss" scoped>
.foot-item {
  font-size: var(--fs-18);
  font-weight: 700;
  font-weight: var(--line-s-24);
  color: var(--col-second);
}
</style>
