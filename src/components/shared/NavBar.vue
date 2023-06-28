<template>
  <div class="bg-yellow-500 h-16 fixed top-0 right-0 left-20 lg:left-80 text-white p-2 flex items-center justify-between">
      <span class="whitespace-nowrap"><strong>Welcome</strong> back.</span>
      <div class="w-full flex items-center justify-end h-20 text-white">
          <div class="h-10 w-10 rounded-full bg-yellow-400"></div>
          <div class="flex flex-col mx-2">
              <span class="font-bold text-lg">{{ user.name }}</span>
              <span class="text-sm -mt-1">{{ user.email }}</span>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
const user = JSON.parse(sessionStorage.getItem('user'));
</script>

<style>

</style>