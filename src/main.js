// Sass main styles
import "./assets/main.scss";
import "./assets/media-queries.scss";

// motion
import { MotionPlugin } from "@vueuse/motion";

// swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

// toastification
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(MotionPlugin);
app.use(Toast);

app.mount("#app");
