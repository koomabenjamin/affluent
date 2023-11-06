<template>
  <div :class="`mt-2 grid grid-cols-${columnCount} gap-1`">
    <div v-for="column in columns" :key="column" class="capitalize text-sm">{{ column.replace(/_/g, " ") }}</div>
  </div>
  <div v-for="(value, index) in rows" :key="index" :class="`col-span-${columnCount} grid grid-cols-${columnCount} gap-1`">
    <div v-for="column in columns" :key="column" class="text-[10px]">
      {{ value[column] }}
    </div>
  </div>
  <div>Footer</div>
  <NoData label="groups" v-if="rows?.length === 0" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NoData from './NoData.vue';

export interface DataTableProps {
  rows?: any[];
  columns?: string[] | number[] | object;
  columnCount?: number;
}

defineProps<DataTableProps>();
</script>

<style></style>