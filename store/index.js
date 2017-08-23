import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: [],
    classify: '分类',
    classifyHasEvent: false,
  },
  mutations: {
    setClassify (state, classify) {
      state.classify = classify
    },
    setClassifyEvent (state) {
      state.classifyHasEvent = true
    },
    setCartInfo (state, info) {
      // 判断之前是否有该商品，有的话num属性+1
      let hasGoods = false
      state.cartList.forEach((item) => {
        if (item.goods_info.goods_id === info.goods_info.goods_id) {
          // +1
          hasGoods = true
          item.num ++
        }
      })
      if (!hasGoods) {
        state.cartList.push(info)
      }
    }
  },
  actions: {

  }
})
export default store
