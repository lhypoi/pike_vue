<template>
	<div>
		<headbox :title="nameList[0][0]" back="true"></headbox>
		<ul>
			<li class="list" v-for='(value,key) in message' v-on:click="getDetail">
				<div class="content">
					<b v-if="value.status==0"></b>
					<h5>{{nameList[key][0]}}</h5>
					<p v-text="limit(value.content)"></p>
					<span>{{value.time}}</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script type="es6">
import Vue from 'vue'
import cube from '../router/kuayu.js'
import axios from 'axios'
import headbox from '../components/header'
Vue.directive('adjusted', function(el, binding) {
	//图片自适应
	var obj = el
	obj.addEventListener('load', function() {
		let img = new Image()
		img.src = el.getAttribute('src')
		let width = img.width
		let height = img.height
		let parent = el.parentNode
		if((width - parent.clientWidth) > (height - parent.clientHeight)) {
			el.style.height = parent.clientHeight + 'px';
			let rate = parent.clientHeight / height;
			if(width * rate < parent.clientWidth) {
				el.style.width = parent.clientWidth + 'px'
				rate = parent.clientWidth / (width * rate)
				el.style.height = (parent.clientHeight * rate) + 'px'
				el.style.marginTop = (-(parent.clientHeight * rate - parent.clientHeight) / 2) + 'px'
			}else{
				el.style.width = width * rate + 'px'
				el.style.marginLeft = (-(width * rate - parent.clientWidth) / 2) + 'px'
			}
		}else{
			el.style.width = parent.clientWidth;
			let rate = parent.clientWidth / width;
			if(height * rate < parent.clientHeight) {
				el.style.height = parent.clientHeight + 'px'
				rate = parent.clientHeight / (height * rate)
				el.style.width = (parent.clientWidth * rate) + 'px'
				el.style.marginLeft = (-(parent.clientWidth - parent.clientWidth) / 2) + 'px'
			}else{
				el.style.height = height * rate + 'px'
				el.style.marginTop = (-(height * rate - parent.clientHeight) / 2) + 'px'
			}
		}
	})
})
export default {
  data() {
	return{
	  img_adjust:'',
	  pageStart: 1,
	  message: [],
	  nameList: [],
    }
  },
  components:{
    headbox
  },
  mounted() {
	this.init()
  },
  methods: {
    init: function() {
      let from = this.$route.params.from_user
	  let u_id = localStorage.user_id
	  this.$http.jsonp(cube+'/public/api/message/getNoticeList', {params:{page: this.pageStart, u_id: u_id, from_id: from}}).then((rtnD)=>{
        this.message = rtnD.body.result
        this.nameList = rtnD.data.name
        for(let i = 0; i < this.message.length; i ++) {
          this.message[i].time = new Date(parseInt(this.message[i].time) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ")
        }
      })
	},
    getDetail: function() {
      
    },
    limit: function(txt) {
      var str = txt
      if(str.length > 20) {
        str = str.substr(0, 20) + '...'
      }
      return str
    }
  }
}

</script>

<style lang="scss" scoped>
*{margin: 0; padding: 0;}
.clearfix:after{content:"."; display:block; height:0; clear:both; visibility:hidden;}
.list{height: 130px; padding: 10px; border-bottom: 1px solid #666; background-color: #fff;}
.content{
	padding: 10px; width: 95%; margin: 0 auto; height: 110px; position: relative;
	b{width: 5px; height: 5px; background-color: #f00; border-radius: 5px; position: absolute; top: 10px; left: 20%;}
	h5{color: #3175ae; font-size: 16px; text-align: left; height: 20px; line-height: 20px; margin-bottom: 12px;}
	p{width: 100%; display: block; word-wrap: break-word; word-break: normal; text-align: left; color: #333; line-height: 20px; font-size: 14px; height: 40px; overflow: hidden; margin-bottom: 15px;}
	span{display: block; color: #ccc; float: left;}
}
</style>