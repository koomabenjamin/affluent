<template>
  <button 
    class="
      bg-blue-800 
      border-2
      flex
      item-center
      space-x-1
      px-2
      py-1
      border-white">
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
        ${(size === 'sm') ? 'px-1 py-0.5':''}
        ${(size === 'md') ? 'px-4 py-2':''}
        ${(size === 'lg') ? 'px-6 py-3':''}
      `">
      {{ label }}
    </span>

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