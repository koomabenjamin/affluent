<template>
  <div class="w-full relative">

    <input @input="$emit('update:optionId', $event.target.value)" :id="`${props.id}-hidden-field`" hidden />

    {{ props.modelValue }}
    <div class="relative w-full h-12 dark:text-white mt-3">
      <input 
        :id="props.id"
        class="dark:bg-slate-800 block px-2.5 pb-2.5 border pt-4 h-full w-full text-sm text-gray-900 bg-transparent rounded-sm appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 peer"
        :name="props.name"
        :class="[(props.error !== '') ? 'focus:border-red-600' : 'focus:border-blue-600']"
        @input="$emit('update:optionName', $event.target.value)" 
        @focus="toggleSelectOptions()"
        :type="props.type"
        readonly
        placeholder=" " />
      <label
        :class="[(props.error !== '') ? 'peer-focus:text-red-600 peer-focus:dark:text-red-500' : 'peer-focus:text-blue-600 peer-focus:dark:text-blue-500']"
        class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] dark:text-white bg-white dark:bg-slate-800 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
        {{ label }}
      </label>
      <!-- <component class="h-5 text-blue-600 absolute right-2 top-1/4 dark:text-white" :is="OutlineIcons[props.icon]"></component> -->
      <span class="text-xs text-red-600">{{ props.error }}</span>
    </div>
    <!-- <FloatingLabelInput
      :label="props.label"
      @focus="openSelectables()"
      @input="$emit('update:optionName', $event.target.value)"
      :name="props.name"
      :id="props.id"
    /> -->
    <div v-if="optionsDropdown && displayedOptions.length > 0" class="
        absolute
        dark:bg-slate-800 dark:text-white
        bg-white
        z-20
        border
        w-full
        text-black
        h-auto
        max-h-56
        overflow-y-auto
        divide-y
        rounded-b
      ">
      <div class="
          h-12
          hover:bg-slate-100
          w-full
          cursor-pointer
          px-4
          py-2
          flex flex-col
        " v-for="option in displayedOptions" :key="option.id" @click="selectOption(option)">
        <span class="text-sm text-blue-600">{{ option.name }}</span>
        <span class="text-xs text-gray-400"
          v-if="(typeof option.description) !== 'undegined'">{{ option.description }}</span>
      </div>
    </div>
    <div v-if="!optionsDropdown && displayedOptions.length === 0" class="
        absolute
        dark:bg-slate-800 dark:text-white
        bg-white
        z-20
        border-r border-l border-b
        w-full
        h-auto
        overflow-y-auto
        divide-y
        text-gray-400
        rounded-b
      ">
      <div class="h-10 w-full cursor-pointer px-4 py-2">Loading...</div>
    </div>
    <div v-else></div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import FloatingLabelInput from "./FloatingLabelInput.vue";

const emit = defineEmits(["update:optionId", "update:optionName", "update:modelValue"]);

const selectedOptionId = ref("");
const selectedOptionName = ref("");

const optionsDropdown = ref(false);

const displayedOptions = ref([]);

const toggleSelectOptions = () => optionsDropdown.value = !optionsDropdown.value;

const selectOption = (option) => {
  optionsDropdown.value = false;
  const inputField = document.getElementById(props.id);
  const hiddenInputField = document.getElementById(`${props.id}-hidden-field`);
  inputField.dispatchEvent(new Event("input"));
  inputField.value = option.name;
  hiddenInputField.value = option.id;
  optionsDropdown.value = false;
  emit("update:optionId", option.id);
  emit("update:optionName", option.name);
  emit("update:modelValue", option.name);
  // selectedOptionId.value = option.id;
  // selectedOptionName.value = option.name;
  // console.log(option, optionsDropdown.value, displayedOptions.value.length);
};

const props = defineProps({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
  hide: {
        type: Boolean,
        default: false,
    },
  optionId: {
    type: [String, Number],
  },
  optionName: {
    type: [String, Number],
  },
  label: {
    type: String,
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  errors: {
    type: Object,
  },
  options: {
    type: [Array, Object],
  },
  required: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
  },
  value: {
    type: [String, Number],
  },
  errors: {
    type: Object,
  },
  type: {
    type: [String, Number, Symbol]
  },
  error: {
    type: [String, Number, Array]
  }
});

watch(
  () => props.optionName,
  (optionName) => {
    displayedOptions.value = props.options.filter((item) =>
      item.name.toLowerCase().includes(optionName)
    );
    if (optionsDropdown.value === false) optionsDropdown.value = true;
  }
);

onMounted(() => {
  displayedOptions.value = props.options;
});
</script>

<style scoped>
select {
  padding: 10px;
  margin: 0;
  box-sizing: border-box;
  height: 100%;
}
</style>