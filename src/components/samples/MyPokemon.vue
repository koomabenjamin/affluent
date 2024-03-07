<script lang="ts" setup>
import { ref } from "vue";
const pokemons = ref<any[]>([]);

async function getPokemon() {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon");
  const pokemon = await data.json();
  pokemons.value = pokemon.results;
}
</script>
<template>
  <button @click="getPokemon()">Get Pokemon</button>
  <div v-for="(pokemon, index) in pokemons" :key="index">
    <h4>{{ pokemon.name }}</h4>
  </div>
</template>