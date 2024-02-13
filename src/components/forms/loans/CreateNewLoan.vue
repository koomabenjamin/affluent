<template>
  <SlideInModal :isModalOpen="props.open" @close="closeModal()" title="Add Member Collection"
    description="Use this form to input a member's loan for the specified period of time.">
    <template #body>
      <div class="flex flex-col space-y-2">
        <div class="mt-2 grid gap-4 w-full grid-cols-1">
          <div>
            <Input type="text" :error="loanResponseError.member" v-model="loanRequest.member" label="Member"
              icon="heroicons:user" :icon-size="25" />
          </div>
          <div>
            <Input type="month" :error="loanResponseError.period" v-model="loanRequest.period"
              label="Period paid For:" icon="heroicons:banknote" :icon-size="25" />
          </div>
          <div>
            <Input type="number" :error="loanResponseError.amount" v-model="loanRequest.amount" label="Amount"
              icon="heroicons:banknote" :icon-size="25" />
          </div>
          <div>
            <Input type="number" :error="loanResponseError.account_paid_from"
              v-model="loanRequest.account_paid_from" label="From Account:" icon="heroicons:banknote"
              :icon-size="25" />
          </div>
          <div>
            <Input type="text" :error="loanResponseError.account_paid_to"
              v-model="loanRequest.account_paid_to" label="To Account:" icon="heroicons:banknote" :icon-size="25" />
          </div>
          <div>
            <Input type="text" :error="loanResponseError.payment_method" v-model="loanRequest.payment_method"
              label="Payment Method:" icon="heroicons:banknote" :icon-size="25" />
          </div>
          <div>
            <Input type="date" :error="loanResponseError.payment_date" v-model="loanRequest.payment_date"
              label="Payment Date" icon="heroicons:calendar" :icon-size="25" />
          </div>
          <div>
            <TextArea type="text" :error="loanResponseError.payment_note" v-model="loanRequest.payment_note"
              label="Payment Date" icon="heroicons:pencil" :icon-size="25" />
          </div>
        </div>

        <div class="mt-4">
          <Button label="Confirm" :loader="loanBeingSaved" size="block" @click="saveCollection()"/>
        </div>
      </div>
    </template>
  </SlideInModal>
</template>

<script setup lang="ts">
import { ref, reactive, inject, onBeforeMount, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { customAxios } from "../../../composables/axios";
import { useCollectionStore } from "../../../stores/loan-store";
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
import MasterPage from "../../shared/MasterPage.vue";

import useAuthentication from "@/composables/auth";

export interface CreateGroupModalProps {
  open?: boolean | undefined;
}

const { register, errorMessages, authLoader } = useAuthentication();

export interface CreateGroupModalProps {
  open?: boolean | undefined;
}

const props = defineProps<CreateGroupModalProps>();
const emit = defineEmits(['close'])
const closeModal = () => emit('close');

const user = ref(null);
const loanStore = useCollectionStore();
const { loans, loadingCollections } = storeToRefs(loanStore);
const loanBeingSaved = ref(false);
const _errorMessages = ref<GroupCreationResponseError>({});

const loanRequest = reactive({
  group: 1,
  member: "",
  period: "",
  amount: "",
  account_paid_from: 100020,
  account_paid_to: "",
  payment_method: "",
  payment_date: "",
  payment_note: "",
});
const loanResponseError = reactive({
  user_name: "",
  loan_amount: "",
  interest_rate: "",
  interest_amount: "",
  total_loan_debt: "",
  date_of_disbursment: "",
  expiry_date: "",
  collateral: "",
  issue_date: "",
  repayment_period: "",
});

const saveCollection = async () => {
  await loanStore.save(loanRequest);
};
</script>

<style></style>