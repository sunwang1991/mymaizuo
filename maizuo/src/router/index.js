import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/home/home/home";
import City from "@/components/city/city";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    { path: "/home", name: "home", component: Home },
    { path: "/city", name: "city", component: City }
  ]
});
