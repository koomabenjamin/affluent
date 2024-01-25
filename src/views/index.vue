<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import { BanknotesIcon, UserGroupIcon, UserIcon } from "@heroicons/vue/24/outline";
import Container from "../components/shared/Container.vue";
import SummaryChart from "../components/Metrics/SummaryChart.vue";
import TabList from "@/components/shared/Tabs/TabList.vue";
import Card from "@/components/shared/Cards/Card.vue";
import DataTable from "@/components/shared/DataTable.vue";

const tabs: string[] = ['Summary', 'Groups', 'Members', 'Collections', 'Cashflows', 'Assets', 'News', 'Events', 'Goodwill', 'Business'];

const groups = ref<GroupSummary[]>([]);

const selectedTab = ref<string>(tabs?.[0]);
</script>

<template>
  <Container>
    <!-- main system content  -->
    <div class="mt-5 w-full h-full">
      <!-- left hand tabs -->
      <TabList :tabs="tabs" v-model="selectedTab"/>

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
            <Card
              heroIcon="BanknotesIcon"
              label="Collections"
              description="Total System Amount"
              amount="1,500,000,000,000 UGx"
              primaryColor="bg-purple-100"
              secondaryColor="bg-purple-600"
            />
            <Card
              heroIcon="UserGroupIcon"
              label="Groups"
              description="Total System Amount"
              amount="1,500,000,000,000 UGx"
              primaryColor="bg-blue-100"
              secondaryColor="bg-blue-600"
            />
            <Card
              heroIcon="UserIcon"
              label="Members"
              description="Total System Amount"
              amount="1,500,000,000,000 UGx"
              primaryColor="bg-emerald-100"
              secondaryColor="bg-emerald-600"
            />
          </div>
          <DataTable/>
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
