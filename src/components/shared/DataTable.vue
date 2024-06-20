<template>
  <div class="w-full overflow-auto">

    <table class="lg:w-full w-[800px] mt-4 overflow-auto">

      <thead>
        <tr class="">
          <th></th>
          <th v-for="column in columns" :key="column" class="capitalize text-left text-xs h-10 whitespace-nowrap">{{ removeSpecialCharacter(column) }}</th>
          <th v-if="actions" class="capitalize text-left text-xs h-10">
            <!--SLOT FOR CUSTOM ACTIONS FOR ANY COMPONENT THAT USES THE DATATABLE-->
            <!-- <slot name="actions"></slot> -->
            Actions
          </th>
        </tr>
      </thead>

      <tr v-for="(value, index) in rows" :key="index" class="bg-slate-50 border-b">

        <td class="text-xs">{{ getRowId(index.toString()) }}.</td>

        <td v-for="column in columns" :key="column" class="text-xs pl-2 pr-2 py-4">
          <div v-if="!customSlots?.includes(column)">{{ value[column] }}</div>
          <slot v-else :name="column"></slot>
        </td>

        <td v-if="actions">
          <slot name="actions"></slot>
        </td>

      </tr>
      <tfoot v-if="(rows?.length ?? 0) > 10">
        <tr>
          <th></th>
          <th v-for="column in columns" :key="column" class="capitalize text-sm text-left h-10">{{ removeSpecialCharacter(column) }}</th>
        </tr>
      </tfoot>

    </table>
  </div>
  <NoData :label="dataGroupName" v-if="rows?.length === 0" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import NoData from './NoData.vue';

export interface DataTableProps {
  rows?: any[] | undefined;
  columns?: string[] | number[] | object;
  columnCount?: number;
  actions?: boolean;
  dataGroupName?: string;
  customSlots?: string[],
}

const removeSpecialCharacter = (name: string): string => {
  return name.replace(/_/g, " ")
} 

const props = defineProps<DataTableProps>();

const getRowId = (id: string) => parseInt(id) + 1;

// const columnCount = computed(() => props.columns?.length);
</script>

<style></style>