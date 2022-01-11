<template>
  <div class="border-1 border-primary">
    <h3 class="text-warning mt-5 ms-5">Review</h3>
      <div class="row">
      <div class="col-lg-3 col-md-6"><Rating></Rating></div>
      <div class="text-white col-lg-9 col-md-6"> 
        <div class="form-floating mt-5" >
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
  <label for="floatingTextarea2" class="text-primary">Comments</label>
  <button class="btn btn-warning btn-lg mt-2">Submit</button>
</div>
      </div>
    </div>
  </div>
</template>

<script>
import Rating from './Rating'
export default {
  components: { Rating },

}
</script>

<style>

</style>