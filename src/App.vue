<template>
  <div class="bg-dark">
    <Navbar></Navbar>
    <router-view
      :currentMovie="currentMovie"
      @send-mov="movDetail($event)"
      @reviews="review($event)"
      :reviews="reviews"
    />
  </div>
</template>
<script>
import Navbar from "./components/Navbar";
export default {
  components: { Navbar },
  name: "App",
  data() {
    return {
      currentMovie: {},
      reviews: [],
    };
  },
  methods: {
    movDetail(mov) {
      this.currentMovie = mov;
    },
    review(rev) {
      this.reviews = rev;
    },
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Russo+One&family=Secular+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100&display=swap');
.text-darkorange {
  color: darkorange;
}
.pointer{
  cursor: pointer;
}
.font1{
  font-family: 'Russo One', sans-serif;
font-family: 'Secular One', sans-serif;
}
.font2{
  font-family: 'Roboto', sans-serif;
}
</style>
