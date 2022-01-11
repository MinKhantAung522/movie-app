<template>
  <div>
    <div class="card" style="width: 100%">
      <img src="../assets/poster.png" class="card-img-top ad" alt="..." />
      <div class="centered">
        <h1 class="text-white">Watch Anywhere Anytime</h1>
      <div class="input-group input-group-lg">
        <input
          type="text"
          class="form-control"
          placeholder="example@gmail.com"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <div class="input-group-append">
          <button class="btn btn-outline-warning btn-lg" type="button" id="button-addon2">
            SignUp
          </button>
        </div>
      </div>
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