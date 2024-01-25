<template>
      <div
      :class="`${primaryColour} h-auto py-1 fixed bottom-0 inset-x-0 flex items-center justify-between px-4 text-black lg:hidden border-t`">
      <div class="flex flex-col items-center h-16 w-16 rounded-lg p-1 hover:bg-blue-600 hover:text-white">
        <NewspaperIcon class="w-12 stroke-1" />
        <span class="text-xs">Dasboard</span>
      </div>
      <div class="flex flex-col items-center h-16 w-16 rounded hover:bg-blue-600 hover:text-white">
        <UserGroupIcon class="w-12 stroke-1" />
        <span class="text-xs">Groups</span>
      </div>
      <div class="flex flex-col items-center h-16 w-16 rounded hover:bg-blue-600 hover:text-white">
        <WalletIcon class="w-12 stroke-1" />
        <span class="text-xs">Wallet</span>
      </div>
      <div class="flex flex-col items-center h-16 w-16 rounded hover:bg-blue-600 hover:text-white">
        <CreditCardIcon class="w-12 stroke-1" />
        <span class="text-xs">Loans</span>
      </div>
      <div class="flex flex-col items-center h-16 w-16 rounded hover:bg-blue-600 hover:text-white">
        <CogIcon class="w-12 stroke-1" />
        <span class="text-xs">Settings</span>
      </div>
    </div>
</template>

<script setup lang="ts">
export interface BottomNavigationProps{
  primaryColour?: string | undefined;
}
const props = defineProps<BottomNavigationProps>();
</script>

<style>

</style>