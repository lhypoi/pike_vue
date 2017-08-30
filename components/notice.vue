<template>
	<div>
		<ul>
			<li class="list clearfix" v-for='(value,key) in message' v-on:click="getMsgList(value.from_user)">
				<div class="left_box">
					<div class="head_photo">
						<img :src="imgList[key].head_photo" v-adjusted="img_adjust" />
					</div>
					<span>{{newMsg[key]}}</span>
				</div>
				<div class="content">
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
	  imgList: [],
	  nameList: [],
	  newMsg: []
    }
  },
  mounted() {
	this.init()
  },
  methods: {
    init: function() {
	  let u_id = JSON.parse(localStorage.getItem('userInfo')).user_id
	  this.$http.jsonp(cube+'/public/api/message/getNotice', {params:{page: this.pageStart, u_id: u_id}}).then((rtnD)=>{
        this.message = rtnD.data.result.data
		this.nameList = rtnD.data.name
		this.newMsg = rtnD.body.new_msg
        this.imgList = JSON.parse(JSON.stringify(this.message))
		for(let i = 0; i < this.message.length; i ++) {
          this.message[i].time = new Date(parseInt(this.imgList[i].time) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ")
          let img = this.message[i].head_photo
          if(this.imgList[i].head_photo.indexOf(cube) < 0) {
            this.imgList[i].head_photo = cube + img
          }
		}
      })
	},
    getMsgList: function(from_user) {
      this.$router.push({path: '/message/noticeList/' + from_user})
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
.left_box{
	position: relative; width: 56px; height: 120px; float: left;
	.head_photo{
		width: 36px; height: 36px; border-radius: 50px; margin: 10px; overflow: hidden; border: 1px solid #666;
	}
	span{position: absolute; background-color: #f00; padding: 1px 2px; border-radius: 10px; color: #fff; display: block; z-index: 2; top: -1px; right: -2px; font-size: 12px;}
}
.content{
	padding: 10px; width: 70%; float: left;
	h5{color: #3175ae; font-size: 16px; text-align: left; height: 20px; line-height: 20px; margin-bottom: 12px;}
	p{width: 100%; display: block; word-wrap: break-word; word-break: normal; text-align: left; color: #333; line-height: 20px; font-size: 14px; height: 40px; overflow: hidden; margin-bottom: 15px;}
	span{display: block; color: #ccc; float: left;}
}
</style>