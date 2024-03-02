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

    <DataTable :rows="collections" :columns="columns" :column-count="4" data-group-name="collections"/>

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

import Container from "@/components/shared/Container.vue";
import AddMemberCollection from "@/components/forms/collections/AddMemberCollection.vue";
import BulkMemberCollectionExtrationForm from "@/components/forms/collections/BulkMemberCollectionExtrationForm.vue";
import Button from "@/components/shared/Button.vue";
import DataTable from "@/components/shared/DataTable.vue";

const collectionStore = useCollectionStore();

const { collections, loadingCollections } = storeToRefs(collectionStore);

const columns = ref<string[]>([ 'member', 'account_paid_from', 'account_paid_to', 'amount', 'period', 'payment_date', 'created_by', 'created_at']);

const columnCount = ref<Number>(columns.value.length)

const showMemberCollectionForm = ref<boolean>(false);

const showBulkMemberCollectionExtrationForm = ref<boolean>(false);

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