import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/comment',
    name: 'comment',
    component: () => import(/* webpackChunkName: "comment" */ "../views/comment/Router.vue"),
    children: [
      {
        path: "",
        name: "commentList",
        component: () =>
          import(/* webpackChunkName: "comment_list" */ "../views/comment/List.vue")
      },
      {
        path: "add",
        name: "commentAdd",
        component: () =>
          import(/* webpackChunkName: "comment_add" */ "../views/comment/Add.vue")
      },
      {
        path: "detail/:id",
        name: "commentDetail",
        component: () =>
          import(/* webpackChunkName: "comment_detal" */ "../views/comment/Detail.vue")
      },
      {
        path: "delete/:id",
        name: "commentDelete",
        component: () =>
          import(/* webpackChunkName: "comment_detal" */ "../views/comment/Delete.vue")
      }
    ]
  },  


  {
    path: '/post',
    name: 'post',
    component: () => import(/* webpackChunkName: "post" */ "../views/post/Router.vue"),
    children: [
      {
        path: "",
        name: "postList",
        component: () =>
          import(/* webpackChunkName: "post_list" */ "../views/post/List.vue")
      },
      {
        path: "add",
        name: "postAdd",
        component: () =>
          import(/* webpackChunkName: "post_add" */ "../views/post/Add.vue")
      },
      {
        path: "detail/:id",
        name: "postDetail",
        component: () =>
          import(/* webpackChunkName: "post_detal" */ "../views/post/Detail.vue")
      },
      {
        path: "delete/:id",
        name: "postDelete",
        component: () =>
          import(/* webpackChunkName: "post_detal" */ "../views/post/Delete.vue")
      }
    ]
  },  

  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
