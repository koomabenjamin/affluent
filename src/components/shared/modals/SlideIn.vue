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

      <div class="fixed right-0 inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-end text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <Dialog
              class="
                w-1/3
                h-screen
                transform
                overflow-hidden
                rounded-none
                dark:bg-slate-800 dark:text-white
                bg-white
                p-6
                text-left
                align-middle
                shadow-xl
                transition-all
              "
            >
              <DialogTitle
                as="h3"
                class="
                  text-lg
                  mb-5
                  font-medium
                  leading-6
                  text-gray-900
                  flex
                  w-full
                  items-center
                  justify-between
                "
              >
                <div class="flex flex-col">
                  <span>Group Request</span>
                  <span class="text-xs text-gray-500"
                    >Use this form to submit a group request to a sacco that you
                    are connected to.</span
                  >
                </div>
                <XCircleIcon
                  class="
                    text-rose-600
                    h-8
                    cursor-pointer
                    hover:text-white hover:bg-gradient-to-r
                    from-cyan-500
                    to-blue-500
                    hover:rounded-full
                  "
                  @click="closeModal()"
                />
              </DialogTitle>

              <slot name="body"></slot>
              <slot name="footer"></slot>

            </Dialog>
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