import { createApp } from "vue";
import App from "./App.vue";
import "./assets/scss/index.scss"
document.title = "Vue Template";
import rouer from "./router/index.ts";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// new Vue({
//   render: (h) => h(App),
// })
createApp(App).use(rouer).use(ElementPlus).mount("#app");
