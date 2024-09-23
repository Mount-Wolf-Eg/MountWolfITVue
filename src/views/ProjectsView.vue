<template>
  <div v-motion-slide-bottom>
    <img
      src="/src/assets/media/Images/Mask group.jpg"
      alt="screen img"
      style="width: 100%"
    />
    <div
      style="width: 80%; margin: 7rem"
      class="text-center mx-auto d-flex justify-content-between gap-5"
    >
      <div style="width: 30%; position: relative">
        <span
          class="d-flex flex-column gap-4"
          style="position: sticky; top: 20%; left: 0; width: 100%"
        >
          <button
            @click="currentSec = 1"
            :class="`${currentSec == 1 ? 'active' : ''}`"
            class="submit-btn"
            type="submit"
          >
            Websites and Platforms
          </button>
          <button
            @click="currentSec = 2"
            :class="`${currentSec == 2 ? 'active' : ''}`"
            class="submit-btn"
            type="submit"
          >
            Mobile Applications
          </button>
          <button
            @click="currentSec = 3"
            :class="`${currentSec == 3 ? 'active' : ''}`"
            class="submit-btn"
            type="submit"
          >
            Mobile Game Development
          </button>
        </span>
      </div>
      <div style="width: 70%" class="w-100 d-flex flex-wrap gap-4">
        <span v-if="currentSec == 1">
          <div style="width: 70%" class="w-100 d-flex flex-wrap gap-4">
            <div v-for="item in 6" style="flex: 0 0 32%" v-motion-slide-bottom>
              <ProjectCard></ProjectCard>
            </div>
          </div>
        </span>
        <spa v-if="currentSec == 2" n>
          <div style="width: 70%" class="w-100 d-flex flex-wrap gap-4">
            <div v-for="item in 6" style="flex: 0 0 32%" v-motion-slide-bottom>
              <ProjectCard></ProjectCard>
            </div>
          </div>
        </spa>
        <span v-if="currentSec == 3" n>
          <div style="width: 70%" class="w-100 d-flex flex-wrap gap-4">
            <div v-for="item in 6" style="flex: 0 0 32%" v-motion-slide-bottom>
              <ProjectCard></ProjectCard>
            </div>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProjectCard from "@/reusables/ProjectCard.vue";
const currentSec = ref(1);
</script>

<style scoped lang="scss">
.active {
  background-color: #9a9a9a38 !important;
  color: white;
}
</style>
