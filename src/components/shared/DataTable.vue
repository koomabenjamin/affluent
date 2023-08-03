<template>
  <div class="hidden lg:block lg:w-full border border-slate-200 h-[500px] overflow-auto relative">
    <div
      class="grid grid-cols-8 gap-2 px-2 py-1 font-bold space-x-2 border-b text-sm w-full sticky top-0 bg-slate-100 h-10 place-content-center">
      <div class="col-span-3">Group</div>
      <div class="col-span-2">Saving worth</div>
      <div class="col-span-2">Asset Worth</div>
      <div class="">Status</div>
    </div>
    <div v-for="summary in groups" :key="summary?.id"
      class="grid grid-cols-8 gap-2 w-full items-center space-x-2 justify-between border-b border-slate-200 shadow p-2 rounded">
      <div class="flex space-x-2 flex-shrink-0 col-span-3">
        <div class="bg-blue-500 h-12 w-12 rounded flex-shrink-0"></div>
        <div class="flex flex-col justify-center">
          <div class="font-bold text-sm">{{ summary.name }}</div>
          <div class="text-xs">#00013 Created on: {{ summary.created_at }}</div>
        </div>
      </div>
      <div class="font-semibold text-sm text-blue-500 col-span-2">{{ summary?.month_collections }}</div>
      <div class="font-semibold text-sm text-blue-500 col-span-2">{{ summary?.account_balance }}</div>
      <div class="flex space-x-1 items-center text-xs">
        <div class="h-3 w-3 rounded-full bg-green-500"></div>
        <span>Active</span>
      </div>
    </div>
    <NoData label="groups" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NoData from './NoData.vue';

interface GroupSummary {
  id?: string,
  name?: string,
  account_balance?: number,
  month_collections?: number,
  member_count?: number,
  created_at?: number,
}

const groups = ref<GroupSummary[]>([]);
</script>

<style></style>