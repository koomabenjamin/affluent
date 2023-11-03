<template>
  
  <SlideInModal :isModalOpen="props.open" @close="close">
    <template #body>
      <form @submit.prevent="saveGroup">
        <div class="mt-2 grid gap-4 w-full grid-cols-2">
          <div class="col-span-2">
            <Input icon="heroicons:envelope" type="text" v-model="groupCreationRequest.name" label="Group Name" :error="errorMessages?.name" required />
          </div>
          <div class="col-span-2">
            <TextArea type="text" v-model="groupCreationRequest.description" label="Description" />
          </div>
          <div>
            <Input icon="heroicons:envelope" type="email" v-model="groupCreationRequest.email" label="Email" :error="errorMessages?.email" required />
          </div>
          <div>
            <Input icon="heroicons:envelope" type="number" v-model="groupCreationRequest.account_number" label="Account Number" />
          </div>
          <div>
            <Input icon="heroicons:envelope" type="number" v-model="groupCreationRequest.initial_account_balance" label="Initial Account Balance"
              required />
          </div>
          <div>
            <Input icon="heroicons:envelope" type="text" v-model="groupCreationRequest.phone_number" label="Phone Number" required />
          </div>
          <div>
            <Input icon="heroicons:envelope" type="date" v-model="groupCreationRequest.contract_start_date" label="Contract Start Date" required />
          </div>
          <div>
            <Input icon="heroicons:envelope" type="date" v-model="groupCreationRequest.contract_end_date" label="Contract End Date" required />
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
import Input from "../../../components/shared/inputs/Input.vue";
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
import {
  GroupCreationRequest,
  GroupCreationResponse,
  GroupCreationResponseError
} from "../../../types";

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

    const response:GroupCreationResponse = await customAxios.post('/groups', groupCreationRequest.value);
    console.log(response);
  } catch (error) {
    const errors:GroupCreationResponse = error?.response?.data?.errors;
    console.log(errors, error);
    Object.assign(errorMessages.value, errors);
  } finally {

    loadingGroups.value = false;
    groupStore.fetchGroups();
    groupBeingSaved.value = false;
  }
};
</script>

<style></style>