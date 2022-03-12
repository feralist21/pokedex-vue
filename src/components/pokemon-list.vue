<template>
  <div class="mt-10">
    <div class="container mx-auto mb-6 px-4 flex gap-4 justify-between">
      <pokemonSearchVue v-on:search="getSearchName"></pokemonSearchVue>
      <div class="flex gap-4 justify-end">
        <button
          @click="prev()"
          class="block w-32 py-2 px-6 bg-purple-600 text-center text-white rounded-md disabled:bg-gray-400"
          type="button"
          :disabled="disabledBtn"
        >
          Prev
        </button>
        <!-- <button
          @click="next()"
          class="block w-32 py-2 px-6 bg-purple-600 text-center text-white rounded-md"
          type="button"
        >
          Next
        </button> -->
        <button
          @click="next()"
          class="block w-32 py-2 px-6 bg-purple-600 text-center text-white rounded-md"
          type="button"
        >
          Next
        </button>
      </div>
    </div>
    <div class="container mx-auto px-4 grid gap-4 grid-cols-5 js-pokemon-list">
      <pokemonCard
        :pokeitem="item"
        :key="'poke' + idx"
        :img="imgUrl"
        v-for="(item, idx) in filtered"
      ></pokemonCard>
    </div>
  </div>
</template>

<script>
import pokemonCard from "./pokemon-card.vue";
import pokemonSearchVue from "./pokemon-search.vue";

export default {
  name: "pokemon-list",
  components: {
    pokemonCard,
    pokemonSearchVue,
  },
  data() {
    return {
      apiUrl: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20",
      imgUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/",
      pokemonList: [],
      disabledBtn: true,
      pokemon: "",
      params: {
        offset: "",
        limit: 20,
      },
    };
  },
  created() {
    this.getParamUrl();
  },
  mounted() {
    this.getDataPokemons(this.apiUrl);
  },
  methods: {
    getDataPokemons(url) {
      fetch(url)
        .then((responce) =>
          responce.status === 200 ? responce.json() : console.log("not 200")
        )
        .then((data) => {
          if (data.previous === null) {
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
    getParamUrl() {
      if (window.location.search !== "") {
        const prmt = window.location.search.substring(1).split("&");
        prmt.forEach((item) => {
          let arrItem = item.split("=");
          this.params[arrItem[0]] = Number(arrItem[1]);
        });
        this.apiUrl = `https://pokeapi.co/api/v2/pokemon/?offset=${this.params.offset}&limit=${this.params.limit}`;
      }
    },
    next() {
      this.params.offset += 10;
      this.$router.push({
        name: "list",
        query: { offset: this.params.offset, limit: this.params.limit },
      });
      this.getParamUrl();
      this.pokemonList = [];
      this.getDataPokemons(this.apiUrl);
    },
    prev() {
      this.params.offset -= 10;
      this.$router.push({
        name: "list",
        query: { offset: this.params.offset, limit: this.params.limit },
      });
      this.getParamUrl();
      this.pokemonList = [];
      this.getDataPokemons(this.apiUrl);
    },
    getSearchName(item) {
      this.pokemon = item;
    },
  },
  computed: {
    filtered() {
      return this.pokemonList.filter((el) => {
        return el.name.toLowerCase().indexOf(this.pokemon.toLowerCase()) !== -1;
      });
    },
  },
  watch: {},
};
</script>

<style></style>
