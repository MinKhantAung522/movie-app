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
      this.currentMovie = mov;
    }
  }
};
</script>
