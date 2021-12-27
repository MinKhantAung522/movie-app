<template>
<div>
  <router-view  :currrentMovie="currentMovie" @send="send($event)"/>
</div>
</template>
<script>

export default {
  name: 'App',
  data(){
    return{
      currentMovie:{ }
    }
  },
  methods: {
    send(movie){
      this.currentMovie = movie;
    }
  },
};
</script>
