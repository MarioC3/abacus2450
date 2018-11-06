import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Levels from "./views/Levels.vue";


Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/Levels/:id",
      name: "levels",
      component: Levels,
      props: true
    }
  ]
});