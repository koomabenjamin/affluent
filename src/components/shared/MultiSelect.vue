<template>
  <div v-show="!hidden" :class="`w-full relative border rounded-md flex flex-wrap
         p-2
         pt-6 ${errorMessage ? 'border-rose-500' : ''}
         ${props.errors ? 'border-rose-500' : ''}
         ${props.errors ? 'focus:border-rose-500' : 'focus:border-black'}`">

    <span v-for="selected in selectedOptions" :key="selected"
      class="border border-slate-100 p-1">{{ selected?.[props.field] }} <strong>X</strong></span>

    <input :id=props.id :disabled="props.disabled" placeholder=" " type="text" autocomplete="off" :accept="props.accept"
      @input="updateValue($event)" @blur="handleBlur()" :value="searchText" @focus="showOptions()" :class="`
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
         scale-75
         -translate-y-4
         ${props.errors ? 'text-rose-500' : ''}
         ${errorMessage ? 'text-rose-500' : ''}
       `">
      {{ props.label }}
    </label>

  </div>
  <div v-show="displayOptions">
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

const searchText = ref<String>('');

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

const selectedOptions = ref<any>(null);
const selectedOptionsArray = ref<any[]>([]);

const updateValue = (e: Event) => {
  handleChange(e);
  displayOptions.value = true;
  // emit('update:modelValue', (e.target as HTMLInputElement).value)
};

const selectOption = (option: any) => {
  if (props.multiple) {
    selectedOptionsArray.value.push(option);
    selectedOptions.value = [...new Set(selectedOptionsArray.value)];
    emit('update:modelValue', selectedOptions.value[0]?.[props.field]);
    searchText.value = "";
  } else {
    searchText.value = option?.[props.field];
    emit('update:modelValue', option?.[props.field]);
  }
  showOptions();
}

const displayOptions = ref<Boolean>(false);

const showOptions = () => displayOptions.value = !displayOptions.value;
</script>

<style></style>