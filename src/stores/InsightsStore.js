import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { mainStore } from "./mainStore";
import axiosInstance from "./axios_instance";

export const useInsightsStore = defineStore("insightStore", {
  state: () => ({}),
  actions: {
    // all admins
    async SendInsight(data) {
      await axiosInstance
        .post(`${mainStore().apiLink}/admin/track-page-view`, data)
        .then((res) => {
          console.log("Page view tracked:", response.data);
        })
        .catch((err) => {
          let errorMessage = "Something went wrong, please try again";

          if (err.response && err.response.data && err.response.data.errors) {
            const errorArray = Object.values(err.response.data.errors);
            if (errorArray.length > 0 && errorArray[0][0]) {
              errorMessage = errorArray[0][0];
            }
          }
          mainStore().showAlert(errorMessage, 2);
          this.start = false;
        });
    },
  },
});
