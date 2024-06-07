<template>
  <SlideInModal :isModalOpen="props.open" @close="closeModal()" title="Loan Request"
    description="Use this form to input a member's loan for the specified period of time.">
    <template #body>
      <div class="flex flex-col space-y-2 h-full">
        <div class="mt-2 grid gap-4 w-full grid-cols-1">
          <!-- <div>
            <v-select :options="months" label="name" v-model="loanRequest.period" multiple placeholder="Select an date" clearable></v-select>
          </div> -->
          <v-select :options="groups" label="name" v-model="selectedGroup" clearable placeholder="Select a group"></v-select>
          <div>
            <FloatingLabelInput type="number" :error="loanResponseError.amount" v-model="loanRequest.amount"
              label="Amount" icon="heroicons:banknote" :icon-size="25" />
          </div>
          <div>
            <FloatingLabelInput type="number" :error="loanResponseError.interest_rate"
              v-model="loanRequest.interest_rate" label="Interest Rate:" icon="heroicons:banknote" :icon-size="25" />
          </div>
          <div>
            <FloatingLabelInput type="number" :error="loanResponseError.interest_amount"
              v-model="loanRequest.interest_amount" label="Total Interest Amount:" icon="heroicons:banknote"
              :icon-size="25" />
          </div>
          <div>
            <FloatingLabelInput type="number" :error="loanResponseError.application_fee"
              v-model="loanRequest.application_fee" label="Application Fee:" icon="heroicons:banknote"
              :icon-size="25" />
          </div>
          <div>
            <FloatingLabelInput type="number" :error="loanResponseError.total_loan_debt"
              v-model="loanRequest.total_loan_debt" label="Total Loan Debt:" icon="heroicons:banknote"
              :icon-size="25" />
          </div>
          <div>
            <FloatingLabelInput type="date" :error="loanResponseError.date_of_disbursement"
              v-model="loanRequest.date_of_disbursement" label="Disbursement Date" icon="heroicons:calendar"
              :icon-size="25" />
          </div>
          <div>
            <FloatingLabelInput type="date" :error="loanResponseError.expiry_date" v-model="loanRequest.expiry_date"
              label="Expiry Date" icon="heroicons:pencil" :icon-size="25" />
          </div>
          <div>
            <FloatingLabelInput type="number" :error="loanResponseError.collateral" v-model="loanRequest.collateral"
              label="Collateral" icon="heroicons:pencil" :icon-size="25" />
          </div>
          <div>
            <FloatingLabelInput type="date" :error="loanResponseError.request_date" v-model="loanRequest.request_date"
              label="Request Date" icon="heroicons:pencil" :icon-size="25" />
          </div>
          <div>
            <FloatingLabelInput type="number" :error="loanResponseError.repayment_period"
              v-model="loanRequest.repayment_period" label="Repayment Period" icon="heroicons:pencil" :icon-size="25" />
          </div>
          <div>
            <FloatingLabelInput type="number" :error="loanResponseError.repayment_period_type"
              v-model="loanRequest.repayment_period_type" label="Repayment Period Type" icon="heroicons:pencil"
              :icon-size="25" />
          </div>
        </div>

        <div class="mt-4">
          <Button label="Confirm" :loader="loanBeingSaved" size="block" @click="saveLoan()" />
        </div>
      </div>
    </template>
  </SlideInModal>
</template>

<script setup lang="ts">
import { ref, reactive, inject, onBeforeMount, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useLoanStore } from "../../../stores/loan-store";
import { useMemberStore } from "../../../stores/member-store";
import { useGroupStore } from "../../../stores/group-store";
import TextArea from "../../shared/inputs/TextArea.vue";
import FloatingLabelInput from "../../shared/inputs/FloatingLabelInput.vue";
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

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export interface CreateGroupModalProps {
  open?: boolean | undefined;
}

const props = defineProps<CreateGroupModalProps>();

const emit = defineEmits(['close'])
const closeModal = () => emit('close');

const user = ref(null);

const loanStore = useLoanStore();
const memberStore = useMemberStore();
const groupStore = useGroupStore();

const { members, loadingMembers } = storeToRefs(memberStore);
const { loans, loadingLoans } = storeToRefs(loanStore);
const { groups } = storeToRefs(groupStore);

const loanBeingSaved = ref(false);

const selectedGroup = ref(null);

const loanRequest = reactive<LoanRequest>({
  amount: 0,
  group: null,
  interest_rate: 0,
  interest_amount: 0,
  application_fee: 0,
  total_loan_debt: 0,
  date_of_disbursement: "",
  expiry_date: "",
  collateral: "",
  request_date: "",
  repayment_period: "",
  repayment_period_type: "",
});
const loanResponseError = reactive<LoanRequest>({
  amount: 0,
  group: null,
  interest_rate: 0,
  interest_amount: 0,
  application_fee: 0,
  total_loan_debt: 0,
  date_of_disbursement: "",
  expiry_date: "",
  collateral: "",
  request_date: "",
  repayment_period: "",
  repayment_period_type: "",
});

const saveLoan = async () => {
  await loanStore.save(loanRequest);
};

onMounted(async () => {
  await groupStore.fetchAll();
  await memberStore.fetchAll(1);
})
</script>

<style></style>