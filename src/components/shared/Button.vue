<template>
  <button 
    class="
      hover:text-white
      border-blue-500
      hover:bg-blue-800 
      border-2
      flex
      items-center
      justify-center
      rounded-md
      space-x-1"

    :class="`
        text-lg
        ${(dark) ? 'text-white':''}
        ${(size === 'sm') ? 'px-1 py-2':''}
        ${(size === 'md') ? 'px-2 py-2':''}
        ${(size === 'lg') ? 'px-2 py-2':''}
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
        text-lg
        ${(dark) ? 'text-white':''}
        ${(size === 'sm') ? 'text-xs':''}
        ${(size === 'md') ? 'text-sm':''}
        ${(size === 'lg') ? 'text-base':''}
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
}

defineProps<ButtonProps>();

</script>

<style></style>