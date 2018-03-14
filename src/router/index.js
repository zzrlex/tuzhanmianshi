import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import enter from '@/components/enter'
import order from '@/components/order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/enter',
      name: 'enter',
      component: enter
    },
    {
      path: '/order',
      name: 'order',
      component: order
    }
  ]
})
