import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    classify: '分类',
    classifyHasEvent: false
  },
  mutations: {
    setClassify (state, classify) {
      state.classify = classify
    },
    setClassifyEvent (state) {
      state.classifyHasEvent = true
    }
  },
  actions: {

  }
})
export default store
