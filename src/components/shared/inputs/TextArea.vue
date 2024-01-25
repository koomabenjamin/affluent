<template>
    <div class="relative w-full h-auto" v-show="!hide">
        <textarea :id="props.id"
            class="block p-2 border h-full w-full text-sm bg-transparent rounded-sm border-1 border-gray-300 appearance-nonedark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            :name="props.name" @input="handleTextAreaInput($event)" :type="props.type" placeholder=""
            rows="4">
      </textarea>
        <label
            class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
            {{ label }}
        </label>
        <!-- <component class="h-5 text-blue-600 absolute right-2 top-1/4" :is="OutlineIcons[props?.icon]">
      </component> -->
    </div>
</template>

<script setup lang="ts">
import * as OutlineIcons from '@heroicons/vue/24/outline';

const props = defineProps({
    id: {
        type: String,
    },
    label: {
        type: String,
    },
    rows: {
        type: Number,
    },
    cols: {
        type: Number,
    },
    hide: {
        type: Boolean,
        default: false,
    },
    icon: {
        type: String,
    },
    required: {
        type: Boolean,
    },
    disabled: {
        type: Boolean,
    },
    readonly: {
        type: Boolean,
        default: false
    },
    modelValue: {
        type: [String, Number],
        default: '',
    },
    name: {
        type: String,
    },
    value: {
        type: [String, Number],
    },
    errors: {
        type: Object,
    },
    type: {
        type: [String, Number, Symbol]
    }
});

const emit = defineEmits(['update:modelValue'])

const handleTextAreaInput = (e: Event) => {
    // $emit('', $event?.target?.value)
    emit("update:modelValue", (e.target as HTMLInputElement).value);
}
</script>

<style></style>