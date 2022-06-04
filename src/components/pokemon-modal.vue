<template>
  <transition name="modal">
    <div
      class="fixed z-50 top-0 left-0 w-full h-full bg-black/50 transition-opacity"
    >
      <div
        class="w-10/12 lg:w-2/3 xl:w-1/3 mx-auto my-20 py-6 px-10 bg-white rounded-md shadow-md transition-all relative"
      >
        <p class="mb-6 text-xl text-black">
          Начните вводить имя покемона. Допустима только латиница.
        </p>
        <input
          class="block w-full h-10 bg-gray-100 p-2 border-gray-100 border-2 focus:outline-none focus:border-2 focus:border-purple-600"
          type="text"
          name="search"
          id="search"
          placeholder="Поиск..."
          v-model="search"
        />
        <ul class="mt-6">
          <li
            :key="index"
            v-for="(item, index) in filteredNamePokemons"
            class="mb-2"
          >
            <router-link
              class="block py-2 px-4 bg-gray-300 hover:bg-purple-600 hover:text-white"
              :to="{ name: 'about', params: { name: item.name } }"
            >
              <svg
                class="inline-block w-6 h-6 mr-1"
                version="1.1"
                id="Pokéball"
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                viewBox="0 0 595.3 594.1"
                style="enable-background: new 0 0 595.3 594.1"
                xml:space="preserve"
              >
                <g id="Pokéball_1_">
                  <g id="Colours">
                    <path
                      id="Down"
                      fill="#ffffff"
                      d="M297.6 380.9c-40.4 0-74.1-28.6-82.1-66.6H81.1c9.5 110.5 102.2 197.2 215.1 197.2s205.7-86.7 215.1-197.2H379.7c-8 38.1-41.7 66.6-82.1 66.6z"
                    />
                    <path
                      id="Shadow_Down"
                      d="M345.6 505.9c89.6-21 157.7-97.7 165.7-191.6h-53c-5.3 85.2-50 157.4-112.7 191.6z"
                      style="fill: #dfdfdf"
                    />
                    <path
                      id="Center"
                      fill="#ffffff"
                      d="M347.1 297c-.1 0-.1 0 0 0-.1-6.1-1.2-11.9-3.2-17.3-7-18.8-25.1-32.1-46.3-32.1s-39.3 13.4-46.3 32.1c-2 5.4-3.1 11.2-3.1 17.3h.1c0 6.1 1.1 11.9 3.1 17.3 7 18.8 25.1 32.1 46.3 32.1 21.2 0 39.3-13.4 46.3-32.1 2-5.3 3.1-11.2 3.1-17.3z"
                    />
                    <path
                      id="Up"
                      d="M297.7 213.2c40.4 0 74.1 28.6 82.1 66.6h134.4C504.7 169.2 412 82.5 299 82.5S93.4 169.2 83.9 279.7h131.7c8-38 41.7-66.5 82.1-66.5z"
                      style="fill: #ff1c1c"
                    />
                    <path
                      id="Shadow_Up"
                      d="M458.3 279.7h55.8c-8.2-95.5-78.6-173.3-170.5-192.6 63.8 33.7 109.3 106.6 114.7 192.6z"
                      style="fill: #df1818"
                    />
                  </g>
                  <path
                    id="Line"
                    d="M299 82.5c113 0 205.7 86.7 215.1 197.2H379.7c-8-38-41.7-66.6-82.1-66.6-40.4 0-74.1 28.6-82.1 66.6H83.9C93.4 169.2 186.1 82.5 299 82.5zm44.9 197.2c2 5.4 3.1 11.2 3.1 17.3h.1c0 6.1-1.1 11.9-3.1 17.3-7 18.8-25.1 32.1-46.3 32.1-21.2 0-39.3-13.4-46.3-32.1-2-5.4-3.1-11.2-3.1-17.3h-.1c0-6.1 1.1-11.9 3.1-17.3 7-18.8 25.1-32.1 46.3-32.1s39.3 13.4 46.3 32.1zm-47.7 231.9c-113 0-205.7-86.7-215.1-197.2h134.4c8 38 41.7 66.6 82.1 66.6s74.1-28.6 82.1-66.6h131.7c-9.5 110.4-102.2 197.2-215.2 197.2zm1.4-470.3C156.4 41.3 41.9 155.8 41.9 297s114.5 255.7 255.7 255.7S553.4 438.3 553.4 297 438.9 41.3 297.6 41.3z"
                  />
                </g>
              </svg>
              {{ item.name }}</router-link
            >
          </li>
        </ul>
        <button
          class="block w-10 py-1 px-1 bg-purple-600 text-center text-white rounded-full absolute -top-4 -right-4"
          @click="$emit('close')"
        >
          <svg
            class="w-8 h-8"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="cross">
              <path stroke="white" d="m7 7 18 18M7 25 25 7" />
            </g>
          </svg>
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "pokemon-modal",
  data() {
    return {
      search: "",
      apiUrl: "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0",
      imgUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/",
      pokemons: [],
    };
  },
  mounted() {
    this.getDataPokemons(this.apiUrl);
  },
  methods: {
    getDataPokemons(url) {
      fetch(url)
        .then((responce) =>
          responce.status === 200 ? responce.json() : console.log("not 200")
        )
        .then((data) => {
          this.pokemons = data.results;
        })
        .catch((error) => console.log(error));
    },
  },
  computed: {
    filteredNamePokemons() {
      return this.search
        ? this.pokemons
            .filter((el) => {
              return (
                el.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
              );
            })
            .slice(0, 5)
        : [];
    },
  },
};
</script>

<style>
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
