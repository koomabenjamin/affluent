<template>
  <div class="w-full flex flex-col items-center justify-center font-sans text-sm">
    <img alt="no-data" :src="NoDataImg" class="h-48 w-48"/>
    <div class="capitalised">
      <span>No {{ props.label }} available yet.</span>
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

<script lang="ts">
export default {
  name: "NoData"
}
</script>

<style>

</style>