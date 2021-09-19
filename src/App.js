import { h } from "vue";
import { BaseStatePage } from "./pages/BaseState.js";
import { RxStatePage } from "./pages/RxObservableState";
import { VuexStatePage } from "./pages/VuexState";
import "bulma/css/bulma.css";

const routes = {
  "/basestate": BaseStatePage,
  "/rxstate": RxStatePage,
  "/vuexstate": VuexStatePage
};

// simple router from https://v3.vuejs.org/guide/routing.html#simple-routing-from-scratch
export const App = {
  data() {
    return {
      route: window.location.pathname
    };
  },
  computed: {
    RequestedPage() {
      return routes[this.route];
    }
  },
  render() {
    return h(this.RequestedPage);
  }
};
