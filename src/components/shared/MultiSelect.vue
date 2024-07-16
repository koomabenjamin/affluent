<template>
  <div v-show="!hidden" :class="`w-full relative flex flex-wrap
         p-2
         pt-6
         ${displayOptions ? 'border-x border-t rounded-t-md' : 'border rounded'}
         ${errorMessage ? 'border-rose-500' : ''}
         ${props.errors ? 'border-rose-500' : ''}
         ${props.errors ? 'focus:border-rose-500' : 'focus:border-black'}`">

    <span v-for="selected in selectedOptions" :key="selected"
      class="border border-slate-100 p-1">{{ selected?.[props.field] }} <strong>X</strong></span>

    <input :id=props?.id :disabled="props.disabled" placeholder=" " type="text" autocomplete="off" :accept="props.accept"
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
  <div v-show="displayOptions" class="w-full bg-slate-100 border-x border-b rounded-b-md divide-y text-sm">
    <div v-for="(value, index) in displayedOptions" :key="index" class="h-8 p-1 pl-4 hover:bg-slate-200 cursor-pointer"><span
        @click="selectOption(value)">{{ value?.[props.field] ?? '' }}</span></div>
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

export interface OptionArrayStructure {
  [key: string]: any; // Allows any string key and any value type
}

export interface SelectProps {
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
  options: OptionArrayStructure[];
  multiple?: boolean;
  field: string;
  errors?: Error[] | undefined;
  reduce: Function;
}


const props = withDefaults(defineProps<SelectProps>(), {
  reduce: (option: any) => option.field,
});

const searchText = ref('');

// const props = defineProps({
//   id: {
//     type: String,
//     required: false,
//   },
//   name: {
//     type: String,
//     required: true,
//   },
//   accept: {
//     type: String,
//     required: false,
//   },
//   label: {
//     type: [String, Number],
//     required: false,
//   },
//   price: {
//     type: Boolean,
//     required: false,
//   },
//   hidden: {
//     type: Boolean,
//     required: false,
//   },
//   multiple: {
//     type: Boolean,
//     required: false,
//   },
//   readonly: {
//     type: Boolean,
//     required: false,
//   },
//   disabled: {
//     type: Boolean,
//     required: false,
//   },
//   type: {
//     type: String,
//     required: true,
//   },
//   field: {
//     type: [String, Number],
//     required: true,
//   },
//   icon: {
//     type: String,
//     required: false,
//   },
//   iconSize: {
//     type: [String, Number],
//     required: false,
//   },
//   modelValue: {
//     type: [String, Number, Array, Object],
//     required: true,
//   },
//   options: {
//     type: Array,
//     required: true,
//   },
//   errors: {
//     type: [String, Number, Array, Object],
//     required: true,
//   },
//   reduce: {
//     type: Function,
//     required: false,
//     default: (option: any) => option
//   },
// });

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

const displayedOptions = shallowRef<OptionArrayStructure[]>(props.options);

// watch(
//   () => props.modelValue,
//   (modelValue) => {
//     console.log(props.modelValue)
//     displayedOptions.value = props.options.filter((option) => {
//       if (typeof option[props.field] === "string") {
//         return option[props.field].includes(searchText.value);
//       }
//     })
//   }
// );
watch(searchText, () => {
  displayedOptions.value = props.options.filter((option) => {
    if (typeof option[props.field] === "string") return option[props.field].includes(searchText.value);
    else searchText.value = "";
  });
}
);

const emit = defineEmits(['update:modelValue']);

const selectedOptions = ref<any>(null);
const selectedOptionsArray = ref<any[]>([]);

const updateValue = (e: Event) => {
  handleChange(e);
  displayOptions.value = true;
  searchText.value = (e.target as HTMLInputElement).value ?? '';
  // emit('update:modelValue', (e.target as HTMLInputElement).value)
};

const selectOption = (option: any) => {

  if (props.multiple) {
    selectedOptionsArray.value.push(option);
    selectedOptions.value = [...new Set(selectedOptionsArray.value)];
    emit('update:modelValue', selectedOptions.value[0]?.[props.field]);
    searchText.value = "";
  }
  else {

    searchText.value = option?.[props.field];
    if(props.reduce)emit('update:modelValue', props?.reduce(option) ?? option?.[props.field]);
    else emit('update:modelValue', option?.[props.field]);
  }
  showOptions();
}

const displayOptions = ref<Boolean>(false);

const showOptions = () => displayOptions.value = !displayOptions.value;
</script>

<style></style>