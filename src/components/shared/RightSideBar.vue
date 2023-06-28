<template>
  <div
    class="
      hidden
      lg:block
      w-1/5
      h-full
      dark:bg-slate-800 dark:text-white bg-slate-50
      border-l
      dark:border-slate-700
      shadow-inner
      py-5
      px-2
      overflow-auto
      no-scroll-bar
      relative
    "
  >
    <!-- User details and information -->
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-2 ml-2">
        <MagnifyingGlassIcon class="h-5 w-5 flex-shrink-0" />
        <div class="relative">
          <BellIcon class="h-5 w-5 flex-shrink-0" />
          <div
            class="h-2 w-2 rounded-full absolute bg-yellow-400 top-0 right-0"
          ></div>
        </div>
      </div>
      <div class="flex items-center space-x-1">
        <div class="flex flex-col text-xs text-right">
          <h3 class="font-semibold">{{ userSessionDetails?.name ?? 'No User' }}</h3>
          <!-- <h3 class="text-[10px]">kooma.benjamin@gmail.com</h3> -->
          <h3 class="text-[10px] lowercase">@{{ userSessionDetails?.user_handle }}</h3>
        </div>
        <div class="h-12 w-12 bg-black rounded-full"></div>
      </div>
    </div>

    <!-- Club investments -->
    <div class="mt-10 flex flex-col space-y-1">
      <div class="font-sans text-base font-bold">Total Balance:</div>
      <div class="font-sans text-lg lg:text-2xl font-semibold">UGX {{ userSessionDetails?.overall_account_balance ?? 0 }}</div>
      <div class="flex w-full">
        <div
          class="
            bg-blue-200
            text-blue-500
            h-6
            rounded-l-full
            w-auto
            px-2
            py-1
            font-semibold
            text-xs
          "
        >
          {{ userSessionDetails?.overall_percentage_growth ?? 0 }} %
        </div>
        <div class="h-6 w-6 text-blue-200 bg-blue-500 rounded-r-full p-1">
          <ArrowDownIcon class="h-4" />
        </div>
      </div>
    </div>

    <!-- Deposit button -->
    <button
      class="bg-blue-500 h-12 w-full rounded-lg font-bold mt-10 text-white"
    >
      Deposit
    </button>

    <!-- Asset Register -->
    <div class="mt-10 flex flex-col space-y-1">
      <div class="font-sans text-base font-bold">Asset Register:</div>
      <div
        v-if="userSessionDetails?.personal_assets.length === 0" 
        class="flex w-full dark:bg-slate-800 dark:text-white bg-gray-50 rounded-lg mt-2 shadow border dark:border-slate-700">
        <div
          class="
            bg-blue-200
            text-blue-500
            h-12
            w-12
            rounded-ldark:
            center
            font-semibold
            text-xs
          "
        >
          <div class="h-6 w-6 text-blue-200 bg-blue-500 rounded-full p-1">
            <CheckBadgeIcon class="h-4" />
          </div>
        </div>
        <div class="flex flex-col ml-2 justify-center">
          <span class="text-xs font-bold">No Assets Registered</span>
          <span class="text-[10px] font-semibold"
            >Purchased: <span class="text-blue-400">-</span></span
          >
        </div>
      </div>
      <div
        v-for="asset in userSessionDetails?.personal_assets"
        :key="asset" 
        class="flex w-full dark:bg-slate-800 dark:text-white bg-gray-50 rounded-lg mt-2 shadow border dark:border-slate-700">
        <div
          class="
            bg-blue-200
            text-blue-500
            h-12
            w-12
            rounded-ldark:
            center
            font-semibold
            text-xs
          "
        >
          <div class="h-6 w-6 text-blue-200 bg-blue-500 rounded-full p-1">
            <CheckBadgeIcon class="h-4" />
          </div>
        </div>
        <div class="flex flex-col ml-2 justify-center">
          <span class="text-xs font-bold">Gayaza Land</span>
          <span class="text-[10px] font-semibold"
            >Purchased: <span class="text-blue-400">10/01/2021</span></span
          >
        </div>
      </div>
    </div>

    <!-- Another ad or announcement banner -->
    <div class="w-full flex flex-col mt-5">
      <div
        class="
          bg-black
          h-60
          rounded-lg
          flex
          items-center
          justify-center
          text-white
          font-black
        "
      >
        Ad Banner
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
import {
  Squares2X2Icon,
  ChevronRightIcon,
  ArrowDownIcon,
  UserCircleIcon,
  BellIcon,
  Bars4Icon,
  CreditCardIcon,
  CogIcon,
  ArrowLeftOnRectangleIcon,
  MagnifyingGlassIcon,
  CheckBadgeIcon,
} from "@heroicons/vue/24/outline";

interface UserSessionCredentials {
  name?: string,
  email?: string,
  account_balance?: number,
  percentage_growth?: number,
  overall_account_balance?: number,
  overall_percentage_growth?: number,
  user_handle?: string,
  personal_assets?: object[],
  group_attained_assets?: object[]
}

const userSessionDetails : UserSessionCredentials = {}

</script>

<style>
</style>