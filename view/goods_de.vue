<template>
	<div id="main">
		<!-- 顶部返回和图标固定栏 -->
		<mt-header title="商品详情" class="mt_header">
			<a @click="$router.go(-1)" slot="left">
				<mt-button icon="back"></mt-button>
			</a>
			<router-link to="/order" slot="right">
				<i class="fa fa-calendar" aria-hidden="true"></i>
			</router-link>
			<router-link to="/cart" slot="right">
				<i class="fa fa-shopping-basket" aria-hidden="true"></i>
			</router-link>
		</mt-header>
		<!-- 详情页 -->
		<!-- <div :class="[detail_box, isfix ? detail_box_fix : '']"> -->
		<div class="detail_box">
		<div class="slide_div">
			<mt-swipe :auto="80000">
				<mt-swipe-item>
					<img src="../assets/img/detail.jpg" height="360px" width="100%" />
				</mt-swipe-item>
				<mt-swipe-item>
					<img src="../assets/img/slide2.jpg" height="360px" width="100%" />
				</mt-swipe-item>
				<mt-swipe-item>
					<img src="../assets/img/slide3.jpg" height="360px" width="100%" />
				</mt-swipe-item>
				<mt-swipe-item>
					<img src="../assets/img/slide4.jpg" height="360px" width="100%" />
				</mt-swipe-item>
			</mt-swipe>
		</div>
			<div class="goods_detail" v-bind:class="generalClsObj">
				<!-- <h3>尼康（Nikon） D3400 入门单反相机（AF-P DX 尼克尔 18-55mm f/3.5-5.6G）</h3> -->
				<h3>{{spec_list[0].goods_name}}</h3>
				<strong class="price">￥97674</strong>
				<div class="sold">销量：<span>100</span></div>
				<div class="ku">库存：<span>{{spec_list[0].goods_number}}</span></div>
				<div class="gtype">类型：<span>设备</span></div>
			</div>
		</div>
		<!-- 已选 -->
		<div class="choose" @click="choice()">
			<h4>已选</h4>
			<div class="version">Nikon D3400</div>
			<div class="num">1件</div>
			<i class="fa fa-ellipsis-h" aria-hidden="true" style="float:right;margin:10px;"></i>
		</div>
		<!-- 介绍 -->
		<div class="intro clearfix">
			<h3>产品介绍</h3>
			<img src="../assets/img/nikon.jpg" height="80px" width="80px"> <!-- v-adjust="img_adjust"-->
			<img src="../assets/img/nikon.jpg" height="80px" width="80px">
			<img src="../assets/img/nikon.jpg" height="80px" width="80px">
			<div class="intro_detail">
				镜头介绍镜头介绍镜头介绍镜头介绍镜头介绍镜头介绍镜头介绍镜头介绍镜头介绍镜头介绍
				镜头介绍镜头介绍镜头介绍镜头介绍镜头介绍镜头介绍镜头介绍镜头介绍镜头介绍镜头介绍
				镜头介绍镜头介绍镜头介绍镜头介绍镜头介绍镜头介绍镜头介绍镜头介绍镜头介绍镜头介绍
			</div>
			<!-- 参数规格 -->
			<div class="guige">
			<h3>规格参数</h3>
				<dl>
					<dt>闪光灯</dt>
					<dd>自动</dd>
					<dd>自动</dd>
					<dd>自动</dd>
				</dl>
				<dl>
					<dt>闪光灯</dt>
					<dd>自动</dd>
					<dd>自动</dd>
					<dd>自动</dd>
				</dl>
				<dl>
					<dt>闪光灯</dt>
					<dd>自动</dd>
					<dd>自动</dd>
					<dd>自动</dd>
				</dl>
				<dl>
					<dt>闪光灯</dt>
					<dd>自动</dd>
					<dd>自动</dd>
					<dd>自动</dd>
				</dl>
				<dl>
					<dt>闪光灯</dt>
					<dd>自动</dd>
					<dd>自动</dd>
					<dd>自动</dd>
				</dl>
				<dl>
					<dt>闪光灯</dt>
					<dd>自动</dd>
					<dd>自动</dd>
					<dd>自动</dd>
				</dl>
				<dl>
					<dt>闪光灯</dt>
					<dd>自动</dd>
					<dd>自动</dd>
					<dd>自动</dd>
				</dl>     
				<dl>
					<dt>闪光灯</dt>
					<dd>自动</dd>
					<dd>自动</dd>
					<dd>自动</dd>
				</dl>
			</div>
		</div>
		<mt-button type="primary" @click="addCart()">加入购物车</mt-button>
		<router-link to="/order"><mt-button type="danger">结算</mt-button></router-link>
		<!-- 弹出框 -->
		<mt-popup v-model="popupVisible" position="bottom" class="kuang" style="z-index: 2025;">
		        <i class="fa fa-times" aria-hidden="true" @click="choice()"></i>
		        <div class="tu">
		        	<img src="../assets/img/nikon.jpg" height="80px" width="80px">
			        <!-- <h4>已选</h4> -->
					<div class="version">已选：{{spec_list[0].goods_name}}</div>
					<div class="num" >{{cart}}件</div>
		        </div>
				
				<div class="kuang_choose">
					<b>版本</b>
					<span>D3400 M3</span>
					<span>D3400 M3</span>
					<span>D3400 M3</span>
					<span>D3400 M3</span>
				</div>					
				<div class="num_box clearfix">数量：<b @click="jian()">-</b>
					<input type="text" :value="cart"> <b @click="jia()">+</b>
				</div>
				<strong class="price">总价：{{totalprice}}</strong>
				<mt-button type="primary" @click="addCart()">加入购物车</mt-button>
    	</mt-popup>
	</div>
</template>
<script type="es6">
import Vue from 'vue'
import cube from '../router/kuayu.js'
import {mapMutations,mapState} from 'vuex'
import {Toast} from 'mint-ui';

export default {
	data() {
		return{
		  img_adjust:'',
		  popupVisible: false,
		  cart:1,
		  isfix:false,
		  zPrice:0,
		  spec_list:[],
		  generalClsObj: {
		  	'box_fix': false
		  }
		}
	},
	created(){
		
	},
	computed:{
		totalprice:function () {
			let tPrice=this.spec_list[0].goods_price
			tPrice=this.spec_list[0].goods_price*this.cart
			this.zPrice=tPrice
			return tPrice
		}
	},
	mounted(){
		this.init(),
		this.chushi()
	},
	updated(){
		console.log(3);
	},
	methods: {
		...mapMutations(['setCartInfo']),
		choice: function() {
			if(this.popupVisible==false){
				this.popupVisible = true;
			} else {
				this.popupVisible = false;
			}
		},
		// 购物数量的加减
		jian:function  () {
			if(this.cart>1){this.cart--}
		},
		jia:function  (cart) {
			this.cart++
		},
		init:function () {
			//监听scroll事件
			window.addEventListener("scroll",this.guding)
		},
		guding:function () {
			// 获取
			var gscrollY=window.scrollY;//当前滚动条位置
			if (gscrollY>400) {
				this.generalClsObj['box_fix']=true;
			}else{
				this.generalClsObj['box_fix']=false;
			}
			// console.log(gscrollY);
		},
		chushi:function () {
			let goods_id = this.$route.params.gid
			this.$http.jsonp(cube+'/public/api/goods/getgoodsdetail', {params:{id:goods_id}})
				.then((rtnD)=>{
					this.spec_list = rtnD.data.goods_attr
				})
		},
		addCart:function  () {
			// 当前属性
			let cartInfo={
				// cur_color_attr:this.cur_color_attr,
				// cur_size_attr:this.cur_size_attr,
				// cur_attr_info:this.cur_attr_info,
				goods_info:this.spec_list,
				totPrice:this.zPrice,
				nums:this.cart
			}
			
			this.setCartInfo(cartInfo)
			Toast('加入购物车成功')

			// 当前商品信息
			// 价格
		}
	}
}
</script>
<style lang="scss" scoped>
@import "../assets/common.scss";

.mint-header{
	background-color: #222;
}
.mint-swipe-indicators{
	.mint-swipe-indicator.is-active{
		background-color: rgba(255, 0, 20,1) !important;
	}
}
.fa{
	margin: 0 0.3rem 0 1.6rem;
}
.detail_box{
	background-color: #d4d2d2;
	width: 100%;
	.slide_div{width: 100%;height: 360px;}
	.goods_detail{
		background-color: #d4d2d2;
		color: #fff;
		height: 100px;
		h3{color: #000;text-align: left;padding: 5px;margin-top: 5px;font-size: 1.2rem;}
		strong{display: block;text-align: left;color: #e61616;font-size: 1.5rem;padding-left: 6px;}
		.ku,.sold{float: left;margin: 0 10px;color: #0029ff;}
		.gtype{float: right;margin: 0 20px;color: #0029ff;}
	}
	.box_fix{position: fixed;top: 0;left: 0;width: 100%;}
}
.choose{
	background-color: #000;
    width: 100%;
    float: left;
    color: #fff;
    margin: 5px 0;
	h4{font-size: 0.8rem;float: left;margin: 8px;}
	.version{float: left;padding: 8px;font-size: 1.2rem;line-height: 18px;}
	.num{float: left;padding: 8px;font-size: 1.2rem;}
}
.intro{
	background-color: #fff;
	h3{color: #fff;background-color: #000;text-align: left;font-size: 1.2rem;padding: 10px;line-height: 12px;}
	img{margin: 5px 10px;}
	.intro_detail{
		margin: 5px;
		color: #131212;
		text-align: left;
		font-size: 1.2rem;
	}
}
.mint-button{width: 45%;float: left;margin: 5px 8px;}
.guige{
	text-align: left;
}
.kuang{
	width: 100%;
	min-height: 200px;
	background-color: #fff;
	img{float: left;margin: 10px;}
	i{float: right;display: block;padding: 6px;}
	h4{font-size: 0.8rem;float: left;margin: 8px;}
	.version{  float: left;
    padding: 6px;
    font-size: 1.2rem;
    line-height: 18px;
    width: 65%;
    text-align: left;}
	.num{float: left;padding: 6px;font-size: 1.2rem;}
	.kuang_choose{
	float: left;
	width: 100%;
	b{
		float: left;font-style: normal;
	    float: left;
	    width: 10%;
	    height: 55px;
	    margin-left: 7px;
	    line-height: 30px;
	}
	span{display: block;float: left;width: 30%;padding: 6px 0;margin:4px;border: 1px solid #000;}
	}
	.shu{
		width: 100%;
		height: 60px;
		text-align: left;
		i{
			float: left;
		}
	}
	strong{
		float: left;
		height: 20px;
		font-size: 1.2rem;
		line-height: 20px;
		margin: 20px 0 0 15px;
		color: red;
	}
	.mint-button{
		float: right;
	}
}

</style>