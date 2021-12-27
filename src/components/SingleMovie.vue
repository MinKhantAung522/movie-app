<template>
  <div>
    <v-row>
      <v-col md="3" cols="4" v-for="movie in movies" :key="movie.id">
        <v-card
          class="mx-auto"
          max-width="250"
          max-height="500"
          @click="displayEach(movie)"
        >
          <v-img
            width="100%"
            height="100%"
            :src="image_start + movie.poster_path"
          >
            <v-card-text class="rate">rating</v-card-text>
          </v-img>
          <div class="detail">
            <v-card-title>
              <h4>{{ movie.title }}</h4>
            </v-card-title>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ["movies"],
  data() {
    return {
      image_start: "https://image.tmdb.org/t/p/w500",
      
    };
  },
  methods:{
      displayEach(mov){
        this.$emit("send",mov);
        this.$router.push("/detail/"+mov.title);
      }
  }
};
</script>

<style>
.detail{
width: 250px;
height:90px;
background: rgb(208, 238, 238);
}
.rate{
  display: inline;
  background: black;
  color: aqua;
  border-radius: 20px;
  margin-bottom: 49px;
}
</style>