<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <v-icon icon="mdi-airballoon " />
  </nav>
  <RouterView />
</template>

<style scoped>
@media (min-width: 1024px) {
}
</style>
