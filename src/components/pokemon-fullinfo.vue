<template>
  <div class="container-pokemon mx-auto py-6 px-4">
    <router-link
      class="block w-32 mb-6 py-2 px-6 bg-purple-600 text-center text-white rounded-md"
      :to="{ path: '/' }"
      >Назад</router-link
    >
    <h1 class="mb-20 text-5xl text-center font-bold uppercase">
      {{ info.name }} №{{ info.id }}
    </h1>
    <div class="flex">
      <div class="w-1/2">
        <img
          class="w-auto h-96 mx-auto"
          :src="imgUrl + this.id + '.svg'"
          :alt="info.name"
        />
      </div>
      <div class="w-1/2 pl-6">
        <div class="w-80 p-4 bg-blue-400 rounded-md">
          <div class="flex mb-2">
            <div class="w-1/2 text-white">Base experience</div>
            <div class="w-1/2 text-black text-right">
              {{ info.base_experience }} XP
            </div>
          </div>
          <div class="flex mb-2">
            <div class="w-1/2 text-white">Height</div>
            <div class="w-1/2 text-black text-right">
              {{ info.height / 10 }} m
            </div>
          </div>
          <div class="flex">
            <div class="w-1/2 text-white">Weight</div>
            <div class="w-1/2 text-black text-right">
              {{ info.weight / 1000 }} kg
            </div>
          </div>
        </div>
        <div class="mt-8">
          <p class="font-bold text-xl">Abilities</p>
          <ul class="mt-2 flex gap-4">
            <pokemonAbilitiesVue
              :abilities="item.ability.name"
              :key="id"
              v-for="(item, id) in info.abilities"
            ></pokemonAbilitiesVue>
          </ul>
        </div>
        <div class="mt-8">
          <p class="font-bold text-xl">Type</p>
          <ul class="mt-2 flex gap-4">
            <pokemonTypeVue
              :poketype="item.type.name"
              :key="id"
              v-for="(item, id) in info.types"
            ></pokemonTypeVue>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pokemonAbilitiesVue from "./pokemon-abilities.vue";
import pokemonTypeVue from "./pokemon-type.vue";

export default {
  name: "pokemon-fullinfo",
  components: {
    pokemonTypeVue,
    pokemonAbilitiesVue,
  },
  data() {
    return {
      imgUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/",
      info: {},
      id: "",
    };
  },
  mounted() {
    this.id = document.location.pathname
      .toString()
      .split("/")
      .filter(function (part) {
        return !!part;
      })
      .pop();

    fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
      .then((responce) =>
        responce.status === 200 ? responce.json() : console.log("not 200")
      )
      .then((data) => (this.info = data))
      .catch((error) => console.log(error));
  },
  methods: {},
};
</script>

<style>
.container-pokemon {
  width: 100%;
  max-width: 1200px;
}
</style>
