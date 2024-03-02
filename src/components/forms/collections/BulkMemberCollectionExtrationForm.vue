<template>
  <SlideInModal :isModalOpen="props.open" @close="closeModal()" title="Extract Member Collections"
    description="Use this form to input a member's collection for the specified period of time.">
    <template #body>
      <div class="flex flex-col space-y-2">
        <div class="mt-2 grid gap-4 w-full grid-cols-1">
          <div>
            <FloatingLabelInput type="file" :error="extractionRequest" v-model="extractionRequest"
              label="Excel File" icon="heroicons:banknote" :icon-size="25" />
          </div>
        </div>

        <div class="mt-4">
          <Button label="Confirm" :loader="isExtractingMemberCollections" size="block" @click="extractMemberCollections()" />
        </div>
      </div>
    </template>
  </SlideInModal>
</template>

<script setup lang="ts">
import { ref } from "vue";
import FloatingLabelInput from "../../shared/inputs/FloatingLabelInput.vue";
import Button from "../../shared/Button.vue";
import SlideInModal from "../../shared/modals/SlideIn.vue";

import { customAxios } from "@/composables/axios";

export interface CreateGroupModalProps {
  open?: boolean | undefined;
}

const props = defineProps<CreateGroupModalProps>();

const extractionRequest = ref<any>(null);
const isExtractingMemberCollections = ref<boolean>(false);

const emit = defineEmits(['close'])
const closeModal = () => emit('close');

const extractMemberCollections = async () => {
  const response = await customAxios.post("v1/extract_collections_from_excel", extractionRequest)
}
</script>

<style></style>