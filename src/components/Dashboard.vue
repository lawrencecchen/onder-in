<template>
  <div>
    <h1>Welcome to the dashboard.</h1>
    <div>You are currently {{loggedIn ? "" : "not"}} logged in</div>
  </div>
</template>

<script>
export default {
  computed: {
    loggedIn() {
      return this.$store.state.loggedIn;
    }
  }
};
</script>