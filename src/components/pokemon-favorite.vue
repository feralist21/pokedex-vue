<template>
  <div
    class="container mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
  >
    <pokemonCard
      :pokeitem="item"
      :img="imgUrl"
      :key="'poke' + idx"
      v-for="(item, idx) in pokemons"
    ></pokemonCard>
  </div>
</template>

<script>
import pokemonCard from "./pokemon-card.vue";
export default {
  name: "pokemon-favorite",
  components: { pokemonCard },
  data() {
    return {
      apiUrl: "https://pokeapi.co/api/v2/pokemon/",
      imgUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/",
      pokemons: [],
      favoritePokemons: [],
    };
  },
  mounted() {
    const favoriteData = localStorage.getItem("favoritePokemons");
    if (favoriteData) {
      this.favoritePokemons = JSON.parse(favoriteData).sort();
    }
    this.getData();
  },
  methods: {
    getData() {
      this.favoritePokemons.forEach((item) => {
        fetch(this.apiUrl + item)
          .then((responce) =>
            responce.status === 200 ? responce.json() : console.log("not 200")
          )
          .then((data) => {
            this.pokemons.push(data);
          });
      });
    },
  },
};
</script>
