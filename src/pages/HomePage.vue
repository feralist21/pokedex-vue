<template>
  <div class="w-screen h-screen px-5 bg-gray-800 flex">
    <div class="m-auto text-center">
      <h1 class="text-6xl font-bold text-white mb-3">
        Привет, это твой Pokedex
      </h1>
      <p class="text-white text-2xl mb-6">
        Собери всех покемонов и стань чемпионом
      </p>
      <router-link
        class="block w-52 mx-auto py-4 bg-purple-600 text-center text-white text-xl rounded-md"
        :to="{ name: 'list' }"
        >Вперед!</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  components: {},
};
</script>
