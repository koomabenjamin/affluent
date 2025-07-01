<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import { encrypt } from '@/composables/encrypt';
import Container from '@/components/shared/Container.vue';
import CircularProgressBar from '@/components/shared/Progress/CircularProgressBar.vue';
import LineGraph from '@/components/shared/Progress/LineGraph.vue';
import { Icon, type IconifyIcon } from "@iconify/vue";

const router = useRouter();
const route = useRoute();
const appName = import.meta.env.VITE_CLIENT_GROUP_NAME;

const navigateTo = (id: string) => {
  router.push({
    name: "main",
    params: { id: encrypt(id) },
    query: route.query,
    hash: route.hash
  });
};

</script>

<template>
  <Container>
    <div class="h-[95vh] w-full flex flex-col items-end justify-start pt-2">
      <div class="grid grid-cols-3 gap-2 bg-slate-900 p-2 rounded-xl">
        <div class="col-span-3 text-white text-xl font-semibold mb-2 mt-2">
          Overview Summary
        </div>
        <div @click="navigateTo('0')" v-for="index in 9" :key="index" class="h-40 w-48 shadow text-white font-semibold border-transparent flex flex-col justify-between rounded-2xl bg-slate-800 
          p-2 text-sm">
          <div class="flex items-start justify-between w-full mb-2">
            <CircularProgressBar :value="20" :max="100" :size="70" :strokeWidth="9" class="flex"
              :stop-one="'oklch(0.885 0.062 18.334)'" :stop-two="'oklch(0.637 0.237 25.331)'"
              :stop-three="'oklch(0.444 0.177 26.899)'" />

            <div class="bg-slate-900 h-8 w-8 rounded-md center">
              <Icon :icon="'solar:arrow-right-up-linear'" :width="18" />
            </div>
          </div>
          <div>
            Summary Title
          </div>

          <!-- <LineGraph class="w-full h-16 mt-2" /> -->
        </div>
      </div>
      <div class="grid grid-cols-3 gap-2 bg-slate-900 p-2 rounded-xl mt-2">
        <div class="col-span-3 text-white text-xl font-semibold mb-2 mt-2">
          Overview Summary
        </div>
        <div @click="navigateTo('0')" v-for="index in 3" :key="index" class="h-40 w-48 shadow text-white font-semibold border-transparent flex flex-col justify-between rounded-2xl bg-slate-800 
          p-4 text-sm">
          <div class="flex items-start justify-between w-full mb-2">
            <span class="text-3xl font-bold">30%</span>

            <div class="bg-slate-900 h-8 w-8 rounded-md center">
              <Icon :icon="'solar:arrow-right-up-linear'" :width="18" />
            </div>
          </div>
          <div class="flex items-center justify-between w-full">
            <div class="whitespace-nowrap">Title</div>
            <LineGraph class="w-full h-16 mt-2" />
          </div>

        </div>
      </div>
    </div>
  </Container>

</template>
