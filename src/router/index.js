import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dialogs/:id',
    name: 'dialogs',
    component: () => import('../components/Dialogs.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
})

export default router
