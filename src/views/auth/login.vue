<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import useAuthentication from '../../composables/auth';
import Input from '../../components/shared/inputs/Input.vue';
import Button from '../../components/shared/Button.vue';

const { login, errorMessages, mainErrorMessage, authLoader } = useAuthentication();

const credentials = reactive({
  email: '',
  password: '',
});

const initAuth = () => {
  let status = login(credentials);
}
</script>

<template>
  <div class="
    flex 
    w-screen 
    h-screen 
    center">

    <form @submit.prevent="login(credentials)" class="
        w-1/3 
        mx-auto 
        flex 
        flex-col 
        items-center 
        space-y-4 
        h-auto p-5 
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

      <Input 
        type="email" 
        :errors="errorMessages?.email?.[0]" 
        v-model="credentials.email" 
        required 
        name="email"
        label="Email" 
        icon="heroicons:envelope" />

      <Input 
        type="password" 
        :errors="errorMessages?.password" v-model="credentials.password" 
        required 
        name="password"
        label="Password" 
        icon="heroicons:key" />

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
          :loader="authLoader" />
        <span 
          class="text-blue-600 w-1/3 text-center text-sm">
          Forgot Password ?
        </span>
      </div>

      <div class="w-full py-1 text-center text-sm">
        <div 
          class="font-light mb-4">
          Don't have an account yet ?,
          <router-link 
            to="/register" 
            class="text-blue-600 font-bold">
            Create an account.
          </router-link>
        </div>
      </div>

    </form>
  </div>
</template>

<style scoped></style>