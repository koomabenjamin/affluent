<script setup lang="ts">
import { useRoute } from 'vue-router';
import { decrypt } from '@/composables/encrypt';
import { computed } from 'vue';

const route = useRoute();
const appName = import.meta.env.VITE_CLIENT_GROUP_NAME;

const customerId = computed(() => {
  return decrypt(route.params.id as string);
});

</script>

<template>
  {{ appName }}
  <div class="w-screen h-screen center">
    <div v-if="route.params.id === 'default'">
      <h1 class="text-2xl font-bold">Welcome to the Default Page</h1>
      <p>This is the default page content.</p>
      <v-select :options="['Default','level 1', 'level 2', 'level 3', 'level 4', 'level 5', 'level 6']"></v-select>
    </div>
    <div v-else>
      <h1 class="text-2xl font-bold">Temporary Page</h1>
      <p>This is a temporary page for ID: {{ customerId }}</p>
    </div>
  </div>
</template>
