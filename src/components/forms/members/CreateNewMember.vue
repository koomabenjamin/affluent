<template>
  <SlideInModal :isModalOpen="props.open" @close="close()" title="Loan Request"
    description="Use this form to input a member's loan for the specified period of time.">
    <template #body>
      <form @submit.prevent="memberStore.save(credentials)" class="flex flex-col space-y-2">
        <div>
          <FloatingLabelInput name="" type="text" :error="credentials.first_name" v-model="credentials.first_name" label="First Name"
            icon="heroicons:user" :icon-size="25" />
        </div>
        <div>
          <FloatingLabelInput name="" type="text" :error="credentials.last_name" v-model="credentials.last_name" label="Last Name"
            icon="heroicons:user" :icon-size="25" />
        </div>
        <div>
          <FloatingLabelInput name="" type="number" :error="credentials.phone_number" v-model="credentials.phone_number" label="Phone Number"
            icon="heroicons:user" :icon-size="25" />
        </div>
        <div>
          <FloatingLabelInput name="" type="text" :error="credentials.username" v-model="credentials.username" label="Username"
            icon="heroicons:user" :icon-size="25" />
        </div>
        <div>
          <FloatingLabelInput name="" type="email" :error="credentials.email" v-model="credentials.email" label="Email"
            icon="heroicons:user" :icon-size="25" />
        </div>
        <div>
          <FloatingLabelInput name="" type="password" :error="credentials.password" v-model="credentials.password" label="Password"
            icon="heroicons:user" :icon-size="25" />
        </div>
        <div>
          <FloatingLabelInput name="" type="password" :error="credentials.password_confirmation" v-model="credentials.password_confirmation" label="Password Confirmation"
            icon="heroicons:user" :icon-size="25" />
        </div>
        <div>
          <FloatingLabelInput name="" type="text" :error="credentials.country" v-model="credentials.country" label="Country"
            icon="heroicons:user" :icon-size="25" />
        </div>
        <div>
          <FloatingLabelInput name="" type="text" :error="credentials.state" v-model="credentials.state" label="State"
            icon="heroicons:user" :icon-size="25" />
        </div>
        <div>
          <FloatingLabelInput name="" type="text" :error="credentials.city" v-model="credentials.city" label="City"
            icon="heroicons:user" :icon-size="25" />
        </div>
        <Button label="Signup" :loader="isSavingMember" size="block" />
      </form>
    </template>
  </SlideInModal>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { storeToRefs } from "pinia";
import { useMemberStore } from "../../../stores/member-store";
import FloatingLabelInput from "../../shared/inputs/FloatingLabelInput.vue";
import MultiSelect from "../../shared/MultiSelect.vue";
import Button from "../../shared/Button.vue";
import SlideInModal from "../../shared/modals/SlideIn.vue"
import {
  XCircleIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/vue/24/outline";
import TextArea from "../../shared/inputs/TextArea.vue";

export interface CreateMemberModalProps {
  open?: boolean | undefined;
}

const props = defineProps<CreateMemberModalProps>();
const emit = defineEmits(['close'])
const close = () => emit('close');

const memberStore = useMemberStore();
const { isSavingMember } = storeToRefs(memberStore);

const credentials = reactive({
  first_name: '', last_name: '', name: '', phone_number: '', username: '', email: '',
  password: '', password_confirmation: '', country: '', state: '', city: '',
});
</script>

<style></style>