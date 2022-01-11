<template>
<div>
    <div class="card pe-5 border-0 my-4 bg-dark"  style="width: 100% ;">
      <img :src="image_start + detail.belongs_to_collection.backdrop_path" class="card-img-top ad ad-modified " alt="..." />
      <div class="centered">
        <h3 class="text-white">{{detail.title}} Collections</h3>
        <button class="btn btn-warning btn-lg">View the Collection</button>
      </div>
    </div>
</div>
</template>

<script>
export default {
props:["detail"],
data(){
    return{
        image_start: "https://image.tmdb.org/t/p/original",
    }
}
}
</script>

<style>
.ad-modified{
  height: 300px;
  filter: opacity(30%);
  background-color: rgb(255, 0, 0);
}
</style>