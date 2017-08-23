<template>
	<div>
		<headbox title="订单" back="true"></headbox>
		<div class="goods_box">
			<div v-if="empty==true" class="fl icon-box" style="padding-top: 2.8em">
				<i class="fa fa-wpforms" style="color: #ccc; font-size: 10em;"></i>
				<p style="color: #ccc; font-size: 1.5em; height: 2em; line-height: 2em;">暂无订单</p>
			</div>
			<ol v-if="empty==false">
				<li v-for="(value, key) in orders">
					<ul>
						<li class="clearfix" v-for="item in value.goods">
							<div class="img_box">
								<img src="../assets/img/photo.jpg" v-adjust="img_adjust" />
							</div>
							<div class="content_box clearfix">
								<h4>培养摄影眼的4个核心要点</h4>
								<div class="price">￥{{item.price}}</div>
								<p>x{{item.nums}}</p>
							</div>
							
						</li>
					</ul>
					<div class="manage_box">
						<p class="clearfix">
							合计：￥
							<mt-button type="danger" size="small" v-on:click="del">删除订单</mt-button>
						</p>
					</div>
				</li>
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
export default {
	data() {
		return{
			empty: false,
			img_adjust:'',
			orders: [{
				goods: [{
					nums: 1,
					price: 100,
					index: 1,
					total: 100
				},{
					nums: 2,
					price: 200,
					index: 2,
					total: 400
				}]
			}, {
				goods: [{
					nums: 1,
					price: 100,
					index: 1,
					total: 100
				},{
					nums: 2,
					price: 200,
					index: 2,
					total: 400
				},{
					nums: 3,
					price: 200,
					index: 3,
					total: 600
				}]
			}]
			
		}
	},
	components:{
		headbox
	},
	mounted() {
		
	},
	methods: {
		del: function() {
			
		}
	}
}
</script>

<style lang="scss" scoped>
*{margin: 0; padding: 0; text-decoration: none; color: #333; list-style: none;}
.clearfix:after{content:"."; display:block; height:0; clear:both; visibility:hidden;}
.goods_box{
	width: 100%; min-height: 250px;
	.edit_box{
		height: 40px; line-height: 40px;
		p{width: 20%; float: right; display: block; font-size: 1.2em;}
		.check_box{
			float: left; height: 40px; line-height: 40px; width: 15%; position: relative;
			input[type=checkbox]{width: 1.5em; height: 1.5em; vertical-align: middle; visibility: hidden;}
			label{position: absolute; width: 1.5em; height: 1.5em; top: 20%; left: 30%; background: #fff; border:2px solid #ccc; border-radius: 1em;}
		}
	}
	ol{
		li{
			margin-top: 10px; background-color: #fff;
			ul{
				padding: 5px 2.5%;
				li{
					padding: 10px 2.5%; margin-bottom: 10px; display: block; width: 95%; height: 79px; border-radius: 5px; background-color: #ccc;
					.img_box{width: 20%; height: 79px; background-color: #ccc; float: left; overflow: hidden;}
					.content_box{
						width: 70%; float:left; padding-left: 5%; height: 79px;
						h4{font-size: 1em; width: 100%; text-align: left; margin-bottom: 40px;}
						.price{float: left; font-size: 0.8em;}
						p{text-align: right;}
						.nums{
							.icon-box{float: left; width: 10%; font-size: 1.25em; margin: 0 5%; height: 18px; line-height: 18px;}
							input{float: left; width: 25%; display: block; border: none; height: 18px; text-align: center;}
						}
					}
				}
			}
		}
		.manage_box{
			height: 50px; line-height: 50px; background-color: #fff; border-top: 1px solid #999;
			p{
				text-align: left; text-indent: 5%; font-size: 1.5em;
				button{width: 20%; height: 30px; color: #fff; float: right; margin: 10px 5% 0 0;}
			}
		}
	}
}
</style>