<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import { encrypt } from '@/composables/encrypt';

const router = useRouter();
const route = useRoute();
const appName = import.meta.env.VITE_CLIENT_GROUP_NAME;

const navigateTo = (id: string) => {
  router.push({
    name: "main",
    params: { id: encrypt(id) },
    query: route.query,
    hash: route.hash
  });
};

</script>

<template>
  {{ appName }}
  <dialog></dialog>
  <div class="w-screen h-screen center">
    <div class="grid grid-cols-4 gap-2 w-[39%]">
      <div 
        @click="navigateTo('default')"
        class="
          bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] 
          bg[size:10px_10px] 
          bg-fixed 
          [--pattern-fg:var(--color-gray-950)]/5
          h-40 w-40 
          shadow
          font-semibold 
          border-[0.5px] 
          cursor-pointer 
          hover:bg-blue-100 
          text-blue-600
          rounded-lg 
          center 
          flex-none">
        <div>Default</div>
      </div>
      <div 
        @click="navigateTo(index.toString())"
        class="
          h-40 
          w-40 
          shadow
          font-semibold 
          border-[0.5px] 
          cursor-pointer 
          hover:bg-blue-100 
          rounded-lg 
          center 
          flex-none" 
        v-for="(value, index) in 11" :key="value">
        <div>{{ index + 1 }}</div>
      </div>
    </div>
  </div>
</template>
