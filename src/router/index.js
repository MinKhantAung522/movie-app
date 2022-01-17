import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../components/Detail.vue'
import Reviews from '../components/Reviews.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import Search from '../views/Search.vue'
import DisplayGenre from '../views/DisplayGenre.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/genre/:genreid',
    name: 'genre',
    component: DisplayGenre,
    props:true
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/search/:searchResult',
    name: 'Search',
    component: Search,
    props:true
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/detail/:name',
    name: 'Detail',
    component: Detail,
    props:true
  },
  {
    path: '/reviews',
    name: 'Reviews',
    component: Reviews,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
