import Vue from 'vue'
import VueRouter from 'vue-router'
import Hem from '../components/Hem.vue'
import Yrke from '../components/Yrke.vue'
import Artikel from '../components/Artikel.vue'
import Artiklar from '../components/Artiklar.vue'
import Profil from '../components/Profil.vue'
import Sok from '../components/Sok.vue'
import Login from '../components/Login.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/hem'
  },
  {
    path: '/hem',
    name: 'Hem',
    component: Hem
  },
  {
    path: '/yrke',
    name: 'Yrke',
    component: Yrke
  },
  {
    path: '/artikel',
    name: 'Artikel',
    component: Artikel
  },
  {
    path: '/artiklar',
    name: 'Artiklar',
    component: Artiklar
  },
  {
    path: '/profil',
    name: 'Profil',
    component: Profil
  },
  {
    path: '/sok',
    name: 'Sök',
    component: Sok
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
