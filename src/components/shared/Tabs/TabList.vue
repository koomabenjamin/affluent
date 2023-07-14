<template>
  <Tab 
    v-for="tab in props.tabs" 
    :key="tab" 
    :label="tab" 
    @changeTab="updateTab(tab)" 
    :active-tab="active"
  />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Tab from "./Tab.vue";

export interface TabListProps {
  tabs: string[];
}
const props = defineProps<TabListProps>();

const active = ref<string>(props.tabs?.[0]);

const updateTab = (tab: string) => active.value = tab



</script>

<style></style>