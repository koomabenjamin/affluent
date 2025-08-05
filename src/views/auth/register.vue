<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import useAuthentication from '@/composables/auth';
import FloatingLabelInput from '../../components/shared/inputs/FloatingLabelInput.vue';
import Button from '../../components/shared/Button.vue';

const appName = import.meta.env.VITE_CLIENT_GROUP_NAME;

const { register, errorMessages, authLoader } = useAuthentication();

const credentials = reactive({
  first_name: '', last_name: '', name: '', phone_number: '', username: '', email: '',
  password: '', password_confirmation: '', country: '', state: '', city: '',
});
</script>

<template>
  <div class="
    flex 
    w-screen 
    h-screen">
    <div class="h-screen w-3/5 bg-gradient-to-tr from-cyan-400 via-blue-500 bg-purple-600"></div>
    <form @submit.prevent="register(credentials)" 
      class="w-2/5 my-auto flex flex-col items-center space-y-3 h-auto px-5 bg-white rounded">
      <p class="
          h1 
          text-left 
          w-full 
          my-4">
        {{ appName }}
      </p>
      <span class="
          text-slate-500
          w-full 
          text-left 
          my-2">
        Begin your journey with us.
      </span>
      <div class="flex flex-col space-y-4 w-full">
          <!-- First Name and Last Name are required fields. The rest are optional. -->
          <div class="grid grid-cols-2 gap-2">
            <div>
              <FloatingLabelInput name="" type="text" :error="credentials.first_name" v-model="credentials.first_name" label="First Name"
                icon="heroicons:user" :icon-size="25" />
            </div>
            <div>
              <FloatingLabelInput name="" type="text" :error="credentials.last_name" v-model="credentials.last_name" label="Last Name"
                icon="heroicons:user" :icon-size="25" />
            </div>
          </div>
          <!-- Phone Number -->
          <div>
            <FloatingLabelInput name="" type="number" :error="credentials.phone_number" v-model="credentials.phone_number" label="Phone Number"
              icon="solar:phone-rounded-outline" :icon-size="25" />
          </div>
          <!-- Username -->
          <div>
            <FloatingLabelInput name="" type="text" :error="credentials.username" v-model="credentials.username" label="Username"
              icon="mynaui:at" :icon-size="25" />
          </div>
          <!-- Email -->
          <div>
            <FloatingLabelInput name="" type="email" :error="credentials.email" v-model="credentials.email" label="Email"
              icon="oui:email" :icon-size="25" />
          </div>
          <!-- Password and Password Confirmation -->
          <div class="grid grid-cols-2 gap-2">
            <div>
              <FloatingLabelInput name="" type="password" :error="credentials.password" v-model="credentials.password" label="Password"
                icon="solar:password-linear" :icon-size="25" />
            </div>
            <div>
              <FloatingLabelInput name="" type="password" :error="credentials.password_confirmation" v-model="credentials.password_confirmation" label="Password Confirmation"
                icon="solar:password-linear" :icon-size="25" />
            </div>
          </div>
          <!-- Country, State, and City -->
          <div class="grid grid-cols-3 gap-2">
            <div>
              <FloatingLabelInput name="" type="text" :error="credentials.country" v-model="credentials.country" label="Country"
                :icon-size="25" />
            </div>
            <div>
              <FloatingLabelInput name="" type="text" :error="credentials.state" v-model="credentials.state" label="State"
                :icon-size="25" />
            </div>
            <div>
              <FloatingLabelInput name="" type="text" :error="credentials.city" v-model="credentials.city" label="City"
                :icon-size="25" />
            </div>
          </div>
        </div>
      <p class="text-slate-400 w-full text-left my-2 font-semibold text-sm">By signing up, you accept the <span
          class="text-blue-600 underline">Terms & Conditions</span></p>
      <Button label="Signup" :loader="authLoader" class="w-2/3" size="block"/>
      <div class="w-full py-1 text-left">
        <div class="font-light mb-4 text-sm">Already have an account ?, <router-link to="/login"
            class="text-blue-600 font-bold">Login into your account.</router-link></div>
      </div>
    </form>
  </div>
</template>

<style scoped></style>