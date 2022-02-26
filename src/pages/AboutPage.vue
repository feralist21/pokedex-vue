<template>
  <div>
    <pokemonFullinfoVue></pokemonFullinfoVue>
  </div>
</template>

<script>
import pokemonFullinfoVue from "@/components/pokemon-fullinfo.vue";

export default {
  name: "AboutPage",
  components: {
    pokemonFullinfoVue,
  },
};
</script>
