<template>
  <div v-show="!hidden" :class="`w-full relative border rounded-md 
         p-2
         pt-6 ${errorMessage ? 'border-rose-500' : ''}
         ${props.errors ? 'border-rose-500' : ''}
         ${props.errors ? 'focus:border-rose-500' : 'focus:border-black'}`">

         <div v-if="multiple">
          <div v-for="selected in selectedOptions" :key="selected">{{ selected }}</div>
         </div>

    <input :id=props.id :disabled="props.disabled" placeholder=" " type="text" autocomplete="off" :accept="props.accept"
      @input="updateValue($event)" @blur="handleBlur()" :value="props.modelValue" @focus="showOptions()" :class="`
         peer
         ${(multiple) ? 'w-auto' : 'w-full'}
         font-light 
         bg-white
         transition
         focus:outline-none
         focus:ring-0
         focus:ring-transparent
         border-green-500
         disabled:opacity-70
         disabled:cursor-not-allowed
         ${props.price ? 'pl-9' : 'pl-2'}
         
       `" />
    <label :class="`
         absolute 
         text-sm
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
         ${props.errors ? 'text-rose-500' : ''}
         ${errorMessage ? 'text-rose-500' : ''}
       `">
      {{ props.label }}
    </label>

  </div>
  <div v-show="optionsVisible">
    <div v-for="option in displayedOptions" :key="option"><span
        @click="selectOption(option)">{{ option?.[field] ?? '' }}</span></div>
  </div>
  <p class="help-message text-red-600 text-xs" v-show="errorMessage || meta.valid">
    <!-- {{ errorMessage }} - {{ meta }} -->
    {{ errorMessage }}
  </p>
</template>

<script lang="ts" setup>
import { toRef, watch, ref, shallowRef } from 'vue';
import { useField } from 'vee-validate';
import { Icon, type IconifyIcon } from "@iconify/vue";

type Error = {
  error: string;
}

export interface InputProps {
  id?: string | undefined;
  name: string;
  label?: string | undefined;
  price?: string | undefined;
  accept?: string | undefined;
  hidden?: boolean | undefined;
  icon: string | IconifyIcon;
  iconSize?: string | number | undefined;
  type?: string | undefined;
  required?: boolean | undefined;
  disabled?: boolean | undefined;
  readonly?: boolean | undefined;
  modelValue: string | number | object | string[] | number[] | object[];
  options: object[];
  multiple?: boolean;
  field: string;
  errors?: Error[] | undefined;
}

const props = defineProps<InputProps>();

const name = toRef(props, 'name');

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(name, undefined, {
  initialValue: props.modelValue,
});

const displayedOptions = shallowRef(props.options);

watch(
  () => props.modelValue,
  (modelValue) => {
    console.log(props.modelValue)
    displayedOptions.value = props.options.filter((option) => {
      if (typeof option === "string") {
        return option.includes(modelValue);
      }
    })
  }
);

const emit = defineEmits(['update:modelValue']);

const updateValue = (e: Event) => {
  handleChange(e);
  emit('update:modelValue', (e.target as HTMLInputElement).value)
};

const selectOption = (option: any) => {
  emit('update:modelValue', option?.[props.field]);
  showOptions();
}

const optionsVisible = ref<Boolean>(false);

const showOptions = () => optionsVisible.value = !optionsVisible.value;
</script>

<style></style>