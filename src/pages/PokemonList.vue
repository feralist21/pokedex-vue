<template>
  <section class="py-20">
    <h1 class="text-5xl text-center font-bold">
      Твой <span class="text-purple-600">Pokedex</span>
    </h1>
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
