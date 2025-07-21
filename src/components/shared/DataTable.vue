<template>
  <div class="h-96">
    <table class="w-full mt-4 overflow-auto">
      <thead>
        <tr class="border divide-x h-10">
          <th>#</th>
          <th v-for="column in columns" :key="column" class="capitalize text-left text-xs whitespace-nowrap pl-2">
            {{ removeSpecialCharacter(column) }}
          </th>
          <th v-if="actions" class="capitalize text-left text-xs pl-2">
            <!--SLOT FOR CUSTOM ACTIONS FOR ANY COMPONENT THAT USES THE DATATABLE-->
            <!-- <slot name="actions"></slot> -->
            Actions
          </th>
        </tr>
      </thead>
      <tbody :class="`${rows?.length > 0 ? 'border' : ''}`">
        <tr v-for="(value, index) in rows" :key="index" class="border-b divide-x" v-if="rows?.length > 0">
          <td class="text-xs pl-2">{{ getRowId(index.toString()) }}.</td>
          <td v-for="column in columns" :key="column" class="text-xs pl-2 pr-2 py-4">
            <div v-if="!customSlots?.includes(column)">{{ value[column] }}</div>
            <slot v-else :name="column" :data="value[column]"></slot>
          </td>
          <td v-if="actions" class="pl-2">
            <slot name="actions"></slot>
          </td>
        </tr>
        <tr v-else>
          <td :colspan="columns.length + 2" class="h-96">
            <NoData :label="dataGroupName" />
          </td>
        </tr>
      </tbody>
      <tfoot v-if="(rows?.length ?? 0) > 10">
        <tr>
          <th></th>
          <th v-for="column in columns" :key="column" class="capitalize text-xs text-left h-10">
            {{ removeSpecialCharacter(column) }}
          </th>
          <th v-if="actions" class="capitalize text-left text-xs h-10">
            <!--SLOT FOR CUSTOM ACTIONS FOR ANY COMPONENT THAT USES THE DATATABLE-->
            <!-- <slot name="actions"></slot> -->
            Actions
          </th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import NoData from './NoData.vue';

interface DataTableProps {
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

const props = withDefaults(defineProps<DataTableProps>(), {});

const getRowId = (id: string) => parseInt(id) + 1;

// const columnCount = computed(() => props.columns?.length);
</script>

<style></style>