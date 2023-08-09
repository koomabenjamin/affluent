<template>
  <div class="hidden lg:block lg:w-full border border-slate-200 h-[500px] overflow-auto relative">

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