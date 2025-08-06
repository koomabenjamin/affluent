<template>
  <div v-show="!props.hidden" :class="containerClasses">
    <!-- Selected Tags (Multi-select Mode) -->
    <span
      v-for="selected in selectedOptions"
      :key="selected[props.field]"
      class="border border-slate-100 p-1 mr-1 flex items-center gap-1 text-sm rounded"
    >
      {{ selected?.[props.field] }}
      <strong class="cursor-pointer" @click="removeOption(selected)">×</strong>
    </span>

    <!-- Search Input -->
    <input
      :id="props.id"
      :disabled="props.disabled"
      :accept="props.accept"
      :value="searchText"
      autocomplete="new-password"
      placeholder=" "
      type="text"
      @input="updateValue($event)"
      @blur="handleBlur"
      @focus="showOptions(true)"
      :class="inputClasses"
    />

    <!-- Optional Icon (Slot or Iconify) -->
    <slot name="icon" v-if="$slots.icon"></slot>

    <!-- Label -->
    <label :class="labelClasses">
      {{ props.label }}
    </label>
  </div>

  <!-- Options Dropdown -->
  <div
    v-show="displayOptions"
    class="w-full bg-slate-100 border-x border-b rounded-b-md divide-y text-sm max-h-48 overflow-y-auto z-10 relative"
  >
    <div
      v-for="(value, index) in displayedOptions"
      :key="index"
      class="h-8 p-1 pl-4 hover:bg-slate-200 cursor-pointer"
      @click="selectOption(value)"
    >
      {{ value?.[props.field] ?? '' }}
    </div>
  </div>

  <!-- Validation Message -->
  <p v-if="errorMessage" class="help-message text-red-600 text-xs mt-1">
    {{ errorMessage }}
  </p>
</template>

<script lang="ts" setup>
import { ref, computed, watch, shallowRef, toRef } from 'vue';
import { useField } from 'vee-validate';
import type { IconifyIcon } from "@iconify/vue";

type Error = { error: string };

interface OptionArrayStructure {
  [key: string]: any;
}

interface SelectProps {
  id?: string;
  name: string;
  label?: string;
  price?: string;
  accept?: string;
  hidden?: boolean;
  icon?: string | IconifyIcon;
  iconSize?: string | number;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  modelValue: string | number | object | string[] | number[] | object[];
  options: OptionArrayStructure[];
  multiple?: boolean;
  field: string;
  errors?: Error[];
  reduce: (option: OptionArrayStructure) => any;
}

const props = withDefaults(defineProps<SelectProps>(), {
  reduce: (option: any) => option?.field,
});

const emit = defineEmits(['update:modelValue']);

const searchText = ref('');
const displayOptions = ref(false);

const name = toRef(props, 'name');
const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
} = useField(name, undefined, {
  initialValue: props.modelValue,
});

const displayedOptions = shallowRef<OptionArrayStructure[]>(props.options);

watch(searchText, () => {
  displayedOptions.value = props.options.filter(option =>
    typeof option[props.field] === 'string' &&
    option[props.field].toLowerCase().includes(searchText.value.toLowerCase())
  );
});

const selectedOptions = ref<OptionArrayStructure[]>(
  Array.isArray(props.modelValue)
    ? props.options.filter(opt =>
        (props.modelValue as any[]).includes(props.reduce(opt))
      )
    : []
);

// ========== Event Handlers ==========

function updateValue(e: Event) {
  const value = (e.target as HTMLInputElement).value;
  searchText.value = value;
  inputValue.value = value;
  handleChange(e);
  showOptions(true);
}

function selectOption(option: OptionArrayStructure) {
  if (props.multiple) {
    if (!selectedOptions.value.some(o => props.reduce(o) === props.reduce(option))) {
      selectedOptions.value.push(option);
    }
    emit('update:modelValue', selectedOptions.value.map(opt => props.reduce(opt)));
    searchText.value = '';
  } else {
    searchText.value = option?.[props.field];
    inputValue.value = option?.[props.field];
    emit('update:modelValue', props.reduce(option));
  }
  showOptions(false);
}

function removeOption(option: OptionArrayStructure) {
  selectedOptions.value = selectedOptions.value.filter(
    o => props.reduce(o) !== props.reduce(option)
  );
  emit('update:modelValue', selectedOptions.value.map(opt => props.reduce(opt)));
}

function showOptions(force?: boolean) {
  displayOptions.value = force !== undefined ? force : !displayOptions.value;
}

// ========== Computed Classes ==========

const containerClasses = computed(() => `
  w-full relative flex flex-wrap p-2 pt-6 bg-white
  ${displayOptions.value ? 'border-x border-t rounded-t-md' : 'border rounded'}
  ${errorMessage.value || props.errors?.length ? 'border-rose-500' : 'border-gray-300'}
`);

const inputClasses = computed(() => `
  peer ${props.multiple ? 'w-auto' : 'w-full'}
  font-light bg-white transition
  focus:outline-none focus:ring-0 focus:ring-transparent
  border-green-500
  disabled:opacity-70 disabled:cursor-not-allowed
  ${props.price ? 'pl-9' : 'pl-2'}
`);

const labelClasses = computed(() => `
  absolute text-sm duration-150 transform -translate-y-4 top-5 z-10 origin-[0]
  ${props.price ? 'left-9' : 'left-4'} scale-75
  ${errorMessage.value || props.errors?.length ? 'text-rose-500' : 'text-gray-500'}
`);
</script>

<style scoped>
/* optional: style improvements */
</style>
