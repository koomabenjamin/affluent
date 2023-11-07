<template>
  <SlideInModal :isModalOpen="props.open" @close="close">
    <template #body>
        <form @submit.prevent="register(credentials)" class="flex flex-col space-y-2">
          <div class="w-full flex space-x-2">
            <Input class="w-1/2" type="text" :errors="errorMessages.email" v-model="credentials.first_name" required
              name="first_name" label="First Name" icon="MailIcon" />
            <Input class="w-1/2" type="text" :errors="errorMessages.email" v-model="credentials.last_name" required
              name="last_name" label="Last Name" icon="KeyIcon" />
          </div>
          <div class="flex w-full space-x-2">
            <Input type="text" :errors="errorMessages.password" v-model="credentials.username" required name="username"
              label="Username" icon="UserIcon" />
          </div>
          <div class="w-full flex space-x-2">
            <Input class="w-1/2" type="email" :errors="errorMessages.email" v-model="credentials.email" required
              name="email" label="Email" icon="MailIcon" />
            <Input class="w-1/2" type="number" :errors="errorMessages.password" v-model="credentials.phone_number"
              required name="phone_number" label="Phone Number" icon="PhoneIcon" />
          </div>
          <div class="w-full flex space-x-2">
            <Input class="w-1/2" type="password" :errors="errorMessages.password" v-model="credentials.password" required
              name="password" label="Password" icon="KeyIcon" />
            <Input class="w-1/2" type="password" :errors="errorMessages.password"
              v-model="credentials.password_confirmation" required name="password" label="Confirm Password"
              icon="KeyIcon" />
          </div>
          <div class="w-full flex space-x-2">
            <Input type="text" :errors="errorMessages.password" v-model="credentials.country" required name="country"
              label="Country" icon="LocationMarkerIcon" />
            <Input type="text" :errors="errorMessages.password" v-model="credentials.state" required name="state"
              label="State" icon="LocationMarkerIcon" />
            <Input type="text" :errors="errorMessages.password" v-model="credentials.city" required name="city"
              label="City" icon="LocationMarkerIcon" />
          </div>
          <Button label="Signup" :loader="authLoader" />
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
} from "../../../types";

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

const credentials = reactive({
  first_name: '',
  last_name: '',
  name: '',
  phone_number: '',
  username: '',
  email: '',
  password: '',
  password_confirmation: '',
  country: '',
  state: '',
  city: '',
});

const saveGroup = async () => {
  groupBeingSaved.value = true;
  try {

    const response: GroupCreationResponse = await customAxios.post('/groups', groupCreationRequest.value);
    console.log(response);
  } catch (error) {
    const errors: GroupCreationResponse = error?.response?.data?.errors;
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