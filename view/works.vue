<template>
  <div id="main">
    <!-- 顶部返回和分类固定栏 -->
    <mt-header fixed title="摄影作品" class="header">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link to="classify" slot="right">
        分类
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
        <img src="../assets/list.png" alt="" height="18px" v-show="selected == '0' ? seeType.first : seeType.second">
        <img src="../assets/detail.png" alt="" height="18px" v-show="selected == '0' ? !seeType.first : !seeType.second">
      </mt-tab-item>
    </mt-navbar>
    <!-- 作品列表 -->
    <div class="content">
      <mt-tab-container v-model="selected">
        <!-- 热门栏目 -->
        <mt-tab-container-item id="0">
          <ul class="worksList clearfix" v-show="seeType.first">
            <li v-for="photo in photoList.first">
              <router-link v-bind:to="'works/work/'+photo.id">
                <img v-bind:src="'http://localhost:86'+photo.pic" alt="">
              </router-link>
            </li>
          </ul>
          <div class="seeList" v-if="!seeType.first" v-for="photo in photoList.first">
            <list v-bind:photo="photo"></list>
          </div>
        </mt-tab-container-item>
        <!-- 最新栏目 -->
        <mt-tab-container-item id="1">
          <ul class="worksList clearfix" v-show="seeType.second">
            <li v-for="photo in photoList.second">
              <router-link v-bind:to="'works/work/'+photo.id">
                <img v-bind:src="'http://localhost:86'+photo.pic" alt="">
              </router-link>
            </li>
          </ul>
          <div class="seeList" v-if="!seeType.second" v-for="photo in photoList.second">
            <list v-bind:photo="photo"></list>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import {mapState} from 'vuex'
  import list from './common/list.vue'

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
        }
      }
    },
    mounted () {
      this.getImg()
      this.getImg(1)
    },
    methods: {
      getImg: function (selected = '0', classify = 'index', pageStart = 1, seeType = true) {
        // 保存vue对象
        let _this = this
        // console.log(_this.seeType.first)
        // console.log(seeType)
        let pageChange = selected === '0' ? (_this.pageStart.first !== pageStart) : (_this.pageStart.second !== pageStart)
        let seeTypeChange = selected === '0' ? (_this.seeType.first !== seeType) : (_this.seeType.second !== seeType)
        if (!pageChange && !seeTypeChange) {
          return false
        }

        axios.get('/api/works/:id', {
          params: {
            classify,
            pageStart,
            selected,
            seeType
          }
        }).catch(function (error) {
          if (error.response) {
          // 请求已经发出，但是服务器响应返回的状态吗不在2xx的范围内
            console.log(error.response.status)
          } else {
          // 一些错误是在设置请求的时候触发
            console.log('Error', error.message)
          }
          return false
        }).then(function (response) {
          if (response.data.status === 1) {
            // 判断是更新哪个栏目的数据
            if (selected === '0') {
              _this.seeType.first = seeTypeChange ? seeType : _this.seeType.first
              // 更换视图模式后，清空原来数值后重新赋值，页数回到1
              if (seeTypeChange) {
                _this.photoList.first = response.data.photoList
                _this.pageStart.first = 1
              } else {
                // 只更新页数的情况下，仅需添加数据
                _this.photoList.first.push(...response.data.photoList)
                _this.pageStart.first = pageStart
              }
            } else {
              _this.seeType.second = seeTypeChange ? seeType : _this.seeType.second
              if (seeTypeChange) {
                _this.photoList.second = response.data.photoList
                _this.pageStart.second = 1
              } else {
                _this.photoList.second.push(...response.data.photoList)
                _this.pageStart.second = pageStart
              }
            }
          }
        })
      }
    },
    computed: {
      // 分类
      ...mapState(['classify'])
    }
  }
</script>
<style lang="scss">
@import "../assets/common.scss";

#main{
  margin: 0;
  padding: 0;
}
/* 顶部返回和分类固定栏 */
.header{
  font-size: 20px;
  line-height: 60px;
  background-color: rgb(3, 3, 3);
  color: #eee;
  height: 60px;
  a{
    line-height: 60px;
    font-size: 20px;
    color: #eee;
  }
}
/* 顶部最热和最新和视图切换栏 */
.menu_tab{
  margin-top: 60px;
  height: 50px;
  background-color: rgb(3, 3, 3);
  border: 1px solid #222222;
  color: #666;
  .mint-tab-item-label{
    font-size: 18px;
  }
  a.is-selected{
    color: #ccc !important;
    border-bottom: 2px solid #ccc !important;
    margin-bottom: -2px !important;
  }
  a.mint-tab-item:nth-child(3){
    border-bottom: 0px solid #ccc !important;
    margin-bottom: 0px !important;
  }
}
/* 作品列表 */
.content{
  margin-top: 130px;
  width: 100%;
    .worksList{
      list-style-type: none;
      margin: 0;
      padding: 0;
      li{
        width: 30%;
        height: 123px;
        overflow: hidden;
        margin-bottom: 2%;
        float: left;
        margin-right: 2.5%;
        a img{
          position: relative;
          min-width: 100%;
          max-width: 120%;
          min-height: 100%;
          max-height: 120%;
        }
      }
      li:nth-child(3n+1){
        margin-left: 2.5%;
      }
    }
}
</style>