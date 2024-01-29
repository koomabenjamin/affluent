<template>
  <SlideInModal :isModalOpen="props.open" @close="close" title="Add Member Collection" description="Use this form to input a member's collection for the specified period of time.">
    <template #body>
      <form class="flex flex-col space-y-2">
        <div class="mt-2 grid gap-4 w-full grid-cols-1">
          <div>
            <Input type="text" :error="collectionResponseError.member" v-model="collectionRequest.member"
              label="Member" icon="heroicons:user" :icon-size="25" />
          </div>
          <div>
            <Input type="month" :error="collectionResponseError.period" v-model="collectionRequest.period"
              label="Period paid For:" />
          </div>
          <div>
            <Input type="number" :error="collectionResponseError.amount" v-model="collectionRequest.amount"
              label="Amount" icon="heroicons:banknote" :icon-size="25" />
          </div>
          <div>
            <Input type="number" :error="collectionResponseError.account_paid_from" v-model="collectionRequest.account_paid_from"
              label="From Account:" icon="heroicons:banknote" :icon-size="25" />
          </div>
          <div>
            <Input type="text" :error="collectionResponseError.account_paid_to" v-model="collectionRequest.account_paid_to"
              label="To Account:" icon="heroicons:banknote" :icon-size="25" />
          </div>
          <div>
            <Input type="text" :error="collectionResponseError.payment_method" v-model="collectionRequest.payment_method"
              label="Payment Method:" icon="heroicons:banknote" :icon-size="25" />
          </div>
          <div>
            <Input type="date" :error="collectionResponseError.payment_date" v-model="collectionRequest.payment_date"
              label="Payment Date" icon="heroicons:calendar" :icon-size="25" />
          </div>
          <div>
            <TextArea type="text" :error="collectionResponseError.payment_note" v-model="collectionRequest.payment_note"
              label="Payment Date" icon="heroicons:pencil" :icon-size="25" />
          </div>
        </div>

        <div class="mt-4">
          <Button label="Confirm" :loader="collectionBeingSaved" size="block" />
        </div>
      </form>
    </template>
  </SlideInModal>
</template>

<script setup lang="ts">
import { ref, reactive, inject, onBeforeMount, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { customAxios } from "../../../composables/axios";
import { useCollectionStore } from "../../../stores/collection-store";
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
const collectionStore = useCollectionStore();
const { collections, loadingGroups } = storeToRefs(collectionStore);
const collectionBeingSaved = ref(false);
const _errorMessages = ref<GroupCreationResponseError>({});

const collectionRequest = reactive({
  user_name: "",
  collection_amount: "",
  interest_rate: "",
  interest_amount: 100020,
  total_collection_debt: "",
  date_of_disbursment: "",
  expiry_date: "",
  collateral: "",
  collateralValue: "",
  issue_date: "",
  repayment_period: "",
});
const collectionResponseError = reactive({
  user_name: "",
  collection_amount: "",
  interest_rate: "",
  interest_amount: "",
  total_collection_debt: "",
  date_of_disbursment: "",
  expiry_date: "",
  collateral: "",
  issue_date: "",
  repayment_period: "",
});

const saveLoan = async () => {
  // collectionBeingSaved.value = true;
  try {

    const response = await customAxios.post("/collections/store_member_collection", collectionRequest);

  } catch (error) {
    // console.log(error.response.data)
    // if(error.response.data.hasOwnProperty('errors')) Object.assign(collectionResponseError, error.response.data.errors);
    // console.log(collectionResponseError)

  } finally {

    collectionBeingSaved.value = false;
    collectionStore.fetchCollections();
  }
  // closeModal();
};
</script>

<style></style>