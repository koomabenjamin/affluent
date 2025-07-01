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

const summaries = [
  {
    title: "Personal Portfolio",
    value: 75,
    max: 100,
    size: 60,
    strokeWidth: 8,
    stopOne: 'oklch(86.5% 0.127 207.078)',
    stopTwo: 'oklch(91.7% 0.08 205.041)',
    stopThree: 'oklch(78.9% 0.154 211.53)'
  },
  {
    title: "Group Portfolio",
    value: 50,
    max: 100,
    size: 60,
    strokeWidth: 8,
    stopOne: 'oklch(86.5% 0.127 207.078)',
    stopTwo: 'oklch(91.7% 0.08 205.041)',
    stopThree: 'oklch(78.9% 0.154 211.53)'
  },
  {
    title: "Asset Portfolio",
    value: 30,
    max: 100,
    size: 60,
    strokeWidth: 8,
    stopOne: 'oklch(86.5% 0.127 207.078)',
    stopTwo: 'oklch(91.7% 0.08 205.041)',
    stopThree: 'oklch(78.9% 0.154 211.53)'
  },
  {
    title: "Loan Requests",
    value: 90,
    max: 100,
    size: 60,
    strokeWidth: 8,
    stopOne: 'oklch(86.5% 0.127 207.078)',
    stopTwo: 'oklch(91.7% 0.08 205.041)',
    stopThree: 'oklch(78.9% 0.154 211.53)'
  },
  {
    title: "Approved Loans",
    value: 60,
    max: 100,
    size: 60,
    strokeWidth: 8,
    stopOne: 'oklch(86.5% 0.127 207.078)',
    stopTwo: 'oklch(91.7% 0.08 205.041)',
    stopThree: 'oklch(78.9% 0.154 211.53)'
  },
  {
    title: "Declined Loans",
    value: 80,
    max: 100,
    size: 60,
    strokeWidth: 8,
    stopOne: 'oklch(86.5% 0.127 207.078)',
    stopTwo: 'oklch(91.7% 0.08 205.041)',
    stopThree: 'oklch(78.9% 0.154 211.53)'
  }
];

</script>

<template>
  <Container>
    <div class="h-[95vh] w-full flex flex-col items-end justify-start pt-2">
      <div class="grid grid-cols-3 gap-2 bg-slate-200 p-2 rounded-xl">
        <div class="col-span-3 text-black text-xl font-semibold mb-2 mt-2">
          Overview Summary
        </div>
        <div @click="navigateTo('0')" v-for="index in 3" :key="index" class="h-32 w-48 shadow text-black font-semibold border-transparent flex flex-col justify-between rounded-2xl bg-slate-100 
          p-2 text-sm">
          <div class="flex items-start justify-between w-full mb-2">

            <div>
              <div class="text-base p-2 font-semibold rounded-md">£ 100,000,000</div>
              <div class="text-lg p-2 font-semibold rounded-md">£ 100,000,000</div>
            </div>

            <div class="bg-slate-200 p-2 rounded-md center">
              <Icon :icon="'solar:arrow-right-up-linear'" :width="18" />
            </div>
          </div>
          <div class="text-xs font-semibold ml-1">Summary Title</div>

          <!-- <LineGraph class="w-full h-16 mt-2" /> -->
        </div>
        <div @click="navigateTo('0')" v-for="index in 3" :key="index" class="h-32 w-48 shadow text-black font-semibold border-transparent flex flex-col justify-between rounded-2xl bg-slate-100 
          p-2 text-sm">
          <div class="flex items-start justify-between w-full mb-2">

            <CircularProgressBar :value="75" :max="100" :size="60" :strokeWidth="6" class="flex"
              :stop-one="'oklch(86.5% 0.127 207.078)'" :stop-two="'oklch(91.7% 0.08 205.041)'"
              :stop-three="'oklch(78.9% 0.154 211.53)'" />

            <div class="bg-slate-200 h-8 w-8 rounded-md center">
              <Icon :icon="'solar:arrow-right-up-linear'" :width="18" />
            </div>
          </div>
          <div class="text-xs font-semibold">Summary Title</div>

          <!-- <LineGraph class="w-full h-16 mt-2" /> -->
        </div>
      </div>
      <div class="grid grid-cols-3 gap-2 bg-slate-200 p-2 rounded-xl mt-2">
        <div class="col-span-3 text-black text-xl font-semibold mb-2 mt-2">
          Overview Summary
        </div>
        <div @click="navigateTo('0')" v-for="index in 3" :key="index" class="h-32 w-48 shadow text-black font-semibold border-transparent flex flex-col justify-between rounded-2xl bg-slate-100 
          p-4 text-sm">
          <div class="flex items-start justify-between w-full mb-2">
            <span class="text-2xl font-bold">30%</span>

            <div class="bg-slate-200 h-8 w-8 rounded-md center">
              <Icon :icon="'solar:arrow-right-up-linear'" :width="18" />
            </div>
          </div>
          <div class="flex items-center justify-between w-full">
            <div class="whitespace-nowrap">Titlgggggge</div>
            <LineGraph class="w-full h-16 mt-2" />
          </div>

        </div>
      </div>
    </div>
  </Container>

</template>
