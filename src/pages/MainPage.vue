<template>
  <section>
    <h1 class="text-5xl text-center font-bold">Pokedex Vue</h1>
    <pokemon-list></pokemon-list>
  </section>
</template>

<script>
import PokemonList from "@/components/pokemon-list.vue";
export default {
  name: "MainPage",
  components: { PokemonList },
};
</script>
