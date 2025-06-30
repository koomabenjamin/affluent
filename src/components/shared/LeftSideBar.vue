<template>
  <div :class="`
      hidden
      lg:block
      ${minimize ? 'w-16' : 'w-1/5'}
      h-full 
      text-black
       bg-slate-50
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
      <SideBarItem
        v-for="item in topNavItems"
        :key="item.name"
        :isActive="router.currentRoute.value.name === item.path"
        :name="item.name"
        :icon="item.icon"
        :iconSize="28"
        :path="item.path"
        @updateActiveBoard="updateActiveBoard" />
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
      <SideBarItem
        v-for="item in bottomNavItems"
        :key="item.name"
        :isActive="router.currentRoute.value.name === item.path"
        :name="item.name"
        :icon="item.icon"
        :iconSize="28"
        :path="item.path"
        @updateActiveBoard="updateActiveBoard" />
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
      px-4
    ">
    &copy; Copyright 2022
  </div>
</template>

<script setup lang="ts" type="module">
import { ref, inject } from 'vue';
import {
  UsersIcon,
  Bars4Icon,
  CogIcon,
  ArrowLeftOnRectangleIcon,
  BellIcon,
  CreditCardIcon,
  MagnifyingGlassIcon,
  BanknotesIcon,
  WalletIcon,
  LifebuoyIcon
  // CheckBadgeIcon,
} from '@heroicons/vue/24/outline';
import useAuthentication from '../../composables/auth';
import { useRouter } from 'vue-router';
import SideBarItem from './SideBar/NavItem.vue';
import { Icon, type IconifyIcon } from "@iconify/vue";

interface SideBarItemProps {
  isActive?: boolean;
  name: string;
  path: string;
  icon: string | IconifyIcon;
  iconSize?: string | number | undefined;
}

const router = useRouter();

const currentRoute = ref('');

const appGroupName = import.meta.env.VITE_CLIENT_GROUP_NAME;
const appGroupSlogan = import.meta.env.VITE_CLIENT_GROUP_SLOGAN;

const updateActiveBoard = (route: string) => {
  currentRoute.value = route;
  router.push({ path: `/${route}` })
}

const topNavItems:SideBarItemProps[] = [
  { name: 'Dashboard', icon: "solar:chart-2-broken", path: '' },
  { name: 'NewsFeed', icon: "solar:earth-linear", path: 'newsfeed' },
  { name: 'Loans', icon: "solar:banknote-2-outline", path: 'loans' },
  { name: 'Collections', icon: "solar:money-bag-broken", path: 'collections' },
  { name: 'Groups', icon: "solar:shield-user-line-duotone", path: 'groups' },
  { name: 'Members', icon: "solar:users-group-rounded-broken", path: 'members' },
  { name: 'Reports', icon: "solar:clipboard-list-outline", path: 'reports' },
  { name: 'Wallet (I & E) / Portfolio', icon: "solar:wallet-money-outline", path: 'wallet' }
];

const bottomNavItems = [
  { name: 'Settings', icon: "solar:settings-linear", path: 'settings' },
  { name: 'Support', icon: "solar:help-outline", path: 'support' },
  { name: 'Logout', icon: "solar:logout-3-outline", path: 'logout' }
];

const bgMain = ref('bg-blue-600');

const { logout } = useAuthentication();

const minimize = ref(false);

</script>

<style></style>