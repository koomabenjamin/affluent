<template>
  <SlideInModal :isModalOpen="props.open" @close="closeModal()" title="Add Member Collection"
    description="Use this form to input a member's collection for the specified period of time.">
    <template #body>
      <div class="flex flex-col space-y-2">
        <div class="mt-2 grid gap-4 w-full grid-cols-1">
          <!-- <div>
             <Select 
              :options="groups" 
              type="text"
              :error="collectionRequest.group" 
              v-model:option-id="collectionRequest.group" 
              v-model:option-name="collectionRequest.group" 
              label="Group"
              id="selectGroup"
              icon="heroicons:user"
              :icon-size="25" />
          </div>
          <div>
            <Select 
              :options="[]" 
              type="text"
              :error="collectionRequest.member" 
              v-model:option-id="collectionRequest.member" 
              v-model:option-name="collectionRequest.member" 
              label="Member"
              id="selectMember"
              icon="heroicons:user"
              :icon-size="25" />
          </div> -->
          <div>
            <FloatingLabelInput type="month" :error="collectionRequest.period" v-model="collectionRequest.period"
              label="Period paid For:" icon="heroicons:banknote" :icon-size="25" />
          </div>
          <div>
            <FloatingLabelInput type="number" :error="collectionRequest.amount" v-model="collectionRequest.amount" label="Amount"
              icon="heroicons:banknote" :icon-size="25" />
          </div>
          <div>
            <FloatingLabelInput type="number" :error="collectionRequest.account_paid_from"
              v-model="collectionRequest.account_paid_from" label="From Account:" icon="heroicons:banknote"
              :icon-size="25" />
          </div>
          <div>
            <FloatingLabelInput type="text" :error="collectionRequest.account_paid_to"
              v-model="collectionRequest.account_paid_to" label="To Account:" icon="heroicons:banknote" :icon-size="25" />
          </div>
          <div>
            <FloatingLabelInput type="text" :error="collectionRequest.payment_method" v-model="collectionRequest.payment_method"
              label="Payment Method:" icon="heroicons:banknote" :icon-size="25" />
          </div>
          <div>
            <FloatingLabelInput type="date" :error="collectionRequest.payment_date" v-model="collectionRequest.payment_date"
              label="Payment Date" icon="heroicons:calendar" :icon-size="25" />
          </div>
          <div>
            <TextArea type="text" :error="collectionRequest.payment_note" v-model="collectionRequest.payment_note"
              label="Payment Date" icon="heroicons:pencil" :icon-size="25" />
          </div>
        </div>

        <div class="mt-4">
          <Button label="Confirm" :loader="collectionBeingSaved" size="block" @click="saveCollection()"/>
        </div>
      </div>
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

const props = defineProps<CreateGroupModalProps>();
const emit = defineEmits(['close'])
const closeModal = () => emit('close');

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
  await collectionStore.save(collectionRequest);
};

onMounted(() => {
  groupStore.fetchAll();
})
</script>

<style></style>