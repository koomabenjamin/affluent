<template>
  <div 
    :class="`${props.primaryColor} h-48 rounded-lg relative p-2 shadow-md`">
    <div 
      :class="`h-16 w-16 flex flex-col px-3 py-3 rounded-tl-md rounded-br-full ${props.secondaryColor} absolute top-0 left-0`">
      <component class="h-8 w-8 text-white" :is="outLineIcons[props.heroIcon]"></component>
    </div>
    <div class="mt-16 w-full whitespace-nowrap font-semibold font-mono">{{ props.label }}</div>
    <div class="w-full whitespace-nowrap mt-5 text-slate-600 uppercase text-sm">{{ props.description }}:
    </div>
    <div class="w-full whitespace-nowrap text-base font-bold">{{ props.amount }}</div>
  </div>
</template>

<script setup lang="ts">
// import * as OutLineIcons from '@heroicons/vue/24/outline';

const outLineIcons: any = import('@heroicons/vue/24/outline');

export interface CardProps {
  heroIcon: any;
  label: string;
  description: string;
  amount: string;
  primaryColor: string;
  secondaryColor: string;
}

const props = defineProps<CardProps>();
</script>

<style></style>