<template>
	<div>
		<headbox title="购物车" back="true"></headbox>
		<div class="goods_box">
			<div>
				<ul>
					<li class="clearfix" v-for="(cart, index) in cartList">
						<div class="img_box">
							<img :src="imgList[index].goods_img" v-adjust="img_adjust" />
						</div>
						<div class="content_box clearfix">
							<h4 v-text="limit(cart.goods_name)"></h4>
							<div class="price">￥{{cart.goods_price}}</div>
							<p>x{{cart.goods_num}}</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="cart_foot clearfix">
			<p class="clearfix">
				<b style="float: left;">合计：￥{{total}}</b>
				<b style="float: right; margin-right: 5%;">共{{num}}件商品</b>
				<mt-button type="danger" size="small">付款</mt-button>
			</p>
		</div>
	</div>
</template>

<script type="es6">
import {mapMutations, mapState} from 'vuex'
import headbox from '../components/header'
import Vue from 'vue'
import {Toast} from 'mint-ui'
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
				el.style.height = height * rate
				el.style.marginTop = (-(height * rate - parent.clientHeight) / 2) + 'px'
			}
		}
	})
})
export default {
	data() {
		return{
			img_adjust: '',
			total: 0,
			num: 0,
			cartList: [],
			imgList: []
		}
	},
	components:{
		headbox
	},
	computed: {
		//...mapState(['cartList']),
		totalPrice: function() {
			let tPrice=0
			this.checkGoods.forEach((item)=>{
				tPrice += Number(item.cur_attr_info.price) * Number(item.num)
			})
			return tPrice
		},
		totalNum:function  () {
			let tNum=0
			this.checkGoods.forEach((item)=>{
				tNum+=Number(item.num)
			})
			return tNum
		},
	},
	mounted() {
		this.init()
	},
	methods: {
		...mapMutations(['setBuyList']),
		init: function() {
			let sn = this.$route.params.sn
			this.$http.jsonp(cube+'/public/api/goods/getConfirm', {params:{sn:sn}}).then((rtnD)=>{
				this.cartList = rtnD.body.goods_attr
				this.total = rtnD.body.attr_list.total_price
				this.num = rtnD.body.attr_list.total_num
				this.imgList = JSON.parse(JSON.stringify(this.cartList))
				for(let i = 0; i < this.cartList.length; i ++) {
					let img = this.cartList[i].goods_img
					if(this.imgList[i].goods_img.indexOf(cube) < 0) {
						this.imgList[i].goods_img = cube + img
					}
				}
			})
		},
		limit: function(txt) {
			if(txt.length > 20) {
				var str = txt
				str = str.substr(0, 20) + '...'
			}
			return str
		}
	}
}
</script>

<style lang="scss" scoped>
*{margin: 0; padding: 0; text-decoration: none; color: #333; list-style: none;}
.clearfix:after{content:"."; display:block; height:0; clear:both; visibility:hidden;}
.goods_box{
	width: 100%; min-height: 250px; background-color: #fff;
	.edit_box{
		height: 40px; line-height: 40px;
		p{width: 20%; float: right; display: block; font-size: 1.2em;}
		.check_box{
			float: left; height: 40px; line-height: 40px; width: 15%; position: relative;
			input[type=checkbox]{width: 1.5em; height: 1.5em; vertical-align: middle; visibility: hidden;}
			label{position: absolute; width: 1.5em; height: 1.5em; top: 20%; left: 50%; background: #fff; border:2px solid #ccc; border-radius: 1em;}
		}
	}
	ul{
		padding: 5px 2.5%;
		li{
			padding: 10px 2.5%; margin-bottom: 10px; display: block; width: 95%; height: 79px; border-radius: 5px; background-color: #ccc;
			.check_box{
				float: left; height: 79px; line-height: 79px; width: 15%; position: relative;
				input[type=checkbox]{width: 1.5em; height: 1.5em; vertical-align: middle; visibility: hidden;}
				label{position: absolute; width: 1.5em; height: 1.5em; top: 35%; left: 25%; background: #fff; border:2px solid #ccc; border-radius: 1em;}
			}
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
.cart_foot{
	height: 80px; line-height: 40px; background-color: #fff; border-top: 1px solid #999;
	p{
		text-align: left; text-indent: 5%; font-size: 1.5em;
		b{display: block;}
		button{width: 25%; height: 35px; color: #fff; font-size: 1em; float: right; margin-right: 5%;}
	}
}
</style>