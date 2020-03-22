<template>
  <div id="app">
    <div>
      <router-link to="/">Hello World</router-link>
    </div>
    <div>
      <router-link to="/login" v-if="!loggedIn">Log in</router-link>
      <router-link to="/logout" v-else>Log out</router-link>
    </div>
    <div>
      <router-link to="/dashboard">Dashboard</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  computed: mapState(["loggedIn"]),
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
