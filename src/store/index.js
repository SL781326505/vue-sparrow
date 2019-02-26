import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1,
    user: window.localStorage.getItem('user') || '',
    token: window.localStorage.getItem('token') || ''
  },
  getters: {
    // 类似computed属性
    double: state => {
      return state.count * 2
    },
    isAuth: state => !!state.token
  },
  mutations: {
    increment (state) {
      state.count++
    },
    login (state, payload) {
      const { userName, token } = payload
      state.user = userName
      state.token = token
      window.localStorage.setItem('user', userName)
      window.localStorage.setItem('token', token)
    },
    logout (state) {
      state.user = ''
      state.token = ''
      window.localStorage.removeItem('user')
      window.localStorage.removeItem('token')
    }
  },
  actions: {
    // 异步函数
    login ({ commit }, payload) {
      commit('login', payload)
    },
    logout ({ commit }) {
      commit('logout')
    }
  }
})

export default store
