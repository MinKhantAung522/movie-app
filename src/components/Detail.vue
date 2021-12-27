<template>
  <div>
      Details>> {{currentMovie}} >> {{name}}
  </div>
</template>

<script>
export default {
    props:["currentMovie","name"],
    mounted(){
      console.log(this.currentMovie);
    }
}
</script>

<style>

</style>