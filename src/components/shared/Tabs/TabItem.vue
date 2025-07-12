<template>
  <div class="relative">
    <div
      class="
        w-auto
        px-4
        flex flex-col
        justify-center
        text-left
        cursor-pointer
        h-12
        group
        space-y-2" @click="$emit('changeTab', props.label)"
      :class="{ 'text-blue-500': (props.label === props.activeTab) }">
      <span class="font-semibold text-sm w-full">{{ props.label }}</span>
      <div 
        class="
          absolute
          bottom-0
          left-0
          h-[4px]
          w-full
          bg-blue-500
          transform
          duration-500
          group-hover:scale-100
        " :class="[(props.label === props.activeTab) ? 'scale-100' : 'scale-0']"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
export interface TabProps {
  label: string;
  active?: boolean | undefined;
  activeTab?: string | undefined;
}

defineEmits(['changeTab'])

const props = defineProps<TabProps>();
</script>

<style></style>