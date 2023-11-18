<template>
  <create-group :open="showCreateGroupModal" @close="closeCreateGroupModal()"></create-group>

  <Container>
    <div class="w-full flex items-center justify-between mt-5">
      <div class="text-xl font-bold">Groups</div>
      <Button label="Create New Member" size="md" @click="closeCreateGroupModal()" />
    </div>

    <DataTable :rows="members" :columns="columns" :column-count="columnCount" actions>
      <template #actions>
        <div class="text-xs">edit</div>
        <!-- <div class="text-xs">view</div> -->
        <div class="text-xs">delete</div>
      </template>
    </DataTable>
    
  </Container>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { storeToRefs } from "pinia";
import { customAxios } from "../../../composables/axios";
import { useMemberStore } from "@/stores/member-store";

import Container from "../../components/shared/Container.vue";
import CreateGroup from "../../components/forms/members/CreateNewMember.vue";
import Button from "@/components/shared/Button.vue";
import DataTable from "@/components/shared/DataTable.vue";

const memberStore = useMemberStore();
const { members, loadingMembers } = storeToRefs(memberStore);

const columns = ref<string[]>(
  [
    'name',
    'email',
    'groups',
    'created at',
  ]
);

const columnCount = ref<Number>(columns.value.length)

const showCreateGroupModal = ref<boolean>(false);
const closeCreateGroupModal = () => showCreateGroupModal.value = !showCreateGroupModal.value;

onBeforeMount(() => {
  memberStore.fetchMembers();
});
</script>

<style></style>