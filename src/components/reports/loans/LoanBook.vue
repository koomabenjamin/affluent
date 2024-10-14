<template>
  <div>Loan Book Report</div>
  <DataTable :columns="columns" :rows="loans" actions/>
</template>

<script setup lang="ts">
import DataTable from "../../shared/DataTable.vue";

const columns = [
  "id",
  "recipient",
  "amount",
  "amountPaid",
  "balance",
  "paymentStatus",
  "issueDate",
  "loanOfficer",
];

const loans = [
  {
    id: 1,
    recipient: "Jasper Doe",
    amount: "10,000,000",
    amountPaid: "8,000,000",
    balance: "2,500,000",
    paymentStatus: "partial",
    issueDate: "10/10/2023",
    loanOfficer: ""
  }
];
</script>

<style></style>