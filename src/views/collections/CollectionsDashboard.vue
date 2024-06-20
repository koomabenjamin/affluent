<template>
  <AddMemberCollection :open="showMemberCollectionForm" @close="closeMemberCollectionForm()" />
  <BulkMemberCollectionExtrationForm :open="showBulkMemberCollectionExtrationForm" @close="closeBulkMemberCollectionExtractionForm()" />

  <Container>
    <div class="w-full flex items-center justify-between mt-5">
      <div class="text-xl font-bold">Collections</div>
      <div class="flex items-center space-x-2">
        <Button label="Add New Collection" size="md" @click="closeMemberCollectionForm()" />
        <Button label="Bulk Collection Upload" size="md" @click="closeBulkMemberCollectionExtractionForm()" />
      </div>
    </div>

    <DataTable 
      :rows="collections"
      :columns="columns" 
      :column-count="4" 
      data-group-name="collections" 
      actions 
      :custom-slots="['payment_date', 'created_at']">

      <template #payment_date>233</template>
      <template #created_at></template>

      <template #actions>
        <div class="flex space-x-2 items-center text-xs">
          <IconButton 
          @click="action()" class="" size="sm" :icon-size="18" type="edit" :loader="false" icon="material-symbols:ink-pen-outline" />
          <IconButton 
          @click="action()" class="" size="sm" :icon-size="18" type="delete" :loader="false" icon="material-symbols:delete-outline-rounded" />
          <IconButton 
          @click="action()" class="" size="sm" :icon-size="18" type="success" :loader="false" icon="material-symbols:info-outline" />
        </div>
      </template>
    </DataTable>

    <div>
      <Icon
        icon="svg-spinners:180-ring-with-bg"
        class="text-blue-600"
        width="20"
        v-if="loadingCollections" />
    </div>
    
  </Container>
</template>

<script setup lang="ts">

import { ref, onBeforeMount } from "vue";
import { storeToRefs } from "pinia";
import { useCollectionStore } from "../../stores/collection-store";
import { Icon } from "@iconify/vue";

import IconButton from "@/components/shared/buttons/IconButton.vue";
import Container from "@/components/shared/Container.vue";
import AddMemberCollection from "@/components/forms/collections/AddMemberCollection.vue";
import BulkMemberCollectionExtrationForm from "@/components/forms/collections/BulkMemberCollectionExtrationForm.vue";
import Button from "@/components/shared/Button.vue";
import DataTable from "@/components/shared/DataTable.vue";
import DateFormatter from "@/components/shared/DateFormatter.vue";

const collectionStore = useCollectionStore();

const { collections, loadingCollections } = storeToRefs(collectionStore);

const columns = ref<string[]>([ 'member', 'account_paid_from', 'account_paid_to', 'amount', 'period', 'payment_date', 'created_by', 'created_at']);

const columnCount = ref<Number>(columns.value.length)

const showMemberCollectionForm = ref<boolean>(false);

const showBulkMemberCollectionExtrationForm = ref<boolean>(false);

const action = () => alert('Action to be performed');

const closeMemberCollectionForm = () => {
  showMemberCollectionForm.value = !showMemberCollectionForm.value;
}

const closeBulkMemberCollectionExtractionForm = () => {
  showBulkMemberCollectionExtrationForm.value = !showBulkMemberCollectionExtrationForm.value;
}

onBeforeMount(() => {
  collectionStore.fetchAll(1);
});
</script>

<style></style>