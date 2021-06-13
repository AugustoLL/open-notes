export default {
  state: {
    user: {
      username: 'UsernameTest', //null
      password: 'PasswordTest', //null
    },
  },
  getters: {
    user: (state) => state.user,
    username: (state) => state.user.username,
  },
  mutations: {},
  actions: {},
}