<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img src="../assets/ok.png" alt="nav-logo" style="height: 50px" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul
            class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style="--bs-scroll-height: 100px"
          >
            <li class="nav-item">
              <a class="nav-link active " aria-current="page" href="#"><i class="fas fa-home"></i>Home</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Movies
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarScrollingDropdown"
              >
                <li><a class="dropdown-item" href="#">Popular</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Oscar</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">something</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About Us</a>
            </li>
          </ul>
          <div class="d-flex">
            <router-link to="/signup" class="mx-3">SignUp</router-link>
            <router-link to="/login">Login</router-link>
            <i class="fas fs-3 fa-search text-darkorange mx-3"  @click="showSearch = !showSearch"></i>
          </div>
        </div>
      </div>
    </nav>
    <div v-if="showSearch">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search Movies &amp; Series"
          aria-label="search movies and series"
          aria-describedby="button-addon2"
          v-model="search"
        />
        <button class="btn btn-warning" type="button" id="button-addon2" @click="showSearchResults">
          Search
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSearch: false,
      search:""
    };
  },
  methods:{
    showSearchResults(){
      this.$router.push("/search/"+this.search)
      this.search = ""
      this.showSearch = false
    }
  }
};
</script>

<style>
.contact {
  height: 35px;
  width: 35px;
  cursor: pointer;
}
.fa-search{
  cursor: pointer;
}
</style>