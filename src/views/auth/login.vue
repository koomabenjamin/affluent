<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import useAuthentication from '../../composables/auth';
import FloatingLabelInput from '../../components/shared/inputs/FloatingLabelInput.vue';
import Button from '../../components/shared/Button.vue';

const { login, errorMessages, authLoader } = useAuthentication();

const credentials = reactive({
  email: '',
    password: '',
    firstName: '',
    lastName: '',
    middleName: '',
    userName: '',
});
</script>

<template>
  <div class="
    flex 
    w-screen 
    h-screen 
    center">

    <form @submit.prevent="login(credentials)" class="
        sm:w-1/2
        lg:w-1/3
        mx-auto 
        flex 
        flex-col 
        items-center 
        space-y-4 
        h-auto p-5
        border
        shadow-md
        hover:bg-blue-50
        bg-white 
        rounded">

      <p class="
        h1 
        text-left 
        w-full 
        my-4">
        HFMSG
      </p>

      <span 
        class="
          text-slate-500 
          w-full 
          text-left 
          my-2">
        Welcome back awesome user, please enter your email and password.
      </span>

      <FloatingLabelInput 
        type="email"
        :errors="errorMessages?.email?.[0]" 
        v-model="credentials.email" 
        required 
        name="email"
        label="Email" 
        icon="heroicons:envelope"
        :icon-size="25"
      />

      <FloatingLabelInput 
        type="password" 
        :errors="errorMessages?.password" v-model="credentials.password" 
        required 
        name="password"
        label="Password" 
        icon="heroicons:key"
        :icon-size="25"
      />

      <p 
        class="
        text-slate-400 w-full text-left my-2 font-semibold text-sm">
        By logging in, you accept the 
        <span
          class="text-blue-600 underline text-sm">
          Terms & Conditions
        </span>
      </p>

      <div class="w-full flex items-center justify-between">
        <Button 
          label="Login" 
          class="w-2/3"
          size="block"
          :loader="authLoader" />
      </div>

      <div class="w-full py-1 text-center text-sm flex items-center justify-between">
        <div 
          class="font-light">
          Don't have an account ?,
          <router-link 
            to="/register" 
            class="text-blue-600 font-bold">
            Create an account.
          </router-link>
        </div>
        <span 
          class="text-red-600 text-sm">
          Forgot Password ?
      </span>
      </div>

    </form>
  </div>
</template>

<style scoped></style>