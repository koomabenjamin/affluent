<script setup lang="ts">
import { Icon } from "@iconify/vue";
import Button from "../components/shared/Button.vue";
</script>

<template>
  <main>
    <div class="
        h-screen 
        w-screen 
        flex
        flex-col
        items-center 
        justify-center 
        font-sans">
      All content will go here...

      <Icon icon="mdi:youtube" width="300" class="h-20 w-20 text-rose-600" />

      <Button label="Login" loader dark />

    </div>
  </main>
</template>
