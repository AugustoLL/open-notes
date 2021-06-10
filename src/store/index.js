import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      username: null,
      password: null,
    },
    notes: []
  },
  getters: {
    notesCount: (state) => state.posts.length,
  },
  // Always synchronous,
  // is allowed to change the state directly,
  // responsible for changing only a single piece of data.
  mutations: {
    INSERT_NOTE(state, note) {
      state.notes.push(note)
    },
    REMOVE_NOTE(state, note) {
      const index = state.notes.indexOf(note)
      if (index > -1)
        state.notes.splice(index, 1)
    }
  },
  // Can be synchronous or asynchronous,
  // they shouldn't change the state directly but call the mutations
  actions: {
    async insertNote({commit}, payload) {
      try {
        commit('INSERT_POST', payload)
      } catch(error) {
        //
      }
    },
    async removeNote({commit}, payload) {
      try {
        commit('REMOVE_NOTE', payload)
      } catch(error) {
        //
      }
    }
  },
  modules: {
  }
})
