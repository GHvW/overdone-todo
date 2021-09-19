import { createApp } from "vue";
import { App } from "./App.js";
import { store } from "../src/core/State/Vuex/store";

// learn javascript, use javascript, profit
let app = createApp(App);
app.use(store);
app.mount("#app");
