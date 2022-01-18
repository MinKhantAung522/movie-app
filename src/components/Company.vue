<template>
  <div>
    <div class="my-4">
      <img src="../assets/facebook.png" alt="" style="height:30px" class="me-3">
      <img src="../assets/twitter.png" alt="" style="height:30px" class="me-3">
      <img src="../assets/instragm.png" alt="" style="height:30px" class="me-3">
    </div>
       <h6 class="text-warning my-2 font1">Production Company</h6>
      <div v-for="company in production_company" :key="company.id">
        <small class="text-white font2">{{company.name}}</small>
      </div>
  </div>
</template>

<script>
export default {
props:["production_company"],
data(){
  return{
     image_start: "https://image.tmdb.org/t/p/original"
  }
}
}

</script>

<style>

</style>