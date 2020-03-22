import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

import HelloWorld from "./components/HelloWorld";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    loggedIn: false
  },
  mutations: {
    login(state) {
      state.loggedIn = true;
    },
    logout(state) {
      state.loggedIn = false;
    }
  }
});

function requireAuth(to, from, next) {
  if (!store.state.loggedIn) {
    next({
      path: "/login",
      query: { redirect: to.fullPath }
    });
  } else {
    next();
  }
}

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: HelloWorld,
      props: { msg: "Helllooooooo world!!" }
    },
    { path: "/login", component: Login },
    { path: "/dashboard", component: Dashboard, beforeEnter: requireAuth },
    {
      path: "/logout",
      beforeEnter: (to, from, next) => {
        store.commit("logout");
        next("/");
      }
    }
  ]
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
