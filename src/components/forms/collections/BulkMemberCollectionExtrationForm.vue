<template>
  <SlideInModal :isModalOpen="props.open" @close="closeModal()" title="Extract Member Collections"
    description="Use this form to input a member's collection for the specified period of time.">
    <template #body>
      <form class="flex flex-col space-y-2" @submit.prevent="extractMemberCollections()" enctype="multipart/form-data">
        <div class="mt-2 grid gap-4 w-full grid-cols-1">
          <div>
            <!-- <FloatingLabelInput 
              name="file"
              type="file" 
              :error="fileInput" 
              v-model="fileInput" 
              label="Excel File"
              accept=".xlsx,.xls"
              icon="heroicons:banknote" 
              :icon-size="25" /> -->
            <input type="file" ref="fileInput" accept=".xlsx,.xls,.csv" required name="file">
          </div>
        </div>

        <div class="mt-4">
          <Button label="Confirm" :loader="isExtractingMemberCollections" size="block" />
        </div>
      </form>
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
const fileInput = ref<any>(null);
const isExtractingMemberCollections = ref<boolean>(false);

const emit = defineEmits(['close'])
const closeModal = () => emit('close');
const extractMemberCollections = async () => {

  const formData = new FormData();
  formData.append('file', fileInput.value.files[0]);
  console.log(fileInput.value.files)

  try {
    const response = await customAxios.post('bulk/extract_collections_from_excel', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('File uploaded successfully!');
  } catch (error) {
    console.error('Error uploading file:', error);
  }

}
</script>

<style scoped>
/* input[type="file"] {
  display: none;
} */
</style>