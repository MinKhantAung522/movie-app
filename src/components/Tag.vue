<template>
  <div class="border border-secondary">
    <div class="p-1">
      <h2 class="text-warning">Genre Lists</h2>
      <div v-for="genre in genres" :key="genre" class="pill mt-2">
        {{ genre }}
      </div>
    </div>
    <hr class="text-warning" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      genres: [
        "Action",
        "Adventure",
        "Animation",
        "Comedy",
        "Crime",
        "Documentary",
        "Drama",
        "Family",
        "Fantasy",
        "History",
        "Horror",
        "Music",
        "Mystery",
        "Romance",
        "Science Fiction",
        "Thriller",
        "TV Movie",
        "War",
        "Western",
      ],
    };
  },
};
</script>

<style>
.pills {
  display: inline;
  background-color: darkorange;
  border-radius: 20px;
  padding: 7px;
  list-style: none; 
  cursor: pointer;
  overflow: hidden;
}
</style>