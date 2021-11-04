import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Organization from '../views/Organization.vue'
import aboutNFTs from '../views/aboutNFTs.vue'
import Assets from '../views/Assets.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/organization',
    name: 'Organization',
    component: Organization
  },
  {
    path: '/aboutNFTs',
    name: 'aboutNFTs',
    component: aboutNFTs
  },
  {
    path: '/assets/:id',
    name: 'Assets',
    component: Assets

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
