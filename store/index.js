import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    classify: 'index'
  },
  mutations: {
    setClassify (state, classify) {
      state.classify = classify
    }
  },
  actions: {

  }
})
export default store
