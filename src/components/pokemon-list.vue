<template>
  <div
    class="container mx-auto py-20 px-4 grid gap-4 grid-cols-5 js-pokemon-list"
  >
    <pokemonCard
      :pokeitem="item"
      :key="'poke' + idx"
      :img="imgUrl"
      v-for="(item, idx) in pokemonList"
    ></pokemonCard>
  </div>
</template>

<script>
import pokemonCard from "./pokemon-card";

export default {
  name: "pokemon-list",
  components: {
    pokemonCard,
  },
  data() {
    return {
      apiUrl: "https://pokeapi.co/api/v2/pokemon/",
      imgUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/",
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
