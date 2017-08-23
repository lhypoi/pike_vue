<template>
    <div id="classify_box">
      <!-- 顶部返回和分类固定栏 -->
      <mt-header fixed title="分类" class="mt_header">
        <router-link v-bind:to="'/works/' + classify" slot="left">
          <mt-button icon="back" ></mt-button>
        </router-link>
      </mt-header>
        <div class="classify_list">
          <ul>
            <li v-for="n in classifyData['title1'].length" >
              <router-link v-bind:to="'/works/' + classifyData['title1'][n - 1]">
                <img  v-bind:src="'/static/works/classify' + n + '.jpg'" alt="">
                <span>
                  <p>{{classifyData['title1'][n - 1]}}</p>
                  <p>{{classifyData['title2'][n - 1]}}</p>
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
        classifyData: {
          title1: ['人像', '风景', '生态', '纪实', '生活', 'LOMO', '观念'],
          title2: ['Portrait', 'Scenery', 'Ecology', 'Documentary', 'Life', 'Lomo', 'Concept']
        }
      }
    },
    methods: {
      ...mapMutations(['setClassify', 'setClassifyEvent'])
    },
    computed: {
      ...mapState(['classify', 'classifyHasEvent'])
    },
    mounted () {
      // 更改body字体大小
      this.show = true
      let clientWidth = document.documentElement.clientWidth
      document.documentElement.style.fontSize = 20 * (clientWidth / 640) + 'px'
      // 元素对象：总盒子、单栏目
      let classifyListObj = document.getElementsByClassName('classify_list')[0]
      let imgArr = classifyListObj.getElementsByTagName('img')
      // 屏幕高度、栏目高度、标题偏移高度、栏目头部和底部栏目的临界值
      let screenHeight = window.screen.height
      let imgHeight = imgArr[0].parentNode.parentNode.offsetHeight
      let offsetTitle = document.getElementsByClassName('mt_header')[0].offsetHeight
      let changeHeight = screenHeight - imgHeight - offsetTitle
      // 初始化栏目背景图片偏移
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
          // 非分类页面不进行此滚动事件
          if (e.target.URL.indexOf('classify') < 0) return false
          // 获取更改对象
          let classifyListObj = document.getElementsByClassName('classify_list')[0]
          let imgArr = classifyListObj.getElementsByTagName('img')
          // 修改栏目背景偏移距离
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
      background-color: #222;
      li{
        width: 100%;
        overflow: hidden;
        height: 16rem;
        position: relative;
        a{
          img{
            width: 100%;
            height: 24rem;
            position: absolute;
            top: -50%;
            left: 0;
            opacity: 0.5;
          }
          span{
            p{
              opacity: 1;
              text-align: center;
              color: #fff;
              font-size: 3em;
              line-height: 2em;
              height: 8rem;
            }
            p:nth-child(2){
              font-size: 2em;
              line-height: 1em;
            }
          }
        }
      }
    }
  }
}
</style>