<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import useAuthentication from '@/composables/auth';
import OtpInputs from '../../components/shared/inputs/OptInput.vue';
import Button from '../../components/shared/Button.vue';

const { twoFactorCodeConfirmation, authLoader } = useAuthentication();

const appName = import.meta.env.VITE_CLIENT_GROUP_NAME

const opt = ref('')

</script>

<template>
  <div class="flex w-screen h-screen bg-blue-50">
    <div class="hidden lg:block w-2/3 bg-gradient-to-r from-blue-500 to-blue-600 text-white flex items-center justify-center text-4xl font-bold text-center">
      <!-- <p>Banner</p> -->
    </div>
    <form @submit.prevent="twoFactorCodeConfirmation(opt)"
      class="sm:w-1/3 w-full mx-auto h-full px-16 flex flex-col items-center justify-center space-y-4 p-5 bg-white rounded">
      <p class="h1 text-left w-full my-4">{{ appName }}</p>
      <span class="text-slate-500 w-full text-left my-2">
        Welcome back awesome user, please enter your email and password.
      </span>
      <!-- <span class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white h-10 px-4">
            {{ opt }}
        </span> -->
      <OtpInputs v-model="opt" :fields="6"></OtpInputs>

      <p class="text-slate-400 w-full text-left my-2 font-semibold text-sm">By logging in, you accept the <span
          class="text-blue-600 underline text-sm">Terms & Conditions</span></p>
      <div class="w-full flex items-center justify-between">
        <Button label="Confirm" class="w-2/3" :loader="authLoader" size="block"/>
        <span class="text-blue-600 w-1/3 text-center text-sm">Resend code ?</span>
      </div>
      <div class="w-full py-1 text-sm flex items-center justify-between">
        <div class="font-light text-xs">Don't have an account yet ?,
          <router-link to="/register" class="text-blue-600 font-bold">
            Create an account.
          </router-link>
        </div>
        <div class="text-red-600 font-semibold">Resend Code</div>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>