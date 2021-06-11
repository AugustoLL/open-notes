import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      username: 'UsernameTest', //null
      password: 'PasswordTest', //null
    },
    notes: [
      {
        id: 0,
        title: 'My First Note!',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptates qui blanditiis iure hic explicabo aperiam eum excepturi sit possimus ipsa, laborum aspernatur perspiciatis quisquam saepe soluta. Aspernatur, eaque ducimus.',
      },
      {
        id: 2,
        title: 'My Second Note!',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptates qui blanditiis iure hic explicabo aperiam eum excepturi sit possimus ipsa, laborum aspernatur perspiciatis quisquam saepe soluta. Aspernatur, eaque ducimus.',
      },
      {
        id: 3,
        title: 'My Third Note!',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptates qui blanditiis iure hic explicabo aperiam eum excepturi sit possimus ipsa, laborum aspernatur perspiciatis quisquam saepe soluta. Aspernatur, eaque ducimus.',
      },
      {
        id: 4,
        title: 'My Fourth Note!',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptates qui blanditiis iure hic explicabo aperiam eum excepturi sit possimus ipsa, laborum aspernatur perspiciatis quisquam saepe soluta. Aspernatur, eaque ducimus.',
      }
    ]
  },
  getters: {
    notesCount: (state) => state.notes.length,
    notes: (state) => state.notes,
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
    },
    UPDATE_NOTE(state, note) {
      const index = state.notes.indexOf(note)
      if (index > -1)
        state.notes.splice(index, 1, note)
    }
  },
  // Can be synchronous or asynchronous,
  // they shouldn't change the state directly but call the mutations
  actions: {
    async insertNote({commit}, payload) {
      try {
        commit('INSERT_NOTE', payload)
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
    },
    async updateNote({commit}, payload) {
      try {
        commit('UPDATE_NOTE', payload)
      } catch(error) {
        //
      }
    }
  },
  modules: {
  }
})
