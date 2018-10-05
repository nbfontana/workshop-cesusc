import Vue from 'vue'
import Router from 'vue-router'
import i18n from '@/i18n'

import CoolMenu from '@/views/CoolMenu.vue'
import Login from '@/views/login/Login.vue'

import Countdown from '@/views/countdown/Countdown.vue'
import One from '@/views/countdown/One.vue'
import Two from '@/views/countdown/Two.vue'
import Three from '@/views/countdown/Three.vue'
import Four from '@/views/countdown/Four.vue'
import Five from '@/views/countdown/Five.vue'
import Wow from '@/views/countdown/Wow.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'coolMenu',
      component: CoolMenu,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: `/${i18n.t('pathCountdown')}`, 
      component: Countdown,
      children: [
        {
          path: i18n.t('pathOne'), 
          component: One
        },
        {
          path: i18n.t('pathTwo'), 
          component: Two
        },
        {
          path: i18n.t('pathThree'), 
          component: Three
        },
        {
          path: i18n.t('pathFour'), 
          component: Four
        },
        {
          path: i18n.t('pathFive'), 
          component: Five
        },
        {
          path: i18n.t('pathWow'), 
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
