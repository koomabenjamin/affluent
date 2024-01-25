<template>
  <SlideInModal :isModalOpen="props.open" @close="close">
    <template #body>
        <form class="flex flex-col space-y-2">
          <div class="mt-2 grid gap-4 w-full grid-cols-2">
                <div>
                  <Input
                    type="number"
                    :error="loanResponseError.loan_amount"
                    v-model="loanRequest.loan_amount"
                    label="Loan Amount"
                    icon="heroicons:envelope"
                    :icon-size="25"
                  />
                </div>
                <div>
                  <Input
                    type="number"
                    :error="loanResponseError.repayment_period"
                    v-model="loanRequest.repayment_period"
                    label="Repayment Period"
                    icon="heroicons:envelope"
                    :icon-size="25"
                  />
                </div>
                <div>
                  <Input
                    type="date"
                    :error="loanResponseError.issue_date"
                    v-model="loanRequest.issue_date"
                    label="Expected Due-date"
                    icon="heroicons:envelope"
                    :icon-size="25"
                  />
                </div>
                <div>
                  <Input
                    type="number"
                    :error="loanResponseError.interest_rate"
                    v-model="loanRequest.interest_rate"
                    label="Interest Rate (%)"
                    icon="heroicons:envelope"
                    :icon-size="25"
                  />
                </div>
                <!-- <div> -->
                  <Select
                    v-model:option-id="loanRequest.collateral"
                    v-model:option-name="loanRequest.collateralValue"
                    label="Collateral"
                    :options="[]"
                    :id="`collateral-select`"
                  />
                  <Input 
                    :error="loanResponseError.collateral"
                    v-model="loanRequest.collateral" 
                    label="Collateral"
                    icon="heroicons:envelope"
                    :icon-size="25"
                  />
                <!-- </div> -->
              </div>

              <div class="mt-4">
                <Button label="Confirm" :loader="groupBeingSaved" />
              </div>
        </form>
    </template>
  </SlideInModal>
</template>

<script setup lang="ts">
import { ref, reactive, inject, onBeforeMount, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { customAxios } from "../../../composables/axios";
import { useGroupStore } from "../../../stores/group-store";
import Input from "../../shared/inputs/Input.vue";
import MultiSelect from "../../shared/MultiSelect.vue";
import Button from "../../shared/Button.vue";
import SlideInModal from "../../shared/modals/SlideIn.vue"
import {
  XCircleIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/vue/24/outline";
import TextArea from "../../shared/inputs/TextArea.vue";
import MasterPage from "../../shared/MasterPage.vue";

import useAuthentication from "@/composables/auth";

export interface CreateGroupModalProps {
  open?: boolean | undefined;
}

export interface GroupCreationResponse {
  message: string;
  errors?: object;
  status?: string;
  data?: object | any;
}

export interface GroupCreationResponseError {
  email?: string,
  name?: string,
}

export interface GroupCreationRequest {
  name: string;
  description: string;
  email: string;
  phone_number: string,
  account_number: string;
  initial_account_balance: string;
  contract_start_date: string;
  contract_end_date: string;
  status: number;
}

const { register, errorMessages, authLoader } = useAuthentication();

export interface CreateGroupModalProps {
  open?: boolean | undefined;
}

const props = defineProps<CreateGroupModalProps>();
const emit = defineEmits(['close'])
const close = () => emit('close');

const user = ref(null);
const groupStore = useGroupStore();
const { groups, loadingGroups } = storeToRefs(groupStore);
const groupBeingSaved = ref(false);
const _errorMessages = ref<GroupCreationResponseError>({});

const loanRequest = reactive({
  user_name: "",
  loan_amount: "",
  interest_rate: "",
  interest_amount: 100020,
  total_loan_debt: "",
  date_of_disbursment: "",
  expiry_date: "",
  collateral: "",
  collateralValue: "",
  issue_date: "",
  repayment_period: "",
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

const saveLoan = async () => {
  // loanBeingSaved.value = true;
  try {
    
    const response = await customAxios.post("/loans/store_member_loan", loanRequest);
 
  } catch (error) {
    // console.log(error.response.data)
    // if(error.response.data.hasOwnProperty('errors')) Object.assign(loanResponseError, error.response.data.errors);
    // console.log(loanResponseError)

  } finally {

    groupBeingSaved.value = false;
    groupStore.fetchGroups();
  }
  // closeModal();
};
</script>

<style></style>