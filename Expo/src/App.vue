<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <v-layout>
    <NavBar />
    <RouterView />
  </v-layout>
</template>

<style scoped lang="scss">
@media (min-width: 1024px) {
}
</style>
