<template>
  <div>
    <div class="card" style="width: 100%">
      <img src="../assets/poster.png" class="card-img-top ad" alt="..." />
      <div class="centered">
        <h1 class="text-white">Watch Anywhere Anytime</h1>
      <button class="btn btn-warning btn-lg">SignUp Now</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.ad {
  position: relative;
  text-align: center;
  color: white;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>