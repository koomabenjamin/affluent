<script setup lang="ts">
import { RouterView } from 'vue-router';
import './assets/main.css';
</script>

<template>
  <RouterView />
</template>

<style>

@import 'vue-select/dist/vue-select.css';

.center {
  @apply flex items-center justify-center
}

h1{
  @apply text-3xl font-bold
}
</style>
