import { createApp } from "vue";
import pinia from "./stores/index";
import "./styles/index.scss";

import App from "./App.vue";
import router from "./router";

import { setRegisterGlobal } from "./global";

import "./permission";

const app = createApp(App);
app.use(setRegisterGlobal);

app.use(pinia);
app.use(router);

app.mount("#app");
