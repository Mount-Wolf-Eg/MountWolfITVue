<template>
  <div v-motion-slide-bottom>
    <img
      src="/src/assets/media/Images/Mask group.jpg"
      alt="screen img"
      style="width: 100%"
    />
    <div style="width: 80%; margin: 7rem" class="text-center mx-auto row gap-4">
      <div style="position: relative" class="col-12 col-md-3 p-2">
        <span
          class="d-flex flex-column gap-4"
          style="position: sticky; top: 20%; left: 0; width: 100%"
        >
          <button
            v-for="(categ, j) in allProjectsCategory"
            :key="j"
            @click="
              (currentSec = categ.id), (categData = categ.category_projects)
            "
            :class="`${currentSec == categ.id ? 'active' : ''}`"
            class="submit-btn w-100"
            type="submit"
          >
            {{ categ.name }}
          </button>
        </span>
      </div>

      <div class="m-0 p-0 bg row col-12 col-md my-5 my-md-0 mx-md-5">
        <div class="row w-100 m-0 p-2">
          <div
            class="col d-flex flex-wrap flex-row gap-3 justify-content-center justify-content-md-start"
            style="width: auto"
            v-motion-slide-bottom
          >
            <div
              class="m-0 p-0"
              v-if="categData.length"
              v-for="(item, i) in categData"
              :key="i"
            >
              <ProjectCard
                :data="item"
                @click="
                  router.push({ name: 'project', params: { id: item.id } })
                "
              ></ProjectCard>
            </div>
            <div
              class="w-100 h-100 fs-4 d-flex justify-content-center align-items-center"
              v-else
            >
              No Data
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import ProjectCard from "@/reusables/ProjectCard.vue";
import { useRouter } from "vue-router";
import { useSlidersStore } from "@/stores/dataStore";
import { storeToRefs } from "pinia";
const { allProjectsCategory } = storeToRefs(useSlidersStore());
const router = useRouter();
const currentSec = ref();
const categData = ref({});
onMounted(async () => {
  await useSlidersStore().getAllProjectsCategory();
  currentSec.value = allProjectsCategory.value[0].id;
  categData.value = allProjectsCategory.value[0].category_projects;
});
</script>

<style scoped lang="scss">
.active {
  background-color: #9a9a9a38 !important;
  color: white;
}
</style>
