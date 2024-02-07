<template>
  <AddMemberCollection :open="showCreateGroupModal" @close="closeCreateGroupModal()" />

  <Container>
    <div class="w-full flex items-center justify-between mt-5">
      <div class="text-xl font-bold">Collections</div>
      <div class="flex items-center space-x-2">
        <Button label="Add New Collection" size="md" @click="closeCreateGroupModal()" />
        <Button label="Bulk Collection Upload" size="md" @click="closeCreateGroupModal()" />
      </div>
    </div>

    <DataTable :rows="collections" :columns="columns" :column-count="4" data-group-name="collections"/>
    
  </Container>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { storeToRefs } from "pinia";
import { useCollectionStore } from "../../stores/collection-store";
import Container from "@/components/shared/Container.vue";
import AddMemberCollection from "@/components/forms/collections/AddMemberCollection.vue";
import Button from "@/components/shared/Button.vue";
import DataTable from "@/components/shared/DataTable.vue";

const collectionStore = useCollectionStore();

const { collections, loadingCollections } = storeToRefs(collectionStore);

const columns = ref<string[]>([ 'name', 'email', 'groups', 'created at',]);

const columnCount = ref<Number>(columns.value.length)

const showCreateGroupModal = ref<boolean>(false);

const closeCreateGroupModal = () => showCreateGroupModal.value = !showCreateGroupModal.value;

onBeforeMount(() => {
  collectionStore.fetchAll(1);
});
</script>

<style></style>