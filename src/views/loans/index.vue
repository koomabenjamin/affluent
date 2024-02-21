<template>
  <create-group :open="showCreateGroupModal" @close="closeCreateGroupModal()"></create-group>

  <Container>
    <div class="w-full flex items-center justify-between mt-5">
      <div class="text-xl font-bold">Loans</div>
      <Button label="Create New Loan" size="md" @click="closeCreateGroupModal()" />
    </div>

    <DataTable :rows="loans" :columns="columns" :column-count="4"/>
    
  </Container>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { storeToRefs } from "pinia";
import { useLoanStore } from "../../stores/loan-store";

import Container from "@/components/shared/Container.vue";
import CreateGroup from "@/components/forms/loans/CreateNewLoan.vue";
import Button from "@/components/shared/Button.vue";
import DataTable from "@/components/shared/DataTable.vue";

const loanStore = useLoanStore();
const { loans, loadingLoans } = storeToRefs(loanStore);

const columns = ref<string[]>(
  [
    'name',
    'email',
    'groups',
    'created at',
  ]
);

const columnCount = ref<Number>(columns.value.length)

const showCreateGroupModal = ref<boolean>(false);
const closeCreateGroupModal = () => showCreateGroupModal.value = !showCreateGroupModal.value;

onBeforeMount(() => {
  loanStore.fetchAll('1');
});
</script>

<style></style>