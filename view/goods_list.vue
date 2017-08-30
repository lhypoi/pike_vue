<template>
	<div id="list_main">
		<!-- 顶部返回和图标固定栏 -->
	    <mt-header title="摄影周边" class="mt_header">
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
	    <!-- 搜索栏 -->
	    <div class="search-head">
			<!-- <mt-field placeholder="搜索" lable="search" @onChange="search_good()" :value="goods_n">
				<div class="fl icon-box"><i class="fa fa-search" style="color: #999; font-size: 22px; font-weight: 100;"></i></div>
			</mt-field> -->
			<input class="search" placeholder="搜索" @oninput="search_good()" :value="goods_n">
				<i class="fa fa-search" style="color: #999; font-size: 22px; font-weight: 100;position: absolute;top: 48px;right: 25px;"></i>
			</input>
		</div>
		<!-- 商品列表 -->
		<div class="index_limit_list">
			<ul>
				<li class="clearfix" v-for="goods in goods_list">
					<router-link :to="'/goods_detail/'+goods.goods_id">
						<div class="img_box">
							<img :src="root_p+goods.img" height="69" width="69"/>
						</div>
						<div class="content_box clearfix">
							<!-- <h4>尼康（Nikon） D3400 入门单反相机（AF-P DX 尼克尔 18-55mm f/3.5-5.6G） </h4> -->
							<h4>{{goods.goods_name}}</h4>
							<div class="about_good">
								<div class="gtype">类型：<span>{{goods.cate_name}}</span></div>
								<div class="sold">库存：<span>{{goods.goods_number}}</span></div>
							</div>
							<strong class="price">￥{{goods.goods_price}}</strong>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script type="es6">
import Vue from 'vue'
import cube from '../router/kuayu.js'

export default {
	data () {
		return {
			goods_list: [],
			img_list: [],
			root_p:'',
			goods_n:''
		}
	},
	mounted(){
		this.init();
	},
	methods: {
		init: function () {
			this.root_p=cube;
			this.$http.jsonp(cube+'/public/api/goods/goodsList')
				.then((rtnD)=>{
					this.goods_list = rtnD.data;
					for(var i in this.goods_list){
						var imgString=this.goods_list[i].goods_img;
						this.goods_list[i].img=imgString.split(",",1);
					}
				})
		},
		search_good: function () {
			console.log(1);
		}
	}
}
</script>
<style lang="scss" scoped>
@import "../assets/common.scss";
	.mint-header{
		background-color: #222;
		.fa{
			margin: 0 0.3rem 0 1.6rem;
		}
	}
	.search-head{
		width: 98%;
		margin: 3px auto;
		border-radius: 5px;
		// .mint-field{
		// 	min-height: 30px;
		// }
		// .mint-cell{border: 1px solid #999; border-radius: 5px;}
		.search{
			border: 1px solid #999; 
			border-radius: 5px;
			min-height: 30px;
			width: 95%;
			padding-left: 5px;
			outline: none;
		}
	}
	.index_limit_list{
		background-color: #fff;
		ul{
			padding: 5px 0;
			li{
				padding: 5px 2.5%; display: block; width: 95%;
				border-bottom: 1px solid #ccc;
				.img_box{width: 20%; height: 69px;float: left; overflow: hidden;}
				.content_box{
					width: 76%; float:left; padding: 5px 0 0 10px;
					h4{font-size: 0.8em; width: 100%; text-align: left; margin-bottom: 6px;color: #000;}
					.about_good{float: left;}
					.sold, .gtype{color: #888; font-size: 0.75em;display: block;text-align: left;}
					// .sold{color: #bcbcbc; font-size: 0.75em;}
					.price{float: right; height: 16px; padding-left: 20px; font-size: 0.75em;color: red;}
				}
			}
		}
	}
</style>