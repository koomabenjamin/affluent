<template>
  <create-group :open="showCreateGroupModal" @close="closeCreateGroupModal()"></create-group>

  <Container>
    <div class="w-full flex items-center justify-between mt-5">
      <div class="text-xl font-bold">Groups</div>
      <Button label="Create New Group" size="md" @click="closeCreateGroupModal()" />
    </div>

    <DataTable :rows="groups" :columns="columns" :column-count="columnCount"/>
    
  </Container>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { storeToRefs } from "pinia";
import { customAxios } from "../../../composables/axios";
import { useGroupStore } from "@/stores/group-store";

import Container from "../../components/shared/Container.vue";
import CreateGroup from "../../components/forms/groups/CreateGroup.vue";
import Button from "@/components/shared/Button.vue";
import DataTable from "@/components/shared/DataTable.vue";

const groupStore = useGroupStore();
const { groups, loadingGroups } = storeToRefs(groupStore);

const columns = ref<string[]>(
  [
    'name',
    'email',
    'created_at',
    'created_by',
    'initial_account_balance',
    'account_number'
  ]
);

const columnCount = ref<Number>(columns.value.length)

const showCreateGroupModal = ref<boolean>(false);
const closeCreateGroupModal = () => showCreateGroupModal.value = !showCreateGroupModal.value;

onBeforeMount(() => {
  groupStore.fetchGroups();
});
</script>

<style></style>