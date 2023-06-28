<template>
  <master-page>
    <div class="lg:mt-0 lg:ml-0 w-full lg:w-3/5 py-5 px-2 overflow-auto no-scroll-bar relative">
      <slot></slot>
    </div>
  </master-page>
</template>

<script setup lang="ts">
import MasterPage from "./MasterPage.vue";
</script>

<style>

</style>