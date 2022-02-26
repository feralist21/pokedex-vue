<template>
  <li class="px-6 py-1 rounded-md bg-orange-500 text-xs text-black">
    {{ abilities }}
  </li>
</template>

<script>
export default {
  name: "pokemon-abilities",
  props: {
    abilities: String,
  },
};
</script>
<style></style>
