<template>
  <div :class="['relative', className]">
    <svg :width="size" :height="size" class="transform -rotate-90">
      <!-- Define the gradient -->
      <defs>
        <linearGradient :id="gradientId" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   :stop-color="stopOne" /> <!-- from-indigo-500 -->
          <stop offset="50%"  :stop-color="stopTwo" /> <!-- via-purple-500 -->
          <stop offset="100%" :stop-color="stopThree" /> <!-- to-pink-500 -->
        </linearGradient>
      </defs>

      <!-- Background circle -->
      <!-- <circle
        :cx="size / 2"
        :cy="size / 2"
        :r="radius"
        stroke="oklch(92.9% 0.013 255.508)"
        :stroke-width="strokeWidth"
        fill="none"
      /> -->

      <!-- Progress circle with gradient stroke -->
      <circle
        :cx="size / 2"
        :cy="size / 2"
        :r="radius"
        :stroke="'url(#' + gradientId + ')'"
        :stroke-width="strokeWidth"
        fill="none"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="offset"
        stroke-linecap="round"
        class="transition-all duration-300 ease-in-out"
      />
    </svg>

    <!-- Center label -->
    <div class="absolute inset-0 flex items-center justify-center">
      <span class="text-xl font-bold text-black">{{ value }}</span>
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
  stopOne: string; // Optional custom color for the first stop
  stopTwo: string; // Optional custom color for the second stop
  stopThree: string; // Optional custom color for the third stop
}

const props = withDefaults(defineProps<Props>(), {
  size: 120,
  strokeWidth: 8,
  className: '',
});

// Unique gradient ID (in case of multiple components on page)
const gradientId = `gradient-${Math.random().toString(36).substr(2, 9)}`;

const radius = computed(() => (props.size - props.strokeWidth) / 2);
const circumference = computed(() => radius.value * 2 * Math.PI);
const progress = computed(() => (props.value / props.max) * circumference.value);
const offset = computed(() => circumference.value - progress.value);
</script>