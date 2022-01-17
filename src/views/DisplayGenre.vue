<template>
  <div>
    <div class="bg-dark" style="height: 100%">
      <h2 class="text-warning">"{{filered[0].name}}" Movies</h2>
      <div class="text-center">
      </div>
      <SingleMovie
        :movies="movies"
        @movie-detail="movieDetail($event)"
      ></SingleMovie>
    </div>
  </div>
</template>

<script>
import SingleMovie from '../components/SingleMovie'
import axios from 'axios'

export default {
  components: { SingleMovie },
props:["genreid","genres"],
data(){
  return{
    movies:[],
    genres_list:[]
  }
},
computed:{
filered(){
  return this.genres_list.filter((gen)=>{
    return gen.id==this.genreid;
  })
}
},
methods: {
    movieDetail(movie) {
      console.log(movie);
      this.$emit("send-mov", movie);
    },
  },
mounted(){
  axios.get("https://api.themoviedb.org/3/discover/movie?api_key=11f20a2f7d9fda9571965c5ed8d33d4e&with_genres="+this.genreid)
  .then((data)=>{
    this.movies = data.data.results
  })
  axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=11f20a2f7d9fda9571965c5ed8d33d4e&language=en-US"
      )
      .then((data) => {
        this.genres_list = data.data.genres;
      });
  
}
}
</script>

<style>

</style>