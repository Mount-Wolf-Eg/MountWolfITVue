// Sass main styles
import "./assets/main.scss";

// motion
import { MotionPlugin } from "@vueuse/motion";

import { createApp } from "vue";
import { createPinia } from "pinia";
// swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(MotionPlugin);

app.mount("#app");
