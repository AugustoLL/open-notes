import Vue from 'vue'
import Vuex from 'vuex'
import NotesModule from './modules/NotesModule'
import UserModule from './modules/UserModule'
import SortingModule from './modules/SortingModule'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  // Always synchronous,
  // is allowed to change the state directly,
  // responsible for changing only a single piece of data.
  mutations: {},
  // Can be synchronous or asynchronous,
  // they shouldn't change the state directly but call the mutations
  actions: {},
  modules: {
    user: UserModule,
    notes: NotesModule,
    sort: SortingModule,
  }
})
