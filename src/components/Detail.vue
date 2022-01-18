<template>
  <div class="container-fluid bg-dark">
    <div class="header-container">
      <img
        :src="image_start + currentMovie.backdrop_path"
        alt="backdrop"
        class="background-backdrop"
      />
      <div class="centered">
        <div class="d-flex justify-content-start">
          <img
            :src="image_start + currentMovie.poster_path"
            alt="movie-poster"
            style="height: 500px"
            class="me-5"
          />
          <div>
            <h3 class="text-white font1 fw-bolder">{{ detail.title }}</h3>
            <small class="text-white"
              >Release Date : {{ detail.release_date }} /
              <span>{{ detail.status }}</span> /
              <span class="text-white">Runtime : {{ detail.runtime }}mins</span>
            </small>
            <hr class="text-warning" />
            <!--genres-->
            <div v-for="genre in detail.genres" :key="genre.id" class="pill fw-bold" @click="toGenre(genre)">
              {{ genre.name }}
            </div>
            <hr class="text-warning" />
            <div class="mt-4">
             <i class="fas fa-list text-black fs-3 rounded bg-darkorange p-2 me-2 pointer" title="list"></i>
              <i class="fas fa-heart text-black fs-3 rounded bg-darkorange p-2 m-2 pointer" title="love"></i>
              <i class="fas fa-bookmark text-black fs-3 rounded bg-darkorange p-2 m-2 pointer" title="bookmark"></i>
              <i class="fas fa-star text-black fs-3 rounded bg-darkorange p-2 m-2 pointer" title="rate"></i>
              <a @click="youtube" target="_blank"><i class="fas fa-play text-black fs-4 rounded bg-darkorange p-2 m-2 pointer" title="paly trailer">Watch Trailer</i></a>
            </div>
            <hr class="text-warning" />
            <div>
              <p class="text-white fst-italic fw-bold font2">"{{ detail.tagline }}"</p>
              <h3 class="text-warning font1">Overview</h3>
              <p class="text-white font2">{{ detail.overview }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-10">
        <!-- Cast -->
        <div>
          <h3 class="text-warning my-3 ms-5 font1">Casts</h3>
          <v-sheet
            class="mx-auto my-auto"
            max-width="100%"
            max-height="100%"
            color="rgb(33,37,41)"
          >
            <v-slide-group multiple show-arrows dark>
              <v-slide-item v-for="cast in casts" :key="cast.id">
                <v-card class="mx-3" max-width="150" max-height="350">
                  <v-img contain :src="image_start + cast.profile_path">
                  </v-img>
                  <v-card-text class="text--primary">
                    <p>{{ cast.name }}</p>
                    <small class="text-warning">{{ cast.character }}</small>
                  </v-card-text>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </div><hr class="text-warning">   
        <!--Reviews-->
        <h3 class="text-warning mt-5 ms-5 font1">Reviews</h3>
        <div v-if="reviews[0]">
          <div
            v-for="review in reviews.slice(0, 1)"
            :key="review.id"
            class="me-5"
          >
            <div
              class="
                card
                text-dark
                bg-dark
                my-3
                border-2 border-warning
                rounded
              "
              style="width: 100%"
            >
              <div class="card-body">
                <div
                  v-if="review.author_details.avatar_path"
                  class="display-inline"
                >
                  <img
                    :src="review.author_details.avatar_path.substring(1)"
                    alt="atr"
                    class="avatar-style"
                    style="height: 50px; width: 50px"
                  />
                </div>
                <div v-else class="display-inline">
                  <img
                    src="../assets/profile-avatar.png"
                    alt=""
                    class="avatar-style"
                    style="height: 50px; width: 50px"
                  />
                </div>
                <h5 class="card-title text-warning ms-2 display-inline">
                  {{ review.author }}
                </h5>
                <span class="bg-black ms-2 rounded"
                  ><span class="text-warning">★</span
                  ><span
                    v-if="review.author_details.rating"
                    class="text-white ms-1"
                    >{{ review.author_details.rating }}</span
                  ><span v-else class="text-white"
                    ><small>Not Rate Yet</small></span
                  ></span
                ><div><small class="text-muted fst-italic fw-bolder">Created  at {{ review.created_at }}</small></div>
                <div v-if="show" class="mt-3">
                  <p class="card-text text-white">
                    {{ review.content.substring(0, 300) }} ....
                    <span class="ms-2 readMore" @click="show = !show"
                      >Read More</span
                    >
                  </p>
                </div>
                <div v-else class="mt-3">
                  <p class="card-text text-white">
                    {{ review.content }} 
                    <span class="ms-2 readMore" @click="show = !show"
                      >Return</span
                    >
                  </p>
                </div>
                <button
                  class="btn btn-link mt-1 text-warning"
                  @click="showDetails"
                >
                  View All Reviews
                </button>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="border-1 border-warning">
          <div
            style="height: 100px; width: 95%"
            class="d-flex justify-content-center align-items-center"
          >
            <h6 class="text-white">
              There is no review about this movies. You can review first!
            </h6>
            <button class="btn btn-link pb-3">Review Now</button>
          </div>
        </div><hr class="text-warning">
        <!--belong to collections-->
        <div
          v-if="
            detail.belongs_to_collection &&
            detail.belongs_to_collection.backdrop_path
          "
        >
          <BelongToCollectons :detail="detail"></BelongToCollectons>
        </div>
        <hr class="text-warning">
        <!--Review-->
        <Review></Review>
        <hr class="text-warning">
        <!-- similarMovie -->
        <h3 class="text-warning mb-3 ms-5 font1">Similar Movies</h3>
        <v-sheet
          class="mx-auto my-auto"
          max-width="100%"
          max-height="100%"
          color="rgb(33,37,41)"
        >
          <v-slide-group multiple show-arrows dark>
            <v-slide-item v-for="s_movie in similar_movies" :key="s_movie.id">
              <v-card class="mx-3" max-width="150" max-height="300">
                <v-img contain :src="image_start + s_movie.poster_path">
                </v-img>
                <v-card-text class="text--primary">
                  <p class="text-warning">{{ s_movie.title }}</p>
                </v-card-text>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
        
      </div>
      
      <!--details detail-->
      <div class="col-2">
        <Company :production_company="production_company"></Company>
        <hr class="text-warning" />
        <Status :detail="detail"></Status>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Review from './Review'
import Rating from './Rating'
import Reviews from "./Reviews";
import BelongToCollectons from "./BelongToCollectons";
import Footer from "./Footer";
import Status from "./Status";
import Company from "./Company";
import axios from "axios";

export default {
  components: {
    Review,
    Rating,
    Reviews,
    BelongToCollectons,
    Footer,
    Status,
    Company,
  },
  props: ["currentMovie", "name"],
  data() {
    return {
      image_start: "https://image.tmdb.org/t/p/original",
      api_start: "https://api.themoviedb.org/3/movie/",
      api_key: "11f20a2f7d9fda9571965c5ed8d33d4e",
      show: true,
      detail: [],
      casts: [],
      similar_movies: [],
      production_company: [],
      reviews: [],
      videos:[],
      video_path:"https://www.youtube.com/watch?v="
    };
  },
  methods: {
    showDetails() {
      this.$emit("reviews", this.reviews);
      this.$router.push("/reviews");
    },
    toGenre(g) {
      this.$router.push("/genre/" + g.id);
    },
    youtube(){
      window.open(this.video_path+this.videos.key)
    }
  },
  mounted() {
    //fetch detail
    const detail_api =
      this.api_start + this.currentMovie.id + "?api_key=" + this.api_key;
    axios
      .get(detail_api)
      .then((res) => {
        return res.data;
      })
      .then((datas) => {
        this.detail = datas;
        this.production_company = datas.production_companies;
        console.log(this.production_company, "p");
        console.log(this.detail, "detail");
      });
    //fetch casts
    const cast_api =
      this.api_start +
      this.currentMovie.id +
      "/credits?api_key=" +
      this.api_key;
    axios
      .get(cast_api)
      .then((res1) => {
        return res1.data.cast;
      })
      .then((data1) => {
        this.casts = data1;
        console.log(this.casts, "cast");
      });
    //fetch similar movies
    const similar_api =
      this.api_start +
      this.currentMovie.id +
      "/similar?api_key=" +
      this.api_key;
    axios
      .get(similar_api)
      .then((res2) => {
        return res2.data.results;
      })
      .then((similar) => {
        this.similar_movies = similar;
      });
    //fetch reviews
    const review_api =
      this.api_start +
      this.currentMovie.id +
      "/reviews?api_key=" +
      this.api_key;
    axios
      .get(review_api)
      .then((res2) => {
        return res2.data.results;
      })
      .then((data2) => {
        console.log(data2, "review");
        this.reviews = data2;
      });
      //fetch videos
      axios.get(this.api_start+this.currentMovie.id+"/videos?api_key="+this.api_key)
      .then((data3)=>{
        this.videos = data3.data.results;
        this.videos = this.videos[0];
      })
  },
};
</script>

<style>
.pill {
  display: inline-block;
  background-color: darkorange;
  border-radius: 20px;
  padding:  7px 20px;
  margin-right: 5px;
  cursor: pointer;
}

.header-row {
  border: solid darkorange 2px;
}
.scrolling-wrapper {
  overflow-x: auto;
  overflow-y: hidden;
}
.card {
  display: inline-block;
}

.header-container {
  position: relative;
}
.centered {
  position: absolute;
  right: -330px;
}
.background-backdrop {
  filter: opacity(10%);
  width: 100%;
}
.bg-darkorange{
  background: darkorange;
}

</style>