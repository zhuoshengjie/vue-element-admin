import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Home from '@/components/home'
import P1 from '@/components/P1'
import P2 from '@/components/P2'
import P3 from '@/components/P3'
import P4 from '@/components/P4'


Vue.use(Router)

const routers = new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path:'p1',
          name: 'p1',
          component:P1
        },
        {
          path:'p2',
          name: 'p2',
          component:P2
        },
        {
          path:'p3',
          name: 'p3',
          component:P3
        },
        {
          path:'p4',
          name: 'p4',
          component:P4
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    
  ]
})
// 使首先加载登陆界面
// routers.beforeEach((to, from, next) => {
//   if (to.name !== 'login' && !localStorage.getItem('token')) {
//    next({path: 'login'})
//   } else {
//    next()
//   }
//  })
 export default routers
