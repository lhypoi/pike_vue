<template>
	<div>
		<headbox title="首页" search="true"></headbox>
		<div class="banner">
			<ul>
				<li v-for='sd in swapData' :style="'z-index:'+ sd.index+ '; opacity:'+ sd.opacity+';background:url('+ sd.src +'); background-size: 100%;'" :key="sd.id">
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
					<router-link to="/skills">
						<img src="../assets/img/menu_icon_3.jpg" />
						<p>技巧</p>
					</router-link>
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
					<router-link to="/goods_list">
						<img src="../assets/img/menu_icon_7.jpg" />
						<p>商城</p>
					</router-link>
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
					<li class="clearfix" v-for="(value, key) in articleList">
						<router-link :to="{name: 'Article', params: {id: value.id}}">
							<div class="img_box">
								<img :src="imgList[key].cover" v-adjust="img_adjust" />
							</div>
							<div class="content_box clearfix">
								<h4>{{value.title}}</h4>
								<div class="date">{{value.date}}</div>
								<div class="view">{{value.read_count}}</div>
							</div>
						</router-link>
					</li>
				</ul>
			</div>
			<h3 class="clearfix">
				<span>热门活动</span>
				<a><img src="../assets/img/more.jpg" /></a>
			</h3>
			<div class="index_impress_list">
				<ul class="clearfix" v-touchmmh="slide" style="transition:all 0.1s linear">
					<li v-for="(value, key) in articleList">
						<router-link :to="{name: 'Article', params: {id: value.id}}">
						<img :src="imgList[key].cover" v-adjust="img_adjust" />
						<span>{{value.title}}</span>
						</router-link>
					</li>
				</ul>
			</div>
			<h3 class="clearfix">
				<span>极限摄影</span>
				<a><img src="../assets/img/more.jpg" /></a>
			</h3>
			<div class="index_impress_list">
				<ul class="clearfix" v-touchmmh="slide" style="transition:all 0.1s linear">
					<!--<li>
						<img src="../assets/img/photo.jpg" v-adjust="img_adjust" />
						<span>细节决定成败之二--微距中的“余弦定理”</span>
					</li>-->
					<li v-for="(value, key) in articleList">
						<router-link :to="{name: 'Article', params: {id: value.id}}">
						<img :src="imgList[key].cover" v-adjust="img_adjust" />
						<span>{{value.title}}</span>
						</router-link>
					</li>
				</ul>
			</div>
			<h3 class="clearfix">
				<span>人物对话</span>
				<a><img src="../assets/img/more.jpg" /></a>
			</h3>
			<div class="index_impress_list">
				<ul class="clearfix" v-touchmmh="slide" style="transition:all 0.1s linear">
					<!--<li>
						<img src="../assets/img/photo.jpg" v-adjust="img_adjust" />
						<span>他把世间色彩都收入囊中</span>
					</li>-->
					<li v-for="(value, key) in articleList">
						<router-link :to="{name: 'Article', params: {id: value.id}}">
						<img :src="imgList[key].cover" v-adjust="img_adjust" />
						<span>{{value.title}}</span>
						</router-link>
					</li>
				</ul>
			</div>
			<h3 class="clearfix">
				<span>视觉漫游</span>
				<a><img src="../assets/img/more.jpg" /></a>
			</h3>
			<div class="index_impress_list">
				<ul class="clearfix" v-touchmmh="slide" style="transition:all 0.1s linear">
					<!--<li>
						<img src="../assets/img/photo.jpg" v-adjust="img_adjust" />
						<span>他把世间色彩都收入囊中</span>
					</li>-->
					<li v-for="(value, key) in articleList">
						<router-link :to="{name: 'Article', params: {id: value.id}}">
						<img :src="imgList[key].cover" v-adjust="img_adjust" />
						<span>{{value.title}}</span>
						</router-link>
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
import {mapState, mapMutations} from 'vuex'
import axios from 'axios'
import cube from '../router/kuayu.js'

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
				el.style.height = height * rate + 'px'
				el.style.marginTop = (-(height * rate - parent.clientHeight) / 2) + 'px'
			}
		}
	})
})


export default {
	data() {
		return{
			slide:'',
			img_adjust:'',
			swapData:[],
			width: '',
			height: '',
			articleList: [],
			imgList: []
		}
	},
	components:{
	  headbox,footbox
	},
	created() {

	},
	mounted() {
		axios.get('/api/qworks/hot', {
			params: {
				page: 1
			}
		})
		.then((response) => {
			var i = 1
			for(let item of response.data.rearray) {
				this.swapData.push({
					title: item.works_title,
					index: i++,
					opacity: 1,
					src: 'http://localhost:82'+item.works_src,
					id: item.works_id
				})
			}

			var DataLength = this.swapData.length;
			i = 3;
			var timer = setInterval(()=> {
				if(this.swapData[i].index >= DataLength) {
					var o_timer = setInterval(()=> {
						if(this.swapData[i].opacity > 0) {
							this.swapData[i].opacity -= 0.2;
						} else {
							clearInterval(o_timer);
						}
					}, 200);

					this.swapData[i].index = 1;
					this.swapData[i].opacity = 1;
					for(var j = 0; j < DataLength; j ++) {
						if(j != i) {
							this.swapData[j].index += 1;
						}
					}
				}
				i --;
				if(i < 0) {
					i = 3;
				}
			}, 7000)
		})
		
		this.$http.jsonp(cube+'/public/api/article/getArticleList').then((rtnD)=>{
			this.articleList = rtnD.body.result
			this.imgList = JSON.parse(JSON.stringify(this.articleList))
			for(let i = 0; i < this.articleList.length; i ++) {
				this.articleList[i].date = new Date(parseInt(this.articleList[i].date) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ")
				let img = this.articleList[i].cover
				if(this.imgList[i].cover.indexOf(cube) < 0) {
					this.imgList[i].cover = cube + img
				}
			}
		})
	},
	methods: {

	},
    computed: {
      // 分类
      ...mapState(['classify'])
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
			a{width: 100%; height: 125px;color: #fff;font-size: 1.2em;line-height: 2em}
		}
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
				width: 200px; height: 115px; background-color: #ccc; float: left; margin-right: 15px; position: relative; overflow: hidden;
				span{font-size: 0.9em; color: #fff; display: block; position: absolute; left: 10px; bottom: 10px; text-align: left;}
				a{width: 200px; height: 115px; display: block; position: relative; overflow: hidden;}
			}
		}
	}
}
.f-anim{-webkit-transition:left .2s linear;}

</style>