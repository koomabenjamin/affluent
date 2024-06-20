<template>
  <div>{{ formatDate(date) }}</div>
</template>

<script lang="ts" setup>
import moment from "moment";

const props = defineProps({
  date: {
    type: String,
    default: "10/10/2024",
  }
})

const formatDate = (date) => moment(date).format("DD-MM-YYYY");

</script>

<style>

</style>