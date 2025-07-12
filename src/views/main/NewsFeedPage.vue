<script setup lang="ts">
import { useRoute } from 'vue-router';
import { decrypt } from '@/composables/encrypt';
import { computed } from 'vue';
import NewsFeedDashboard from "../newsfeed/NewsFeedDashboard.vue"

const route = useRoute();
const appName = import.meta.env.VITE_CLIENT_GROUP_NAME;

// const customerId = computed(() => {
//   return decrypt(route.params?.id ?? "" as string);
// });

</script>

<template>
  <div class="h-screen w-[52.5%] overflow-auto pb-20">
    <NewsFeedDashboard/>
  </div>
</template>
