<template>
  <table class="w-full">
    <thead>
      <tr>
        <th v-for="column in columns" :key="column" class="capitalize text-left">{{ column.replace(/_/g, " ") }}</th>
        <th class="text-left" v-if="actions">Actions</th>
      </tr>
    </thead>
    <tr v-for="(value, index) in rows" :key="index" class="h-10 bg-slate-50">
      <td v-for="column in columns" :key="column" class="text-xs">
        {{ value[column] }}
      </td>
      <td v-if="actions">
        <slot name="actions"></slot>
      </td>
    </tr>
    <tfoot>
      <tr>
        <th v-for="column in columns" :key="column" class="capitalize text-xs text-left">{{ column.replace(/_/g, " ") }}</th>
      </tr>
    </tfoot>
  </table>
  <NoData label="groups" v-if="rows?.length === 0" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import NoData from './NoData.vue';

export interface DataTableProps {
  rows?: any[];
  columns?: string[] | number[] | object;
  columnCount?: number;
  actions?: boolean;
}

const props = defineProps<DataTableProps>();

const columnCount = computed(() => props.columns?.length);
</script>

<style></style>