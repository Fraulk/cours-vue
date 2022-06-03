import { createRouter, createWebHashHistory } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import Counter from "@/components/Counter.vue";
import ExoVFor from "@/components/ExoVFor.vue";
import LogIn from "@/components/LogIn.vue";
import { useUserStore } from "./services/userStore";
const { user } = useUserStore();

const routes = [
  { path: "/", name: "home", component: HelloWorld },
  {
    path: "/counter",
    component: Counter,
    beforeEnter: () => {
      if (!user.value) {
        alert("you need to login first to view this page")
        return { name: "home" }
      };
    },
  },
  {
    path: "/vfor",
    component: ExoVFor,
    beforeEnter: () => {
      if (!user.value) {
        alert("you need to login first to view this page")
        return { name: "home" }
      };
    },
  },
  { path: "/login", component: LogIn },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
