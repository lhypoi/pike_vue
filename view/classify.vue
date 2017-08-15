<template>
  <div id="classify_box">
    <!-- 顶部返回和分类固定栏 -->
    <mt-header fixed title="分类" class="mt_header">
      <router-link to="/works" slot="left">
        <mt-button icon="back" ></mt-button>
      </router-link>
    </mt-header>
    <div class="classify_list">
      <mt-button type="primary" @click.native="changeClassify">primary</mt-button>
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
  }
}
</style>