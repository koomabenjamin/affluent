<template>
  <div class="bg-yellow-500 h-16 fixed top-0 right-0 left-20 lg:left-80 text-white p-2 flex items-center justify-between">
      <span class="whitespace-nowrap"><strong>Welcome</strong> back.</span>
      <div class="w-full flex items-center justify-end h-20 text-white">
          <div class="h-10 w-10 rounded-full bg-yellow-400"></div>
          <div class="flex flex-col mx-2">
              <span class="font-bold text-lg">{{ user?.name }}</span>
              <span class="text-sm -mt-1">{{ user?.email }}</span>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
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
}
const sessionUser: string = sessionStorage.getItem('user') ?? ''
const user: User = JSON.parse(sessionUser);

console.log(sessionUser, user, '<============= user details')
</script>

<style>

</style>