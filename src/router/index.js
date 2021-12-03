import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import AddNewEmployee from "../views/AddNewEmployee.vue";
import AllEmployees from "../views/AllEmployees.vue";
import AllTransactions from "../views/AllTransactions.vue";
import MakePayment from "../views/MakePayment.vue";
import SinglePayment from "../views/SinglePayment.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/addemployee",
    name: "AddNewEmployee",
    component: AddNewEmployee,
  },
  {
    path: "/employees",
    name: "AllEmployees",
    component: AllEmployees,
  },
  {
    path: "/transactions",
    name: "AllTransactions",
    component: AllTransactions,
  },
  {
    path: "/pay",
    name: "MakePayment",
    component: MakePayment,
  },
  {
    path: "/transaction/:id",
    name: "SinglePayment",
    component: SinglePayment,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
