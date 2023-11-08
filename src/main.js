import { createApp } from "vue";
import "./assets/scss/style.scss";
import App from "./App.vue";

import { router } from "../src/data/router";

import "bootstrap/dist/css/bootstrap.min.css";

import * as bootstrap from "bootstrap";

createApp(App).use(router).mount("#app");
