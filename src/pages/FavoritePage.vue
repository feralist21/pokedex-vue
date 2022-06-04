<template>
  <section class="py-20">
    <button
      class="block w-44 mx-auto mb-6 py-2 px-6 bg-purple-600 text-center text-white rounded-md"
      @click="goBack()"
    >
      Назад
    </button>
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
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
