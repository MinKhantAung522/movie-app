<template>
  <div>
    <div class="row">
      <div v-for="movie in movies" :key="movie.id" class="col-lg-3 col-md-4 col-sm-6 ">
        <div class="card mb-5 " style="width: 15rem; height:400px" @click="displayEach(movie)">
          <small id="card-title" class="bg-black"><span class="text-warning">★</span><span class="text-white ms-1">{{movie.vote_average}}</span></small>
          <img
            :src="image_start + movie.poster_path"
            class="card-img-top"
            alt="item-logo"
          />
          <div class="card-body overflow-hidden detail" style="height:70px">
            <h5 class="card-title">{{ movie.title }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["movies"],
  data() {
    return {
      image_start: "https://image.tmdb.org/t/p/original",
    };
  },
  methods: {
    displayEach(mov) {
      this.$emit("movie-detail", mov);
      this.$router.push("/detail/" + mov.title);
    },
  },
};
</script>

<style>
.detail {
  background: rgb(242,138,34);
}
.card{
  border: black solid 1px;
  cursor: pointer;
}
#card-title{
    position: absolute;
    z-index: 1;
    top: 5px;
    left: 5px;
    padding: 0 5px;
}
</style>