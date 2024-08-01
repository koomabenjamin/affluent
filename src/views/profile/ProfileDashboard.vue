<template>
  <MasterPage>
    <div class="w-full h-screen flex flex-col pt-5 pb-2 px-5 overflow-auto no-scroll-bar relative">
      <div class="h-64 w-full m-1 bg-blue-500 rounded-lg relative">
        <div class="bg-slate-200 h-44 w-44 rounded-full flex-shrink-0 absolute left-10 -bottom-28 border-[6px]">
        </div>
      </div>
      <div class="font-semibold text-2xl ml-60">
        Benjamin Kooma
        <p class="text-slate-500 text-base">@koomaBenjamin</p>
      </div>
      <!-- <hr class="my-2 w-full"/> -->
      <div class="w-full flex flex-col space-x-0.5">
        <div class="mt-16">
          <!-- {{ activeTab }} -->
          <TabList :tabs="tabs" v-model="activeTab" />
        </div>
        <UpdatePersonalInformation v-if="activeTab === 'Personal'" />
        <UpdatePersonalGroups v-if="activeTab === 'groups'" />
      </div>
    </div>
  </MasterPage>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import {
  UserIcon,
} from '@heroicons/vue/24/outline';
import SummaryChart from "@/components/Metrics/SummaryChart.vue";
import FloatingLabelInput from '@/components/shared/inputs/FloatingLabelInput.vue';
import Button from '@/components/shared/Button.vue';
import UpdatePersonalInformation from '@/components/forms/profile/UpdatePersonalInformation.vue';
import UpdatePersonalGroups from '@/components/forms/profile/UpdatePersonalGroups.vue';
import MasterPage from "@/components/shared/Container.vue";
import TabList from "@/components/shared/Tabs/TabList.vue";

const activeTab = ref('Personal');

const switchInformationTabs = (tab: string): string => activeTab.value = tab;

const tabs: string[] = ['Personal', 'Accounts', 'Address', 'Socials'];

</script>

<style></style>