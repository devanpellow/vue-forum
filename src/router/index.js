import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/components/PageHome'
import ThreadShow from '@/components/ThreadShow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: PageHome
    },
    {
      path: '/thread/:id',
      name: 'ThreadShow',
      component: ThreadShow,
      props: true
    }
  ],
  mode: 'history'
})
