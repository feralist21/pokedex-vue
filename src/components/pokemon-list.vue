<template>
  <div class="mt-10">
    <div class="container mx-auto px-4 mb-6 flex gap-4">
      <button
        @click="prev()"
        class="block w-32 py-2 px-6 bg-purple-600 text-center text-white rounded-md disabled:bg-gray-400"
        type="button"
        :disabled="disabledBtn"
      >
        Prev
      </button>
      <button
        @click="next()"
        class="block w-32 py-2 px-6 bg-purple-600 text-center text-white rounded-md"
        type="button"
      >
        Next
      </button>
    </div>
    <div
      class="container mx-auto pb-20 px-4 grid gap-4 grid-cols-5 js-pokemon-list"
    >
      <pokemonCard
        :pokeitem="item"
        :key="'poke' + idx"
        :img="imgUrl"
        v-for="(item, idx) in pokemonList"
      ></pokemonCard>
    </div>
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
      prevUrl: null,
      disabledBtn: true,
    };
  },
  mounted() {
    this.currentUrl = this.apiUrl;
    this.getDataPokemons(this.currentUrl);
  },
  methods: {
    getDataPokemons(url) {
      fetch(url)
        .then((responce) =>
          responce.status === 200 ? responce.json() : console.log("not 200")
        )
        .then((data) => {
          this.nextUrl = data.next;
          this.prevUrl = data.previous;
          if (this.prevUrl === null) {
            this.disabledBtn = true;
          } else {
            this.disabledBtn = false;
          }
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
    next() {
      this.currentUrl = this.nextUrl;
      this.pokemonList = [];
      this.getDataPokemons(this.currentUrl);
    },
    prev() {
      this.currentUrl = this.prevUrl;
      this.pokemonList = [];
      this.getDataPokemons(this.currentUrl);
    },
  },
  computed: {},
};
</script>

<style></style>
