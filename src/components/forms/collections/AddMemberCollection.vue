<template>
  <SlideInModal :isModalOpen="props.open" @close="closeModal()" title="Add Member Collection"
    description="Use this form to input a member's collection for the specified period of time.">
    <template #body>
      <Form
        @submit="saveCollection()"
        :validation-schema="schema"
        @invalid-submit="onInvalidSubmit" 
        class="flex flex-col space-y-2">
        <div class="mt-2 grid gap-4 w-full grid-cols-1">

          <v-select 
            :options="groups" 
            label="name" 
            v-model="collectionRequest.group" 
            placeholder="Select a group"
            :reduce="extractGroupId">
          </v-select>

          <div>
            <FloatingLabelInput name="period" type="month" :error="collectionRequest.period" v-model="collectionRequest.period"
              label="Period paid For:" icon="heroicons:banknote" :icon-size="25" />
          </div>
          <div>
            <FloatingLabelInput name="amount" type="number" :error="collectionRequest.amount" v-model="collectionRequest.amount" label="Amount"
              icon="heroicons:banknote" :icon-size="25" />
          </div>
          <div>
            <FloatingLabelInput name="account_paid_from" type="number" :error="collectionRequest.account_paid_from"
              v-model="collectionRequest.account_paid_from" label="From Account:" icon="heroicons:banknote"
              :icon-size="25" />
          </div>
          <div>
            <FloatingLabelInput name="account_paid_to" type="text" :error="collectionRequest.account_paid_to"
              v-model="collectionRequest.account_paid_to" label="To Account:" icon="heroicons:banknote" :icon-size="25" />
          </div>
          <div>
            <FloatingLabelInput name="payment_method" type="text" :error="collectionRequest.payment_method" v-model="collectionRequest.payment_method"
              label="Payment Method:" icon="heroicons:banknote" :icon-size="25" />
          </div>
          <div>
            <FloatingLabelInput name="payment_date" type="date" :error="collectionRequest.payment_date" v-model="collectionRequest.payment_date"
              label="Payment Date" icon="heroicons:calendar" :icon-size="25" />
          </div>
          <div>
            <TextArea type="text" name="payment_note" :error="collectionRequest.payment_note" v-model="collectionRequest.payment_note"
              label="Payment Date" icon="heroicons:pencil" :icon-size="25" />
          </div>
        </div>

        <div class="mt-4">
          <!-- <Button label="Confirm" :loader="collectionBeingSaved" size="block" @click="saveCollection()"/> -->
          <button class="submit-btn" type="submit">Submit</button>
        </div>
      </Form>
    </template>
  </SlideInModal>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useGroupStore } from "../../../stores/group-store";
import { useCollectionStore } from "../../../stores/collection-store";
import TextArea from "../../shared/inputs/TextArea.vue";
import FloatingLabelInput from "../../shared/inputs/FloatingLabelInput.vue";
// import Select from "../../shared/Select.vue";
// import MultiSelect from "../../shared/MultiSelect.vue";
import Button from "../../shared/Button.vue";
import SlideInModal from "../../shared/modals/SlideIn.vue";
import type { CollectionRequest } from "@/types";
import { Form } from 'vee-validate';
import * as Yup from 'yup';

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

const schema = Yup.object().shape({

  period: Yup.string().email().required(),
  number: Yup.string().required(),
  account_paid_from: Yup.number().required(),
  account_paid_to: Yup.number().required(),
  payment_method: Yup.string().required(),
  payment_date: Yup.string().required(),
  payment_note: Yup.string().required(),

  // name: Yup.string().required(),
  // email: Yup.string().email().required(),
  // password: Yup.string().min(6).required(),
  // confirm_password: Yup.string()
  //   .required()
  //   .oneOf([Yup.ref('password')], 'Passwords do not match'),
});

const { register, errorMessages, authLoader } = useAuthentication();

const props = defineProps<CreateGroupModalProps>();
const emit = defineEmits(['close'])
const closeModal = () => emit('close');
const extractGroupId = (group: Group) => group?.id;

const user = ref(null);
const groupStore = useGroupStore();
const collectionStore = useCollectionStore();
const { groups } = storeToRefs(groupStore);
const { collections, loadingCollections } = storeToRefs(collectionStore);
const collectionBeingSaved = ref(false);
const _errorMessages = ref<any>({});

const collectionRequest = reactive<CollectionRequest>({
  group: "",
  member: "",
  period: "",
  amount: 0,
  account_paid_from: 100020,
  account_paid_to: 0,
  payment_method: "",
  payment_date: "",
  payment_note: "",
});

const saveCollection = async () => {
  alert(JSON.stringify(collectionRequest, null, 2));
  // await collectionStore.save(collectionRequest);
};

function onInvalidSubmit() {
  const submitBtn: Element | null = document.querySelector('.submit-btn');
  submitBtn?.classList.add('invalid');
  console.log(schema);
  setTimeout(() => {
    submitBtn?.classList.remove('invalid');
  }, 1000);
}

onMounted(() => {
  groupStore.fetchAll();
})
</script>

<style></style>