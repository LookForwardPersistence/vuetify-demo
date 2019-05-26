import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
        children:[{
            path: '/recent',
            component:()=> import('./components/HelloWorld.vue'),
            children:[
                {
                    path:'/recent/', //默认项目
                    component:()=>import('./components/ShowRoom.vue')
                },
                {
                    path:'/recent/t2Showroom',
                    component:()=>import('./components/ShowRoom.vue')
                },
                {
                    path:'/recent/t2Corridor',
                    component:()=>import('./components/ShowRoom.vue')
                },
                {
                    path:'/recent/t6Showroom',
                    component:()=>import('./components/ShowRoom.vue')
                },
                {
                    path:'/recent/vip',
                    component:()=>import('./components/ShowRoom.vue')
                }
            ]
        },{
            path: '/favorites',
            component:()=> import('./views/About.vue')
        },{
            path: '/nearby',
            component:()=> import('./views/About.vue')
        }]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
