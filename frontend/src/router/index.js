import Vue from 'vue'
import VueRouter from 'vue-router'
import Hem from '../components/Hem.vue'
import Yrke from '../components/Yrke.vue'
import Artikel from '../components/Artikel.vue'
import Artiklar from '../components/Artiklar.vue'
import Profil from '../components/Profil.vue'
import Sok from '../components/Sok.vue'
import Login from '../components/Login.vue'
import Tos from '../components/Tos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/hem'
  },
  {
    path: '/tos',
    name: 'Tos',
    component: Tos
  },
  {
    path: '/hem',
    name: 'Hem',
    component: Hem
  },
  {
    path: '/yrke/', //TODO: Lägg in prop här när det är dags att använda det
    name: 'Yrke',
    component: Yrke,
    props: true
  },
  {
    path: '/artikel/:currentArticleId',
    name: 'Artikel',
    component: Artikel,
    props: true
  },
  {
    path: '/artiklar',
    name: 'Artiklar',
    component: Artiklar
  },
  {
    path: '/profil', //TODO: Lägg in prop här när det är dags att använda det
    name: 'Profil',
    component: Profil,
    props: true
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
  routes,
  //Denna funktion nedan gör så sidan scrollas upp till toppen varje gång man byter route.
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
