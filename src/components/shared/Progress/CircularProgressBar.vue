<template>
  <div :class="['relative', className]">
    <svg :width="size" :height="size" class="transform -rotate-90">
      <!-- Background circle -->
      <circle
        :cx="size / 2"
        :cy="size / 2"
        :r="radius"
        stroke="#374151"
        :stroke-width="strokeWidth"
        fill="none"
      />
      <!-- Progress circle -->
      <circle
        :cx="size / 2"
        :cy="size / 2"
        :r="radius"
        stroke="#f97316"
        :stroke-width="strokeWidth"
        fill="none"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="offset"
        stroke-linecap="round"
        class="transition-all duration-300 ease-in-out"
      />
    </svg>
    <div class="absolute inset-0 flex items-center justify-center">
      <span class="text-2xl font-bold text-white">{{ value }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  value: number;
  max: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 120,
  strokeWidth: 8,
  className: '',
});

const radius = computed(() => (props.size - props.strokeWidth) / 2);
const circumference = computed(() => radius.value * 2 * Math.PI);
const progress = computed(() => (props.value / props.max) * circumference.value);
const offset = computed(() => circumference.value - progress.value);
</script>