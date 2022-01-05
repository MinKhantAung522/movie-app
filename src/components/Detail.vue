<template>
  <div class="container-fluid bg-dark">
    dd
    <div class="row header-row m-3">
      <div class="col-sm-4">
        <img
          :src="image_start + currentMovie.poster_path"
          alt="movie-poster"
          class="img-fluid"
        />
      </div>
      <div class="col-sm-8">
        <h3 class="text-white">{{ detail.title }}</h3>
        <small class="text-white"
          >Release Date : {{ detail.release_date }} /
          <span>{{ detail.status }}</span>
        </small>
        <hr class="text-warning" />
        <div v-for="genre in detail.genres" :key="genre.id" class="pill">
          {{ genre.name }}
        </div>
        <hr class="text-warning" />
        <span class="text-white">Runtime : {{ detail.runtime }}mins</span>
        <div class="text-white">
          <span>Language :</span>
          <span
            v-for="language in detail.spoken_languages"
            :key="language.iso_639_1"
          >
            {{ language.name }} .
          </span>
        </div>
        <div class="text-white">
          <span>Production Country :</span
          ><span
            v-for="country in detail.production_countries"
            :key="country.iso_3166_1"
          >
            {{ country.name }}
          </span>
        </div>
        <hr class="text-warning" />
        <h4 class="text-warning">Popularity</h4>
        <div class="row">
          <div class="col-sm-1">
            <div class="text-white rating">
              <h4 class="text-dark">{{ detail.vote_average }}</h4>
            </div>
          </div>
          <div class="col-sm-11 text-white">
            <div>
              <img
                src="../assets/star.png"
                alt="rate"
                style="width: 30px; height: 30px"
              />
              <img
                src="../assets/star.png"
                alt="rate"
                style="width: 30px; height: 30px"
              />
              <img
                src="../assets/star.png"
                alt="rate"
                style="width: 30px; height: 30px"
              />
              <img
                src="../assets/star.png"
                alt="rate"
                style="width: 30px; height: 30px"
              />
              <img
                src="../assets/star.png"
                alt="rate"
                style="width: 30px; height: 30px"
              />
            </div>
            <div>
              <span>Popularity : </span><span>{{ detail.popularity }}</span>
            </div>
          </div>
        </div>
        <hr class="text-warning" />
        <div class="text-white">
          <div><span>Budget : </span> ${{ detail.budget }}</div>
          <div><span>Revenue : </span>${{ detail.revenue }}</div>
        </div>
        <hr class="text-warning" />
        <div class="text-white">
          <h4 class="text-warning">Votes</h4>
          <div><span>Vote_average : </span> {{ detail.vote_average }}</div>
          <div><span>Vote_count : </span>{{ detail.vote_count }}</div>
        </div>
      </div>
    </div>
    <div>
      <h3 class="text-warning">
        Overview (<small>{{ detail.tagline }}</small
        >)
      </h3>
      <p class="text-white">{{ detail.overview }}</p>
    </div>
    <div>
      <h3 class="text-warning mb-3">Casts</h3>
      <v-sheet
    class="mx-auto my-auto"
    max-width="100%"
    max-height="100%"
    color="rgb(33,37,41)"
  >
    <v-slide-group
      multiple
      show-arrows
      dark
    >
      <v-slide-item
        v-for="cast in casts"
        :key="cast.id"
      >
        <v-card
    class="mx-3"
    max-width="150"
    max-height="350"
  >
    <v-img
      contain
      :src="image_start+cast.profile_path"
    >
    </v-img>
    <v-card-text class="text--primary">
      <p>{{cast.name }}</p>
      <small class="text-warning">{{cast.character}}</small>
    </v-card-text>
  </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
  hee
  
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["currentMovie", "name"],
  data() {
    return {
      image_start: "https://image.tmdb.org/t/p/w500",
      detail: [],
      casts: [],
    };
  },
  computed: {
    ok() {},
  },

  mounted() {
    const detail_api =
      "https://api.themoviedb.org/3/movie/" +
      this.currentMovie.id +
      "?api_key=11f20a2f7d9fda9571965c5ed8d33d4e";
    axios
      .get(detail_api)
      .then((res) => {
        return res.data;
      })
      .then((datas) => {
        this.detail = datas;
        console.log(this.detail);
      });
    const cast_api =
      "https://api.themoviedb.org/3/movie/" +
      this.currentMovie.id +
      "/credits?api_key=11f20a2f7d9fda9571965c5ed8d33d4e";
    axios
      .get(cast_api)
      .then((res1) => {
        return res1.data.cast;
      })
      .then((data1) => {
        this.casts = data1;
        console.log(this.casts);
      });
  },
};
</script>

<style>
.pill {
  display: inline-block;
  background-color: darkorange;
  border-radius: 20px;
  padding: 7px;
  margin-right: 5px;
  cursor: pointer;
}
.rating {
  display: inline-block;
  padding: 9px;
  background-color: darkorange;
}
.header-row {
  border: solid darkorange 2px;
}
.scrolling-wrapper{
	overflow-x: auto;
  overflow-y:hidden ;
}
.card{
  display: inline-block;
}
</style>