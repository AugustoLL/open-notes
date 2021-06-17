export default {
  state: {
    notes: [
      {
        id: 0,
        title: 'My First Note!',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptates qui blanditiis iure hic explicabo aperiam eum excepturi sit possimus ipsa, laborum aspernatur perspiciatis quisquam saepe soluta. Aspernatur, eaque ducimus.',
        dateModified: null,
        dateCreated: new Date(),
      },
      {
        id: 1,
        title: 'My Second Note!',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptates qui blanditiis iure hic explicabo aperiam eum excepturi sit possimus ipsa, laborum aspernatur perspiciatis quisquam saepe soluta. Aspernatur, eaque ducimus.',
        dateModified: null,
        dateCreated: new Date(),
      },
      {
        id: 2,
        title: 'My Third Note!',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptates qui blanditiis iure hic explicabo aperiam eum excepturi sit possimus ipsa, laborum aspernatur perspiciatis quisquam saepe soluta. Aspernatur, eaque ducimus.',
        dateModified: null,
        dateCreated: new Date(),
      },
      {
        id: 3,
        title: 'My Fourth Note!',
        body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia voluptates qui blanditiis iure hic explicabo aperiam eum excepturi sit possimus ipsa, laborum aspernatur perspiciatis quisquam saepe soluta. Aspernatur, eaque ducimus.',
        dateModified: null,
        dateCreated: new Date(),
      }
    ],
    searchQuery: '',
  },
  getters: {
    notesCount: (state) => state.notes.length,
    notes: (state) => state.notes,
    searchQuery: (state) => state.searchQuery,
  },
  mutations: {
    INSERT_NOTE(state, note) {
      state.notes.push(note)
    },
    REMOVE_NOTE(state, note) {
      state.notes.splice(note.id, 1)
    },
    UPDATE_NOTE(state, note) {
      state.notes[note.id].title = note.title
      state.notes[note.id].body = note.body
    },
    UPDATE_SEARCH_QUERY(state, query) {
      state.searchQuery = query
    }
  },
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
    },
    updateSearchQuery({commit}, payload) {
      if(payload != '' && payload != null)
        commit('UPDATE_SEARCH_QUERY', payload)
      else 
      commit('UPDATE_SEARCH_QUERY', '')
    }
  },
}