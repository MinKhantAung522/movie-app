<template>
  <div class="d-flex justify-content-center bg-white pt-5">
    <form>
      <div class="form-group mb-3">
        <label for="exampleFormControlInput1">Email address:</label>
        <input
          type="email"
          class="form-control mt-2"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div class="form-group mb-3">
        <label for="exampleFormControlInput1">Password:</label>
        <input
          type="password"
          class="form-control mt-2"
          id="exampleFormControlInput1"
          placeholder="password"
        />
        <div class="d-flex justify-content-end mt-2">
            <small>
            Forgot Password?
        </small>
        </div>
        <div class="d-flex justify-content-center">
            <p>OR</p>
        </div>
        <h5>
            Login with :
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
                src="../assets/google.png"
                alt="google"
                class="contact me-3" />
             </span>
          </h5>
      </div>
      <button class="ms-5 mt-3 btn btn-gradient btn-lg mb-3">Login</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
form {
  background: transparent;
  width: 600px;

}
.form-group{
    margin:0 50px ;
}
.btn-gradient{
    display: block;
    width: 85%;
     height: 40px;
  background-image: linear-gradient(to bottom right, rgb(252, 214, 0), rgb(0, 255, 255));
  border: darkorange 2px solid;
  border-radius: 10px;
}
</style>