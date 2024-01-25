<template>
  <div class="
            w-auto
            px-2
            flex flex-col
            justify-center
            text-left
            h-10
            group
            space-y-2" @click="$emit('changeTab', props.label)"
    :class="{ 'text-blue-500': (props.label === props.activeTab) }">
    <span class="font-semibold text-sm w-full">{{ props.label }}</span>
    <div class="
              h-[3px]
              w-full
              bg-blue-500
              transform
              duration-500
              group-hover:scale-100
            " :class="[(props.label === props.activeTab) ? 'scale-100' : 'scale-0']"></div>
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