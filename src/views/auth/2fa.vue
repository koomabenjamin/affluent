<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import useAuthentication from '@/composables/auth';
import OtpInputs from '../../components/shared/inputs/OptInput.vue';
import Button from '../../components/shared/Button.vue';

const { twoFactorCodeConfirmation, authLoader } = useAuthentication();

const opt = ref('')

</script>

<template>
  <div class="flex w-screen h-screen center bg-gradient-to-tr from-yellow-400 via-yellow-500 bg-yellow-600">
    <div class="w-1/2"></div>
    <form @submit.prevent="twoFactorCodeConfirmation(opt)"
      class="w-1/3 mx-auto flex flex-col items-center space-y-4 h-auto p-5 dark:bg-slate-800 dark:text-white bg-white rounded">
      <p class="h1 text-left w-full my-4">HFMSG</p>
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
        <Button label="Confirm" class="w-2/3" :loader="authLoader" />
        <span class="text-blue-600 w-1/3 text-center text-sm">Resend code ?</span>
      </div>
      <div class="w-full py-1 text-center text-sm">
        <div class="font-light mb-4">Don't have an account yet ?,
          <router-link to="/register" class="text-blue-600 font-bold">
            Create an account.
          </router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>