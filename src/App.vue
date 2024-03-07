<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './views/HelloWorld.vue';
import '@/assets/main.css'
</script>

<template>
  <!-- <RouterView /> -->
  <HelloWorld/>
</template>

<style scoped>
.center {
  @apply flex items-center justify-center
}
</style>
