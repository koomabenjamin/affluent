<template>
  <div class="w-full relative">
    <div class="relative w-full h-12 mt-1">
      <input :id="id"
        class="block px-2.5 pb-2.5 border pt-4 h-full w-full text-sm text-gray-900 rounded-sm appearance-none focus:outline-none focus:ring-0 peer"
        :class="[(error !== '') ? 'focus:border-red-600' : 'focus:border-blue-600']"
        @input="handleInputChange($event)"
        @focus="toggleSelectOptions()" placeholder=" " />
      <label
        :class="[(error !== '') ? 'peer-focus:text-red-600 peer-focus:dark:text-red-500' : 'peer-focus:text-blue-600 peer-focus:dark:text-blue-500']"
        class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
        {{ label }}
      </label>
      <!-- <component class="h-5 text-blue-600 absolute right-2 top-1/4" :is="OutlineIcons[props.icon]"></component> -->
      <!-- <span class="text-xs text-red-600">{{ props.error }}</span> -->
    </div>
    <div v-if="optionsDropdown && (displayedOptions?.length ?? 0) > 0" class="
        absolute
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
          v-if="(typeof option.description) !== 'undefined'">{{ option.description }}</span>
      </div>
    </div>
    <div v-if="!optionsDropdown || !loadingOptions" class="
        absolute
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
      <div class="h-10 w-full cursor-pointer px-4 py-2 text-xs text-center">Loading...</div>
    </div>
    <div v-else></div>
  </div>
</template>

<script lang="ts">
import type { PropType } from "vue";
import { ref, watch, onMounted, defineComponent } from "vue";
import FloatingLabelInput from "./inputs/FloatingLabelInput.vue";

interface SelectOptionStructure {
  id?: string | number;
  name?: string;
  description?: string | undefined | null;
}

export interface SelectProps {
  id?: string | undefined;
  name?: string | undefined;
  label?: string | undefined;
  price?: string | undefined;
  hide?: boolean | undefined;
  iconSize?: string | number | undefined;
  optionName?: string | number | undefined;
  optionId?: string | number | undefined;
  options?: object[] | string[] | number[];
  type?: string | undefined;
  required?: boolean | undefined;
  disabled?: boolean | undefined;
  readonly?: boolean | undefined;
  modelValue?: string | undefined;
  error?: string | string[] | undefined;
  errors?: Error[] | undefined;
}


export default defineComponent({
  name: "Select",
  props: {
    id: {
      type: String as PropType<string>,
    },
    hide: {
      default: false,
    },
    modelValue: {
      default: "",
    },
  },
  emits: ["update:optionId", "update:optionName", "update:modelValue"],
  setup(props: SelectProps, { emit }) {

    const loadingOptions = ref<boolean>(false);

    const selectedOptionId = ref<string>("");

    const selectedOptionName = ref<string>("");

    const optionsDropdown = ref<boolean>(false);

    const displayedOptions = ref<object[] | string[] | number[]>([]);

    const toggleSelectOptions = () => optionsDropdown.value = !optionsDropdown.value;

    const selectOption = (option: SelectOptionStructure) => {
      optionsDropdown.value = false;
      const inputField: HTMLElement = document.getElementById(props?.id ?? '');
      // const hiddenInputField = document.getElementById(`${props.id}-hidden-field`);
      inputField.dispatchEvent(new Event("input"));
      inputField.value = option.name;
      // hiddenInputField.value = option.id;
      optionsDropdown.value = false;
      emit("update:optionId", option.id);
      emit("update:optionName", option.name);
      emit("update:modelValue", option.name);
    };

    const handleInputChange = (e: Event) => {
      emit('update:optionId', (e.target as HTMLInputElement).value)
      emit('update:optionName', (e.target as HTMLInputElement).value)
    };

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

    return {
      selectOption,
      handleInputChange,
      toggleSelectOptions,
      selectedOptionId,
      selectedOptionName,
      displayedOptions,
      optionsDropdown,
      loadingOptions
    }
  },
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