<template>
  <div>
    <div class="bg-dark" style="height: 100%">
      <h2 class="text-warning">Search Results for "{{ searchResult }}"</h2>
      <div class="text-center">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" @click="page--">Previous</a>
            </li>
            <li class="page-item">
              <a class="page-link" @click="page++">Next</a>
            </li>
          </ul>
        </nav>
      </div>
      <SingleMovie
        :movies="movies"
        @movie-detail="movieDetail($event)"
      ></SingleMovie>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import SingleMovie from "../components/SingleMovie";
import axios from "axios";
export default {
  components: {
    Navbar,
    SingleMovie,
  },
  props: ["searchResult"],
  data() {
    return {
      page: 1,
      movies: [],

      search_api:
        "https://api.themoviedb.org/3/search/movie?api_key=11f20a2f7d9fda9571965c5ed8d33d4e&query=",
    };
  },

  methods: {
    movieDetail(movie) {
      console.log(movie);
      this.$emit("send-mov", movie);
    },
  },
  watch: {
    searchResult: function (val) {
      this.searchResult = val;
      axios
        .get(this.search_api + this.searchResult + "&page=" + this.page)
        .then((data) => {
          this.movies = data.data.results;
          console.log(this.movies);
        });
    },
  },
  mounted() {
    axios
      .get(this.search_api + this.searchResult + "&page=" + this.page)
      .then((data) => {
        this.movies = data.data.results;
        console.log(this.movies);
      });
  },
};
</script>

<style>
</style>