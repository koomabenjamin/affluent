<script setup lang="ts">
import { provide } from 'vue';
import { RouterView } from 'vue-router';
import './assets/main.css';
import { useUserStore } from './stores/user-store';
import { storeToRefs } from 'pinia';

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

provide('user', user);

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
