import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import MyItem from "../views/MyItem";
import Add from "../views/Add";
import Count from "../views/Count";
import Due from "../views/Due";
import Layout from "../components/Layout";


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children:[
      {
        path: 'myItem',
        name: 'MyItem',
        component: MyItem,
      },
      {
        path: 'count',
        name: 'Count',
        component: Count
      },
      {
        path: 'add',
        name: 'Add',
        component: Add
      },
      {
        path: 'due',
        name: 'Due',
        component: Due
      },
    ]
  },


]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
