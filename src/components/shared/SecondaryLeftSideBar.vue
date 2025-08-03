<template>
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
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { ChevronRightIcon } from '@heroicons/vue/24/outline';

export default defineComponent({
  name: "SecondaryLeftSideBar",
  components: {
    ChevronRightIcon,
  },
  setup() {
    const props = defineProps<{
      items: { name: string; items: string[] }[];
      activePage: string;
      activeTabs: string[];
    }>();
    // const items = ref([]);
    const activePage = ref('');
// const activeTabs = ref<string[]>(["System Audit", "Loans", "Members", "Collections", "Accounting"]);
    const changeActivePage = (page:string) => activePage.value = page;

const openTabs = (tab:string) => {
  console.log("logging from settings main index component ", tab, activeTabs.value, activeTabs.value.indexOf(tab));
  let indexOfTab = activeTabs.value.indexOf(tab);
  if (indexOfTab !== -1) activeTabs.value.splice(indexOfTab, 1);
  else activeTabs.value.push(tab);
}
    return {
      props,
      items,
      openTabs,
      changeActivePage,
    }
  },
})
</script>

<style>

</style>