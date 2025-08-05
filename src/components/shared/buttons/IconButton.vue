<template>
  <button 
    class="
      border
      flex
      items-center
      justify-center
      rounded-full
      h-10 w-10 p-1"
    :class="`
        text-lg
        ${processedColor()}
        ${(dark) ? 'text-white' : ''}
        ${(loader) ? 'text-blue-800': 'text-blue-500'}
      `"
    >
    <div>
      <Icon
        icon="svg-spinners:180-ring-with-bg"
        class="text-white"
        :width="iconSize"
        v-if="loader" />
      <Icon
        :icon="icon" 
        :width="iconSize"
        v-if="!loader" />
    </div>
    <span
    :class="`
        text-lg
        ${(dark) ? 'text-white':''}
        ${(size === 'sm') ? 'text-xs':''}
        ${(size === 'md') ? 'text-sm':''}
        ${(size === 'lg') ? 'text-sm':''}
        ${(size === 'block') ? 'text-xl':''}
      `">{{ label }}</span>

  </button>
</template>

<script setup lang="ts">
import { Icon, type IconifyIcon } from "@iconify/vue";

export interface ButtonProps {
  type?: string,
  size?: string,
  label?: string | number,
  icon: string | IconifyIcon;
  iconSize?: string | number | undefined;
  dark?: boolean,
  loader?: boolean,
}

const props = defineProps<ButtonProps>();

const processedColor = () => {
  if (props.type === 'success') {
    return 'hover:text-green-500 text-green-400 text-white';
  }
  if (props.type === 'delete') {
    return 'hover:text-red-600 text-red-400 text-white';
  }
  if (props.type === 'info') {
    return 'hover:text-indigo-500 text-indigo-400 text-white';
  }
  if (props.type === 'edit') {
    return 'hover:text-yellow-400 text-yellow-400 text-white';
  }
  if (props.type === 'normal') {
    return 'hover:text-blue-500 text-blue-400 text-white';
  }
}


</script>

<style></style>