<template>
  <Container>
    <div class="flex px-2 w-full">
        <div class="flex flex-col w-1/4 h-[90vh] space-y-1 overflow-auto">
          <div v-for="(value, index) in items" :key="index" class="space-y-1 flex flex-col">
            <div 
            :class="`${(activeTabs.includes(value.name)) ? 'bg-slate-600 text-white': ''}`"
            class="h-10 px-1 flex items-center justify-between border rounded font-normal text-xs">
              <span class="font-semibold">{{ value.name }}</span>
              <div @click="openTabs(value.name)" class="cursor-pointer">
                <span v-if="!activeTabs.includes(value.name)">+</span>
                <span v-else>-</span>
              </div>
            </div>
            <Transition>
              <div class="h-auto border rounded mt-1 text-xs" v-if="activeTabs.includes(value.name)">
                <div
                @click="changeActivePage(item, value.name)"
                :class="`${(activePage == item) ? 'border-l-4 border-blue-600 bg-blue-100': ''}`"
                class="h-8 px-2 flex items-center justify-between cursor-pointer" v-for="(item, _index) in value.items"
                  :key="_index">
                  <span>{{ item }}</span>
                  <ChevronRightIcon class="h-4 w-4" />
                </div>
              </div>
            </Transition>
          </div>
        </div>
        <div class="w-3/4 bg-slate-100 h-[90vh] p-1 overflow-auto">
          <div class="text-2xl font-semibold mb-2">{{activePageCategory}} <span class="text-xl text-blue-600">{{ activePage }}</span></div>
          <div class="grid grid-cols-4 gap-1" v-if="activePageCategory === 'Tutorials'">
            <VideoThumbnail v-for="x in 20" :key="x"/>
          </div>
          <div class="grid grid-cols-4 gap-1" v-if="activePageCategory === 'Help & Support'">
            <SupportCard v-for="x in 20" :key="x"/>
          </div>
          <div class="grid grid-cols-1 gap-1" v-if="activePageCategory === 'FAQs'">
            <FaqCard v-for="x in 20" :key="x"/>
          </div>
          <div class="grid grid-cols-1 gap-1" v-if="activePageCategory === 'Feature Updates'">
            <FeatureUpdateArticle v-for="x in 20" :key="x"/>
          </div>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/vue/24/outline';
import FloatingLabelInput from '@/components/shared/inputs/FloatingLabelInput.vue';
import Container from "../../components/shared/Container.vue";
import VideoThumbnail from "@/components/shared/VideoThumbnail.vue";
import SupportCard from "@/components/shared/SupportCard.vue";
import FaqCard from "@/components/shared/FaqCard.vue";
import FeatureUpdateArticle from "@/components/shared/FeatureUpdateArticle.vue";


const items = [
  { items: ['Loans Support', 'Collections Support', 'Members Support', 'Groups Support'], route: "", icon: "", name: "Help & Support" },
  { items: ['Loans Tutorials', 'Collections Tutorials', 'Members Tutorials', 'Groups Tutorials'], route: "", icon: "", name: "Tutorials" },
  { items: ['General', 'Loans', 'Collections', 'Members', 'Groups', 'Reports'], route: "", icon: "", name: "FAQs" },
  { items: ['System', 'Loans', 'Collections', 'Members', 'Groups', 'Reports'], route: "", icon: "", name: "Feature Updates" },
];

const activePage = ref<string>("Loans Support");
const activePageCategory = ref<string>("Help & Support");

const activeTabs = ref<string[]>(["Help & Support", "Tutorials", "FAQs", "Feature Updates"]);

const changeActivePage = (page: string, category: string) => {
  activePage.value = page;
  activePageCategory.value = category;
}

const openTabs = (tab: string) => {
  activePageCategory.value = tab;
  let indexOfTab = activeTabs.value.indexOf(tab);
  if (indexOfTab !== -1) activeTabs.value.splice(indexOfTab, 1);
  else activeTabs.value.push(tab);
}

const showDetails = ref(false);

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