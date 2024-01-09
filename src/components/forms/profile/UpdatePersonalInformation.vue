<template>
  <div class="flex flex-col col-span-2 mt-16 items-center space-y-2 px-3 rounded border h-auto pb-3">
    <div class="text-base font-bold text-left w-full mb-2 border-b p-2 h-10">Personal Information</div>
    <div class="w-full grid grid-cols-2 gap-1">
      <div>
        <Input type="text" label="First Name" v-model="user.first_name" />
      </div>
      <div>
        <Input type="text" label="Last Name" v-model="user.last_name" />
      </div>
      <div>
        <Input type="text" label="Email" v-model="user.email" />
      </div>
      <div>
        <Input type="text" label="Phone Number" v-model="user.phone_number" />
      </div>
      <div>
        <Input type="text" label="username" v-model="user.username" />
      </div>
      <div>
        <Input type="text" label="Country" v-model="user.country" />
      </div>
      <div>
        <Input type="text" label="City" v-model="user.city" />
      </div>
      <div>
        <Input type="text" label="NOK Name" v-model="user.nok_name" />
      </div>
      <div>
        <Input type="text" label="NOK Phone Number" v-model="user.nok_phone_number" />
      </div>
      <div>
        <Input type="text" label="NOK Email" v-model="user.nok_email" />
      </div>
    </div>
    <Button label="Update Information" size="block" />
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';
import Input from '@/components/shared/inputs/Input.vue';
import Button from '@/components/shared/Button.vue';

const userInSession = sessionStorage.getItem('user');

const user = reactive({
  first_name: '',
  last_name: '',
  phone_number: '',
  email: '',
  city: '',
  country: '',
  nok_name: '',
  nok_email: '',
  nok_phone_number: ''
}
);

onMounted(() => {
  Object.assign(user, JSON.parse(userInSession));
})

</script>

<style></style>