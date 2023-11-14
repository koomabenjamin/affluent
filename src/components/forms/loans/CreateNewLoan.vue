<template>
  <SlideInModal :isModalOpen="props.open" @close="close">
    <template #body>
        <form @submit.prevent="register(credentials)" class="flex flex-col space-y-2">
          <div class="mt-2 grid gap-4 w-full grid-cols-2">
                <div>
                  <Input
                    type="number"
                    :error="loanResponseError.loan_amount"
                    v-model="loanRequest.loan_amount"
                    label="Loan Amount"
                  />
                </div>
                <div>
                  <Input
                    type="number"
                    :error="loanResponseError.repayment_period"
                    v-model="loanRequest.repayment_period"
                    label="Repayment Period"
                  />
                </div>
                <div>
                  <Input
                    type="date"
                    :error="loanResponseError.issue_date"
                    v-model="loanRequest.issue_date"
                    label="Expected Due-date"
                  />
                </div>
                <div>
                  <Input
                    type="number"
                    :error="loanResponseError.interest_rate"
                    v-model="loanRequest.interest_rate"
                    label="Interest Rate (%)"
                  />
                </div>
                <!-- <div> -->
                  <Select
                    v-model:option-id="loanRequest.collateral"
                    v-model:option-name="loanRequest.collateralValue"
                    label="Collateral"
                    :options="collateralOptions"
                    :id="`collateral-select`"
                  />
                  <Input 
                    :error="loanResponseError.collateral"
                    v-model="loanRequest.collateral" 
                    label="Collateral" />
                <!-- </div> -->
              </div>

              <div class="mt-4">
                <Button label="Confirm" :loader="loanBeingSaved" />
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
import {
  GroupCreationRequest,
  GroupCreationResponse,
  GroupCreationResponseError
} from "@/types";

import useAuthentication from "@/composables/auth";

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
  loanBeingSaved.value = true;
  try {
    
    const response = await customAxios.post("/loans/store_member_loan", loanRequest);
 
  } catch (error) {
    console.log(error.response.data)
    if(error.response.data.hasOwnProperty('errors')) Object.assign(loanResponseError, error.response.data.errors);
    console.log(loanResponseError)

  } finally {

    loanBeingSaved.value = false;
    loanStore.fetchMemberLoans();
  }
  // closeModal();
};
</script>

<style></style>