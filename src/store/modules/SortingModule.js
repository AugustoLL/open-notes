export default {
    state: {
      type: '',
      method: '',
      searchQuery: '',
    },
    getters: {
        sortingType: (state) => state.type,
        sortingMethod: (state) => state.method,
        searchQuery: (state) => state.searchQuery,
    },
    mutations: {
        UPDATE_SORTING_METHOD(state, sortingMethod) {
            state.method = sortingMethod
        },
        UPDATE_SORTING_TYPE(state, sortingType) {
            state.type = sortingType
        },
        UPDATE_SEARCH_QUERY(state, query) {
            state.searchQuery = query
        },
    },
    actions: {
        updateSortingMethod({commit}, payload) {
            commit('UPDATE_SORTING_METHOD', payload)
        },
        updateSortingType({commit}, payload) {
            commit('UPDATE_SORTING_TYPE', payload)
        },
        updateSearchQuery({commit}, payload) {
            if(payload != '' && payload != null)
              commit('UPDATE_SEARCH_QUERY', payload)
            else 
            commit('UPDATE_SEARCH_QUERY', '')
        },
    },
  }