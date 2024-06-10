<template>
  <create-group :open="showCreateGroupModal" @close="closeCreateGroupModal()"></create-group>

  <Container>
    <div class="w-full flex items-center justify-between mt-5">
      <div class="text-xl font-bold">Loan Requests</div>
      <Button label="Create New Loan" size="md" @click="closeCreateGroupModal()" />
    </div>

    <DataTable :rows="loans" :columns="columns" :column-count="4" actions>
      <template #actions>
        <div class="flex space-x-2 items-center text-xs">
          <IconButton 
          @click="action()" class="" size="sm" :icon-size="18" type="edit" :loader="false" icon="material-symbols:ink-pen-outline" />
          <IconButton 
          @click="action()" class="" size="sm" :icon-size="18" type="delete" :loader="false" icon="material-symbols:delete-outline-rounded" />
          <IconButton 
          @click="action()" class="" size="sm" :icon-size="18" type="info" :loader="false" icon="material-symbols:info-outline" />
          <!-- <button>Edit</button> -->
          <!-- <button>Detail</button> -->
          <!-- <button>Delete</button> -->
        </div>
      </template>
    </DataTable>

  </Container>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { storeToRefs } from "pinia";
import { useLoanStore } from "../../stores/loan-store";

import Container from "@/components/shared/Container.vue";
import CreateGroup from "@/components/forms/loans/CreateNewLoan.vue";
import Button from "@/components/shared/Button.vue";
import IconButton from "@/components/shared/buttons/IconButton.vue";
import DataTable from "@/components/shared/DataTable.vue";

const loanStore = useLoanStore();
const { loans, loadingLoans } = storeToRefs(loanStore);

const columns = ref<string[]>(
  [
    'amount',
    'interest_rate',
    'total_loan_debt',
    'repayment_period',
    'request_date',
    'expiry_date',
    'approval'
  ]
);

const action = () => alert('Action to be performed');

const columnCount = ref<Number>(columns.value.length)

const showCreateGroupModal = ref<boolean>(false);
const closeCreateGroupModal = () => showCreateGroupModal.value = !showCreateGroupModal.value;

onBeforeMount(() => {
  loanStore.fetchAll('1');
});
</script>

<style></style>