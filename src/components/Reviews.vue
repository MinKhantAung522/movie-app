<template>
  <div>
    <div v-for="review in reviews" :key="review.id">
      <div
        class="card text-dark bg-dark mb-3 border border-warning"
        style="width: 100%"
      >
        <div class="card-body">
          <div>
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
            <h4 class="card-title ms-3 text-warning display-inline">
              {{ review.author }}
            </h4>
            <span class="bg-black px-2 py-1 ms-2 rounded"
              ><span class="text-warning">★</span
              ><span
                v-if="review.author_details.rating"
                class="text-white ms-1"
                >{{ review.author_details.rating }}</span
              ><span v-else class="text-white"
                ><small>Not Rate Yet</small></span
              ></span
            >
          </div>
          <div><small class="text-muted fst-italic fw-bolder">Created at {{ review.created_at }}</small></div>
          <div v-if="show">
            <p class="card-text text-light">
              {{ review.content.substring(0, 300)
              }}<span class="ms-2 readMore" @click="show = !show"
                >Read More</span
              >
            </p>
          </div>

          <div v-else>
            <p class="card-text text-light">
              {{ review.content }}<span
                class="ms-2 readMore"
                @click="show = !show"
                >Return</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["reviews"],
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style>
.readMore {
  color: rgb(0, 89, 255);
  text-decoration: underline;
  cursor: pointer;
}
.display-inline {
  display: inline-block;
}
.avatar-style {
  border: 2px solid darkorange;
  border-radius: 50%;
}
</style>