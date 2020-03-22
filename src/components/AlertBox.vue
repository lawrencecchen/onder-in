<template>
  <div class="alert">
    <slot></slot>
  </div>
</template>

<style scoped>
.alert {
  max-width: 500px;
  padding: 0.5em;
  background-color: rgba(300, 0, 0, 0.3);
  border: 1px solid rgba(300, 0, 0, 0.6);
  margin: 0 auto;
}
</style>
