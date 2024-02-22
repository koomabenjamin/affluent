<template>
  <div class="w-full relative border">
    <input :value="optionId" @input="handleOptionIdInput($event)" hidden />
    <!-- Selected options -->
    <div class="h-auto w-full flex flex-wrap overflow-auto p-0.5">
      <!-- <slot :options="selectedOptions"></slot> -->
      <div v-for="option in selectedOptions" :key="option.id" class="
          pl-1
          pr-2
          py-1
          w-auto
          h-10
          border
          bg-slate-100
          flex flex-shrink-0
          m-0.5
          items-center
          space-x-2
          rounded-full
        ">
        <div class="
            h-8
            w-8
            center
            bg-slate-100
            border
            rounded-full
            hover:text-white hover:bg-red-600
            text-red-600
          ">
          <component class="h-4 w-4" :is="OutlineIcons['XCircleIcon']"></component>
        </div>
        <div class="text-xs stroke-2">{{ option.name }}</div>
      </div>
    </div>
    <div class="relative w-full h-10 mt-1">
      <input class="
          block
          px-2.5
          pb-2.5
          pt-4
          h-full
          w-full
          text-sm 
          text-gray-900
          bg-white
          bg-transparent
          rounded-sm
          appearance-none
          focus:outline-none focus:ring-0
          peer
        " :label="props.label" @input="handleOptionNameInput($event)" :name="props.name" :id="props.id"
        autocomplete="off" :placeholder="props.placeholder" />
      <label class="
          absolute
          text-sm text-gray-500
          duration-300
          transform
          -translate-y-4
          scale-75
          top-2
          z-10
          origin-[0]
          bg-white
          px-2
          peer-focus:px-2 peer-focus:text-blue-600
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:-translate-y-1/2
          peer-placeholder-shown:top-1/2
          peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4
          left-1
        ">
        {{ props.label }}
      </label>
      <!-- <component class="h-5 text-blue-600 absolute right-2 top-1/4 :is="OutlineIcons[props.icon]"></component> -->
    </div>

    <div v-if="optionsDropdown && displayedOptions.length > 0" class="
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
          v-if="typeof option?.description !== 'undefined'">{{ option.description }}</span>
      </div>
    </div>
    <div v-if="optionsDropdown" class="
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
      <div class="h-10 w-full cursor-pointer px-4 py-2">Loading...</div>
    </div>
    <div v-else></div>
  </div>
</template>
  
<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import * as OutlineIcons from "@heroicons/vue/24/outline";
import FloatingLabelInput from "./inputs/FloatingLabelInput.vue";

export interface OptionsInterface {
  id?: string | undefined | number;
  name?: string | undefined;
  description?: string | undefined | number;
}

export interface MultiSelectProps {
  id: string;
  name: string;
  placeholder: string;
  optionId: string;
  optionName: string;
  optionsSelected: string[] | number[] | object[];
  label: string;
  modelValue: string | number | string[];
  errors: object;
  options: object[];
}

const emit = defineEmits([
  "update:optionId",
  "update:optionName",
  "update:optionsSelected",
]);

const optionsDropdown = ref(false);

const displayedOptions = ref<any[]>([]);

const selectedOptions = ref<OptionsInterface[]>([]);

const selectOption = (option: OptionsInterface) => {
  optionsDropdown.value = false;
  if (!selectedOptions.value.includes(option))
    selectedOptions.value.push(option);
  emit("update:optionId", option.id);
  emit("update:optionName", option.name);
  emit("update:optionsSelected", selectedOptions.value);
};

const handleOptionIdInput = (e: Event) => {
  emit("update:optionId", (e.target as HTMLInputElement).value);
}
const handleOptionNameInput = (e: Event) => {
  emit("update:optionName", (e.target as HTMLInputElement).value);
}

const props = defineProps<MultiSelectProps>();

watch(
  () => props.optionName,
  (optionName) => {
    if (typeof props?.options !== 'undefined') {
      displayedOptions.value = props.options.filter((item: OptionsInterface) =>
        item?.name?.toLowerCase().includes(optionName ?? '')
      );
    }
    if (optionsDropdown.value === false) optionsDropdown.value = true;
  }
);

watch(
  () => props.options,
  (options) => {
    if (options.length === 0) optionsDropdown.value = false;
  }
);

onMounted(() => {
  // if (typeof props?.options !== 'undefined') displayedOptions.value = props.options;
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