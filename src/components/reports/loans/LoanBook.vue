<template>
  <DataTable
    :columns="['member', 'amount', 'interest_rate', 'repayment_period', 'overdue', 'guarantor', 'collateral', 'total_loan_debt']"
    :custom-slots="['overdue', 'guarantor']"
    :rows="tempLoans">
    <template #overdue>✅</template>
    <template #guarantor>None</template>
  </DataTable>
</template>

<script setup lang="ts">
/**
 * |
 * | Group - Affluent Investment Club ^
 * |
 * | Year - 2024 | Month - August | Start Date - 01/08/2024 | End Date - 30/08/2024
 * |
 * | ------ | ---------- | ------------- | ---------------- | --------------- | ---------------- | --------- | ---------- | ------------------
 * | Member | Loan Aount | Interest Rate | Repayment Period |     Overdue     | Disbursment Date | Guarantor | Collateral | Total Loan Amount |
 * | ------ | ---------- | ------------- | ---------------- | --------------- | ---------------- | --------- | ---------- | ------------------
 * | Ben... | 100,000.00 |       25%     |     4 months >>  |        ✅        |     08/05/2024  |   Andrew  |       None |    200,000.00     
 * | ------ | ---------- | ------------- | ---------------- | --------------- | ---------------- | --------- | ---------- | ------------------
 * | Ben... | 100,000.00 |       25%     |     4 months >>  |        ❌        |     08/05/2024  |   Andrew  |       None |    200,000.00
 * | ------ | ---------- | ------------- | ---------------- | --------------- | ---------------- | --------- | ---------- | ------------------
 * | Ben... | 100,000.00 |       25%     |     4 months >>  |        ❌        |     08/05/2024  |   Andrew  |       None |    200,000.00
 * | ------ | ---------- | ------------- | ---------------- | --------------- | ---------------- | --------- | ---------- | ------------------
 * | Ben... | 100,000.00 |       25%     |     4 months >>  |        ✅        |     08/05/2024  |   Andrew  |       None |    200,000.00
 * | ------ | ---------- | ------------- | ---------------- | --------------- | ---------------- | --------- | ---------- | ------------------
 * | Ben... | 100,000.00 |       25%     |     4 months >>  |        ✅        |     08/05/2024  |   Andrew  |       None |    200,000.00
 * | ------ | ---------- | ------------- | ---------------- | --------------- | ---------------- | --------- | ---------- | ------------------
 * | Ben... | 100,000.00 |       25%     |     4 months >>  |        ❌        |     08/05/2024  |   Andrew  |       None |    200,000.00
 * | ------ | ---------- | ------------- | ---------------- | --------------- | ---------------- | --------- | ---------- | ------------------
 * | Ben... | 100,000.00 |       25%     |     4 months >>  |        ✅        |     08/05/2024  |   Andrew  |       None |    200,000.00
 * | ------ | ---------- | ------------- | ---------------- | --------------- | ---------------- | --------- | ---------- | ------------------
 * 
 * |--------|
 * |  KEY   |
 * |--------|
 * |   >>   | Detail column
 * |--------|
 * |   ^    | Drop-down
 * |--------|
*/

import { storeToRefs } from 'pinia';
import { useLoanStore } from '../../../stores/loan-store';
import DataTable from '../../../components/shared/DataTable.vue';

const loanStore = useLoanStore();
const { loans } = storeToRefs(loanStore);

const tempLoans = [
  { "id": 1, "member": 1, "amount": 4, "group": 67, "interest_rate": 95, "interest_amount": 6, "application_fee": null, "total_loan_debt": 36, "date_of_disbursement": "2024-07-02", "expiry_date": "1997-08-23", "collateral": 77, "request_date": "1979-04-18", "repayment_period": 77, "repayment_period_type": 33, "created_by": 1, "updated_by": null },
  { "id": 1, "member": 1, "amount": 4, "group": 67, "interest_rate": 95, "interest_amount": 6, "application_fee": null, "total_loan_debt": 36, "date_of_disbursement": "2024-07-02", "expiry_date": "1997-08-23", "collateral": 77, "request_date": "1979-04-18", "repayment_period": 77, "repayment_period_type": 33, "created_by": 1, "updated_by": null },
  { "id": 1, "member": 1, "amount": 4, "group": 67, "interest_rate": 95, "interest_amount": 6, "application_fee": null, "total_loan_debt": 36, "date_of_disbursement": "2024-07-02", "expiry_date": "1997-08-23", "collateral": 77, "request_date": "1979-04-18", "repayment_period": 77, "repayment_period_type": 33, "created_by": 1, "updated_by": null },
  { "id": 1, "member": 1, "amount": 4, "group": 67, "interest_rate": 95, "interest_amount": 6, "application_fee": null, "total_loan_debt": 36, "date_of_disbursement": "2024-07-02", "expiry_date": "1997-08-23", "collateral": 77, "request_date": "1979-04-18", "repayment_period": 77, "repayment_period_type": 33, "created_by": 1, "updated_by": null },
  { "id": 1, "member": 1, "amount": 4, "group": 67, "interest_rate": 95, "interest_amount": 6, "application_fee": null, "total_loan_debt": 36, "date_of_disbursement": "2024-07-02", "expiry_date": "1997-08-23", "collateral": 77, "request_date": "1979-04-18", "repayment_period": 77, "repayment_period_type": 33, "created_by": 1, "updated_by": null },
  { "id": 1, "member": 1, "amount": 4, "group": 67, "interest_rate": 95, "interest_amount": 6, "application_fee": null, "total_loan_debt": 36, "date_of_disbursement": "2024-07-02", "expiry_date": "1997-08-23", "collateral": 77, "request_date": "1979-04-18", "repayment_period": 77, "repayment_period_type": 33, "created_by": 1, "updated_by": null },
  { "id": 1, "member": 1, "amount": 4, "group": 67, "interest_rate": 95, "interest_amount": 6, "application_fee": null, "total_loan_debt": 36, "date_of_disbursement": "2024-07-02", "expiry_date": "1997-08-23", "collateral": 77, "request_date": "1979-04-18", "repayment_period": 77, "repayment_period_type": 33, "created_by": 1, "updated_by": null },
  { "id": 1, "member": 1, "amount": 4, "group": 67, "interest_rate": 95, "interest_amount": 6, "application_fee": null, "total_loan_debt": 36, "date_of_disbursement": "2024-07-02", "expiry_date": "1997-08-23", "collateral": 77, "request_date": "1979-04-18", "repayment_period": 77, "repayment_period_type": 33, "created_by": 1, "updated_by": null },
  { "id": 1, "member": 1, "amount": 4, "group": 67, "interest_rate": 95, "interest_amount": 6, "application_fee": null, "total_loan_debt": 36, "date_of_disbursement": "2024-07-02", "expiry_date": "1997-08-23", "collateral": 77, "request_date": "1979-04-18", "repayment_period": 77, "repayment_period_type": 33, "created_by": 1, "updated_by": null },
  { "id": 1, "member": 1, "amount": 4, "group": 67, "interest_rate": 95, "interest_amount": 6, "application_fee": null, "total_loan_debt": 36, "date_of_disbursement": "2024-07-02", "expiry_date": "1997-08-23", "collateral": 77, "request_date": "1979-04-18", "repayment_period": 77, "repayment_period_type": 33, "created_by": 1, "updated_by": null },
  { "id": 1, "member": 1, "amount": 4, "group": 67, "interest_rate": 95, "interest_amount": 6, "application_fee": null, "total_loan_debt": 36, "date_of_disbursement": "2024-07-02", "expiry_date": "1997-08-23", "collateral": 77, "request_date": "1979-04-18", "repayment_period": 77, "repayment_period_type": 33, "created_by": 1, "updated_by": null },
  { "id": 1, "member": 1, "amount": 4, "group": 67, "interest_rate": 95, "interest_amount": 6, "application_fee": null, "total_loan_debt": 36, "date_of_disbursement": "2024-07-02", "expiry_date": "1997-08-23", "collateral": 77, "request_date": "1979-04-18", "repayment_period": 77, "repayment_period_type": 33, "created_by": 1, "updated_by": null },
  { "id": 1, "member": 1, "amount": 4, "group": 67, "interest_rate": 95, "interest_amount": 6, "application_fee": null, "total_loan_debt": 36, "date_of_disbursement": "2024-07-02", "expiry_date": "1997-08-23", "collateral": 77, "request_date": "1979-04-18", "repayment_period": 77, "repayment_period_type": 33, "created_by": 1, "updated_by": null },
  { "id": 1, "member": 1, "amount": 4, "group": 67, "interest_rate": 95, "interest_amount": 6, "application_fee": null, "total_loan_debt": 36, "date_of_disbursement": "2024-07-02", "expiry_date": "1997-08-23", "collateral": 77, "request_date": "1979-04-18", "repayment_period": 77, "repayment_period_type": 33, "created_by": 1, "updated_by": null },
  { "id": 1, "member": 1, "amount": 4, "group": 67, "interest_rate": 95, "interest_amount": 6, "application_fee": null, "total_loan_debt": 36, "date_of_disbursement": "2024-07-02", "expiry_date": "1997-08-23", "collateral": 77, "request_date": "1979-04-18", "repayment_period": 77, "repayment_period_type": 33, "created_by": 1, "updated_by": null },
  { "id": 1, "member": 1, "amount": 4, "group": 67, "interest_rate": 95, "interest_amount": 6, "application_fee": null, "total_loan_debt": 36, "date_of_disbursement": "2024-07-02", "expiry_date": "1997-08-23", "collateral": 77, "request_date": "1979-04-18", "repayment_period": 77, "repayment_period_type": 33, "created_by": 1, "updated_by": null },
  { "id": 1, "member": 1, "amount": 4, "group": 67, "interest_rate": 95, "interest_amount": 6, "application_fee": null, "total_loan_debt": 36, "date_of_disbursement": "2024-07-02", "expiry_date": "1997-08-23", "collateral": 77, "request_date": "1979-04-18", "repayment_period": 77, "repayment_period_type": 33, "created_by": 1, "updated_by": null },
  { "id": 1, "member": 1, "amount": 4, "group": 67, "interest_rate": 95, "interest_amount": 6, "application_fee": null, "total_loan_debt": 36, "date_of_disbursement": "2024-07-02", "expiry_date": "1997-08-23", "collateral": 77, "request_date": "1979-04-18", "repayment_period": 77, "repayment_period_type": 33, "created_by": 1, "updated_by": null },
  { "id": 1, "member": 1, "amount": 4, "group": 67, "interest_rate": 95, "interest_amount": 6, "application_fee": null, "total_loan_debt": 36, "date_of_disbursement": "2024-07-02", "expiry_date": "1997-08-23", "collateral": 77, "request_date": "1979-04-18", "repayment_period": 77, "repayment_period_type": 33, "created_by": 1, "updated_by": null },
  { "id": 1, "member": 1, "amount": 4, "group": 67, "interest_rate": 95, "interest_amount": 6, "application_fee": null, "total_loan_debt": 36, "date_of_disbursement": "2024-07-02", "expiry_date": "1997-08-23", "collateral": 77, "request_date": "1979-04-18", "repayment_period": 77, "repayment_period_type": 33, "created_by": 1, "updated_by": null },
  { "id": 1, "member": 1, "amount": 4, "group": 67, "interest_rate": 95, "interest_amount": 6, "application_fee": null, "total_loan_debt": 36, "date_of_disbursement": "2024-07-02", "expiry_date": "1997-08-23", "collateral": 77, "request_date": "1979-04-18", "repayment_period": 77, "repayment_period_type": 33, "created_by": 1, "updated_by": null },
  { "id": 1, "member": 1, "amount": 4, "group": 67, "interest_rate": 95, "interest_amount": 6, "application_fee": null, "total_loan_debt": 36, "date_of_disbursement": "2024-07-02", "expiry_date": "1997-08-23", "collateral": 77, "request_date": "1979-04-18", "repayment_period": 77, "repayment_period_type": 33, "created_by": 1, "updated_by": null },
  { "id": 1, "member": 1, "amount": 4, "group": 67, "interest_rate": 95, "interest_amount": 6, "application_fee": null, "total_loan_debt": 36, "date_of_disbursement": "2024-07-02", "expiry_date": "1997-08-23", "collateral": 77, "request_date": "1979-04-18", "repayment_period": 77, "repayment_period_type": 33, "created_by": 1, "updated_by": null },
  { "id": 1, "member": 1, "amount": 4, "group": 67, "interest_rate": 95, "interest_amount": 6, "application_fee": null, "total_loan_debt": 36, "date_of_disbursement": "2024-07-02", "expiry_date": "1997-08-23", "collateral": 77, "request_date": "1979-04-18", "repayment_period": 77, "repayment_period_type": 33, "created_by": 1, "updated_by": null },
  { "id": 1, "member": 1, "amount": 4, "group": 67, "interest_rate": 95, "interest_amount": 6, "application_fee": null, "total_loan_debt": 36, "date_of_disbursement": "2024-07-02", "expiry_date": "1997-08-23", "collateral": 77, "request_date": "1979-04-18", "repayment_period": 77, "repayment_period_type": 33, "created_by": 1, "updated_by": null },
  { "id": 1, "member": 1, "amount": 4, "group": 67, "interest_rate": 95, "interest_amount": 6, "application_fee": null, "total_loan_debt": 36, "date_of_disbursement": "2024-07-02", "expiry_date": "1997-08-23", "collateral": 77, "request_date": "1979-04-18", "repayment_period": 77, "repayment_period_type": 33, "created_by": 1, "updated_by": null },
  { "id": 1, "member": 1, "amount": 4, "group": 67, "interest_rate": 95, "interest_amount": 6, "application_fee": null, "total_loan_debt": 36, "date_of_disbursement": "2024-07-02", "expiry_date": "1997-08-23", "collateral": 77, "request_date": "1979-04-18", "repayment_period": 77, "repayment_period_type": 33, "created_by": 1, "updated_by": null },
  { "id": 1, "member": 1, "amount": 4, "group": 67, "interest_rate": 95, "interest_amount": 6, "application_fee": null, "total_loan_debt": 36, "date_of_disbursement": "2024-07-02", "expiry_date": "1997-08-23", "collateral": 77, "request_date": "1979-04-18", "repayment_period": 77, "repayment_period_type": 33, "created_by": 1, "updated_by": null },
  { "id": 1, "member": 1, "amount": 4, "group": 67, "interest_rate": 95, "interest_amount": 6, "application_fee": null, "total_loan_debt": 36, "date_of_disbursement": "2024-07-02", "expiry_date": "1997-08-23", "collateral": 77, "request_date": "1979-04-18", "repayment_period": 77, "repayment_period_type": 33, "created_by": 1, "updated_by": null },
  { "id": 1, "member": 1, "amount": 4, "group": 67, "interest_rate": 95, "interest_amount": 6, "application_fee": null, "total_loan_debt": 36, "date_of_disbursement": "2024-07-02", "expiry_date": "1997-08-23", "collateral": 77, "request_date": "1979-04-18", "repayment_period": 77, "repayment_period_type": 33, "created_by": 1, "updated_by": null },
  { "id": 1, "member": 1, "amount": 4, "group": 67, "interest_rate": 95, "interest_amount": 6, "application_fee": null, "total_loan_debt": 36, "date_of_disbursement": "2024-07-02", "expiry_date": "1997-08-23", "collateral": 77, "request_date": "1979-04-18", "repayment_period": 77, "repayment_period_type": 33, "created_by": 1, "updated_by": null },
  { "id": 1, "member": 1, "amount": 4, "group": 67, "interest_rate": 95, "interest_amount": 6, "application_fee": null, "total_loan_debt": 36, "date_of_disbursement": "2024-07-02", "expiry_date": "1997-08-23", "collateral": 77, "request_date": "1979-04-18", "repayment_period": 77, "repayment_period_type": 33, "created_by": 1, "updated_by": null },
  { "id": 1, "member": 1, "amount": 4, "group": 67, "interest_rate": 95, "interest_amount": 6, "application_fee": null, "total_loan_debt": 36, "date_of_disbursement": "2024-07-02", "expiry_date": "1997-08-23", "collateral": 77, "request_date": "1979-04-18", "repayment_period": 77, "repayment_period_type": 33, "created_by": 1, "updated_by": null },
  { "id": 1, "member": 1, "amount": 4, "group": 67, "interest_rate": 95, "interest_amount": 6, "application_fee": null, "total_loan_debt": 36, "date_of_disbursement": "2024-07-02", "expiry_date": "1997-08-23", "collateral": 77, "request_date": "1979-04-18", "repayment_period": 77, "repayment_period_type": 33, "created_by": 1, "updated_by": null },
  { "id": 1, "member": 1, "amount": 4, "group": 67, "interest_rate": 95, "interest_amount": 6, "application_fee": null, "total_loan_debt": 36, "date_of_disbursement": "2024-07-02", "expiry_date": "1997-08-23", "collateral": 77, "request_date": "1979-04-18", "repayment_period": 77, "repayment_period_type": 33, "created_by": 1, "updated_by": null },
];

</script>

<style scoped></style>
