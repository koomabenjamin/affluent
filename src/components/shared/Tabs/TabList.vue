<template>
  <div class="w-auto flex items-center overflow-auto divide-x mt-2 border rounded">
    <TabItem
      v-for="tab in props.tabs"
      :key="tab"
      :label="tab"
      @changeTab="updateTab(tab)"
      :active-tab="active"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import TabItem from "./TabItem.vue";

export interface TabListProps {
  tabs: string[];
  modelValue: string | any;
}
const props = defineProps<TabListProps>();

const active = ref<string>(props.tabs?.[0]);

const updateTab = (tab: string) => {
  active.value = tab;
  emits('update:modelValue', tab)
}

const emits = defineEmits(['update:modelValue'])

</script>

<style></style>