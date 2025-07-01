<template>
  <MasterPage>
    <div class="lg:mt-0 lg:ml-0 w-full lg:w-3/5 overflow-auto no-scroll-bar relative h-full flex flex-col">
      <!-- Top with user total -->
      <div class="w-full h-[66px] flex items-center justify-between border-b sticky top-0 bg-slate-50 p-4 shadow-sm">
        <div class="flex items-center space-x-2">
          <div class="font-sans text-lg lg:text-3xl font-semibold">UGX {{ userSessionDetails?.account_balance ?? 0 }}
          </div>
          <div :class="{
            'bg-gradient-to-r from-cyan-500 to-blue-500 text-rose-100': ((userSessionDetails?.percentage_growth ?? 0) < 0),
            'bg-yellow-400 text-yellow-100': ((userSessionDetails?.percentage_growth ?? 0) === 0),
            'bg-emerald-500 text-emerald-100': ((userSessionDetails?.percentage_growth ?? 0) > 0),
          }" class="
            lg:h-8
            h-6
            rounded-full
            w-auto
            px-2
            py-1
            font-semibold
            lg:text-base
            text-xs
          ">
            {{ userSessionDetails?.percentage_growth ?? 0 }} %
          </div>
          <div :class="{
            'bg-gradient-to-r from-cyan-500 to-blue-500 text-rose-100': ((userSessionDetails?.percentage_growth ?? 0) < 0),
            'bg-yellow-400 text-yellow-100': ((userSessionDetails?.percentage_growth ?? 0) === 0),
            'bg-emerald-500 text-emerald-100': ((userSessionDetails?.percentage_growth ?? 0) > 0),
          }" class="lg:h-8 h-6 lg:w-8 w-6 rounded-full lg:p-2 p-1">
            <ArrowDownIcon class="h-4 stroke-2" />
          </div>
        </div>
        <div class="text-sm lg:text-lg">
          Welcome back,
          <span class="font-semibold text-sm lg:text-xl">{{ userSessionDetails?.name ?? 'No user detected' }}</span>
        </div>
      </div>
      <div class="px-2 py-0 bg-slate-100 relative">
        <slot></slot>
      </div>
    </div>
  </MasterPage>
</template>

<script setup lang="ts">
import { inject, ref } from "vue";
import { ArrowDownIcon } from "@heroicons/vue/24/outline";
import MasterPage from "./MasterPage.vue";

interface User {
  city?: string,
  country?: string,
  created_at?: string | null,
  deleted_at?: string | null,
  email?: string,
  first_name?: string,
  last_name?: string,
  name?: string,
  permissions?: string[],
  roles?: object[],
  phone_number?: string,
  photo?: string,
  two_factor_code?: number,
  two_factor_code_expires_at?: string,
  updated_at?: string | null,
  username?: string,
  id?: number,
  account_balance?: number,
  percentage_growth?: number,
  overall_account_balance?: number,
  overall_percentage_growth?: number,
  user_handle?: string,
  personal_assets?: undefined | string[] | number[] | symbol[],
  group_attained_assets?: object[]
}
const sessionUser: string = sessionStorage.getItem('user') ?? ''
const userSessionDetails: User = JSON.parse(sessionUser);

</script>

<style></style>