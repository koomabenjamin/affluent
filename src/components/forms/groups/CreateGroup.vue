<template>
  
  <SlideInModal :isModalOpen="props.open" @close="close">
    <template #body>
      <form @submit.prevent="saveGroup">
        <div class="mt-2 grid gap-4 w-full grid-cols-2">
          <div class="col-span-2">
            <FloatingLabelInput name="" icon="heroicons:envelope" type="text" v-model="groupCreationRequest.name" label="Group Name" :error="errorMessages?.name" required />
          </div>
          <div class="col-span-2">
            <TextArea name="" type="text" v-model="groupCreationRequest.description" label="Description" />
          </div>
          <div>
            <FloatingLabelInput name="" icon="heroicons:envelope" type="email" v-model="groupCreationRequest.email" label="Email" :error="errorMessages?.email" required />
          </div>
          <div>
            <FloatingLabelInput name="" icon="heroicons:envelope" type="number" v-model="groupCreationRequest.account_number" label="Account Number" />
          </div>
          <div>
            <FloatingLabelInput name="" icon="heroicons:envelope" type="number" v-model="groupCreationRequest.initial_account_balance" label="Initial Account Balance"
              required />
          </div>
          <div>
            <FloatingLabelInput name="" icon="heroicons:envelope" type="text" v-model="groupCreationRequest.phone_number" label="Phone Number" required />
          </div>
          <div>
            <FloatingLabelInput name="" icon="heroicons:envelope" type="date" v-model="groupCreationRequest.contract_start_date" label="Contract Start Date" required />
          </div>
          <div>
            <FloatingLabelInput name="" icon="heroicons:envelope" type="date" v-model="groupCreationRequest.contract_end_date" label="Contract End Date" required />
          </div>
        </div>

        <div class="mt-4 w-full">
          <Button label="Confirm" :loader="groupBeingSaved" size="block" />
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
import FloatingLabelInput from "../../../components/shared/inputs/FloatingLabelInput.vue";
import MultiSelect from "../../../components/shared/MultiSelect.vue";
import Button from "../../../components/shared/Button.vue";
import SlideInModal from "../../shared/modals/SlideIn.vue"
import {
  XCircleIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/vue/24/outline";
import TextArea from "../../../components/shared/inputs/TextArea.vue";
import MasterPage from "../../../components/shared/MasterPage.vue";

export interface Response {
  response?: object;
}

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
const errorMessages = ref<GroupCreationResponseError>({});

const groupCreationRequest = ref<GroupCreationRequest>({
  name: "",
  description: "",
  email: "",
  phone_number: "100020",
  account_number: "",
  initial_account_balance: "",
  contract_start_date: "",
  contract_end_date: "",
  status: 0,
});

const saveGroup = async () => {
  groupBeingSaved.value = true;
  try {

    const response:GroupCreationResponse = await customAxios.post('groups', groupCreationRequest.value);
    console.log(response);
  } catch (error) {
    const errors  = {}; //error?.response?.data?.errors;
    console.log(errors, error);
    Object.assign(errorMessages.value, errors);
  } finally {

    loadingGroups.value = false;
    groupStore.fetchAll();
    groupBeingSaved.value = false;
  }
};
</script>

<style></style>