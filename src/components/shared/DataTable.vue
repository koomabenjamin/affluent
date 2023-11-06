<template>
  <div class="hidden lg:block lg:w-full border border-slate-200 h-[500px] overflow-auto relative">
    <div class="w-full mt-2 grid grid-cols-6 gap-1">
      <div v-for="column in columns" :key="column" class="capitalize">{{ column.replace(/_/g, " ") }}</div>
      <div v-for="(value, index) in rows" :key="index" class="col-span-6 grid grid-cols-6 gap-1">
        <div v-for="column in columns" :key="column" class="text-[10px]">{{ value[column] }}</div>
      </div>
    </div>
    <div>Footer</div>
    <NoData label="groups"  v-if="rows.length === 0"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NoData from './NoData.vue';

export interface DataTableProps {
  rows?: any[],
  columns?: string[] | number[],
}

defineProps<DataTableProps>();
</script>

<style></style>