<template>
  <CreateNewMember :open="showCreateGroupModal" @close="closeCreateGroupModal()" />

  <Container>
    <div class="w-full flex items-center justify-between mt-5">
      <div class="text-xl font-bold">Members</div>
      <Button label="Create New Member" size="md" @click="closeCreateGroupModal()" />
    </div>

    <DataTable :rows="members" :columns="columns" :column-count="4" actions>
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
import { useMemberStore } from "@/stores/member-store";

import Container from "../../components/shared/Container.vue";
import CreateNewMember from "../../components/forms/members/CreateNewMember.vue";
import Button from "@/components/shared/Button.vue";
import DataTable from "@/components/shared/DataTable.vue";

const memberStore = useMemberStore();
const { members, loadingMembers } = storeToRefs(memberStore);

const columns = ref<string[]>(
  [
    'name',
    'email',
    'groups',
    'phone_number',
    'created_at',
  ]
);

const columnCount = ref<Number>(columns.value.length)

const showCreateGroupModal = ref<boolean>(false);
const closeCreateGroupModal = () => showCreateGroupModal.value = !showCreateGroupModal.value;

onBeforeMount(() => {
  memberStore.fetchAll(1);
});
</script>

<style></style>