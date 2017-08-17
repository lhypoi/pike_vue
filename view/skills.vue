<template>
	<div>
		<headbox title="摄影技巧" back="true"></headbox>
		<div class="menu">
			<ul class="clearfix" v-touchmmh="slide" style="transition:all 0.1s linear;">
				<span :style="'left:' + pos + '%;'"></span>
				<li :class="{active:isActive==0}" v-on:click="on_active(0)">推荐</li>
				<li :class="{active:isActive==1}" v-on:click="on_active(1)">基础理论</li>
				<li :class="{active:isActive==2}" v-on:click="on_active(2)">实战技巧</li>
				<li :class="{active:isActive==3}" v-on:click="on_active(3)">后期教程</li>
				<li :class="{active:isActive==4}" v-on:click="on_active(4)">视觉漫游</li>
				<li :class="{active:isActive==5}" v-on:click="on_active(5)">分享探讨</li>
				<li :class="{active:isActive==6}" v-on:click="on_active(6)">作品心得</li>
				<li :class="{active:isActive==7}" v-on:click="on_active(7)">用好器材</li>
				<li :class="{active:isActive==8}" v-on:click="on_active(8)">作品点评</li>
				<li :class="{active:isActive==9}" v-on:click="on_active(9)">器材DIY</li>
			</ul>
		</div>
		<div class="content">
			<ol class="clearfix" id="ol-content" :style="'left:' + content_pos + '%; transition:all 0.1s linear;'" v-touchslide="swap_1">
				<li class="ol-li">
					<ul>
						<li class="clearfix">
							<router-link to="/article">
								<div class="img_box">
									<img src="../assets/img/photo.jpg" v-adjust="img_adjust" />
								</div>
								<div class="content_box clearfix">
									<h4>培养摄影眼的4个核心要点</h4>
									<div class="date">2017-08-08</div>
									<div class="view">97674</div>
								</div>
							</router-link>
						</li>
						<li class="clearfix">
							<router-link to="/article">
								<div class="img_box">
									<img src="../assets/img/photo.jpg" v-adjust="img_adjust" />
								</div>
								<div class="content_box clearfix">
									<h4>培养摄影眼的4个核心要点</h4>
									<div class="date">2017-08-08</div>
									<div class="view">97674</div>
								</div>
							</router-link>
						</li>
					</ul>
				</li>
				<li class="ol-li">
					<ul>
						<li class="clearfix">
							<router-link to="/article">
								<div class="img_box">
									<img src="../assets/img/photo.jpg" v-adjust="img_adjust" />
								</div>
								<div class="content_box clearfix">
									<h4>培养摄影眼的4个核心要点</h4>
									<div class="date">2017-08-08</div>
									<div class="view">97674</div>
								</div>
							</router-link>
						</li>
					</ul>
				</li>
				<li class="ol-li">
					<ul>
						<li class="clearfix">
							<router-link to="/article">
								<div class="img_box">
									<img src="../assets/img/photo.jpg" v-adjust="img_adjust" />
								</div>
								<div class="content_box clearfix">
									<h4>培养摄影眼的4个核心要点</h4>
									<div class="date">2017-08-08</div>
									<div class="view">97674</div>
								</div>
							</router-link>
						</li>
					</ul>
				</li>
				<li class="ol-li"></li>
				<li class="ol-li"></li>
				<li class="ol-li"></li>
				<li class="ol-li"></li>
				<li class="ol-li"></li>
				<li class="ol-li"></li>
				<li class="ol-li"></li>
			</ol>
		</div>
	</div>
</template>

<script type="es6">
import headbox from '../components/header'
import Vue from 'vue'
Vue.directive('adjust', function(el, binding) {
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
				el.style.height = height * rate
				el.style.marginTop = (-(height * rate - parent.clientHeight) / 2) + 'px'
			}
		}
	})
})
Vue.directive('touchmmh', function (el, binding) {
  var oDiv = el
  var x = 0
  var y = 0
  var left
  var mx
  oDiv.addEventListener('touchstart', function (e) {
    if (e.touches.length > 1) {
      return false
    }
	left = oDiv.offsetLeft
    x = e.touches[0].clientX + Math.abs(left)
	y = e.touches[0].clientY
  }, false)
  oDiv.addEventListener('touchmove', function (e) {
	var touch = e.touches[0]
    mx = touch.clientX - x
	var my = touch.clientY - y
	var isScrolling = Math.abs(mx) < Math.abs(my) ? 1:0;
	if(isScrolling == 0) {
	  e.preventDefault()
      if(oDiv.offsetWidth + mx <= oDiv.parentNode.offsetWidth) {
	    oDiv.style.left = oDiv.parentNode.offsetWidth - oDiv.offsetWidth + 'px'
	    return;
	  } else if(mx >= 0) {
	    oDiv.style.left = 0 + 'px'
	    return
	  } else {
        oDiv.style.left = mx + 'px'
	  }
	}
  }, false)
  oDiv.addEventListener('touchend', function (e) {
  }, false)
})

//Vue.directive('touchslide', function (el, binding) {
//  var oDiv = el
//  var x = 0
//  var y = 0
//  var left
//  var mx
//  var index = 0
//  var menu
//  oDiv.addEventListener('touchstart', function (e) {
//    if (e.touches.length > 1) {
//      return false
//    }
//	left = oDiv.offsetLeft
//    x = e.touches[0].clientX + Math.abs(left)
//	y = e.touches[0].clientY
//  }, false)
//  oDiv.addEventListener('touchmove', function (e) {
//	var touch = e.touches[0]
//    mx = touch.clientX - x
//	var my = touch.clientY - y
//	var isScrolling = Math.abs(mx) < Math.abs(my) ? 1:0;
//	if(isScrolling == 0) {
//	  e.preventDefault()
//      if(oDiv.offsetWidth + mx <= oDiv.parentNode.offsetWidth) {
//	    oDiv.style.left = oDiv.parentNode.offsetWidth - oDiv.offsetWidth + 'px'
//	    return;
//	  } else if(mx >= 0) {
//	    oDiv.style.left = 0 + 'px'
//	    return
//	  } else {
//        oDiv.style.left = mx + 'px'
//	  }
//	}
//  }, false)
//  oDiv.addEventListener('touchend', function (e) {
//    left = oDiv.offsetLeft
//	if(left != 0 && left != oDiv.parentNode.offsetWidth - oDiv.offsetWidth) {
//	  var width = oDiv.childNodes[0].offsetWidth
//	  index = Math.round(Math.abs(mx) / width)
//	  oDiv.style.left = - index * width + 'px'
//	}
//  }, false)
//})

export default {
	data() {
		return{
			slide:'',
			swap_1:'',
			img_adjust:'',
			pos:1,
			content_pos:0,
			isActive: 0,
			num: 0,
			timer: ''
		}
	},
	components:{
		headbox
	},
	methods: {
		on_slide: function() {
			var ol_slide = document.getElementById('ol-content')
		},
		on_active: function(num) {
			this.isActive = num
			this.num = num
			this.timer = setInterval(this.move, 10)
		},
		move: function() {
			if(this.num * 10 + 1 > this.pos) {
				this.pos += 1
				this.content_pos -= 10
			}else if(this.num * 10 + 1 < this.pos) {
				this.pos -= 1
				this.content_pos += 10
			}else{
				clearInterval(this.timer)
			}
		}
	}
}
</script>

<style lang="scss" scoped>
*{margin: 0; padding: 0; text-decoration: none; color: #333; list-style: none;}
.clearfix:after{content:"."; display:block; height:0; clear:both; visibility:hidden;}
.menu{
	width: 100%; overflow: hidden; height: 40px;
	ul{
		width: 250%; position: relative; left: 0px;
		span{width: 8%; height: 2px; position: absolute; display: block; background-color: #1E90FF; bottom: 1px;}
		li{float: left; width: 8%; padding: 0 1%; height: 40px; line-height: 40px; background-color: #eee; color: #666; border: none;}
		li.active{color: #1E90FF;}
	}
}
.content{
	width: 100%; overflow: hidden; background-color: #fff;
	ol{
		width: 1000%; position: relative; height: auto;
		li.ol-li{
			float: left; width: 10%; display: block;
			ul{
				padding: 5px 0;
				li{
					padding: 5px 2.5%; display: block; width: 95%; height: 79px;
					.img_box{width: 20%; height: 69px; background-color: #ccc; float: left; overflow: hidden;}
					.content_box{
						width: 76%; float:left; padding: 5px 0 0 10px;
						h4{font-size: 0.8em; width: 100%; text-align: left; margin-bottom: 26px;}
						.date{float: left; color: #bcbcbc; font-size: 0.75em;}
						.view{float: right; height: 16px; padding-left: 20px; background: url(../assets/img/eye_icon.jpg) no-repeat 0 -2px; font-size: 0.75em;}
					}
				}
			}
		}
	}
}
</style>