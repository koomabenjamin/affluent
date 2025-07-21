<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import useAuthentication from '../../composables/auth';
import FloatingLabelInput from '../../components/shared/inputs/FloatingLabelInput.vue';
import Button from '../../components/shared/Button.vue';

const appName = import.meta.env.VITE_CLIENT_GROUP_NAME;

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
    h-screen">

    <div class="
      hidden 
      lg:block 
      w-2/3 
      bg-gradient-to-r 
      from-blue-500 
      to-blue-600 
      text-white 
      flex 
      items-center 
      justify-center
      text-4xl
      font-bold
      text-center">
      
      <p>Banner</p>
      
    </div>

    <form @submit.prevent="login(credentials)" class="
        w-1/4
        mx-auto
        my-auto 
        flex 
        flex-col 
        items-center
        justify-center 
        space-y-4 
        h-auto p-5
        hover:bg-blue-50
        bg-white 
        rounded">

      <span class="
        h1 
        text-left 
        w-full 
        text-base
        my-4">
        {{ appName }}
      </span>

      <span class="
          text-slate-500 
          w-full 
          text-left 
          font-light
          my-2">
        Welcome back awesome user, please enter your email and password.
      </span>

      <FloatingLabelInput type="email" :errors="errorMessages?.email?.[0]" v-model="credentials.email" required
        name="email" label="Email" icon="heroicons:envelope" :icon-size="25" />

      <FloatingLabelInput type="password" :errors="errorMessages?.password" v-model="credentials.password" required
        name="password" label="Password" icon="heroicons:key" :icon-size="25" />

      <p class="
        text-slate-400 w-full text-left my-2 font-semibold text-sm">
        By logging in, you accept the
        <span class="text-blue-600 underline text-sm">
          Terms & Conditions
        </span>
      </p>

      <div class="w-full flex items-center justify-between">
        <Button label="Login" class="w-2/3" size="block" :loader="authLoader" />
      </div>

      <div class="w-full py-1 text-center text-xs flex items-center justify-between">
        <div class="font-light">
          Don't have an account ?,
          <router-link to="/register" class="text-blue-600 font-bold">
            Create an account.
          </router-link>
        </div>
        <span class="text-red-600 text-sm">
          Forgot Password ?
        </span>
      </div>

    </form>
  </div>
</template>

<style scoped></style>