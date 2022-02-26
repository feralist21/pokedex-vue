<template>
  <div id="app">
    <section class="py-20">
      <div class="container mx-auto px-4">
        <h1 class="text-5xl text-center mb-16 font-bold">Pokedex Vue</h1>
        <div class="grid gap-4 grid-cols-5 js-pokemon-list">
          <pokemonCard
            :pokeitem="item"
            :key="'poke' + idx"
            :img="imgUrl"
            v-for="(item, idx) in pokemonList"
          ></pokemonCard>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import pokemonCard from "./pokemon-card";

export default {
  name: "pokemon-list",
  components: {
    pokemonCard,
  },
  props: {
    apiUrl: String,
    imgUrl: String,
  },
  data() {
    return {
      pokemonList: [],
      currentUrl: "",
      nextUrl: "",
    };
  },
  mounted() {
    this.currentUrl = this.apiUrl;
    this.getDataPokemons();
  },
  methods: {
    getDataPokemons() {
      fetch(this.currentUrl)
        .then((responce) =>
          responce.status === 200 ? responce.json() : console.log("not 200")
        )
        .then((data) => {
          this.nextUrl = data.next;
          data.results.forEach((pokemon) => {
            pokemon.id = pokemon.url
              .split("/")
              .filter(function (part) {
                return !!part;
              })
              .pop();
            this.pokemonList.push(pokemon);
          });
        })
        .catch((error) => console.log(error));
    },
  },
  computed: {},
};
</script>

<style></style>
