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

const activeTab = ref<string>('Summary')

const groups = ref<GroupSummary[]>([]);

const changeTab = (tab: string) => activeTab.value = tab;
</script>

<template>
  <Container>
    <!-- main system content  -->
    <div class="mt-10 w-full h-full">
      <!-- left hand tabs -->
      <!-- ['Summary', 'Graphical', 'Members', 'History'] -->
      <div class="w-auto flex space-x-2 cursor-pointer">

        <TabList :tabs="tabs"/>
        <!-- <div class="
            w-auto
            px-2
            flex flex-col
            justify-start
            text-left
            h-10
            group
            space-y-2
          " v-for="tab in tabs" :key="tab" @click="changeTab(tab)" :class="{ 'text-blue-500': (tab === activeTab) }">
          <span class="font-semibold text-sm w-full">{{ tab }}</span>
          <div class="
              h-[3px]
              w-full
              bg-blue-500
              transform
              duration-500
              group-hover:scale-100
            " :class="[(tab === activeTab) ? 'scale-100' : 'scale-0']"></div>
        </div> -->

      </div>

      <div v-if="activeTab === 'Summary'" class="pt-8">
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

      <div v-if="activeTab === 'Groups'" class="h-full w-full center bg-slate-200 rounded">Groups Coming Soon</div>
      <div v-if="activeTab === 'Members'" class="h-full w-full center bg-slate-200 rounded">Members Coming Soon</div>
      <div v-if="activeTab === 'Collections'" class="h-full w-full center bg-slate-200 rounded">Collections Coming Soon
      </div>
      <div v-if="activeTab === 'Cashflows'" class="h-full w-full center bg-slate-200 rounded">Cashflows Coming Soon</div>
      <div v-if="activeTab === 'Assets'" class="h-full w-full center bg-slate-200 rounded">Assets Coming Soon</div>
      <div v-if="activeTab === 'News'" class="h-full w-full center bg-slate-200 rounded">News Coming Soon</div>
      <div v-if="activeTab === 'Events'" class="h-full w-full center bg-slate-200 rounded">News Coming Soon</div>
      <div v-if="activeTab === 'Godwill'" class="h-full w-full center bg-slate-200 rounded">News Coming Soon</div>
      <div v-if="activeTab === 'Business'" class="h-full w-full center bg-slate-200 rounded">News Coming Soon</div>

    </div>
  </Container>
</template>
