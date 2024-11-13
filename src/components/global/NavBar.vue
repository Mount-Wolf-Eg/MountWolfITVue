<template>
  <div>
    <!-- nav bar -->
    <div
      v-if="!navResponse"
      class="layout nav-bar pb-4"
      style="display: flex; justify-content: space-between"
    >
      <NavTitle :logSrc="allSettings.logo"></NavTitle>
      <Navigation></Navigation>
      <SocialIcon></SocialIcon>
    </div>
    <!-- responsive nav -->
    <nav
      v-else
      style="background-color: var(--col-blk); opacity: 1"
      class="navbar sticky-top"
    >
      <div class="container-fluid layout nav-bar pt-3 px-5 pb-0">
        <NavTitle></NavTitle>

        <button
          class="navbar-toggler py-2 px-3"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <svg
            style="width: 3.2rem; height: 3.2rem"
            fill="#929292"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
            />
          </svg>
        </button>

        <div
          style="width: 100vw; background-color: #00000087"
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header" style="background-color: var(--col-bg)">
            <button
              style="
                width: 3rem;
                height: 3rem;
                font-size: 2rem;
                background-color: #929292;
                margin: 2rem !important;
              "
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <!-- style="background-color: var(--col-bg) !important" -->
          <div class="offcanvas-body">
            <div class="style-7 d-flex flex-column w-auto responsive-nav">
              <router-link
                class="nav-link"
                active-class="active"
                :to="{ name: 'home' }"
              >
                <span data-bs-dismiss="offcanvas" aria-label="Close">
                  Home
                </span>
              </router-link>

              <router-link
                class="nav-link"
                active-class="active"
                :to="{ name: 'projects' }"
              >
                <span data-bs-dismiss="offcanvas" aria-label="Close">
                  Projects
                </span>
              </router-link>

              <router-link
                class="nav-link"
                active-class="active"
                :to="{ name: 'contact-us' }"
              >
                <span data-bs-dismiss="offcanvas" aria-label="Close">
                  Contact us
                </span>
              </router-link>
            </div>
            <div
              class="d-flex flex-row gap-5 justify-content-center align-items-center"
              style="margin: 6rem 0"
            >
              <a class="nav-icon" href="https://www.facebook.com/MountWolfAdv/">
                <svg
                  id="Group_1964"
                  data-name="Group 1964"
                  xmlns="http://www.w3.org/2000/svg"
                  style="width: 2rem; height: 3.5rem"
                  viewBox="0 0 12.938 24"
                >
                  <path
                    id="Path_2426"
                    data-name="Path 2426"
                    d="M249.593,395.729q0-2.172,0-4.343c0-.743,0-.743-.772-.744-.724,0-1.448-.01-2.171,0-.443.007-.642-.179-.638-.629q.016-1.819,0-3.639c0-.424.2-.607.607-.6.254,0,.509.011.763,0,.717-.041,1.649.309,2.092-.138.412-.416.1-1.342.117-2.043a12.109,12.109,0,0,1,.187-2.157,5.244,5.244,0,0,1,5.14-4.307c1.114-.027,2.23,0,3.345-.014.462-.006.69.17.686.652q-.016,1.643,0,3.287c.005.473-.2.671-.669.67-.762,0-1.526.006-2.287.048-1.02.056-1.272.323-1.293,1.325-.015.7.013,1.409-.013,2.112-.013.375.1.509.49.5.958-.027,1.917,0,2.875-.013.537-.008.79.2.781.763q-.029,1.731,0,3.462c.01.546-.238.722-.749.712-.958-.019-1.918.016-2.875-.015-.419-.013-.52.125-.518.528.016,2.973.009,5.947.008,8.921,0,.97-.068,1.039-1.026,1.041-1.1,0-2.192-.02-3.286.008-.595.015-.8-.25-.8-.806C249.6,398.781,249.593,397.255,249.593,395.729Z"
                    transform="translate(-246.01 -377.113)"
                    fill="#929292"
                  />
                </svg>
              </a>

              <a
                class="nav-icon"
                href="https://www.instagram.com/mountwolf.co/"
              >
                <svg
                  id="Group_1963"
                  data-name="Group 1963"
                  xmlns="http://www.w3.org/2000/svg"
                  style="width: 3.6rem; height: 3.6rem"
                  fill="#929292"
                  viewBox="0 0 24 24.004"
                >
                  <path
                    id="Path_2423"
                    data-name="Path 2423"
                    d="M129.94,273.54c0-1.484-.005-2.968,0-4.452a7.5,7.5,0,0,1,7.522-7.53q4.474-.015,8.95,0a7.493,7.493,0,0,1,7.518,7.533q.014,4.451,0,8.9a7.493,7.493,0,0,1-7.545,7.553q-4.451.013-8.9,0a7.5,7.5,0,0,1-7.543-7.557C129.936,276.507,129.94,275.023,129.94,273.54Zm2.247.013c0,1.453,0,2.905,0,4.358a5.257,5.257,0,0,0,5.38,5.39q4.381.009,8.762,0a5.252,5.252,0,0,0,5.355-5.367q.01-4.381,0-8.762a5.253,5.253,0,0,0-5.356-5.367q-4.4-.011-8.809,0a5.252,5.252,0,0,0-5.332,5.343C132.182,270.617,132.187,272.085,132.187,273.553Z"
                    transform="translate(-129.938 -261.551)"
                    fill="#929292"
                  />
                  <path
                    id="Path_2424"
                    data-name="Path 2424"
                    d="M147.653,274.449a4.843,4.843,0,1,1-4.825,4.842A4.849,4.849,0,0,1,147.653,274.449Zm.014,7.87a3.028,3.028,0,1,0-3.024-3.033A3.042,3.042,0,0,0,147.666,282.319Z"
                    transform="translate(-135.672 -267.289)"
                    fill="#929292"
                  />
                  <path
                    id="Path_2425"
                    data-name="Path 2425"
                    d="M169.074,271.8a1.176,1.176,0,0,1,1.241,1.228,1.256,1.256,0,0,1-1.247,1.254,1.329,1.329,0,0,1-1.235-1.223A1.257,1.257,0,0,1,169.074,271.8Z"
                    transform="translate(-151.151 -266.963)"
                    fill="#929292"
                  />
                </svg>
              </a>

              <a
                class="nav-icon"
                href="https://www.linkedin.com/company/mount-wolf/?viewAsMember=true"
              >
                <svg
                  style="width: 3.6rem; height: 3.6rem"
                  fill="#929292"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                  />
                </svg>
              </a>

              <!-- <a class="nav-icon" href="https://vimeo.com/user161307481">
                <svg
                  id="Group_1965"
                  data-name="Group 1965"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  fill="#929292"
                  style="width: 3.6rem; height: 3.6rem"
                  viewBox="0 0 25.555 22.452"
                >
                  <defs>
                    <clipPath id="clip-path">
                      <rect
                        id="Rectangle_81"
                        data-name="Rectangle 81"
                        width="25.555"
                        height="22.452"
                        fill="#929292"
                      />
                    </clipPath>
                  </defs>
                  <g
                    id="Group_1743"
                    data-name="Group 1743"
                    clip-path="url(#clip-path)"
                  >
                    <path
                      id="Path_6898"
                      data-name="Path 6898"
                      d="M14.633,5.967a7.239,7.239,0,0,1,7.7-5.92,3.564,3.564,0,0,1,3.219,3.632A12.166,12.166,0,0,1,24.507,8.6a27.866,27.866,0,0,1-5.774,8.752,31.1,31.1,0,0,1-4.911,4.367,3.173,3.173,0,0,1-4.373-.312A5.9,5.9,0,0,1,7.863,19C6.825,16.087,6,13.1,5.048,10.159c-.34-1.05-.66-2.107-1.1-3.121-.273-.626-.583-.76-1.239-.572a4.73,4.73,0,0,0-1.51.777c-.252.187-.38.2-.59-.076C-.211,6.09-.227,6.1.708,5.119A21.24,21.24,0,0,1,5.966.8a6.07,6.07,0,0,1,1.4-.541A2.2,2.2,0,0,1,9.98,1.341a10.334,10.334,0,0,1,1.2,3.755A48.63,48.63,0,0,0,12.9,12.57a5.571,5.571,0,0,0,.5,1.146c.352.577.638.633,1.173.206a6,6,0,0,0,1.1-1.232,24.124,24.124,0,0,0,2.061-3.443,3.777,3.777,0,0,0,.41-1.992A1.771,1.771,0,0,0,15.738,5.55c-.368.1-.717.269-1.105.417"
                      transform="translate(0 0)"
                      fill="#929292"
                    />
                  </g>
                </svg>
              </a> -->
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from "vue";
import NavTitle from "@/components/local/headerComponent/NavTitle.vue";
import SocialIcon from "../local/headerComponent/SocialIcon.vue";
import Navigation from "../local/headerComponent/Navigation.vue";
import { useSlidersStore } from "@/stores/dataStore";
import { storeToRefs } from "pinia";
const { allSettings } = storeToRefs(useSlidersStore());
let navResponse = ref(false);

// onMounted(() => {
//   window.innerWidth <= 768
//     ? (navResponse.value = true)
//     : (navResponse.value = false);
//   window.onresize = () => {
//     window.innerWidth <= 768
//       ? (navResponse.value = true)
//       : (navResponse.value = false);
//   };
// });

// onMounted(async () => {
//   await useSlidersStore().getAllSettings();
//   const updateNavResponse = () => {
//     navResponse.value = window.innerWidth <= 768;
//   };

//   updateNavResponse();

//   window.addEventListener("resize", updateNavResponse);

//   onBeforeUnmount(() => {
//     window.removeEventListener("resize", updateNavResponse);
//   });
// });
const updateNavResponse = () => {
  navResponse.value = window.innerWidth <= 768;
};

// Register the onBeforeUnmount hook before awaiting the asynchronous operation
onBeforeUnmount(() => {
  window.removeEventListener("resize", updateNavResponse);
});

onMounted(async () => {
  await useSlidersStore().getAllSettings();
  updateNavResponse();
  window.addEventListener("resize", updateNavResponse);
});
</script>

<style lang="scss" scoped></style>
