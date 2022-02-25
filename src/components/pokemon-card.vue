<template>
  <div class="w-full p-4 bg-gray-100">
    <div>
      <img
        class="w-auto mx-auto h-48"
        :src="pokeitem.sprites.other.dream_world.front_default"
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
          v-for="(item, idx) in pokeitem.types"
          v-bind:key="idx"
        ></pokemonType>
      </ul>
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
  },
};
</script>
<style></style>
