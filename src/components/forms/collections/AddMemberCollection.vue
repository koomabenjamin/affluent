<template>
  <SlideInModal :isModalOpen="props.open" @close="closeModal()" title="Add Member Collection"
    description="Use this form to input a member's collection for the specified period of time.">
    <template #body>
      <Form
        @submit="saveCollection()"
        :validation-schema="schema"
        @invalid-submit="onInvalidSubmit()" 
        class="flex flex-col space-y-2">
        <div class="mt-2 grid gap-4 w-full grid-cols-1">

          <div>

            <Select name="group" field="name" :options="groups" icon="" label="Group" v-model="collectionRequest.group" :reduce="option => option.id"/>
            <!-- SELECTION BOX WITHOUT A REDUCE FUNCTION -->
            <!-- <Select name="group" field="name" :options="groups" icon="" label="Group" v-model="collectionRequest.group"/> -->

          </div>

          <div>
            <FloatingLabelInput name="period" type="month" :error="collectionRequest.period" v-model="collectionRequest.period"
              label="Period paid For:" icon="heroicons:banknote" :icon-size="25" />
          </div>
          <div>
            <FloatingLabelInput name="amount" type="number" placeholder="0" :error="collectionRequest.amount" v-model="collectionRequest.amount" label="Amount"
              icon="heroicons:banknote" :icon-size="25" />
          </div>
          <div>
            <FloatingLabelInput name="account_paid_from" type="number" :error="collectionRequest.account_paid_from"
              v-model="collectionRequest.account_paid_from" label="From Account:" icon="heroicons:banknote"
              :icon-size="25" />
          </div>
          <div>
            <FloatingLabelInput name="account_paid_to" type="number" :error="collectionRequest.account_paid_to"
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
          <Button label="Confirm" :loader="collectionBeingSaved" size="block" class-name="submit-btn"/>
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
import Select from "../../shared/MultiSelect.vue";
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

  group: Yup.string().required("Please select a group."),
  period: Yup.string().required("Period is a required field."),
  amount: Yup.number().moreThan(0),
  account_paid_from: Yup.number().min(9,'Please provide the account number'),
  account_paid_to: Yup.number().min(9,'Please provide the account number'),
  payment_method: Yup.string().required("Payment Method is a required field."),
  payment_date: Yup.string().required("Payment Date is a required field."),
  payment_note: Yup.string().required("Payment Note / Description is a required field."),

});

const { register, errorMessages, authLoader } = useAuthentication();

const props = defineProps<CreateGroupModalProps>();
const emit = defineEmits(['close'])
const closeModal = () => emit('close');
const extractGroupId = (group: Group) => group?.id.toString();

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
  account_paid_from: 0,
  account_paid_to: 0,
  payment_method: "",
  payment_date: "",
  payment_note: "",
});

const saveCollection = async () => {
  await collectionStore.save(collectionRequest);
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

<style scoped>
.submit-btn.invalid {
  animation: shake 0.5s;
  /* When the animation is finished, start again */
  animation-iteration-count: infinite;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px);
  }
  10% {
    transform: translate(-1px, -2px);
  }
  20% {
    transform: translate(-3px, 0px);
  }
  30% {
    transform: translate(3px, 2px);
  }
  40% {
    transform: translate(1px, -1px);
  }
  50% {
    transform: translate(-1px, 2px);
  }
  60% {
    transform: translate(-3px, 1px);
  }
  70% {
    transform: translate(3px, 1px);
  }
  80% {
    transform: translate(-1px, -1px);
  }
  90% {
    transform: translate(1px, 2px);
  }
  100% {
    transform: translate(1px, -2px);
  }
}
</style>