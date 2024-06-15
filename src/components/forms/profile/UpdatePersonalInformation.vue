<template>
  <div class="flex flex-col w-full mt-4 items-end space-y-2 px-3 rounded border h-auto pb-3">
    <div class="text-base font-bold text-left w-full mb-2 border-b p-2 h-10">Personal Information</div>
    <div class="w-full grid md:grid-cols-4 gap-1">

      <div class="col-span-4 font-medium text-sm mt-1">Names:</div>
      <div class="col-span-4 text-xs text-gray-400 mb-1">
        These are the names that will be used on formal documentation within the system and any other printed documents.
      </div>

      <div class="col-span-2">
        <FloatingLabelInput type="text" label="First Name" v-model="user.first_name" icon="heroicons:envelope"
          :icon-size="20" />
      </div>

      <div class="col-span-2">
        <FloatingLabelInput type="text" label="Last Name" v-model="user.last_name" icon="heroicons:envelope"
          :icon-size="20" />
      </div>

      <div class="col-span-4 font-medium text-sm mt-1">Emails:</div>
      <div class="col-span-4 text-xs text-gray-400 mb-1">
        Ensure to register valid emails here as they will be used to confirm your identity as well verification for
        other
        purposes within the system.
      </div>
      <div class="col-span-4">
        <FloatingLabelInput type="text" label="Email" v-model="user.email" icon="heroicons:envelope" :icon-size="20" />
      </div>

      <div class="col-span-4 font-medium text-sm mt-1">Contacts:</div>
      <div class="col-span-4 text-xs text-gray-400 mb-1">
        Ensure to register valid contacts / phone-numbers here as they will be used to confirm your identity as well
        verification for other purposes within the system.
      </div>
      <div class="col-span-4">
        <FloatingLabelInput type="text" label="Phone Number" v-model="user.phone_number" icon="heroicons:envelope"
          :icon-size="20" />
      </div>

      <div class="col-span-4 font-medium text-sm mt-1">Account Username:</div>
      <div class="col-span-4 text-xs text-gray-400 mb-1">
        Register a unique username for your account as it will be displayed on the profile and portfolio.
      </div>
      <div class="col-span-4">
        <FloatingLabelInput type="text" label="username" v-model="user.username" icon="heroicons:envelope"
          :icon-size="20" />
      </div>

      <div class="col-span-4 font-medium text-sm mt-1">Resdential Information:</div>
      <div class="col-span-4 text-xs text-gray-400 mb-1">
        Please register a valid resdential address for proper follow-up or delivery of any document / parcel.
      </div>
      <div class="col-span-2">
        <FloatingLabelInput type="text" label="Country" v-model="user.country" icon="heroicons:envelope"
          :icon-size="20" />
      </div>
      <div>
        <FloatingLabelInput type="text" label="City" v-model="user.city" icon="heroicons:envelope" :icon-size="20" />
      </div>
      <div>
        <FloatingLabelInput type="text" label="State" v-model="user.state" icon="heroicons:envelope" :icon-size="20" />
      </div>

      <div class="col-span-4 font-medium text-sm mt-1">Socials:</div>
      <div class="col-span-4 text-xs text-gray-400 mb-1">
        Please register a valid social media addresses as they will be used to sync some information.
      </div>
      <div class="col-span-4">
        <NormalInput type="text" label="FaceBook" v-model="user.country" icon="flat-color-icons:link" icon-size="20" />
      </div>
      <div class="col-span-4">
        <NormalInput type="text" label="X" v-model="user.city" icon="flat-color-icons:link" icon-size="20" />
      </div>
      <div class="col-span-4">
        <NormalInput type="text" label="Instagram" v-model="user.state" icon="flat-color-icons:link" icon-size="20" />
      </div>
      <div class="col-span-4">
        <NormalInput type="text" label="Telegram" v-model="user.state" icon="flat-color-icons:link" icon-size="20" />
      </div>
      <div class="col-span-4">
        <NormalInput type="text" label="Telegram" v-model="user.state" icon="flat-color-icons:link" icon-size="20" />
      </div>
    </div>
    <Button label="UPDATE INFORMATION" size="lg" />
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import NormalInput from '@/components/shared/inputs/Input.vue';
import FloatingLabelInput from '@/components/shared/inputs/FloatingLabelInput.vue';
import Button from '@/components/shared/Button.vue';

const userInSession = sessionStorage.getItem('user');

const user = reactive({
  first_name: '',
  last_name: '',
  phone_number: '',
  username: '',
  email: '',
  city: '',
  country: '',
  state: '',
});

onMounted(() => {
  Object.assign(user, JSON.parse(userInSession ?? "{}"));
})

</script>

<style></style>