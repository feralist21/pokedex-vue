<template>
  <div class="w-full p-4 bg-gray-100">
    <router-link :to="{ name: 'about', params: { name: pokeitem.name } }">
      <div>
        <img
          class="w-auto mx-auto h-48"
          :src="img + pokeitem.id + '.svg'"
          :alt="pokeitem.name"
        />
      </div>
      <div class="rounded-b-lg">
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
    </router-link>
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
      types: {},
    };
  },
  mounted() {
    fetch(this.pokeitem.url)
      .then((responce) =>
        responce.status === 200 ? responce.json() : console.log("not 200")
      )
      .then((data) => (this.types = data.types));
  },
};
</script>
<style></style>
