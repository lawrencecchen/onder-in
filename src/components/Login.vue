<template>
  <div>
    <h2>Log in here.</h2>
    <alert-box v-if="$route.query.redirect">You need to log in first.</alert-box>
    <div>You are currently {{loggedIn ? "" : "not"}} logged in</div>
    <form @submit.prevent="login">
      <input type="text" name="email" placeholder="Email" v-model="email" autocomplete="username">
      <input
        type="password"
        name="password"
        placeholder="password"
        v-model="password"
        autocomplete="password"
      >
    </form>
    <button type="submit" @click="login">Login</button>
    <alert-box v-if="error">Login failed.</alert-box>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AlertBox from "./AlertBox";
import auth from "../auth.js";

export default {
  data: function() {
    return {
      email: "test@test.com",
      password: "abc123",
      error: false
    };
  },
  methods: {
    login() {
      auth.login({ email: this.email, password: this.password }, cb => {
        if (!cb.loggedIn) {
          this.error = true;
        } else {
          this.$store.commit("login");
          this.$router.replace(this.$route.query.redirect || "/dashboard");
        }
      });
    }
  },
  computed: mapState(["loggedIn"]),
  components: {
    "alert-box": AlertBox
  }
};
</script>
