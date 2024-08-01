<template>
  <CreateNewMember :open="showCreateGroupModal" @close="closeCreateGroupModal()" />

  <Container>
    <div class="w-full flex items-center justify-between mt-5">
      <div class="text-xl font-bold">Members</div>
      <Button label="Create New Member" size="md" @click="closeCreateGroupModal()" />
    </div>

    <DataTable :rows="members" :columns="columns" :column-count="4" actions :custom-slots="['groups']">
      <template #groups="{data}">
        <div v-if="data?.length > 0" class="flex flex-wrap">
          <div v-for="(group, index) in data" :key="`members-dashboard-groups-${index}`">
            <div class="rounded flex items-center pl-2 pr-4 w-auto font-semibold text-white p-1 bg-green-500 m-0.5">{{ group?.name }}</div>
          </div>
        </div>
        <div v-else class="rounded flex items-center justify-center font-semibold text-white p-1 bg-yellow-400 w-auto">No Attached Groups</div>
      </template>
      <template #actions>
        <div class="flex space-x-2 items-center text-xs">
          <IconButton 
          @click="action()" class="" size="sm" :icon-size="18" type="edit" :loader="false" icon="material-symbols:ink-pen-outline" />
          <IconButton 
          @click="action()" class="" size="sm" :icon-size="18" type="delete" :loader="false" icon="material-symbols:delete-outline-rounded" />
          <IconButton 
          @click="action()" class="" size="sm" :icon-size="18" type="info" :loader="false" icon="material-symbols:info-outline" />
        </div>
      </template>
    </DataTable>
    
  </Container>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { storeToRefs } from "pinia";
import { useMemberStore } from "@/stores/member-store";
import IconButton from "@/components/shared/buttons/IconButton.vue";
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

const action = () => alert('Action to be performed');

const showCreateGroupModal = ref<boolean>(false);
const closeCreateGroupModal = () => showCreateGroupModal.value = !showCreateGroupModal.value;

onBeforeMount(() => {
  memberStore.fetchAll(1);
});
</script>

<style></style>