<template>
<div>
  <router-view :currentMovie="currentMovie" @send-mov="movDetail($event)"/>
</div>
</template>
<script>

export default {
  name: 'App',
  data(){
    return{
      currentMovie: {},
    }
  },
  methods:{
    movDetail(mov){
      console.log(mov);
      this.currentMovie = mov;
      console.log(this.currentMovie);
    }
  }
};
</script>
