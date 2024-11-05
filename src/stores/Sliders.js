import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { mainStore } from "./mainStore";
import axiosInstance from "./axios_instance";

export const useSlidersStore = defineStore("sliderStore", {
  state: () => ({
    headerSlider: [],
    aboutSlider: [],

    // allQuestions: [],
  }),
  actions: {
    // all admins
    async getAllSliders() {
      await axiosInstance
        .get(`${mainStore().apiLink}/admin/slider/showSlidersTypes`, {})
        .then((res) => {
          console.log(res.data.data);
          this.headerSlider = res.data.data.header_slider;
          this.aboutSlider = res.data.data.about_slider;
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
    // async getAllQuestions() {
    //   await axiosInstance
    //     .get(`${mainStore().apiLink}/admin/faqs/show`)
    //     .then((res) => {
    //       this.allQuestions = res.data.data;
    //     })
    //     .catch((err) => {
    //       let errorMessage = "Something went wrong, please try again";

    //       if (err.response && err.response.data && err.response.data.errors) {
    //         const errorArray = Object.values(err.response.data.errors);
    //         if (errorArray.length > 0 && errorArray[0][0]) {
    //           errorMessage = errorArray[0][0];
    //         }
    //       }
    //       mainStore().showAlert(errorMessage, 2);
    //     });
    // },
  },
});
