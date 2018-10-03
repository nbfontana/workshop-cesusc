import Vue from 'vue'
import Router from 'vue-router'

import CoolMenu from './views/CoolMenu.vue'

import Countdown from './views/countdown/Countdown.vue'
import One from './views/countdown/One.vue'
import Two from './views/countdown/Two.vue'
import Three from './views/countdown/Three.vue'
import Four from './views/countdown/Four.vue'
import Five from './views/countdown/Five.vue'
import Wow from './views/countdown/Wow.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'coolMenu',
      component: CoolMenu,
    },
    {
      path: '/countdown', 
      component: Countdown,
      children: [
        {
          path: 'one',
          component: One
        },
        {
          path: 'two',
          component: Two
        },
        {
          path: 'three',
          component: Three
        },
        {
          path: 'four',
          component: Four
        },
        {
          path: 'five',
          component: Five
        },
        {
          path: 'wow',
          component: Wow
        },
        {
          path: "*",
          name: 'countdown404',
          redirect: 'five',
        },
      ]
    },
    {
      path: "*",
      name: '404',
      redirect: '/',
    },
  ]
})
