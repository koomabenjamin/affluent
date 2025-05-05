<template>
  <div class="lg:w-screen h-screen flex flex-col lg:flex-row p-0">
    <LeftSideBar />
    <div :class="`${highlight} h-16 text-black items-center flex px-4 justify-between lg:hidden w-full`">
      <!-- Image and company -->
      <div class="
              text-2xl
              font-bold
              flex
              items-center
              w-full
              justify-start
            ">
        <div class="h-10 w-12 -space-x-2 -space-y-5">
          <div class="bg-blue-600 h-7 w-9 rounded-full"></div>
          <div class="bg-yellow-400 h-7 w-9 rounded-full"></div>
        </div>
        <h2>{{ appName }}</h2>
      </div>
      <Bars4Icon class="h-12 w-12 cursor-pointer" @click="openModal" />
    </div>

    <slot></slot>

    <div
      :class="`bg-blue-600 h-16 w-16 fixed bottom-20 right-2 rounded-full center text-white cursor-pointer scale-75 hover:scale-110 duration-150 lg:hidden`"
      @click="toggleChatModal">
      <ChatBubbleOvalLeftEllipsisIcon class="w-10" />
    </div>
    <div
      :class="`${primary} h-auto py-1 fixed bottom-0 inset-x-0 flex items-center justify-between px-4 text-black lg:hidden border-t`">
      <div class="flex flex-col items-center h-16 w-16 rounded px-3 py-2 hover:bg-blue-600 hover:text-white"
        @click="updateActiveBoard('')">
        <NewspaperIcon class="w-12 stroke-1" />
        <span class="text-xs">Dashboard</span>
      </div>
      <div class="flex flex-col items-center h-16 w-16 rounded px-3 py-2 hover:bg-blue-600 hover:text-white"
        @click="updateActiveBoard('groups')" v-if="false">
        <UserGroupIcon class="w-12 stroke-1" />
        <span class="text-xs">Groups</span>
      </div>
      <div class="flex flex-col items-center h-16 w-16 rounded px-3 py-2 hover:bg-blue-600 hover:text-white"
        @click="updateActiveBoard('collections')">
        <BanknotesIcon class="w-12 stroke-1" />
        <span class="text-xs">Collections</span>
      </div>
      <div class="flex flex-col items-center h-16 w-16 rounded px-3 py-2 hover:bg-blue-600 hover:text-white"
        @click="updateActiveBoard('wallet')">
        <WalletIcon class="w-12 stroke-1" />
        <span class="text-xs">Wallet</span>
      </div>
      <div class="flex flex-col items-center h-16 w-16 rounded px-3 py-2 hover:bg-blue-600 hover:text-white"
        @click="updateActiveBoard('loans')">
        <CreditCardIcon class="w-12 stroke-1" />
        <span class="text-xs">Loans</span>
      </div>
      <div class="flex flex-col items-center h-16 w-16 rounded px-3 py-2 hover:bg-blue-600 hover:text-white"
        @click="updateActiveBoard('settings')">
        <CogIcon class="w-12 stroke-1" />
        <span class="text-xs">Settings</span>
      </div>
    </div>
    <RightSideBar />
  </div>

  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild as="template" enter="duration-300" enter-from="opacity-0" enter-to="opacity-100"
        leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="flex h-screen items-center justify-end text-center">
          <TransitionChild as="template" enter="transform transition ease-in-out duration-500"
            enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500"
            leave-from="translate-x-full" leave-to="translate-x-full">
            <DialogPanel
              class="max-w-lg w-2/3 transform overflow-hidden h-full bg-white p-2 text-left align-middle shadow-xl transition-all z-30">
              <div>

                <!-- Sidebar menu and content -->
                <div class="my-10 flex flex-col space-y-2">
                  <button @click="updateActiveBoard('')"
                    :class="{ 'bg-blue-600 text-white': router.currentRoute.value.name === 'home' }" class="
                      flex
                      w-full
                      h-10
                      rounded
                      items-center
                      justify-between
                      p-2
                    ">
                    <div class="flex space-x-2 items-center">
                      <Squares2X2Icon class="h-6 w-6" />
                      <div class="font-semibold text-xs">Dashboard</div>
                    </div>
                    <ChevronRightIcon class="h-5 w-5" />
                  </button>
                  <button @click="updateActiveBoard('newsfeed')"
                    :class="{ 'bg-blue-600 text-white': router.currentRoute.value.name === 'newsfeed' }" class="
                      flex
                      w-full
                      h-10
                      rounded
                      items-center
                      justify-between
                      p-2
                    ">
                    <div class="flex space-x-2 items-center">
                      <NewspaperIcon class="h-6 w-6" />
                      <div class="font-semibold text-xs">NewsFeed</div>
                    </div>
                    <ChevronRightIcon class="h-5 w-5" />
                  </button>
                  <button @click="updateActiveBoard('profile')"
                    :class="{ 'bg-blue-600 text-white': router.currentRoute.value.name === 'profile' }" class="
                      flex
                      w-full
                      h-10
                      rounded
                      items-center
                      justify-between
                      p-2
                    ">
                    <div class="flex space-x-2 items-center">
                      <UserCircleIcon class="h-6 w-6" />
                      <div class="font-semibold text-xs">Profile</div>
                    </div>
                    <ChevronRightIcon class="h-5 w-5" />
                  </button>
                  <button @click="updateActiveBoard('loans')"
                    :class="{ 'bg-blue-600 text-white': router.currentRoute.value.name === 'loans' }" class="
                      flex
                      w-full
                      h-10
                      rounded
                      items-center
                      justify-between
                      p-2
                    ">
                    <div class="flex space-x-2 items-center">
                      <BanknotesIcon class="h-6 w-6" />
                      <div class="font-semibold text-xs">Loans</div>
                    </div>
                    <ChevronRightIcon class="h-5 w-5" />
                  </button>
                  <button @click="updateActiveBoard('collections')"
                    :class="{ 'bg-blue-600 text-white': router.currentRoute.value.name === 'collections' }" class="
                    flex
                    w-full
                    h-10
                    rounded
                    items-center
                    justify-between
                    p-2
                  ">
                    <div class="flex space-x-2 items-center">
                      <WalletIcon class="h-6 w-6" />
                      <div class="font-semibold text-xs">Collections</div>
                    </div>
                    <ChevronRightIcon class="h-5 w-5" />
                  </button>
                  <button @click="updateActiveBoard('groups')" v-if="false"
                    :class="{ 'bg-blue-600 text-white': router.currentRoute.value.name === 'groups' }" class="
                    flex
                    w-full
                    h-10
                    rounded
                    items-center
                    justify-between
                    p-2
                  ">
                    <div class="flex space-x-2 items-center">
                      <UserGroupIcon class="h-6 w-6" />
                      <div class="font-semibold text-xs">Groups</div>
                    </div>
                    <ChevronRightIcon class="h-5 w-5" />
                  </button>
                  <button @click="updateActiveBoard('members')"
                    :class="{ 'bg-blue-600 text-white': router.currentRoute.value.name === 'members' }" class="
                    flex
                    w-full
                    h-10
                    rounded
                    items-center
                    justify-between
                    p-2
                  ">
                    <div class="flex space-x-2 items-center">
                      <UsersIcon class="h-6 w-6" />
                      <div class="font-semibold text-xs">Members</div>
                    </div>
                    <ChevronRightIcon class="h-5 w-5" />
                  </button>
                  <button @click="updateActiveBoard('notifications')"
                    :class="{ 'bg-blue-600 text-white': router.currentRoute.value.name === 'notifications' }" class="
                    flex
                    w-full
                    h-10
                    rounded
                    items-center
                    justify-between
                    p-2
                  ">
                    <div class="flex space-x-2 items-center">
                      <BellIcon class="h-6 w-6" />
                      <div class="font-semibold text-xs">Notifications</div>
                    </div>
                    <ChevronRightIcon class="h-5 w-5" />
                  </button>

                  <button @click="updateActiveBoard('reports')"
                    :class="{ 'bg-blue-600 text-white': router.currentRoute.value.name === 'reports' }" class="
                    flex
                    w-full
                    h-10
                    rounded
                    items-center
                    justify-between
                    p-2
                  ">
                    <div class="flex space-x-2 items-center">
                      <Bars4Icon class="h-6 w-6" />
                      <div class="font-semibold text-xs">Reports</div>
                    </div>
                    <ChevronRightIcon class="h-5 w-5" />
                  </button>
                  <button @click="updateActiveBoard('wallet')"
                    :class="{ 'bg-blue-600 text-white': router.currentRoute.value.name === 'wallet' }" class="
                    flex
                    w-full
                    h-10
                    rounded
                    items-center
                    justify-between
                    p-2
                  ">
                    <div class="flex space-x-2 items-center">
                      <WalletIcon class="h-6 w-6" />
                      <div class="font-semibold text-xs">Wallet (I & E)</div>
                    </div>
                    <ChevronRightIcon class="h-5 w-5" />
                  </button>
                </div>

                <!-- Ad banner and general notifications -->
                <div class="w-full flex flex-col">
                  <div class="
                    bg-yellow-400
                    h-48
                    rounded
                    flex
                    items-center
                    justify-center
                    text-white
                    font-black
                  ">
                    Ad Banner
                  </div>
                </div>

                <!-- System controls -->
                <div class="mt-5 flex flex-col space-y-2">
                  <button @click="updateActiveBoard('settings')"
                    :class="{ 'bg-blue-600 text-white': router.currentRoute.value.name === 'settings' }" class="
                    flex
                    w-full
                    h-10
                    rounded
                    items-center
                    justify-between
                    p-2
                  ">
                    <div class="flex space-x-2 items-center">
                      <CogIcon class="h-6 w-6" />
                      <div class="font-semibold text-xs">Account Settings</div>
                    </div>
                    <ChevronRightIcon class="h-5 w-5" />
                  </button>
                  <button @click="logout()" class="
                    flex
                    w-full
                    h-10
                    rounded
                    items-center
                    justify-between
                    p-2
                  ">
                    <div class="flex space-x-2 items-center">
                      <ArrowLeftOnRectangleIcon class="h-6 w-6" />
                      <div class="font-semibold text-xs">Logout</div>
                    </div>
                    <ChevronRightIcon class="h-5 w-5" />
                  </button>
                </div>

              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>

  <TransitionRoot appear :show="isChatModalOpen" as="template">
    <Dialog as="div" @close="toggleChatModal" class="relative z-10">

      <TransitionChild as="template" enter="duration-300" enter-from="opacity-0" enter-to="opacity-100"
        leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">

        <div class="fixed inset-0 bg-black bg-opacity-25" />

      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="flex h-screen items-center justify-end text-center">

          <TransitionChild as="template" enter="transform transition ease-in-out duration-500"
            enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500"
            leave-from="translate-x-full" leave-to="translate-x-full">

            <DialogPanel
              class="max-w-sm w-2/3 transform overflow-hidden h-full bg-white text-left align-middle shadow-xl transition-all">
              <DialogTitle as="h3" class="font-bold text-base mb-2 p-2">Chat Box</DialogTitle>
              <div class="space-y-2 overflow-auto h-full px-2 pb-[55px]" v-if="showChats">
                <div
                  class="h-16 w-full rounded bg-blue-100 flex p-2 items-center border space-x-2 flex-shrink-0 hover:scale-105 duration-200 cursor-pointer"
                  v-for="chat in [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10, 11, 12, 13, 14, 15, 26, 345, 2321, 36, 89]"
                  @click="openChat(chat)" :key="chat">
                  <div class="h-12 w-12 rounded bg-blue-700 flex flex-shrink-0"></div>
                  <div class="h-12 w-full rounded bg-blue-400"></div>
                </div>
              </div>
              <div class="space-y-2 overflow-auto h-full px-2 pb-32 flex flex-col relative" v-else>
                <div class="bg-blue-200 h-full flex-shrink-0"></div>
                <div
                  class="bg-blue-800 h-16 space-x-2 absolute inset-x-2 bottom-14 text-white p-2 flex flex-grow-0 flex-shrink-0">
                  <input type="text" class="w-60 text-black">
                  <button class="">Send</button>
                </div>
              </div>
            </DialogPanel>

          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import {
  Bars4Icon,
  CogIcon,
  UserCircleIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  Square2StackIcon,
  NewspaperIcon,
  Squares2X2Icon,
  ChevronRightIcon,
  ArrowDownIcon,
  UserGroupIcon,
  UsersIcon,
  BellIcon,
  CreditCardIcon,
  ArrowLeftOnRectangleIcon,
  BanknotesIcon,
  MagnifyingGlassIcon,
  WalletIcon,
} from "@heroicons/vue/24/outline";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue';
import LeftSideBar from "./LeftSideBar.vue";
import RightSideBar from "./RightSideBar.vue";

import useAuthentication from '../../composables/auth';

const router = useRouter();

const currentRoute = ref('');

const isOpen = ref<boolean>(false);

const showChats = ref<boolean>(true);

const isChatModalOpen = ref<boolean>(false);

const toggleChatModal = (): void => {
  isChatModalOpen.value = !isChatModalOpen.value;
  console.log(isChatModalOpen.value);
}

const openChat = (chat: number): void => {
  showChats.value = false;
}

function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}

const appName = ref('Hfmsg');
const highlight = ref('bg-slate-200');
const primary = ref('bg-white');
const secondary = ref('bg-yellow-400');
const accent = ref('bg-green-400');
const info = ref('bg-indigo-500');

const updateActiveBoard = (route: string) => {
  currentRoute.value = route;
  router.push({ path: `/${route}` })
}

const bgMain = ref('bg-blue-600');

const { logout } = useAuthentication();

</script>

<style></style>