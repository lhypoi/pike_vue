<template>
  <div id="classify_box">
    <!-- 顶部返回和分类固定栏 -->
    <mt-header fixed title="分类" class="mt_header">
      <router-link to="/works" slot="left">
        <mt-button icon="back" ></mt-button>
      </router-link>
    </mt-header>
    <div class="classify_list">
      <ul>
          <li v-for="n in 5">
            <router-link to="works">
              <img src="../assets/works/classify1.jpg" alt="">
              <span>
                <p>人像</p>
                <p>Portrait</p>
              </span>
            </router-link>
          </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {mapState, mapMutations} from 'vuex'

  export default {
    name: 'classify_box',
    data () {
      return {
        selectedClassify: null
      }
    },
    methods: {
      ...mapMutations(['setClassify']),
      changeClassify: function () {
        this.setClassify('123')
      }
    },
    computed: {
      ...mapState(['classify'])
    }
  }
</script>
<style lang="scss">
@import "../assets/common.scss";

/* 顶部返回和分类固定栏 */
.mt_header{
  font-size: 1.5em;
  line-height: 2.5em;
  background-color: #222 !important;
  height: 2.5em;
  a{
    line-height: 1em;
    font-size: 1em;
    color: #fff !important;
  }
  i{
    font-size: 1em;
    color: #fff !important;
  }
  .mint-header-title{
    color: #fff !important;
  }
  .mint-button{
    height: auto !important;
  }
}
/* 分类栏 */
#classify_box{
  .classify_list{
    font-size: 1.5em;
    margin-top: 2.5em;
    ul{
      width: 100%;
      li{
        width: 100%;
        overflow: hidden;
        height: 10rem;
        position: relative;
        a{
          img{
          width: 100%;
          height: 15rem;
          opacity: 0.5;
          position: absolute;
          top: 0;
          left: 0;
          }
          span{
            p{
              text-align: center;
              color: #fff;
              font-size: 1em;
              line-height: 1.5em;
            }
          }
        }
      }
    }
  }
}
</style>