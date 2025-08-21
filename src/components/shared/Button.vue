<template>
  <button 
    class="
      text-white
      bg-blue-800 
      border-2
      flex
      items-center
      justify-center
      rounded-full
      space-x-1"
    :class="`
        text-lg
        ${className}
        ${(dark) ? 'text-white':''}
        ${(size === 'sm') ? 'px-2 py-2':''}
        ${(size === 'md') ? 'px-3 py-2':''}
        ${(size === 'lg') ? 'px-5 py-2':''}
        ${(size === 'block') ? 'w-full py-3':''}

        ${(loader) ? 'bg-blue-800 text-white': 'text-blue-500'}
      `"
    >
    <div>
      <Icon
        icon="svg-spinners:180-ring-with-bg"
        class="text-white"
        width="20"
        v-if="loader" />
    </div>
    <span
    :class="`
        ${(dark) ? 'text-white':''}
        ${(size === 'sm') ? 'text-[0.8125rem]/6 font-semibold':''}
        ${(size === 'md') ? 'text-[0.8125rem]/6 font-semibold':''}
        ${(size === 'lg') ? 'text-[0.8125rem]/6 font-semibold':''}
        ${(size === 'block') ? 'text-xl':''}
      `">{{ label }}</span>

  </button>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

export interface ButtonProps {
  type?: string, // fab-button, label, normal 
  size?: string,
  label: string | number,
  dark?: boolean,
  loader?: boolean,
  className?: string,
  id?: string,
}

defineProps<ButtonProps>();

</script>

<style></style>