<template>
  <div>Configurations</div>
  <div>{{ userDetails }}</div>
  <div>request to join a number of groups as well as setup collection accounts and loan credibility essentials...</div>
</template>

<script setup lang="ts">
const user: string = sessionStorage.getItem('user') ?? ''
const userDetails = JSON.parse(user);
</script>

<style>

</style>