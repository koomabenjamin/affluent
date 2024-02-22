
<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import useAuthentication from '@/composables/auth';
import FloatingLabelInput from '../../components/shared/inputs/FloatingLabelInput.vue';
import Button from '../../components/shared/Button.vue';

const { register, errorMessages, authLoader } = useAuthentication();

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
  <div class="
    flex 
    w-screen 
    h-screen 
    center 
    bg-gradient-to-tr 
    from-yellow-400 
    via-yellow-500 
    bg-yellow-600
    px-4">
    <form @submit.prevent="register(credentials)" class="
        w-1/2 
        mx-auto 
        flex 
        flex-col 
        items-center 
        space-y-3 
        h-auto 
        px-5 
        bg-white 
        rounded">
      <p class="
          h1 
          text-left 
          w-full 
          my-4">
        HFMSG
      </p>
      <span class="
          text-slate-500
          w-full 
          text-left 
          my-2">
        Welcome back awesome user, please enter your email and
        password.
      </span>
      <div class="w-full flex space-x-2">

        <FloatingLabelInput label="First Name" icon=""/>

        <FloatingLabelInput type="text" :errors="errorMessages?.email" 
        v-model="credentials.last_name" required
          name="last_name" label="Last Name" icon="KeyIcon" />

      </div>

      <div class="flex w-full space-x-2">
        <FloatingLabelInput type="text" :errors="errorMessages?.password" v-model="credentials.username" required name="username"
          label="Username" icon="UserIcon" />
      </div>
      <div class="w-full flex space-x-2">
        <FloatingLabelInput type="email" :errors="errorMessages?.email" 
        v-model="credentials.email" required name="email"
          label="Email" icon="MailIcon" />

        <FloatingLabelInput type="number" :errors="errorMessages?.password" v-model="credentials.phone_number" required
          name="phone_number" label="Phone Number" icon="PhoneIcon" />
      </div>
      <div class="w-full flex space-x-2">
        <FloatingLabelInput type="password" :errors="errorMessages?.password" v-model="credentials.password" required
          name="password" label="Password" icon="KeyIcon" />
        <FloatingLabelInput type="password" :errors="errorMessages?.password" v-model="credentials.password_confirmation"
          required name="password" label="Confirm Password" icon="KeyIcon" />
      </div>
      <div class="w-full flex space-x-2">
        <FloatingLabelInput type="text" :errors="errorMessages?.password" v-model="credentials.country" required name="country"
          label="Country" icon="LocationMarkerIcon" />
        <FloatingLabelInput type="text" :errors="errorMessages?.password" v-model="credentials.state" required name="state"
          label="State" icon="LocationMarkerIcon" />
        <FloatingLabelInput type="text" :errors="errorMessages?.password" v-model="credentials.city" required name="city" label="City"
          icon="LocationMarkerIcon" />
      </div>
      <p class="text-slate-400 w-full text-left my-2 font-semibold text-sm">By signing up, you accept the <span
          class="text-blue-600 underline">Terms & Conditions</span></p>
      <Button label="Signup" :loader="authLoader" />
      <div class="w-full py-1 text-left">
        <div class="font-light mb-4 text-sm">Already have an account ?, <router-link to="/login"
            class="text-blue-600 font-bold">Login into your account.</router-link></div>
      </div>
    </form>
  </div>
</template>

<style scoped></style>