<template>
  <TransitionRoot appear :show="isModalOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center text-center"
        >
          <TransitionChild
            as="template"
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enter-from="translate-x-full"
            enter-to="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leave-from="translate-x-0"
            leave-to="translate-x-full"
          >
            <DialogPanel
              class=" w-1/3
                h-screen
                transform
                overflow-hidden
                bg-white
                p-6
                text-left
                align-middle
                shadow-xl
                transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                Payment successful
              </DialogTitle>
              <slot name="header"></slot>
              <slot name="body"></slot>
              <slot name="footer"></slot>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogTitle,
  DialogPanel
} from "@headlessui/vue";
import {
  XCircleIcon,
} from "@heroicons/vue/24/outline";

export interface SlideInModalProps{
  title?: string | undefined;
  description?: string | undefined;
  closeModal?: Function;
  isModalOpen: boolean | undefined;
}

const isModalOpen = ref<boolean>(true)

const props = defineProps <SlideInModalProps>();

const closeModal = () => (isModalOpen.value = false);

</script>

<style>
</style>