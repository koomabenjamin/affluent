<template>
  <div class="flex flex-col mt-4 items-center space-y-2 px-3 rounded border h-auto pb-3 w-full">
    <div class="text-base font-bold text-left w-full mb-2 border-b p-2 h-10">Personal Information</div>
    
    <!-- <MultiSelect 
      v-model:optionId="group.group_id" 
      v-model:optionName="group.group_name"
      v-model:optionsSelected="group.groups_selected"
      label="Groups"
      :options="groups" 
      :id="`contributions-group-select`"
      v-slot="{ options }">
     {{ options }}
    </MultiSelect> -->

    <v-select 
      :options="groups" 
      label="name"
      multiple
      v-model="selectedGroups" 
      placeholder="Select a group">
    </v-select>

    <div class="w-full grid grid-cols-2 gap-1">
      <div class="border p-1 flex space-x-1" v-for="group in []" :key="group">
        <div class="h-12 w-12 bg-blue-500 rounded"></div>
        <div class="flex flex-col justify-center">
          <div class="text-sm font-semibold">Group Name</div>
          <div class="text-xs">Group email and phone number</div>
        </div>
      </div>
    </div>
    <Button label="Update Information" @click="confirmSelectedGroups()" size="block"/>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { customAxios } from '@/composables/axios';
// import FloatingLabelInput from '@/components/shared/inputs/FloatingLabelInput.vue';;
import Button from '@/components/shared/Button.vue';
// import MultiSelect from '@/components/shared/MultiSelect.vue';

const groups = ref([]);

const selectedGroups = ref([]);

const user = sessionStorage.getItem('user');

const parsedUser = JSON.parse(user ?? "{}");

const userInformation = ref(null);

const fetchUserInformation = async () => {
  userInformation.value = await customAxios.get(`/users/info/${parsedUser?.id ?? 1}`);
  console.log(userInformation.value)
}

const options = ref(null);

const group = reactive({
  group_id: '',
  group_name: '',
  groups_selected: [],
});

const confirmSelectedGroups = () => console.log("function to be built");

const fetchAll = async () => {
  const response = await customAxios.get("groups");
  groups.value = response?.data?.payload;
}

onMounted(() => {
  fetchUserInformation();
  fetchAll();
})

</script>

<style>

</style>