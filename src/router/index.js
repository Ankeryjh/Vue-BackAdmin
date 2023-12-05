import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../view/Home.vue'
import User from '../view/User.vue'
import Main from '../view/Main.vue'
import Mall from '../view/Mall.vue'
import Pageone from '../view/Pageone.vue'
import Pagetwo from '../view/Pagetwo.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Main,
    redirect:'/home',
    children: [
      { path: 'home', component: Home },
      { path: 'user', component: User },
      { path: 'mall', component: Mall },
      { path: 'pageone', component: Pageone },
      { path: 'pagetwo', component: Pagetwo },
    ]
  }

]
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
export default router
