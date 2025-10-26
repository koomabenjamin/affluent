<template>
  
  <div class="h-screen w-screen inset-0 fixed top-0 bottom-0 overflow-auto">

      <div class="w-full h-[66px] flex items-center justify-between border fixed top-0 bg-slate-50 p-4 shadow-sm z-10">
        <div class="flex items-center space-x-2">
          <div class="font-sans text-lg lg:text-3xl font-semibold">UGX {{ userDetails?.account_balance ?? 0 }}
          </div>
          <div :class="{
            'bg-gradient-to-r from-cyan-500 to-blue-500 text-rose-100': ((userDetails?.percentage_growth ?? 0) < 0),
            'bg-yellow-400 text-yellow-100': ((userDetails?.percentage_growth ?? 0) === 0),
            'bg-emerald-500 text-emerald-100': ((userDetails?.percentage_growth ?? 0) > 0),
          }" class="
            lg:h-8
            h-6
            rounded-full
            w-auto
            px-2
            py-1
            font-semibold
            lg:text-base
            text-xs
          ">
            {{ userDetails?.percentage_growth ?? 0 }} %
          </div>
          <div :class="{
            'bg-gradient-to-r from-cyan-500 to-blue-500 text-rose-100': ((userDetails?.percentage_growth ?? 0) < 0),
            'bg-yellow-400 text-yellow-100': ((userDetails?.percentage_growth ?? 0) === 0),
            'bg-emerald-500 text-emerald-100': ((userDetails?.percentage_growth ?? 0) > 0),
          }" class="lg:h-8 h-6 lg:w-8 w-6 rounded-full lg:p-2 p-1">
            <ArrowDownIcon class="h-4 stroke-2" />
          </div>
        </div>

        <div class="text-sm lg:text-lg">
          Welcome back,
          <span class="font-semibold text-sm lg:text-xl">{{ userDetails?.name ?? 'No user detected' }}</span>
        </div>
      </div>

      <div class="w-full h-[50px] flex items-center border space-x-4 fixed top-[66px] bg-slate-50 p-4 shadow-sm z-10">
        <div class="flex items-center space-x-1">
          <Icon :icon="'carbon:portfolio'" :width="20" />
          <h4 class="text-base">Porfolio</h4>
        </div>
        <div class="flex items-center space-x-1">
          <Icon :icon="'fluent-mdl2:group'" :width="20" />
          <h4 class="text-base">Groups</h4>
        </div>
        <div class="flex items-center space-x-1">
          <Icon :icon="'lsicon:path-outline'" :width="20" />
          <h4 class="text-base">Skills Path</h4>
        </div>
        <div class="flex items-center space-x-1">
          <Icon :icon="'solar:wallet-linear'" :width="20" />
          <h4 class="text-base">Wallet</h4>
        </div>
        <div class="flex items-center space-x-1">
          <Icon :icon="'solar:help-outline'" :width="20" />
          <h4 class="text-base">Support</h4>
        </div>
        <div class="flex items-center space-x-1">
          <Icon :icon="'solar:settings-broken'" :width="20" />
          <h4 class="text-base">Account Setting</h4>
        </div>
      </div>

      <div class="h-[100vh] flex flex-col items-end justify-start pt-2 fixed top-28 right-0 overflow-auto">
      <div class="grid grid-cols-3 gap-2 bg-slate-200 p-2 rounded-xl">
        <div class="col-span-3 text-black text-xl font-semibold mb-2 mt-2">
          Overview Summary
        </div>
        <div @click="navigateTo('0')" v-for="(value, index) in amountSummaries" :key="index" class="h-32 w-44 shadow text-black font-semibold border-transparent flex flex-col justify-between rounded-2xl bg-slate-100 
          p-2 text-sm">
          <div class="flex items-start justify-between w-full mb-2">

            <div>
              <div class="text-sm p-2 font-semibold rounded-md whitespace-nowrap">£ {{ value.amount }}</div>
            </div>

            <div class="bg-slate-200 p-2 rounded-md center">
              <Icon :icon="'solar:arrow-right-up-linear'" :width="15" />
            </div>
          </div>
          <div class="text-sm font-semibold ml-1">
            <div>{{ value.title }}</div>
            <div class="text-slate-400 text-[10px]">{{ value.description }}</div>
          </div>

          <!-- <LineGraph class="w-full h-16 mt-2" /> -->
        </div>
        <div @click="navigateTo('0')" v-for="(value, index) in circularGraphSummaries" :key="index" class="h-32 w-44 shadow text-black font-semibold border-transparent flex flex-col justify-between rounded-2xl bg-slate-100 
          p-2 text-sm">
          <div class="flex items-start justify-between w-full mb-2">

            <CircularProgressBar :value="value.value" :max="value.max" :size="value.size"
              :strokeWidth="value.strokeWidth" class="flex" :stop-one="value.stopOne" :stop-two="value.stopTwo"
              :stop-three="value.stopThree" />

            <div class="bg-slate-200 h-8 w-8 rounded-md center">
              <Icon :icon="'solar:arrow-right-up-linear'" :width="18" />
            </div>
          </div>
          <div class="text-sm font-semibold ml-1">
            <div>{{ value.title }}</div>
            <div class="text-slate-400 text-[10px]">{{ value.description }}</div>
          </div>


          <!-- <LineGraph class="w-full h-16 mt-2" /> -->
        </div>
      </div>
      <div class="grid grid-cols-2 gap-2 bg-slate-200 p-2 rounded-xl mt-2">
        <div class="col-span-2 text-black text-xl font-semibold mb-2 mt-2">
          Overview Summary
        </div>
        <div @click="navigateTo('0')" v-for="(value, index) in linearGraphSummaries" :key="index" class="h-32 w-[268px] shadow text-black font-semibold border-transparent flex flex-col justify-between rounded-2xl bg-slate-100 
          p-4 text-sm">
          <div class="flex items-start justify-between w-full mb-2">
            <span class="text-2xl font-bold">30%</span>

            <div class="bg-slate-200 h-8 w-8 rounded-md center">
              <Icon :icon="'solar:arrow-right-up-linear'" :width="18" />
            </div>
          </div>
          <div class="flex items-center justify-between w-full">
            <div class="text-sm font-semibold ml-1 whitespace-nowrap">
              <div>{{ value.title }}</div>
              <div class="text-slate-400 text-[10px]">{{ value.description }}</div>
            </div>
            <LineGraph class="w-1/2 h-16 mb-4" />
          </div>

        </div>
      </div>
      <div class="grid grid-cols-2 gap-2 bg-slate-200 p-2 rounded-xl mt-2">
        <div class="col-span-2 text-black text-xl font-semibold mb-2 mt-2">
          Overview Summary
        </div>
        <div @click="navigateTo('0')" v-for="(value, index) in 2" :key="index" class="h-32 w-[268px] shadow text-black font-semibold border-transparent flex flex-col justify-between rounded-2xl bg-slate-100 
          p-4 text-sm">
          <div class="flex items-start justify-between w-full mb-2">
            <span class="text-2xl font-bold">30%</span>

            <div class="bg-slate-200 h-8 w-8 rounded-md center">
              <Icon :icon="'solar:arrow-right-up-linear'" :width="18" />
            </div>
          </div>
          <div class="flex items-center justify-between w-full">
            <div class="text-sm font-semibold ml-1 whitespace-nowrap">
              <div>Sample title</div>
              <div class="text-slate-400 text-[10px]">Sample description</div>
            </div>
            <LineGraph class="w-1/2 h-16 mb-4" />
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { encrypt } from '@/composables/encrypt';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import CircularProgressBar from '@/components/shared/Progress/CircularProgressBar.vue';
import LineGraph from '@/components/shared/Progress/LineGraph.vue';
import { Icon, type IconifyIcon } from "@iconify/vue";

const user: string = sessionStorage.getItem('user') ?? ''
const userDetails = JSON.parse(user);

const router = useRouter();
const route = useRoute();

const navigateTo = (id: string) => {
  router.push({
    name: "main",
    params: { id: encrypt(id) },
    query: route.query,
    hash: route.hash
  });
};

const amountSummaries = [
  {
    title: "Personal Portfolio",
    description: "Description to come",
    amount: "5,678,500,000",
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
    description: "Description to come",
    amount: "4,000,000,000",
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
    description: "Description to come",
    amount: "1,678,500,000",
    value: 30,
    max: 100,
    size: 60,
    strokeWidth: 8,
    stopOne: 'oklch(86.5% 0.127 207.078)',
    stopTwo: 'oklch(91.7% 0.08 205.041)',
    stopThree: 'oklch(78.9% 0.154 211.53)'
  }
];
const circularGraphSummaries = [
  {
    title: "Loan Requests",
    description: "Description to come",
    amount: 0,
    value: 100,
    max: 100,
    size: 60,
    strokeWidth: 8,
    stopOne: 'oklch(76.5% 0.127 207.078)',
    stopTwo: 'oklch(71.7% 0.08 205.041)',
    stopThree: 'oklch(78.9% 0.154 211.53)'
  },
  {
    title: "Approved Loans",
    description: "Description to come",
    amount: 0,
    value: 60,
    max: 100,
    size: 60,
    strokeWidth: 8,
    stopOne: 'oklch(36.5% 0.127 207.078)',
    stopTwo: 'oklch(31.7% 0.08 205.041)',
    stopThree: 'oklch(38.9% 0.154 211.53)'
  },
  {
    title: "Declined Loans",
    description: "Description to come",
    amount: 0,
    value: 80,
    max: 100,
    size: 60,
    strokeWidth: 8,
    stopOne: 'oklch(6.5% 0.127 207.078)',
    stopTwo: 'oklch(1.7% 0.08 205.041)',
    stopThree: 'oklch(8.9% 0.154 211.53)'
  }
];
const linearGraphSummaries = [
  {
    title: "Loan Requests",
    description: "Description to come",
    amount: 0,
    value: 90,
    max: 100,
    size: 60,
    strokeWidth: 8,
    stopOne: 'oklch(76.5% 0.127 207.078)',
    stopTwo: 'oklch(71.7% 0.08 205.041)',
    stopThree: 'oklch(78.9% 0.154 211.53)'
  },
  {
    title: "Approved Loans",
    description: "Description to come",
    amount: 0,
    value: 60,
    max: 100,
    size: 60,
    strokeWidth: 8,
    stopOne: 'oklch(36.5% 0.127 207.078)',
    stopTwo: 'oklch(31.7% 0.08 205.041)',
    stopThree: 'oklch(38.9% 0.154 211.53)'
  },
  {
    title: "Pending Loans",
    description: "Description to come",
    amount: 0,
    value: 80,
    max: 100,
    size: 60,
    strokeWidth: 8,
    stopOne: 'oklch(6.5% 0.127 207.078)',
    stopTwo: 'oklch(1.7% 0.08 205.041)',
    stopThree: 'oklch(8.9% 0.154 211.53)'
  },
  {
    title: "Declined Loans",
    description: "Description to come",
    amount: 0,
    value: 80,
    max: 100,
    size: 60,
    strokeWidth: 8,
    stopOne: 'oklch(6.5% 0.127 207.078)',
    stopTwo: 'oklch(1.7% 0.08 205.041)',
    stopThree: 'oklch(8.9% 0.154 211.53)'
  }
];
</script>

<style>

</style>