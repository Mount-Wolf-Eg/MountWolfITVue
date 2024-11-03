<template>
  <div class="project-info layout" v-motion-slide-bottom>
    <div class="row w-50 mx-auto">
      <div class="col-12 product-details">
        <div>
          <p class="product-title">Doctor Online</p>
          <p class="product-text">
            Tabeebak is an innovative electronic platform designed to facilitate
            and manage medical consultations between doctors and patients. With
            separate interfaces for patients and doctors, Tabeebak streamlines
            the process of booking consultations and enhances communication
            through various channels. The platform also features an admin
            dashboard for efficient management and oversight.
          </p>
        </div>
        <div>
          <img
            src="/src/assets/media/Servises/Component 16.png"
            alt="product image"
            style="
              width: 48rem;
              height: auto;
              object-fit: contain;
              object-position: center;
            "
          />
        </div>
      </div>

      <div class="col-12 product-feature">
        <div class="feat-title">Features</div>
        <div class="row my-5">
          <div
            class="col-6 d-flex flex-row justify-content-between gap-4 py-5"
            v-for="(item, i) in productItems"
            :key="i"
          >
            <div style="position: relative">
              <p
                class="feat-num"
                style="position: absolute; top: -1rem; left: -1rem"
              >
                {{ i < 10 ? `0${i + 1}` : `${i + 1}` }}
              </p>
              <img
                src="/src/assets/media/Servises/Vector.png"
                alt="product feature"
                style="width: 8.2rem; height: auto"
              />
            </div>
            <div>
              <p class="feat-tit">{{ item.title }}</p>
              <p class="feat-bdy">{{ item.body }}</p>
            </div>
          </div>
        </div>
        <div class="d-flex gap-3">
          <div v-for="(slide, i) in slides" :key="i">
            <ProjectCard :data="slide"></ProjectCard>
          </div>
        </div>
      </div>

      <div class="col-12 product-download">
        <button type="button" class="download-btn">visit website</button>
        <button type="button" class="download-btn">visit website</button>
        <button type="button" class="download-btn">visit website</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProjectCard from "@/reusables/ProjectCard.vue";
const productItems = ref([
  {
    title: "Dual User Interface:",
    body: "Separate views for patients and doctors within the same application.",
  },
  {
    title: "Dual User Interface:",
    body: "Separate views for patients and doctors within the same application.",
  },
  {
    title: "Dual User Interface:",
    body: "Separate views for patients and doctors within the same application.",
  },
  {
    title: "Dual User Interface:",
    body: "Separate views for patients and doctors within the same application.",
  },
  {
    title: "Dual User Interface:",
    body: "Separate views for patients and doctors within the same application.",
  },
  {
    title: "Dual User Interface:",
    body: "Separate views for patients and doctors within the same application.",
  },
]);

const slides = ref([
  "/src/assets/media/Images/Untitled-1-02.jpg",
  "/src/assets/media/Images/Untitled-1-03.jpg",
  "/src/assets/media/Images/Untitled-1-03.jpg",
]);
</script>

<style lang="scss" scoped></style>
