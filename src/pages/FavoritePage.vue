<template>
  <section class="py-20">
    <h1 class="mb-10 text-5xl text-center font-bold">
      Любимые <span class="text-purple-600">покемоны</span>
    </h1>
    <pokemon-favorite></pokemon-favorite>
  </section>
</template>

<script>
import PokemonFavorite from "@/components/pokemon-favorite.vue";
export default {
  name: "FavoritePage",
  components: { PokemonFavorite },
  props: {
    pokemons: Array,
  },
};
</script>
