<template>
  <div>
    <v-card
    class="card-align"
    height="800"
    max-width="800"
    color="#1E222B"
    >
      <v-row
      align="center"
      class="p-5">
        <v-col
        sm="4"
        cols="12"
        class="my-2">
          <v-img
            width="100%"
            height="100%"
            :src="image_start + currentMovie.poster_path"
          >
          </v-img>
        </v-col>
        <v-col
       sm="8"
        cols="12">
         <v-card-title  class="header-title">{{currentMovie.title}}</v-card-title>
         <div class="header-subs">
           <v-row  no-gutters>
           <v-col>
             <p>{{currentMovie.release_date}}</p>
           </v-col>
           <v-col>
             <p>{{currentMovie.original_language}}</p>
           </v-col>
         </v-row>
         </div>
         <div v-for="i in currentMovie.genre_ids" :key="i">
          {{i}}
        </div>
        </v-col>
       
      </v-row>
    </v-card>
    
  </div>
</template>

<script>
export default {
    props:["currentMovie","name"],
    data(){
      return{
        image_start: "https://image.tmdb.org/t/p/w500",
        s:[]
      }
    },
  
    watch:{
      currentMovie:{
        handler(v){
          console.log(v);
        },
        immediate: true,
        deep: true
      }
    },
    
    mounted(){
      let a = "https://api.themoviedb.org/3/genre/movie/list?api_key=11f20a2f7d9fda9571965c5ed8d33d4e";
      fetch(a)
      .then((r)=>{
        return r.json();
      })
      .then((d)=>{
        this.s.push(d.genres[0]);
        console.log(d.genres);
        d.genres.forEach(single => {
          this.s.push(single);
        });
        for(let i = 0;i< this.s.length;i++){
          console.log(this.s[i].id,this.s[i].name);
        }
        console.log(this.s);
      })
      
    }
}
</script>

<style>
.card-align{
  margin: 0 auto;
  
}
.make-header{
  height: 200px;
}
.header-title{
  color: white;
  font-weight: bolder;
  font-size: xx-large;
}
.header-subs{
  max-width: 300px;
  color: white;
}

</style>