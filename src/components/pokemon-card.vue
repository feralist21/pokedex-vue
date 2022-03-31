<template>
  <div class="w-full p-4 bg-gray-100 rounded-lg">
    <router-link
      class="block mb-4"
      :to="{ name: 'about', params: { name: pokeitem.name } }"
    >
      <img
        class="block w-auto mx-auto h-48"
        :src="img + pokeitem.id + '.svg'"
        :alt="pokeitem.name"
      />
    </router-link>
    <div class="flex gap-2 justify-between items-end">
      <div class="w-auto">
        <p class="text-gray-400 text-sm mb-1">
          #{{ pokeitem.id.toString().padStart(3, 0) }}
        </p>
        <h2 class="text-black text-xl font-medium uppercase">
          {{ pokeitem.name }}
        </h2>
        <ul class="flex gap-4 mt-2 flex-wrap">
          <pokemonType
            :poketype="item.type.name"
            :key="id"
            v-for="(item, id) in types"
          ></pokemonType>
        </ul>
      </div>
      <input
        class="w-6 h-6"
        type="checkbox"
        name="favorite"
        id="favorite"
        v-model="favorite"
        v-on:change="checkFavoritePokemon()"
      />
    </div>
  </div>
</template>

<script>
import pokemonType from "./pokemon-type";

export default {
  name: "pokemon-card",
  components: {
    pokemonType,
  },
  props: {
    pokeitem: Object,
    img: String,
  },
  data() {
    return {
      apiUrl: "https://pokeapi.co/api/v2/pokemon/",
      types: {},
      favorite: false,
    };
  },
  created() {
    const favoriteData = localStorage.getItem(this.pokeitem.name);
    if (favoriteData) {
      this.favorite = true;
    }
  },
  mounted() {
    fetch(this.apiUrl + this.pokeitem.id)
      .then((responce) =>
        responce.status === 200 ? responce.json() : console.log("not 200")
      )
      .then((data) => (this.types = data.types));
  },
  methods: {
    checkFavoritePokemon() {
      if (this.favorite === false) {
        localStorage.removeItem(this.pokeitem.name);
        this.$emit("pokemoncheck", this.pokeitem.name);
      } else {
        localStorage.setItem(this.pokeitem.name, this.pokeitem.id);
        this.$emit("pokemoncheck", this.pokeitem.name);
      }
    },
  },
};
</script>
<style></style>
