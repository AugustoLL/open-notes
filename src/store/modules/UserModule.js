export default {
  state: {
    account: {
      username: 'UsernameTest', //null
      password: 'PasswordTest', //null
    },
  },
  getters: {
    user: (state) => state.account,
    username: (state) => state.account.username,
  },
  mutations: {},
  actions: {},
}