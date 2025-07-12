<template>
  <svg :width="width" :height="height">

    <!-- Smooth curve using path -->
    <path
      :d="pathD"
      fill="none"
      stroke="#3b82f6"
      stroke-width="3"
    />

    <!-- Circles at each point -->
    <!-- <circle
      v-for="(point, index) in coords"
      :key="index"
      :cx="point.x"
      :cy="point.y"
      r="3"
      fill="#3b82f6"
    /> -->
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const width = 200;
const height = 50;
const data = [1, 20, 40, 25, 60, 45, 80, 55, 100];

const maxY = Math.max(...data);
const stepX = width / (data.length - 1);

// Map data to SVG coordinates (inverted Y-axis)
const coords = computed(() =>
  data.map((value, i) => ({
    x: i * stepX,
    y: height - (value / maxY) * height,
  }))
);

// Smooth cubic Bezier curve path generator
const pathD = computed(() => {
  const points = coords.value;
  if (points.length < 2) return '';

  const d = [`M ${points[0].x} ${points[0].y}`];

  for (let i = 0; i < points.length - 1; i++) {
    const curr = points[i];
    const next = points[i + 1];

    const controlX = (curr.x + next.x) / 2;

    d.push(`C ${controlX} ${curr.y}, ${controlX} ${next.y}, ${next.x} ${next.y}`);
  }

  return d.join(' ');
});
</script>
