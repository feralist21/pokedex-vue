<template>
  <li
    v-if="poketype === 'normal'"
    class="px-6 py-1 rounded-md bg-gray-400 text-xs text-black"
  >
    {{ poketype }}
  </li>
  <li
    v-else-if="poketype === 'fighting'"
    class="px-6 py-1 rounded-md bg-orange-700 text-xs text-white"
  >
    {{ poketype }}
  </li>
  <li
    v-else-if="poketype === 'flying'"
    class="px-6 py-1 rounded-md bg-blue-100 text-xs text-black"
  >
    {{ poketype }}
  </li>
  <li
    v-else-if="poketype === 'poison'"
    class="px-6 py-1 rounded-md bg-purple-600 text-xs text-white"
  >
    {{ poketype }}
  </li>
  <li
    v-else-if="poketype === 'ground'"
    class="px-6 py-1 rounded-md bg-amber-600 text-xs text-black"
  >
    {{ poketype }}
  </li>
  <li
    v-else-if="poketype === 'rock'"
    class="px-6 py-1 rounded-md bg-yellow-800 text-xs text-white"
  >
    {{ poketype }}
  </li>
  <li
    v-else-if="poketype === 'bug'"
    class="px-6 py-1 rounded-md bg-green-700 text-xs text-white"
  >
    {{ poketype }}
  </li>
  <li
    v-else-if="poketype === 'ghost'"
    class="px-6 py-1 rounded-md bg-fuchsia-800 text-xs text-white"
  >
    {{ poketype }}
  </li>
  <li
    v-else-if="poketype === 'steel'"
    class="px-6 py-1 rounded-md bg-zinc-300 text-xs text-black"
  >
    {{ poketype }}
  </li>
  <li
    v-else-if="poketype === 'fire'"
    class="px-6 py-1 rounded-md bg-orange-500 text-xs text-white"
  >
    {{ poketype }}
  </li>
  <li
    v-else-if="poketype === 'water'"
    class="px-6 py-1 rounded-md bg-blue-600 text-xs text-white"
  >
    {{ poketype }}
  </li>
  <li
    v-else-if="poketype === 'grass'"
    class="px-6 py-1 rounded-md bg-green-500 text-xs text-white"
  >
    {{ poketype }}
  </li>
  <li
    v-else-if="poketype === 'electric'"
    class="px-6 py-1 rounded-md bg-yellow-300 text-xs text-black"
  >
    {{ poketype }}
  </li>
  <li
    v-else-if="poketype === 'psychic'"
    class="px-6 py-1 rounded-md bg-pink-500 text-xs text-black"
  >
    {{ poketype }}
  </li>
  <li
    v-else-if="poketype === 'ice'"
    class="px-6 py-1 rounded-md bg-blue-300 text-xs text-black"
  >
    {{ poketype }}
  </li>
  <li
    v-else-if="poketype === 'dragon'"
    class="px-6 py-1 rounded-md bg-amber-900 text-xs text-white"
  >
    {{ poketype }}
  </li>
  <li
    v-else-if="poketype === 'dark'"
    class="px-6 py-1 rounded-md bg-stone-700 text-xs text-white"
  >
    {{ poketype }}
  </li>
  <li
    v-else-if="poketype === 'fairy'"
    class="px-6 py-1 rounded-md bg-pink-400 text-xs text-white"
  >
    {{ poketype }}
  </li>
  <li
    v-else-if="poketype === 'unknown'"
    class="px-6 py-1 rounded-md bg-black text-xs text-white"
  >
    {{ poketype }}
  </li>
  <li
    v-else-if="poketype === 'shadow'"
    class="px-6 py-1 rounded-md bg-gray-500 text-xs text-white"
  >
    {{ poketype }}
  </li>
</template>

<script>
export default {
  name: "pokemon-type",
  props: {
    poketype: String,
  },
};
</script>
<style></style>
