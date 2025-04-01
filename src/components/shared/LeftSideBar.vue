<template>
  <div :class="`
      hidden
      lg:block
      ${minimize ? 'w-16' : 'w-1/5'}
      h-full 
      text-white
       bg-slate-800
      border-r
      shadow
      py-5
      px-2
      pb-16
      overflow-auto
      no-scroll-bar
      relative
    `">
    <!-- Image and company -->
    <div class="
        text-2xl
        font-bold
        flex
        space-x-1
        items-center
        w-full
        justify-end
        flex-shrink-0
        flex-grow-0
      ">
      <div class="h-10 w-12 -space-x-2 -space-y-6">
        <div class="bg-blue-600 h-8 w-10 rounded-full"></div>
        <div class="bg-yellow-400 h-8 w-10 rounded-full"></div>
      </div>
      <div class="flex flex-col w-4/5">
        <h6 class="font-bold text-lg text-wrap">{{ appGroupName }}</h6>
        <h6 class="font-normal text-xs text-wrap text-slate-400">{{ appGroupSlogan }}</h6>
      </div>
    </div>

    <!-- Sidebar menu and content -->
    <div class="my-10 flex flex-col space-y-2">
      <button @click="updateActiveBoard('')"
        :class="{ 'bg-blue-600 text-white' : router.currentRoute.value.name === 'home' }" class="
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
      <!-- <button @click="updateActiveBoard('profile')"
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
      </button> -->
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
      <button @click="updateActiveBoard('groups')"
      v-if="false"
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
      <!-- <button @click="updateActiveBoard('notifications')"
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
      </button> -->
   
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
      <button
      @click="updateActiveBoard('wallet')" 
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
          <div class="font-semibold text-xs">Wallet (I & E) / Portfolio</div>
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
      <button @click="updateActiveBoard('support')"
        :class="{ 'bg-blue-600 text-white': router.currentRoute.value.name === 'support' }" class="
          flex
          w-full
          h-10
          rounded
          items-center
          justify-between
          p-2
        ">
        <div class="flex space-x-2 items-center">
          <LifebuoyIcon class="h-6 w-6" />
          <div class="font-semibold text-xs">Help and Support</div>
        </div>
        <ChevronRightIcon class="h-5 w-5" />
      </button>
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
  <!-- footer -->
  <div class="
      fixed
      bottom-0
      left-0
      w-1/5
      bg-black
      h-12
      text-white
      flex
      items-center
      justify-start
      text-xs
      px-5
    ">
    &copy; Copyright 2022
  </div>
</template>

<script setup lang="ts" type="module">
import { ref, inject } from 'vue';
import {
  NewspaperIcon,
  Squares2X2Icon,
  ChevronRightIcon,
  ArrowDownIcon,
  UserCircleIcon,
  UserGroupIcon,
  UsersIcon,
  BellIcon,
  Bars4Icon,
  CreditCardIcon,
  CogIcon,
  ArrowLeftOnRectangleIcon,
  MagnifyingGlassIcon,
  BanknotesIcon,
  WalletIcon,
  LifebuoyIcon
  // CheckBadgeIcon,
} from '@heroicons/vue/24/outline';
import useAuthentication from '../../composables/auth';
import { useRouter } from 'vue-router'

const router = useRouter();

const currentRoute = ref('');

const appGroupName = import.meta.env.VITE_CLIENT_GROUP_NAME;
const appGroupSlogan = import.meta.env.VITE_CLIENT_GROUP_SLOGAN;

const updateActiveBoard = (route: string) => {
  currentRoute.value = route;
  router.push({ path: `/${route}` })
}

const bgMain = ref('bg-blue-600');

const { logout } = useAuthentication();

const minimize = ref(false);

</script>

<style>

</style>