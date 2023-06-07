
<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import useAuthentication from '@/composables/auth';
import Input from '../shared/Input.vue';
import Button from '../shared/Button.vue';

const { register, errorMessages, mainErrorMessage, authLoader } = useAuthentication();

const credentials = reactive({
  first_name: '',
  last_name: '',
  name: ``,
  phone_number: '',
  username: '',
  email: '',
  password: '',
  password_confirmation: '',
  country: '',
  state: '',
  city: '',
});
</script>

<template>
  <div class="flex w-screen h-screen center bg-gradient-to-tr from-yellow-400 via-yellow-500 bg-yellow-600 px-4">
    <div class="w-1/2"></div>
    <form @submit.prevent="register(credentials)"
      class="w-1/2 mx-auto flex flex-col items-center space-y-3 h-auto px-5 dark:bg-slate-800 dark:text-white bg-white rounded">
      <p class="h1 text-left w-full my-4">HFMSG</p>
      <span class="text-slate-500 w-full text-left my-2">Welcome back awesome user, please enter your email and
        password.</span>
      <div class="w-full flex space-x-2">
        <Input class="w-1/2" type="text" :errors="errorMessages.email" v-model="credentials.first_name" required
          name="first_name" label="First Name" icon="MailIcon" />
        <Input class="w-1/2" type="text" :errors="errorMessages.email" v-model="credentials.last_name" required
          name="last_name" label="Last Name" icon="KeyIcon" />
      </div>
      <div class="flex w-full space-x-2">
        <Input type="text" :errors="errorMessages.password" v-model="credentials.username" required name="username"
          label="Username" icon="UserIcon" />
      </div>
      <div class="w-full flex space-x-2">
        <Input class="w-1/2" type="email" :errors="errorMessages.email" v-model="credentials.email" required
          name="email" label="Email" icon="MailIcon" />
        <Input class="w-1/2" type="number" :errors="errorMessages.password" v-model="credentials.phone_number" required
          name="phone_number" label="Phone Number" icon="PhoneIcon" />
      </div>
      <div class="w-full flex space-x-2">
        <Input class="w-1/2" type="password" :errors="errorMessages.password" v-model="credentials.password" required
          name="password" label="Password" icon="KeyIcon" />
        <Input class="w-1/2" type="password" :errors="errorMessages.password"
          v-model="credentials.password_confirmation" required name="password" label="Confirm Password"
          icon="KeyIcon" />
      </div>
      <div class="w-full flex space-x-2">
        <Input type="text" :errors="errorMessages.password" v-model="credentials.country" required name="country"
          label="Country" icon="LocationMarkerIcon" />
        <Input type="text" :errors="errorMessages.password" v-model="credentials.state" required name="state"
          label="State" icon="LocationMarkerIcon" />
        <Input type="text" :errors="errorMessages.password" v-model="credentials.city" required name="city" label="City"
          icon="LocationMarkerIcon" />
      </div>
      <p class="text-slate-400 w-full text-left my-2 font-semibold text-sm">By signing up, you accept the <span
          class="text-blue-600 underline">Terms & Conditions</span></p>
      <Button label="Signup" :loader="authLoader" />
      <div class="w-full py-1 text-left">
        <div class="font-light mb-4 text-sm">Already have an account ?, <router-link to="/login"
            class="text-blue-600 font-bold">Login into your account.</router-link></div>
      </div>

      <Input type="text" hide v-model="credentials.name" :value="`${credentials.first_name} ${credentials.last_name}`"
        name="name" />
    </form>
  </div>
</template>

<style scoped>

</style>