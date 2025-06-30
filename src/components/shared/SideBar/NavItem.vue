<template>
  <button @click="updateActiveBoard(path)" :class="{ 'bg-blue-600 text-white hover:text-blue-500': isActive }"
    class="flex w-full h-10 rounded-lg items-center justify-between p-2 hover:bg-slate-100 hover:shadow hover:scale-105 transition-all duration-200 ease-in-out">
    <div class="flex space-x-2 items-center">
      <Icon
        :icon="icon" 
        :width="iconSize" />
      <div class="font-semibold text-xs capitalize">{{ name }}</div>
    </div>
    <ChevronRightIcon class="h-5 w-5" />
  </button>
</template>

<script lang="ts" setup>
import {
  ChevronRightIcon,
} from '@heroicons/vue/24/outline';
import { defineProps, defineEmits, ref } from 'vue';
import { Icon, type IconifyIcon } from "@iconify/vue";

const props = defineProps<{
  isActive?: boolean;
  name: string;
  path: string;
  icon: string | IconifyIcon;
  iconSize?: string | number | undefined;
}>();

const emit = defineEmits<{
  (e: 'click'): void;
  (e: 'updateActiveBoard', name: string): void;
}>();

const isActive = ref(props.isActive ?? false);

function handleClick() {
  emit('click');
}

function updateActiveBoard(name: string) {
  emit('updateActiveBoard', name);
}
</script>

<style scoped>
li {
  cursor: pointer;
  padding: 10px 16px;
  list-style: none;
  transition: background 0.2s;
}

li.active {
  background: #f0f0f0;
  font-weight: bold;
}
</style>