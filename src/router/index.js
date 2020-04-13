import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/PageHome'
import ThreadShow from '@/pages/PageThreadShow'
import Profile from '@/pages/PageProfile'
import ThreadCreate from '@/pages/PageThreadCreate'
import PageNotFound from '@/pages/PageNotFound'
import PageForum from '@/pages/PageForum'
import Category from '@/pages/PageCategory'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'NotFound',
      component: PageNotFound
    },
    {
      path: '/me',
      name: 'Profile',
      component: Profile,
      props: true
    },
    {
      path: '/me/edit',
      name: 'ProfileEdit',
      component: Profile,
      props: {edit: true}
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/thread/create',
      name: 'ThreadCreate',
      component: ThreadCreate,
      props: true
    },
    {
      path: '/thread/:id',
      name: 'ThreadShow',
      component: ThreadShow,
      props: true
    },
    {
      path: '/forum/:id',
      name: 'Forum',
      component: PageForum,
      props: true
    },
    {
      path: '/category/:id',
      name: 'Category',
      component: Category,
      props: true
    }
  ],
  mode: 'history'
})
