import { createApp } from "vue";
// ************************************
import App from "./App.vue";
// ************************************
import "./assets/scss/style.scss";
// ************************************
import { library } from "@fortawesome/fontawesome-svg-core";
// ************************************
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// ************************************
import { router } from "../src/data/router";
// ************************************
import { faEye } from "@fortawesome/free-solid-svg-icons";
library.add(faEye);
// ************************************
import "bootstrap/dist/css/bootstrap.min.css";
// ************************************
import * as bootstrap from "bootstrap";

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
