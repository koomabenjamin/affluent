<template>
   <div className="w-full relative">
      <input
        :id=props.id
        :disabled="props.disabled"
        placeholder=" "
        :type="props.type"
        @input="emit('update:modelValue')"
        :class="`
          peer
          w-full
          p-4
          pt-6 
          font-light 
          bg-white 
          border
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          ${props.price ? 'pl-9' : 'pl-4'}
          ${props.errors ? 'border-rose-500' : 'border-neutral-300'}
          ${props.errors ? 'focus:border-rose-500' : 'focus:border-black'}
        `"
      />
      <label 
        :class="`
          absolute 
          text-md
          duration-150 
          transform 
          -translate-y-4 
          top-5 
          z-10 
          origin-[0] 
          ${props.price ? 'left-9' : 'left-4'}
          peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75
          peer-focus:-translate-y-4
          ${props.errors ? 'text-rose-500' : 'text-zinc-400'}
        `"
      >
        {{props.label}}
      </label>
      <div class="absolute top-5 right-2">
        <Icon :icon="props.icon" :width="props.iconSize"/>
      </div>
    </div>
</template>

<script setup lang="ts">
import { Icon, type IconifyIcon } from "@iconify/vue";

type Error = {
  error: string;
}

export interface InputProps{
  id?: string;
  name?: string;
  label?: string;
  price?: string;
  hide?: boolean;
  icon: string | IconifyIcon;
  iconSize?: string | number;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  modelValue?: string;
  errors?: Error[];
}

const props = defineProps<InputProps>();

const emit = defineEmits(['update:modelValue'])

const updateValue = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
};
</script>

<style>

</style>