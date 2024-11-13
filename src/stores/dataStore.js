import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { mainStore } from "./mainStore";
import axiosInstance from "./axios_instance";

export const useSlidersStore = defineStore("sliderStore", {
  state: () => ({
    headerSlider: [],
    aboutSlider: [],

    servicesLeft: [],
    servicesRight: [],
    servicesBottom: [],

    allClients: [],

    allWorkProcesses: [],

    allProjects: [],
    singleProject: [],
    allProjectsCategory: [],
    allProducts: [],
    allSettings: [],
    allSectors: [],
  }),
  actions: {
    // all admins
    async getAllSliders() {
      await axiosInstance
        .get(
          `${mainStore().apiLink}/admin/slider/showSlidersTypesWithoutTrashed`,
          {}
        )
        .then((res) => {
          this.headerSlider = res.data.data.header_slider;
          this.aboutSlider = res.data.data.about_slider;
          this.servicesLeft = res.data.data.services_left.reverse();
          this.servicesRight = res.data.data.services_right.reverse();
          this.servicesBottom = res.data.data.services_bottom.reverse();
          this.allClients = res.data.data.clients;
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
    async getAllSettings() {
      await axiosInstance
        .get(`${mainStore().apiLink}/admin/Settings/show`)
        .then((res) => {
          this.allSettings = res.data.data.settings;
          this.allWorkProcesses = res.data.data.settings.work_process;
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
        });
    },
    async getAllProjects() {
      await axiosInstance
        .get(`${mainStore().apiLink}/admin/Projects/show`)
        .then((res) => {
          this.allProjects = res.data.data;
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
        });
    },
    async getSingleProject(data) {
      let result;
      await axiosInstance
        .post(`${mainStore().apiLink}/admin/Projects/one`, data)
        .then((res) => {
          this.singleProject = res.data.data;
          result = res;
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

          result = false;
        });
      return result;
    },

    async getAllProducts() {
      await axiosInstance
        .get(`${mainStore().apiLink}/admin/Products/show`)
        .then((res) => {
          this.allProducts = res.data.data;
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
        });
    },
    async getAllProjectsCategory() {
      await axiosInstance
        .get(`${mainStore().apiLink}/admin/ProjectCategories/show`)
        .then((res) => {
          this.allProjectsCategory = res.data.data.reverse();
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
        });
    },
    async getAllContactSectors() {
      await axiosInstance
        .get(`${mainStore().apiLink}/admin/ContactFormSectors/all`)
        .then((res) => {
          this.allSectors = res.data.data;
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
        });
    },
    async sendMessage(data) {
      let result;
      await axiosInstance
        .post(`${mainStore().apiLink}/Mail/SendMessage`, data)
        .then((res) => {
          result = res;
          mainStore().showAlert("Message Sent Successfully", 1);
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
          result = false;
        });
      return result;
    },
  },
});
