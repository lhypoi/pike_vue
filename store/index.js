import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    classify: '分类',
    classifyHasEvent: false,
    cartList: []
  },
  mutations: {
    setClassify (state, classify) {
      state.classify = classify
    },
    setClassifyEvent (state) {
      state.classifyHasEvent = true
    },
    setCartInfo (state, info) {
      console.log(9)
      state.cartList.push(info)
    }
  },
  actions: {

  }
})
export default store
