<template>
	<div>
		<headbox title="首页" search="true"></headbox>
		<div class="banner">
			<ul>
				<li v-for='sd in swapData' :style="'z-index:'+ sd.index+ '; opacity:'+ sd.opacity">
					<a>{{sd.title}}</a>
				</li>
			</ul>
		</div>
		<div class="nav" id="nav">
			<ul class="clearfix" v-touchmmh="slide" style="transition:all 0.1s linear">
				<li>
					<router-link to="/works">
						<img src="../assets/img/menu_icon_1.jpg" />
						<p>作品</p>
					</router-link>
				</li>
				<li>
					<a>
						<img src="../assets/img/menu_icon_2.jpg" />
						<p>图片</p>
					</a>
				</li>
				<li>
					<a>
						<img src="../assets/img/menu_icon_3.jpg" />
						<p>技巧</p>
					</a>
				</li>
				<li>
					<a>
						<img src="../assets/img/menu_icon_4.jpg" />
						<p>活动</p>
					</a>
				</li>
				<li>
					<a>
						<img src="../assets/img/menu_icon_5.jpg" />
						<p>极限</p>
					</a>
				</li>
				<li>
					<a>
						<img src="../assets/img/menu_icon_6.jpg" />
						<p>对话</p>
					</a>
				</li>
				<li>
					<a>
						<img src="../assets/img/menu_icon_7.jpg" />
						<p>红人</p>
					</a>
				</li>
			</ul>
		</div>
		<div class="content">
			<div class="index_recommend clearfix">
				<div class="index_recommend_left">
					<div class="icon_box">
						<img src="../assets/img/photo.jpg" v-adjust="img_adjust" />
					</div>
					<img src="../assets/img/content_icon_1.jpg" class="icon" />
					<p>勋章作品</p>
				</div>
				<div class="index_recommend_right">
					<div class="icon_box">
						<img src="../assets/img/photo.jpg" v-adjust="img_adjust" />
					</div>
					<img src="../assets/img/content_icon_2.jpg" class="icon" />
					<p>编辑推荐</p>
				</div>
			</div>
			<h3 class="clearfix">
				<span>摄影技巧</span>
				<a><img src="../assets/img/more.jpg" /></a>
			</h3>
			<div class="index_limit_list">
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
						<div class="img_box">
							<img src="../assets/img/photo.jpg" v-adjust="img_adjust" />
						</div>
						<div class="content_box clearfix">
							<h4>培养摄影眼的4个核心要点</h4>
							<div class="date">2017-08-08</div>
							<div class="view">97674</div>
						</div>
					</li>
					<li class="clearfix">
						<div class="img_box">
							<img src="../assets/img/photo.jpg" v-adjust="img_adjust" />
						</div>
						<div class="content_box clearfix">
							<h4>培养摄影眼的4个核心要点</h4>
							<div class="date">2017-08-08</div>
							<div class="view">97674</div>
						</div>
					</li>
				</ul>
			</div>
			<h3 class="clearfix">
				<span>热门活动</span>
				<a><img src="../assets/img/more.jpg" /></a>
			</h3>
			<div class="index_impress_list">
				<ul class="clearfix" v-touchmmh="slide" style="transition:all 0.1s linear">
					<li>
						<img src="../assets/img/photo.jpg" v-adjust="img_adjust" />
						<span>手机摄影月赛|未成文的诗</span>
					</li>
					<li>
						<img src="../assets/img/photo.jpg" v-adjust="img_adjust" />
						<span>手机摄影月赛|未成文的诗</span>
					</li>
					<li>
						<img src="../assets/img/photo.jpg" v-adjust="img_adjust" />
						<span>手机摄影月赛|未成文的诗</span>
					</li>
					<li class="last">
						<img src="../assets/img/photo.jpg" v-adjust="img_adjust" />
						<span>手机摄影月赛|未成文的诗</span>
					</li>
				</ul>
			</div>
			<h3 class="clearfix">
				<span>极限摄影</span>
				<a><img src="../assets/img/more.jpg" /></a>
			</h3>
			<div class="index_impress_list">
				<ul class="clearfix" v-touchmmh="slide" style="transition:all 0.1s linear">
					<li>
						<img src="../assets/img/photo.jpg" v-adjust="img_adjust" />
						<span>细节决定成败之二--微距中的“余弦定理”</span>
					</li>
					<li>
						<img src="../assets/img/photo.jpg" v-adjust="img_adjust" />
						<span>细节决定成败之二--微距中的“余弦定理”</span>
					</li>
					<li>
						<img src="../assets/img/photo.jpg" v-adjust="img_adjust" />
						<span>细节决定成败之二--微距中的“余弦定理”</span>
					</li>
					<li class="last">
						<img src="../assets/img/photo.jpg" v-adjust="img_adjust" />
						<span>细节决定成败之二--微距中的“余弦定理”</span>
					</li>
				</ul>
			</div>
			<h3 class="clearfix">
				<span>人物对话</span>
				<a><img src="../assets/img/more.jpg" /></a>
			</h3>
			<div class="index_impress_list">
				<ul class="clearfix" v-touchmmh="slide" style="transition:all 0.1s linear">
					<li>
						<img src="../assets/img/photo.jpg" v-adjust="img_adjust" />
						<span>他把世间色彩都收入囊中</span>
					</li>
					<li>
						<img src="../assets/img/photo.jpg" v-adjust="img_adjust" />
						<span>他把世间色彩都收入囊中</span>
					</li>
					<li>
						<img src="../assets/img/photo.jpg" v-adjust="img_adjust" />
						<span>他把世间色彩都收入囊中</span>
					</li>
					<li class="last">
						<img src="../assets/img/photo.jpg" v-adjust="img_adjust" />
						<span>他把世间色彩都收入囊中</span>
					</li>
				</ul>
			</div>
			<h3 class="clearfix">
				<span>视觉漫游</span>
				<a><img src="../assets/img/more.jpg" /></a>
			</h3>
			<div class="index_impress_list">
				<ul class="clearfix" v-touchmmh="slide" style="transition:all 0.1s linear">
					<li>
						<img src="../assets/img/photo.jpg" v-adjust="img_adjust" />
						<span>他把世间色彩都收入囊中</span>
					</li>
					<li>
						<img src="../assets/img/photo.jpg" v-adjust="img_adjust" />
						<span>他把世间色彩都收入囊中</span>
					</li>
					<li>
						<img src="../assets/img/photo.jpg" v-adjust="img_adjust" />
						<span>他把世间色彩都收入囊中</span>
					</li>
					<li class="last">
						<img src="../assets/img/photo.jpg" v-adjust="img_adjust" />
						<span>他把世间色彩都收入囊中</span>
					</li>
				</ul>
			</div>
		</div>
		<footbox active=0></footbox>
	</div>
</template>

<script type="es6">
import Vue from 'vue';
import headbox from '../components/header'
import footbox from '../components/footer'
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
    // e.preventDefault()
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

export default {
	data() {
		return{
			slide:'',
			img_adjust:'',
			swap_1:'',
			swapData:[{
				title: '图片1',
				index: 1,
				opacity: 1
			},{
				title: '图片2',
				index: 2,
				opacity: 1
			},{
				title: '图片3',
				index: 3,
				opacity: 1
			},{
				title: '图片4',
				index: 4,
				opacity: 1
			}],
			width: '',
			height: ''
		}
	},
	components:{
	  headbox,footbox
	},
	created() {
		var _this = this;
		var DataLength = _this.swapData.length;
		var i = 3;
		var timer = setInterval(()=> {
			if(_this.swapData[i].index >= DataLength) {
				var o_timer = setInterval(()=> {
					if(_this.swapData[i].opacity > 0) {
						_this.swapData[i].opacity -= 0.2;
					} else {
						clearInterval(o_timer);
					}
				}, 200);

				_this.swapData[i].index = 1;
				_this.swapData[i].opacity = 1;
				for(var j = 0; j < DataLength; j ++) {
					if(j != i) {
						_this.swapData[j].index += 1;
					}
				}
			}
			i --;
			if(i < 0) {
				i = 3;
			}
		}, 7000)
	},
	mounted() {
		//this.adjust(document.getElementsByClassName('icon_box')[0].firstChild)
	},
	methods: {
		adjust: function(i) {
		console.log(i)
			let img = new Image()
			img.src = i.getAttribute('src')
			let width = img.width
			let height = img.height
			let parent = i.parentNode
			if((width - parent.clientWidth) > (height - parent.clientHeight)) {
				i.style.height = parent.clientHeight;
				let rate = this.height / height;
				i.style.width = width * rate
			}else{
				i.style.width = parent.clientWidth;
				let rate = this.width / width;
				i.style.height = height * rate
			}
		}
	}
}

</script>

<style lang="scss" scoped>
@import "../assets/css/index.scss";
*{margin: 0; padding: 0; text-decoration: none; color: #333; list-style: none;}
.clearfix:after{content:"."; display:block; height:0; clear:both; visibility:hidden;}
/*轮播器*/
.banner{
	height: 125px; background-color: #ccc;
	ul{
		width: 100%; position: relative;
		li{
			width: 100%; background-color: #ccc; position: absolute; height: 125px;
			a{width: 100%; height: 125px;}
		}
		li:first-child{background-color: #f00;}
		li:last-child{background-color: #87CEFA;}
	}
}
/*导航*/
.nav{
	padding: 10px 0; background-color: #fff; overflow: hidden;
	ul{
		width: 532px; position: relative; left: 0;
		li{
			float: left; padding: 0 20px;
			a{
				display: block; font-size: 0.9em;
				img{margin-bottom: 10px;}
			}
		}
	}
}
/*内容*/
.content{
	.index_recommend{
		height: 155px; width: 95%; margin: 20px auto 0;
		.index_recommend_left, .index_recommend_right{
			width: 48.5%; height: 155px; background-color: #fff; position: relative;
		}
		.index_recommend_left{@include left_right(left)}
		.index_recommend_right{@include left_right(right)}
		.icon_box{
			width: 100%; height: 100px; background-color: #ccc; overflow: hidden;	
		}
		img.icon{position: absolute; display: block; border: 3px solid #fff; border-radius: 25px; width: 20%; left: 0; right: 0; margin: 0 auto; top: 84px;}
		p{font-size: 0.9em; margin-top: 25px; font-weight: bold;}
	}

	h3{
		margin-top: 20px; padding: 15px 10px; background-color: #fff; display: block; line-height: 14px; font-size: 1em; border-bottom: 1px solid #f3f3f3; font-weight: bold;
		span{float: left;}
		a{color: #2c72ac; float: right;}
	}

	.index_limit_list{
		background-color: #fff;
		ul{
			padding: 5px 0;
			li{
				padding: 5px 2.5%; display: block; width: 95%;
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

	.index_impress_list{
		background-color: #fff; overflow: hidden;
		ul{
			padding: 10px 0; width: 860px; position: relative; left: 0;
			li{
				width: 200px; height: 115px; background-color: #ccc; float: left; margin-right: 20px; position: relative; overflow: hidden;
				span{font-size: 0.9em; color: #fff; display: block; position: absolute; left: 10px; bottom: 10px; text-align: left;}
			}
			li.last{margin-right: 0;}
		}
	}
}
.f-anim{-webkit-transition:left .2s linear;}

</style>