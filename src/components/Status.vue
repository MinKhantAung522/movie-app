<template>
  <div>
      <h6 class="text-warning">Languages</h6>
      <div v-for="language in detail.spoken_languages"
            :key="language.iso_639_1" class="text-white">
          <small>{{language.name}}</small>
        </div>
        <hr class="text-warning">
        <h6 class="text-warning">Production Countries</h6>
        <div class="text-white" v-for="country in detail.production_countries" :key="country.iso_3166_1">
         <small>{{country.name}}</small>
        </div>
        <hr class="text-warning" />
        <h6 class="text-warning">Popularity</h6>
        <div class="text-white">
            <div>
              <img
                src="../assets/star.png"
                alt="rate"
                style="width: 30px; height: 30px"
              />
              <img
                src="../assets/star.png"
                alt="rate"
                style="width: 30px; height: 30px"
              />
              <img
                src="../assets/star.png"
                alt="rate"
                style="width: 30px; height: 30px"
              />
              <img
                src="../assets/star.png"
                alt="rate"
                style="width: 30px; height: 30px"
              />
              <img
                src="../assets/star.png"
                alt="rate"
                style="width: 30px; height: 30px"
              />
            </div>
            <div>
              <small><span>Popularity : </span><span>{{ detail.popularity }}</span></small>
            </div>
          </div>
        <hr class="text-warning" />
        <div class="text-white">
            <div>
                <h6 class="text-warning">Budget</h6>
          <small>${{detail.budget}}</small>
            </div>
            <hr class="text-dark"> 
          <div>
              <h6 class="text-warning">Revenue</h6>
          <small>${{detail.revenue}}</small>
          </div>
        </div>
        <hr class="text-warning" />
        <div class="text-white">
          <h6 class="text-warning">Votes</h6>
          <small>Vote Average : {{ detail.vote_average }}</small><br>
          <small>Vote Count : {{ detail.vote_count }}</small>
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