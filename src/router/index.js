import { createRouter, createWebHistory } from 'vue-router'
import JSTicTacToe from '../views/JSTicTacToe.vue'
import DammierMorpion from '../views/DammierMorpion.vue'

const routes = [
  {
    path: '/',
    name: 'Jeu',
    component: JSTicTacToe
  },
  {
    path: '/about',
    name: 'GameRules',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "GamesRules" */ '../views/GamesRules.vue')
  },
  {
    path: '/play',
    name: 'Play',
    component: DammierMorpion

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
