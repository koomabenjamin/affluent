<template>
  <MasterPage>
    <div class="w-full h-screen flex flex-col pt-5 pb-2 px-5 overflow-auto no-scroll-bar relative">
      <div class="h-64 w-full m-1 bg-blue-500 rounded-lg relative">
        <div
          class="bg-slate-200 h-44 w-44 rounded-full flex-shrink-0 absolute left-10 -bottom-28 border-[6px]">
        </div>
      </div>
      <div class="font-semibold text-2xl ml-60">
        Benjamin Kooma
        <p class="text-slate-500 text-base">@koomaBenjamin</p>
      </div>
      <!-- <hr class="my-2 w-full"/> -->
      <div class="w-full grid grid-cols-3 gap-1 space-x-0.5">
        <div
          class="flex flex-col justify-start mt-16 h-[198px] items-start rounded divide-y border ">
          <div 
          :class="{ 'bg-slate-100': activeTab === 'personalInformation'}"
          @click="switchInformationTabs('personalInformation')"
            class="font-semibold text-lg flex items-center space-x-5 w-full h-10 relative cursor-pointer">
            <span 
              :class="{ 'bg-blue-600': activeTab === 'personalInformation'}"
              class="absolute h-full w-1  left-0 inset-y-0">
            </span>
            <UserIcon class="h-5 text-slate-300" />
            <span class="text-sm font-normal">Personal Information</span>
          </div>
          <div 
          :class="{ 'bg-slate-100': activeTab === 'groups'}"
          @click="switchInformationTabs('groups')"
            class="font-semibold text-lg flex items-center space-x-5 w-full h-10 relative cursor-pointer">
            <span 
              :class="{ 'bg-blue-600': activeTab === 'groups'}"
              class="absolute h-full w-1 left-0 inset-y-0">
            </span>
            <UserIcon class="h-5 text-slate-300" />
            <span class="text-sm font-normal">Groups</span>
          </div>
          <div 
          :class="{ 'bg-slate-100': activeTab === 'accounts'}"
          @click="switchInformationTabs('accounts')"
            class="font-semibold text-lg flex items-center space-x-5 w-full h-10 relative cursor-pointer">
            <span 
              :class="{ 'bg-blue-600': activeTab === 'accounts'}"
              class="absolute h-full w-1 left-0 inset-y-0">
            </span>
            <UserIcon class="h-5 text-slate-300" />
            <span class="text-sm font-normal">Accounts</span>
          </div>
          <div 
          :class="{ 'bg-slate-100': activeTab === 'address'}"
          @click="switchInformationTabs('address')"
            class="font-semibold text-lg flex items-center space-x-5 w-full h-10 relative cursor-pointer">
            <span 
              :class="{ 'bg-blue-600': activeTab === 'address'}"
              class="absolute h-full w-1 left-0 inset-y-0">
            </span>
            <UserIcon class="h-5 text-slate-300" />
            <span class="text-sm font-normal">Address / Residence</span>
          </div>
          <div 
          :class="{ 'bg-slate-100': activeTab === 'socials'}"
          @click="switchInformationTabs('socials')"
            class="font-semibold text-lg flex items-center space-x-5 w-full h-10 relative">
            <span 
              :class="{ 'bg-blue-600': activeTab === 'socials'}"
              class="absolute h-full w-1 left-0 inset-y-0">
            </span>
            <UserIcon class="h-5 text-slate-300" />
            <span class="text-sm font-normal">Socials</span>
          </div>
        </div>
        <UpdatePersonalInformation v-if="activeTab === 'personalInformation'"/>
        <UpdatePersonalGroups v-if="activeTab === 'groups'"/>
      </div>
    </div>
  </MasterPage>
</template>

<script setup>
import { ref, reactive } from 'vue';
import {
  UserIcon,
  // MailIcon,
  // PhoneIcon,
  // LocationMarkerIcon,
  // HashtagIcon,
} from '@heroicons/vue/24/outline';
import SummaryChart from "@/components/Metrics/SummaryChart.vue";
import Input from '@/components/shared/inputs/Input.vue';
import Button from '@/components/shared/Button.vue';
import UpdatePersonalInformation from '@/components/forms/profile/UpdatePersonalInformation.vue';
import UpdatePersonalGroups from '@/components/forms/profile/UpdatePersonalGroups.vue';
import MasterPage from "@/components/shared/Container.vue";

const activeTab = ref('personalInformation');

const switchInformationTabs = (tab) => activeTab.value = tab; 

</script>

<style>

</style>