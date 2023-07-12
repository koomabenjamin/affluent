<template>
  <div class="w-full h-96 flex flex-col items-center justify-center font-sans text-sm">
    <img alt="no-data" :src="NoDataImg" class="h-48 w-48"/>
    <div>
      No {{ props.label }} available yet.
    </div>
  </div>
</template>

<script lang="ts" setup>
import NoDataImg from "../../assets/svg/no-data.svg";

export interface NoDataProps{
  label?: string | undefined;
}

const props = defineProps<NoDataProps>();
</script>

<style>

</style>