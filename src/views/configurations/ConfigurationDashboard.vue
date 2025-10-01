<template>
  <div class="h-screen w-[60%] bg-blue-100 mx-auto container">

      <div class="w-full h-[66px] flex items-center justify-between border sticky top-0 bg-slate-50 p-4 shadow-sm z-10">
        <div class="flex items-center space-x-2">
          <div class="font-sans text-lg lg:text-3xl font-semibold">UGX {{ userDetails?.account_balance ?? 0 }}
          </div>
          <div :class="{
            'bg-gradient-to-r from-cyan-500 to-blue-500 text-rose-100': ((userDetails?.percentage_growth ?? 0) < 0),
            'bg-yellow-400 text-yellow-100': ((userDetails?.percentage_growth ?? 0) === 0),
            'bg-emerald-500 text-emerald-100': ((userDetails?.percentage_growth ?? 0) > 0),
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
            {{ userDetails?.percentage_growth ?? 0 }} %
          </div>
          <div :class="{
            'bg-gradient-to-r from-cyan-500 to-blue-500 text-rose-100': ((userDetails?.percentage_growth ?? 0) < 0),
            'bg-yellow-400 text-yellow-100': ((userDetails?.percentage_growth ?? 0) === 0),
            'bg-emerald-500 text-emerald-100': ((userDetails?.percentage_growth ?? 0) > 0),
          }" class="lg:h-8 h-6 lg:w-8 w-6 rounded-full lg:p-2 p-1">
            <ArrowDownIcon class="h-4 stroke-2" />
          </div>
        </div>

        <div class="text-sm lg:text-lg">
          Welcome back,
          <span class="font-semibold text-sm lg:text-xl">{{ userDetails?.name ?? 'No user detected' }}</span>
        </div>
      </div>

      <div class="w-full h-[50px] flex items-center justify-between border sticky top-0 bg-slate-50 p-4 shadow-sm z-10 border-b-blue-300">
        <h1 class="text-base">Configurations</h1>
      </div>

    <!-- <div>{{ userDetails }}</div>
    <div>request to join a number of groups as well as setup collection accounts and loan credibility essentials...</div> -->
  </div>
</template>

<script setup lang="ts">
const user: string = sessionStorage.getItem('user') ?? ''
const userDetails = JSON.parse(user);
</script>

<style>

</style>