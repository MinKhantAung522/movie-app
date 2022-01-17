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
.text-darkorange {
  color: darkorange;
}
</style>
