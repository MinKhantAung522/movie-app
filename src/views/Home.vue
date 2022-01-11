<template>
  <div>
    <Ad class="mb-5" :movies = "movies"></Ad>
    <div class="text-center">
      <v-pagination
        v-model="page"
        :length="500"
        :total-visible="7"
        color="rgb(242,138,34)"
        dark
      ></v-pagination>
    </div>
    <div class="row">
      <div class="col-lg-10  col-sm-12">
        <SingleMovie :movies = "movies" @movie-detail="movieDetail($event)"></SingleMovie>
      </div>
      <div class="col-lg-2 col-sm-0">
          <Tag></Tag>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../components/Footer'
import Tag from '../components/Tag'
import Ad from '../components/ad'
import SingleMovie from '../components/SingleMovie'
import axios from "axios";
export default {
  components: {
    Footer,
    Tag,
    Ad,
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
  methods:{
    movieDetail(movie){
      console.log(movie);
      this.$emit('send-mov',movie);
    }
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
