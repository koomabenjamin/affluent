<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import { BanknotesIcon, UserGroupIcon, UserIcon } from "@heroicons/vue/24/outline";
import NoData from "@/components/shared/NoData.vue";
import Container from "../components/shared/Container.vue";
import SummaryChart from "../components/Metrics/SummaryChart.vue";
import TabList from "@/components/shared/Tabs/TabList.vue";

interface GroupSummary {
  id?: string,
  name?: string,
  account_balance?: number,
  month_collections?: number,
  member_count?: number,
  created_at?: number,
}

const tabs: string[] = ['Summary', 'Groups', 'Members', 'Collections', 'Cashflows', 'Assets', 'News', 'Events', 'Goodwill', 'Business'];

const groups = ref<GroupSummary[]>([]);

const selectedTab = ref<string>(tabs?.[0]);
</script>

<template>
  <Container>
    <!-- main system content  -->
    <div class="mt-10 w-full h-full">
      <!-- left hand tabs -->
      <!-- ['Summary', 'Graphical', 'Members', 'History'] -->
      <div class="w-auto flex space-x-2 cursor-pointer">

        <TabList :tabs="tabs" v-model="selectedTab"/>

      </div>

      <div v-if="selectedTab === 'Summary'" class="pt-8">
        <!-- graph -->
        <SummaryChart />
        <!-- card -->
        <div class="w-full h-full p-0 flex flex-col space-y-2">
          <div class="
              w-full
              lg:w-full
              no-scroll-bar
              overflow-auto
              grid 
              grid-cols-3
              gap-2
            ">
            <!-- TODO: convert the cards below to a shared dynamic component -->
            <div class="bg-purple-100 h-48 rounded-lg relative p-2 shadow-md">
              <div
                class="h-16 w-16 flex flex-col px-3 py-3 rounded-tl-md rounded-br-full bg-purple-600 absolute top-0 left-0">
                <BanknotesIcon class="h-8 w-8 text-white" />
              </div>
              <div class="mt-16 w-full whitespace-nowrap font-semibold font-mono">Collections</div>
              <div class="w-full whitespace-nowrap mt-5 text-slate-600 uppercase text-sm">Total System Amount:
              </div>
              <div class="w-full whitespace-nowrap text-base font-bold">1,500,000,000,000 UGx</div>
            </div>
            <div class="bg-blue-100 h-48 rounded-lg relative p-2 shadow-md">
              <div
                class="h-16 w-16 flex flex-col px-3 py-3 rounded-tl-md rounded-br-full bg-blue-600 absolute top-0 left-0">
                <UserGroupIcon class="h-8 w-8 text-white" />
              </div>
              <div class="mt-16 w-full whitespace-nowrap font-semibold font-mono">Groups</div>
              <div class="w-full whitespace-nowrap mt-5 text-slate-600 uppercase text-sm">Total System Amount:
              </div>
              <div class="w-full whitespace-nowrap text-base font-bold">2000</div>
            </div>
            <div class="bg-green-100 h-48 rounded-lg relative p-2 shadow-md">
              <div
                class="h-16 w-16 flex flex-col px-3 py-3 rounded-tl-md rounded-br-full bg-green-500 absolute top-0 left-0">
                <UserIcon class="h-8 w-8 text-white" />
              </div>
              <div class="mt-16 w-full whitespace-nowrap font-semibold font-mono">Members</div>
              <div class="w-full whitespace-nowrap mt-5 text-slate-600 uppercase text-sm">Total System Amount:
              </div>
              <div class="w-full whitespace-nowrap text-base font-bold">100,000</div>
            </div>
          </div>
          <div class="hidden lg:block lg:w-full border border-slate-200 h-[500px] overflow-auto relative">
            <div
              class="grid grid-cols-8 gap-2 px-2 py-1 font-bold space-x-2 border-b text-sm w-full sticky top-0 bg-slate-100 h-10 place-content-center">
              <div class="col-span-3">Group</div>
              <div class="col-span-2">Saving worth</div>
              <div class="col-span-2">Asset Worth</div>
              <div class="">Status</div>
            </div>
            <div v-for="summary in groups" :key="summary?.id"
              class="grid grid-cols-8 gap-2 w-full items-center space-x-2 justify-between border-b border-slate-200 shadow p-2 rounded">
              <div class="flex space-x-2 flex-shrink-0 col-span-3">
                <div class="bg-blue-500 h-12 w-12 rounded flex-shrink-0"></div>
                <div class="flex flex-col justify-center">
                  <div class="font-bold text-sm">{{ summary.name }}</div>
                  <div class="text-xs">#00013 Created on: {{ summary.created_at }}</div>
                </div>
              </div>
              <div class="font-semibold text-sm text-blue-500 col-span-2">{{ summary?.month_collections }}</div>
              <div class="font-semibold text-sm text-blue-500 col-span-2">{{ summary?.account_balance }}</div>
              <div class="flex space-x-1 items-center text-xs">
                <div class="h-3 w-3 rounded-full bg-green-500"></div>
                <span>Active</span>
              </div>
            </div>
            <NoData label="groups" />
          </div>
        </div>
      </div>

      <div v-if="selectedTab === 'Groups'" class="h-full w-full center bg-slate-200 rounded">Groups Coming Soon</div>
      <div v-if="selectedTab === 'Members'" class="h-full w-full center bg-slate-200 rounded">Members Coming Soon</div>
      <div v-if="selectedTab === 'Collections'" class="h-full w-full center bg-slate-200 rounded">Collections Coming Soon
      </div>
      <div v-if="selectedTab === 'Cashflows'" class="h-full w-full center bg-slate-200 rounded">Cashflows Coming Soon</div>
      <div v-if="selectedTab === 'Assets'" class="h-full w-full center bg-slate-200 rounded">Assets Coming Soon</div>
      <div v-if="selectedTab === 'News'" class="h-full w-full center bg-slate-200 rounded">News Coming Soon</div>
      <div v-if="selectedTab === 'Events'" class="h-full w-full center bg-slate-200 rounded">News Coming Soon</div>
      <div v-if="selectedTab === 'Godwill'" class="h-full w-full center bg-slate-200 rounded">News Coming Soon</div>
      <div v-if="selectedTab === 'Business'" class="h-full w-full center bg-slate-200 rounded">News Coming Soon</div>

    </div>
  </Container>
</template>
