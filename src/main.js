import { createApp } from "vue";
import App from "./components/app/App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import("bootstrap/dist/css/bootstrap.min.css");
import("../public/index.css");
createApp(App).use(store).use(router).mount("#app");
