<template>
  <div class="w-full overflow-auto">
    <table class="lg:w-full w-[800px] mt-4">
      <thead>
        <tr>
          <th></th>
          <th v-for="column in columns" :key="column" class="capitalize text-left text-sm h-10">{{ column.replace(/_/g, " ") }}</th>
          <th class="text-left" v-if="actions">
            <!--SLOT FOR CUSTOM ACTIONS FOR ANY COMPONENT THAT USES THE DATATABLE-->
            <slot name="actions"></slot>
          </th>
        </tr>
      </thead>
      <tr v-for="(value, index) in rows" :key="index" class="bg-slate-50 border-b">
        <td class="text-xs">{{ getRowId(index.toString()) }}.</td>
        <td v-for="column in columns" :key="column" class="text-xs pl-2 pr-2 py-4">
          {{ value[column] }}
        </td>
        <td v-if="actions">
          <slot name="actions"></slot>
        </td>
      </tr>
      <tfoot v-if="rows?.length > 10">
        <tr>
          <th></th>
          <th v-for="column in columns" :key="column" class="capitalize text-sm text-left h-10">{{ column.replace(/_/g, " ") }}</th>
        </tr>
      </tfoot>
    </table>
  </div>
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

const getRowId = (id: string) => parseInt(id) + 1;

const columnCount = computed(() => props.columns?.length);
</script>

<style></style>