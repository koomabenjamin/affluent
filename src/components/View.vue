<script lang="ts" setup>
defineProps<{
  element: string;
  ariaLabel?: string;
  isDisabled?: boolean;
}>();
</script>

<template>
  <component :is="element" :aria-label="ariaLabel">
    <slot></slot>
  </component>
</template>
