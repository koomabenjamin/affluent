<template>
  <SlideInModal :isModalOpen="props.open" @close="closeModal()" title="Loan Request"
    description="Use this form to input a member's loan for the specified period of time.">
    <template #body>
      <div class="flex flex-col space-y-2 h-full">
        <div class="mt-2 grid gap-4 w-full grid-cols-1">
          <div>
            <Input type="number" :error="loanResponseError.member" v-model="loanRequest.member" label="Member"
              icon="heroicons:user" :icon-size="25" />
          </div>
          <div>
            <Input type="number" :error="loanResponseError.group" v-model="loanRequest.group"
              label="Period paid For:" icon="heroicons:banknote" :icon-size="25" />
          </div>
          <div>
            <Input type="number" :error="loanResponseError.amount" v-model="loanRequest.amount" label="Amount"
              icon="heroicons:banknote" :icon-size="25" />
          </div>
          <div>
            <Input type="number" :error="loanResponseError.interest_rate"
              v-model="loanRequest.interest_rate" label="Interest Rate:" icon="heroicons:banknote"
              :icon-size="25" />
          </div>
          <div>
            <Input type="number" :error="loanResponseError.interest_amount"
              v-model="loanRequest.interest_amount" label="Total Interest Amount:" icon="heroicons:banknote"
              :icon-size="25" />
          </div>
          <div>
            <Input type="number" :error="loanResponseError.application_fee"
              v-model="loanRequest.application_fee" label="Application Fee:" icon="heroicons:banknote" :icon-size="25" />
          </div>
          <div>
            <Input type="number" :error="loanResponseError.total_loan_debt" v-model="loanRequest.total_loan_debt"
              label="Total Loan Debt:" icon="heroicons:banknote" :icon-size="25" />
          </div>
          <div>
            <Input type="date" :error="loanResponseError.date_of_disbursement" v-model="loanRequest.date_of_disbursement"
              label="Disbursement Date" icon="heroicons:calendar" :icon-size="25" />
          </div>
          <div>
            <Input type="date" :error="loanResponseError.expiry_date" v-model="loanRequest.expiry_date"
              label="Expiry Date" icon="heroicons:pencil" :icon-size="25" />
          </div>
          <div>
            <Input type="number" :error="loanResponseError.collateral" v-model="loanRequest.collateral"
              label="Collateral" icon="heroicons:pencil" :icon-size="25" />
          </div>
          <div>
            <Input type="date" :error="loanResponseError.request_date" v-model="loanRequest.request_date"
              label="Request Date" icon="heroicons:pencil" :icon-size="25" />
          </div>
          <div>
            <Input type="number" :error="loanResponseError.repayment_period" v-model="loanRequest.repayment_period"
              label="Repayment Period" icon="heroicons:pencil" :icon-size="25" />
          </div>
          <div>
            <Input type="number" :error="loanResponseError.repayment_period_type" v-model="loanRequest.repayment_period_type"
              label="Repayment Period Type" icon="heroicons:pencil" :icon-size="25" />
          </div>
        </div>

        <div class="mt-4">
          <Button label="Confirm" :loader="loanBeingSaved" size="block" @click="saveLoan()"/>
        </div>
      </div>
    </template>
  </SlideInModal>
</template>

<script setup lang="ts">
import { ref, reactive, inject, onBeforeMount, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useLoanStore } from "../../../stores/loan-store";
import TextArea from "../../shared/inputs/TextArea.vue";
import Input from "../../shared/inputs/Input.vue";
import MultiSelect from "../../shared/MultiSelect.vue";
import Button from "../../shared/Button.vue";
import SlideInModal from "../../shared/modals/SlideIn.vue"
import {
  XCircleIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/vue/24/outline";
import type { LoanPayload, Endpoint, LoanResponse, LoanRequest } from "@/types";

import useAuthentication from "@/composables/auth";

const { register, errorMessages, authLoader } = useAuthentication();

export interface CreateGroupModalProps {
  open?: boolean | undefined;
}

const props = defineProps<CreateGroupModalProps>();

const emit = defineEmits(['close'])
const closeModal = () => emit('close');

const user = ref(null);
const loanStore = useLoanStore();
const { loans, loadingLoans } = storeToRefs(loanStore);
const loanBeingSaved = ref(false);

const loanRequest = reactive<LoanRequest>({
  amount : 0,
  member : "",
  group : "",
  interest_rate : 0,
  interest_amount : 0,
  application_fee : 0,
  total_loan_debt : 0,
  date_of_disbursement : "",
  expiry_date : "",
  collateral : "",
  request_date : "",
  repayment_period : "",
  repayment_period_type : "",
});
const loanResponseError = reactive<LoanRequest>({
  amount : 0,
  member : "",
  group : "",
  interest_rate : 0,
  interest_amount : 0,
  application_fee : 0,
  total_loan_debt : 0,
  date_of_disbursement : "",
  expiry_date : "",
  collateral : "",
  request_date : "",
  repayment_period : "",
  repayment_period_type : "",
});

const saveLoan = async () => {
  await loanStore.save(loanRequest);
};
</script>

<style></style>