<template>
  <div>
      <h6 class="text-warning font1">Languages</h6>
      <div v-for="language in detail.spoken_languages"
            :key="language.iso_639_1" class="text-white">
          <small class="font2">{{language.name}}</small>
        </div>
        <hr class="text-warning">
        <h6 class="text-warning font1">Production Countries</h6>
        <div class="text-white" v-for="country in detail.production_countries" :key="country.iso_3166_1">
         <small>{{country.name}}</small>
        </div>
        <hr class="text-warning" />
        <h6 class="text-warning">Popularity</h6>
        <div class="text-white">
            <div>
              <i class="fas fa-star text-warning me-1"></i>
              <i class="fas fa-star text-warning me-1"></i>
              <i class="fas fa-star text-warning me-1"></i>
              <i class="fas fa-star text-warning me-1"></i>
              <i class="fas fa-star text-warning me-1"></i>
            </div>
            <div>
              <small class="font2"><span>Popularity : </span><span>{{ detail.popularity }}</span></small>
            </div>
          </div>
        <hr class="text-warning" />
        <div class="text-white">
            <div>
                <h6 class="text-warning font1">Budget</h6>
          <small class="font2">${{detail.budget}}</small>
            </div>
            <hr class="text-dark"> 
          <div>
              <h6 class="text-warning font1">Revenue</h6>
          <small class="font2">${{detail.revenue}}</small>
          </div>
        </div>
        <hr class="text-warning" />
        <div class="text-white">
          <h6 class="text-warning font1">Votes</h6>
          <small class="font2">Vote Average : {{ detail.vote_average }}</small><br>
          <small class="font2">Vote Count : {{ detail.vote_count }}</small>
        </div>
  </div>
</template>

<script>
export default {
props:["detail"]
}
</script>

<style>

</style>