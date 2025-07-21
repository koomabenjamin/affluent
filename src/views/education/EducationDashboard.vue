<template>
  <Container>
    <div class="education-dashboard">
      <h1>Education Dashboard</h1>
      <!-- Add your dashboard content here -->
    </div>
  </Container>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Container from "@/components/shared/Container.vue";

// Example state
const message = ref<string>('Welcome to the Education Dashboard')

// Add your composition logic here
</script>

<style scoped>
.education-dashboard {
  padding: 24px;
}
</style>