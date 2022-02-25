<template>
  <div id="app">
    <section class="py-20">
      <div class="container mx-auto px-4">
        <h1 class="text-5xl text-center mb-16 font-bold">Pokedex Vue</h1>
        <div class="grid gap-4 grid-cols-5 js-pokemon-list">
          <pokemonCard
            v-bind:pokeitem="item"
            v-for="(item, idx) in pokemonList"
            v-bind:key="idx"
          ></pokemonCard>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import pokemonCard from "./components/pokemon-card";

export default {
  name: "App",
  components: {
    pokemonCard,
  },
  data() {
    return {
      pokemonList: [],
    };
  },
  async mounted() {
    for (let i = 1; i <= 20; i++) {
      const f = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const data = await f.json();
      this.pokemonList.push(data);
    }
  },
  methods: {},
  computed: {},
};
</script>

<style></style>
