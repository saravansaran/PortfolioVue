import './assets/bootstrap.min.css'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import home from './components/home.vue'
import about from './components/about.vue'

import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: "/", component: home },
      { path: "/about", component: about },
    ],
  });
  
  const app = createApp(App);
  app.use(router);
  app.mount("#app");
    