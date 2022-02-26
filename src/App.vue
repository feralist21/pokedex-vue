<template>
  <div id="app">
    <pokemonList :apiUrl="apiUrl" :imgUrl="imgUrl"></pokemonList>
  </div>
</template>

<script>
import pokemonList from "./components/pokemon-list";

export default {
  name: "App",
  components: {
    pokemonList,
  },
  data() {
    return {
      apiUrl: "https://pokeapi.co/api/v2/pokemon/",
      imgUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/",
    };
  },
  mounted() {},
  methods: {},
  computed: {},
};
</script>

<style></style>
