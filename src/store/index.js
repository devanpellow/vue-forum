import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
<<<<<<< HEAD
=======
import categories from './modules/categories'
import forums from './modules/forums'
import threads from './modules/threads'
import posts from './modules/posts'
import users from './modules/users'
import auth from './modules/auth'
>>>>>>> development1

Vue.use(Vuex)

export default new Vuex.Store({
<<<<<<< HEAD
  state: {
    categories: {},
    forums: {},
    threads: {},
    posts: {},
    users: {},
    authId: null
  },
  getters,
  actions,
  mutations
=======
  state: {},
  getters,
  actions,
  mutations,
  modules: {
    categories,
    forums,
    threads,
    posts,
    users,
    auth
  }
>>>>>>> development1
})
