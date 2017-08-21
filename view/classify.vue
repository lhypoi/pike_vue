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
          <li v-for="n in 10">
            <router-link to="works" v-on:click.native="changeClassify('人像')">
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
      }
    },
    methods: {
      ...mapMutations(['setClassify', 'setClassifyEvent']),
      changeClassify: function (classify) {
        if (this.classify === classify) {
          console.log('显示原来数据')
        } else {
          this.setClassify(classify)
          console.log('清除原来数据')
        }
      }
    },
    computed: {
      ...mapState(['classify', 'classifyHasEvent'])
    },
    mounted () {
      // 固定参数：分类栏盒子对象、每栏对象数组、屏幕高度
      let classifyListObj = document.getElementsByClassName('classify_list')[0]
      let imgArr = classifyListObj.getElementsByTagName('img')
      let screenHeight = window.screen.height
      // 变化参数：栏目高度、顶部偏移距离、临界差值
      let imgHeight = imgArr[0].parentNode.parentNode.offsetHeight * 3 / 4
      let offsetTitle = document.getElementsByClassName('mt_header')[0].offsetHeight * 3 / 4
      let changeHeight = screenHeight - imgHeight - offsetTitle
      for (var i in imgArr) {
        if (typeof (imgArr[i]) === 'object') {
          let liTop = i * imgHeight + offsetTitle
          let bodyScrollTop = document.body.scrollTop
          let num = (liTop - bodyScrollTop - offsetTitle) / changeHeight * 50
          if ((liTop - bodyScrollTop - offsetTitle) >= 0 && (liTop - bodyScrollTop - offsetTitle) <= changeHeight) {
            imgArr[i].style.top = '-' + num + '%'
          }
        }
      }

      if (!this.classifyHasEvent) {
        // 监听滚动事件、背景图片随位置滑动
        window.addEventListener('scroll', function (e) {
          if (e.target.URL !== 'http://localhost:8080/#/classify') return false
          let imgHeight = imgArr[0].parentNode.parentNode.offsetHeight
          let offsetTitle = document.getElementsByClassName('mt_header')[0].clientHeight
          let changeHeight = screenHeight - imgHeight - offsetTitle
          for (var i in imgArr) {
            if (typeof (imgArr[i]) === 'object') {
              let liTop = imgArr[i].parentNode.parentNode.offsetTop
              let bodyScrollTop = document.body.scrollTop
              // 0 --- -50%    0 --- changeHeight
              let num = (liTop - bodyScrollTop - offsetTitle) / changeHeight * 50
              if ((liTop - bodyScrollTop - offsetTitle) >= 0 && (liTop - bodyScrollTop - offsetTitle) <= changeHeight) {
                imgArr[i].style.top = '-' + num + '%'
              }
            }
          }
        }, false)
        this.setClassifyEvent()
      }
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
/* 分类栏 */
#classify_box{
  .classify_list{
    font-size: 1.5em;
    margin-top: 3.75rem;
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
            top: -50%;
            left: 0;
          }
          span{
            p{
              text-align: center;
              color: #fff;
              font-size: 2em;
              line-height: 2em;
              height: 6rem;
              opacity: 1;
            }
            p:nth-child(2){
              font-size: 1em;
              line-height: 1em;
              height: 4rem;
              opacity: 0.5;
            }
          }
        }
      }
    }
  }
}
</style>