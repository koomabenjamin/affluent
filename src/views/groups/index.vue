<template>
  <Container>
    <div>Groups</div>
    <create-group :open="showCreateGroupModal"></create-group>
  </Container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Container from "../../components/shared/Container.vue";
import CreateGroup from "../../components/forms/groups/CreateGroup.vue";

const showCreateGroupModal = ref<boolean>(true);
</script>

<style>

</style>