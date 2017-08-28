<template>
  <div id="work_page">
    <!-- 顶部返回和分类固定栏 -->
    <mt-header fixed title="摄影作品" class="mt_header">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link to="/classify" slot="right">
        {{classify}}
      </router-link>
    </mt-header>
    <!-- 顶部最热和最新和视图切换栏 -->
    <mt-navbar fixed v-model="selected" class="menu_tab">
      <mt-tab-item id="0" v-on:click.native="getImg(selected, classify, pageStart.first, seeType.first)">
        热门
      </mt-tab-item>
      <mt-tab-item id="1" v-on:click.native="getImg(selected, classify, pageStart.second, seeType.second)">
        最新
      </mt-tab-item>
      <mt-tab-item v-bind:id="selected" v-on:click.native="getImg(selected, classify, selected == '0' ? pageStart.first : pageStart.second, selected == '0' ? !seeType.first : !seeType.second)">
        <img src="../assets/list.png" alt="" v-show="selected == '0' ? seeType.first : seeType.second">
        <img src="../assets/detail.png" alt="" v-show="selected == '0' ? !seeType.first : !seeType.second">
      </mt-tab-item>
    </mt-navbar>
    <!-- 作品列表 -->
    <div class="works_content">
      <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
        <mt-tab-container v-model="selected">
        <!-- 热门栏目 -->
        <mt-tab-container-item id="0" :class="{'works_allload' : !allLoaded}">
            <div class="worksList clearfix" v-show="seeType.first">
              <router-link v-bind:to="'works/work/'+photo.works_id" v-for="photo in photoList.first"  :key="photo.works_id">
                  <img v-lazy="'http://localhost:82'+photo.works_src" alt="">
                  <br>
                  <br>
                  <p>发于： {{new Date(parseInt(photo.update_time) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ')}}</p>
                  <p>浏览数： {{photo.works_browse ? photo.works_browse : 0}}</p>
              </router-link>
            </div>
            <div class="seeList" v-show="!seeType.first">
              <list v-bind:item="photo" v-for="photo in photoList.first" :key="photo.works_id"></list>
            </div>
        </mt-tab-container-item>
        <!-- 最新栏目 -->
        <mt-tab-container-item id="1" :class="{'works_allload' : !allLoaded}">
            <div class="worksList clearfix" v-show="seeType.second">
              <router-link v-bind:to="'works/work/'+photo.works_id" v-for="photo in photoList.second" :key="photo.works_id">
                <img v-lazy="'http://localhost:82'+photo.works_src" alt="">
                <br>
                <br>
                <p>发于： {{new Date(parseInt(photo.update_time) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ')}}</p>
                <p>浏览数： {{photo.works_browse ? photo.works_browse : 0}}</p>
              </router-link>
            </div>
            <div class="seeList" v-show="!seeType.second">
              <list v-bind:item="photo" v-for="photo in photoList.second" :key="photo.works_id"></list>
            </div>
        </mt-tab-container-item>
        </mt-tab-container>
      </mt-loadmore>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import {mapState, mapMutations} from 'vuex'
  import list from '../components/list.vue'

  export default {
    name: 'main',
    components: {
      list
    },
    data () {
      return {
        msg: '我是测试',
        // 获取的数据：热门、最新
        selected: '0',
        // 显示的视图类型 ：图片型、文章型
        seeType: {
          first: true,
          second: true
        },
        // 纯图片列表
        photoList: {
          first: [],
          second: []
        },
        // 分页数据
        pageStart: {
          first: 0,
          second: 0
        },
        // 总数据
        pageTotal: {
          first: null,
          second: null
        },
        pageLock: {
          first: false,
          second: false
        }
      }
    },
    mounted () {
      if (this.classify === this.$route.params.classify) {
        console.log('显示原来数据')
        this.photoList = this.worksContent.photoList
        this.pageStart = this.worksContent.pageStart
        this.pageTotal = this.worksContent.pageTotal
      } else if (this.$route.params.classify) {
        console.log('清除原来数据')
        this.setClassify(this.$route.params.classify)
        this.getImg('0')
        this.getImg('1')
      } else if (this.classify) {
        console.log('强制为分类全部')
        this.setClassify('分类')
        this.getImg('0')
        this.getImg('1')
      }
      console.log(this.worksContent)
    },
    methods: {
      ...mapMutations(['setClassify', 'setClassifyEvent', 'setWorksContent']),
      getImg: function (selected = '0', classify = this.classify, pageStart = 1, seeType = true) {
        // 保存vue对象
        let _this = this
        let pageChange = selected === '0' ? (_this.pageStart.first !== pageStart) : (_this.pageStart.second !== pageStart)
        let seeTypeChange = selected === '0' ? (_this.seeType.first !== seeType) : (_this.seeType.second !== seeType)
        if (seeTypeChange) {
          if (selected === '0') {
            _this.seeType.first = seeTypeChange ? seeType : _this.seeType.first
          } else {
            _this.seeType.second = seeTypeChange ? seeType : _this.seeType.second
          }
          return false
        } else if (!pageChange) {
          return false
        }

        if (selected === '0') {
          _this.pageLock.first = true
        } else {
          _this.pageLock.second = true
        }
        axios.get('/api/qworks/works', {
          params: {
            classify,
            page: pageStart,
            selected
          }
        }).then(function (response) {
          if (response.data.status === '0') {
            // 判断是更新哪个栏目的数据
            if (selected === '0') {
              _this.photoList.first.push(...response.data.rearray.data)
              _this.pageStart.first = pageStart
              _this.pageTotal.first = response.data.rearray.last_page
              _this.pageLock.first = false
            } else {
              _this.photoList.second.push(...response.data.rearray.data)
              _this.pageStart.second = pageStart
              _this.pageTotal.second = response.data.rearray.last_page
              _this.pageLock.second = false
            }
          }
        })
      },
      loadBottom: function () {
        let lock = this.selected === '0' ? this.pageLock.first : this.pageLock.second
        if (!lock) {
          this.getImg(this.selected, this.classify, this.selected === '0' ? this.pageStart.first + 1 : this.pageStart.second + 1, this.selected === '0' ? this.seeType.first : this.seeType.second)
        } else {
          console.log('第' + this.selected + '试图通过下拉加载数据，被锁住啦啦啦啦')
        }
        this.$refs.loadmore.onBottomLoaded()
      }
    },
    computed: {
      // 分类
      ...mapState(['classify', 'worksContent']),
      allLoaded: function () {
        return this.selected === '0' ? this.pageStart.first === this.pageTotal.first : this.pageStart.second === this.pageTotal.second
      }
    },
    beforeDestroy: function () {
      scrollTo(0, 0)
      let worksContent = {
        photoList: this.photoList,
        pageStart: this.pageStart,
        pageTotal: this.pageTotal
      }
      this.setWorksContent(worksContent)
    }
  }
</script>
<style lang="scss">
@import "../assets/common.scss";

#work_page{
  /* 顶部返回和分类固定栏 */
  .mt_header{
    font-size: 1.5em;
    line-height: 2.5em;
    background-color: #222 !important;
    height: 3.75rem;
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
  /* 顶部最热和最新和视图切换栏 */
  .menu_tab{
    font-size: 1.5em;
    margin-top: 3.75rem;
    height: 3.75rem;
    background-color: #222;
    border-top: 1px solid #888;
    color: #fff;
    .mint-tab-item {
      font-size: 1em;
      padding: 0;
      img{
        height: 1em;
      }
    }
    .mint-tab-item-label{
      font-size: 1em;
      line-height: 2.5em;
    }
    a{
      color: #888;
    }
    a.is-selected{
      color: #fff !important;
      border-bottom: 2px solid #fff !important;
      margin-bottom: 2px !important;
    }
    a.mint-tab-item:nth-child(3){
      border-bottom: 0px solid #ccc !important;
      margin-bottom: 0px !important;
    }
  }
  /* 作品列表 */
  .works_allload{
    margin-bottom: 1rem;
  }
  .works_content{
    margin-top: 9rem;
    width: 100%;
      .worksList{
        list-style-type: none;
        margin: 0;
        padding: 0;
        flex-flow: row wrap;
        display: flex;
        align-items: center;
        a{
          flex: 1 1 40%;
          display:block;
          padding: 0.5rem;
          margin: 0.5rem;
          border: 1px solid #000;
          img{
            width: 100%;
          }
          p{
            color: #222;
            text-align: left;
          }
        }
      }
      .mint-tab-container-item > div:nth-child(2) {
        margin-top: -1rem;
      }
  }
}

</style>