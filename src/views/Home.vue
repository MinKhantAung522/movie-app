<template>
  <div>
    <div class="text-center">
      <v-pagination
        v-model="page"
        :length="500"
        :total-visible="7"
      ></v-pagination>
    </div>
    <SingleMovie :movies = "movies"></SingleMovie>
  </div>
</template>

<script>
import SingleMovie from '../components/SingleMovie'
import axios from "axios";
export default {
  components: {
    SingleMovie },
  data(){
    return{
      movies:[],
      api:"11f20a2f7d9fda9571965c5ed8d33d4e",
      page:1
    }
  },
  watch:{
     page: function (val) {
      
      const api_link = "https://api.themoviedb.org/3/discover/movie?api_key=11f20a2f7d9fda9571965c5ed8d33d4e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page="+val+"&with_watch_monetization_types=flatrate";
      axios
        .get(api_link)
        .then((res) => {
          return res.data.results;
        })
        .then((data) => {
          this.movies = data;
          
        });
    },
  },
  mounted(){
    const api_link = 'https://api.themoviedb.org/3/discover/movie?api_key=11f20a2f7d9fda9571965c5ed8d33d4e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page='+this.page+'&with_watch_monetization_types=flatrate'
    axios.get(api_link)
    .then((response)=>{
      return response.data.results;
      
    })
    .then((data)=>{
      this.movies = data;
    })
    .catch((err)=>{
      console.log(err);
    })
  }

}
</script>

<style>

</style>
