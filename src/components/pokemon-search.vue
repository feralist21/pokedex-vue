<template>
  <div class="w-52">
    <input
      class="block w-full h-full bg-gray-100 p-2 border-gray-100 border-2 focus:outline-none focus:border-2 focus:border-purple-600"
      type="text"
      name="search"
      id="search"
      placeholder="Поиск..."
      v-model="search"
      v-on:input="findPokemon"
    />
  </div>
</template>

<script>
export default {
  name: "pokemon-search",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    findPokemon() {
      this.$emit("search", this.search);
    },
  },
};
</script>

<style></style>
