<template>
  <button 
    class="
      border
      flex
      items-center
      justify-center
      rounded-md
      h-10 w-10 p-1"

    :class="`
        text-lg
        ${processedColor}
        ${(dark) ? 'text-white' : ''}
        ${(loader) ? 'bg-blue-800 text-white': 'text-blue-500'}
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
    return 'hover:bg-green-500 bg-green-500';
  }
  if (props.type === 'delete') {
    return 'hover:bg-red-500 bg-red-500';
  }
  if (props.type === 'info') {
    return 'hover:bg-indigo-500 bg-indigo-500';
  }
  if (props.type === 'edit') {
    return 'hover:bg-yellow-500 bg-yellow-500';
  }
  if (props.type === 'normal') {
    return 'hover:bg-blue-500 bg-blue-500';
  }
}


</script>

<style></style>