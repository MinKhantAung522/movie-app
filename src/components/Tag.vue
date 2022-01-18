<template>
  <div class="border border-secondary">
    <div class="p-1">
      <h2 class="text-warning font1">Genre Lists</h2>
      <div
        v-for="genre in genres"
        :key="genre.id"
        class="pills fw-bold mt-2 me-1"
        @click="toGenre(genre)"
      >
        {{ genre.name }} 
      </div>
    </div>
    <hr class="text-warning" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      genres: [],
    };
  },
  methods: {
    toGenre(g) {
      this.$router.push("/genre/" + g.id);
    },
  },
  mounted() {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=11f20a2f7d9fda9571965c5ed8d33d4e&language=en-US"
      )
      .then((data) => {
        this.genres = data.data.genres;
      });
  },
};
</script>

<style>
.pills {
  display: inline-block;
  background-color: darkorange;
  border-radius: 20px;
  padding: 7px;
  list-style: none;
  cursor: pointer;
  overflow: hidden;
}
</style>