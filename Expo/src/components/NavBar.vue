<script setup lang="ts"></script>

<template>
  <v-app-bar color="teal-darken-4" elevation="2">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title class="app-title" text="Photo Expo" />
    <v-spacer />
  </v-app-bar>
</template>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Abel&family=Anton&display=swap');
@media (min-width: 1024px) {
  .app-title {
    color: aliceblue;
    font-family: 'Abel', sans-serif;
     font-style: normal;
    font-weight: 400;
    font-size: 2rem;
  }
}
</style>
