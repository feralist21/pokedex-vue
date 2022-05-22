import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favoritePokemons: [],
  },
  getters: {},
  mutations: {
    ADD_POKEMON(state, payload) {
      state.favoritePokemons.push(payload);
      localStorage.setItem(
        "favoritePokemons",
        JSON.stringify(state.favoritePokemons)
      );
    },
    DELETE_POKEMON(state, payload) {
      const pokemon = state.favoritePokemons.find((item) => item == payload);
      if (pokemon) {
        const index = state.favoritePokemons.indexOf(pokemon);
        if (index !== -1) {
          state.favoritePokemons.splice(index, 1);
          localStorage.setItem(
            "favoritePokemons",
            JSON.stringify(state.favoritePokemons)
          );
        }
      }
    },
    UPDATE_POKEMONS_LIST(state) {
      const pokemonsList = localStorage.getItem("favoritePokemons");
      if (pokemonsList) {
        state.favoritePokemons = JSON.parse(pokemonsList);
      }
    },
  },
  actions: {},
  modules: {},
});
