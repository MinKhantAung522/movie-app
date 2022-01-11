<template>
  <div>
    <footer class="bg-black">
      <!--start of footer-->
      <div class="container-fluid">
        <div class="row mt-5">
          <div class="col-md-4 col-sm-12">
            <p class="text-warning fs-5 mt-5">ABOUT US</p>
            <hr class="text-primary new4" />
            <p>
              <small class="text-light"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus nulla, excepturi adipisci aliquam consequatur saepe
                iure totam neque, assumenda delectus voluptatem quisquam
                consectetur provident commodi accusantium hic, explicabo rerum
                corporis!</small
              >
            </p>
          </div>
          <div class="col-md-4 col-sm-12">
            <p class="text-warning fs-5 mt-5">BASICS</p>
            <hr class="text-primary new4" />
            <ul class="text-white">
              <li class="basic">About WheeChannel</li>
              <li class="basic">Contact Us</li>
              <li class="basic">Customer Support</li>
              <li class="basic">Report a Problem</li>
            </ul>
          </div>
          <div class="col-md-4 col-sm-12 mt-5">
            <img src="../assets/ok.png" alt="" class="img-fluid" />
            <div class="d-grid gap-2 mt-4">
              <button class="btn btn-warning" type="button">Join Communiy</button>
            </div>
          </div>
        </div>
        <div>
          <h4>
            You Can Reach Me at
            <span
              ><img
                src="../assets/facebook.png"
                alt="facebook"
                class="contact mx-3" />
              <img
                src="../assets/twitter.png"
                alt="twitter"
                class="contact me-3" />
              <img
                src="../assets/github.png"
                alt="github"
                class="contact me-3" />
              <img src="../assets/phone.png" alt="phone" class="contact me-3"
            /></span>
          </h4>
        </div>
      </div>
      <div class="container border-1">
        <div
          class="
            col-12
            d-flex
            justify-content-center
            align-items-center
            bg-black
          "
        >
          <small class="text-light">
            &copy; Copyright WheeChannel 2022.All Right Reserved.</small
          >
        </div>
      </div>
    </footer>
    <!--end of footer-->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.basic {
  list-style-type: none;
}
.contact {
  height: 35px;
  width: 35px;
  cursor: pointer;
}
</style>