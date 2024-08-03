<template>
  <Container>
    <div class="flex flex-col p-4 w-full">
      <div class="flex w-full space-x-2">
        <div class="flex flex-col w-1/4 h-[90vh] space-y-1">
          <div v-for="(value, index) in items" :key="index" class="space-y-1 flex flex-col">
            <div :class="`${(activeTabs.includes(value.name)) ? 'bg-slate-500 text-white' : ''}`"
              class="h-10 px-1 flex items-center justify-between border rounded font-normal text-xs">
              <span class="font-semibold">{{ value.name }}</span>
              <div @click="openTabs(value.name)" class="cursor-pointer">
                <span v-if="!activeTabs.includes(value.name)">+</span>
                <span v-else>-</span>
              </div>
            </div>
            <Transition>
              <div class="h-auto border rounded mt-1 text-xs" v-if="activeTabs.includes(value.name)">
                <div @click="changeActivePage(item)"
                  :class="`${(activePage == item) ? 'border-l-4 border-blue-600 bg-blue-100' : ''}`"
                  class="h-8 px-2 flex items-center justify-between cursor-pointer"
                  v-for="(item, _index) in value.items" :key="_index">
                  <span>{{ item }}</span>
                  <ChevronRightIcon class="h-4 w-4" />
                </div>
              </div>
            </Transition>
          </div>
        </div>
        <div class="w-3/4 bg-slate-100 h-auto p-1">
          <div class="text-2xl font-semibold mb-2">Reports: <span class="text-xl text-blue-600">{{ activePage }}</span>
          </div>
          <div class="flex space-x-1">
            <FloatingLabelInput v-model="year" name="" label="Year" icon="" type="year" placeholder="Start Date" />
            <FloatingLabelInput v-model="month" name="" label="Month" icon="" type="month" placeholder="Start Date" />
            <FloatingLabelInput v-model="startDate" name="" label="Start Date" icon="" type="date"
              placeholder="Start Date" />
            <FloatingLabelInput v-model="endDate" name="" label="End Date" icon="" type="date" placeholder="End Date" />
          </div>

          <LoanBook v-if="activePage == 'Loan Book'"/>
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/vue/24/outline';
import FloatingLabelInput from '@/components/shared/inputs/FloatingLabelInput.vue';
import Container from "../../components/shared/Container.vue";
import UpdatePersonalInformation from '@/components/forms/profile/UpdatePersonalInformation.vue';
import UpdatePersonalGroups from '@/components/forms/profile/UpdatePersonalGroups.vue';

const items = [
  { items: ['Loan Book', 'Dead Loans', 'Black-listed Clients'], route: "", icon: "", name: "Loans" },
  { items: ['Collections Ledger', 'Failed Collections'], route: "", icon: "", name: "Collections" },
  { items: ['Member Ledger'], route: "", icon: "", name: "Members" },
  { items: ['Charts of Accounts', 'Income Statement', 'Cashflow Statement', 'Balance Sheet'], route: "", icon: "", name: "Accounting" },
  { items: ['Security Logs', 'Breach Reports', 'Funny-activties'], route: "", icon: "", name: "System Audit" },
];

const activePage = ref<string>("Loan Book");

const year = ref("");
const month = ref("");
const endDate = ref("");
const startDate = ref("");

const activeTabs = ref<string[]>(["System Audit", "Loans", "Members", "Collections", "Accounting"]);

const changeActivePage = (page: string) => activePage.value = page;

const openTabs = (tab: string) => {
  console.log("logging from settings main index component ", tab, activeTabs.value, activeTabs.value.indexOf(tab));
  let indexOfTab = activeTabs.value.indexOf(tab);
  if (indexOfTab !== -1) activeTabs.value.splice(indexOfTab, 1);
  else activeTabs.value.push(tab);
}

const LoanBook = defineAsyncComponent({
  loader: () => import('@/components/reports/loans/LoanBook.vue'),
  // loadingComponent: LoadingComponent,
  // errorComponent: ErrorComponent,
  delay: 200,
  timeout: 10000
});

</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>