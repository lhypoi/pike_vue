<template>
	<div id="main">
		<!-- 顶部返回和图标固定栏 -->
	    <mt-header title="摄影周边" class="mt_header">
	      <a @click="$router.go(-1)" slot="left">
				<mt-button icon="back"></mt-button>
			</a>
	      <router-link to="/order_form" slot="right">
	        <i class="fa fa-calendar" aria-hidden="true"></i>
	      </router-link>
	      <router-link to="/shop_cart" slot="right">
	      	<i class="fa fa-shopping-basket" aria-hidden="true"></i>
	      </router-link>
	    </mt-header>
	    <!-- 搜索栏 -->
	    <div class="search-header">
			<mt-field placeholder="搜索" lable="search">
				<div class="fl icon-box"><i class="fa fa-search" style="color: #999; font-size: 22px; font-weight: 100;"></i></div>
			</mt-field>
		</div>
		<!-- 商品列表 -->
		<div class="index_limit_list">
				<ul>
					<li class="clearfix">
						<router-link to="/goods_detail">
							<div class="img_box">
								<img src="../assets/img/nikon.jpg" height="70" width="70"/>
							</div>
							<div class="content_box clearfix">
								<h4>尼康（Nikon） D3400 入门单反相机（AF-P DX 尼克尔 18-55mm f/3.5-5.6G） </h4>
								<div class="about_good">
									<div class="gtype">类型：<span>设备</span></div>
									<div class="sold">销量：<span>100</span></div>
								</div>
								<strong class="price">￥97674</strong>
							</div>
						</router-link>
					</li>
					<li class="clearfix">
						<router-link to="/goods_detail">
							<div class="img_box">
								<img src="../assets/img/nikon.jpg"  height="70" width="70" />
							</div>
							<div class="content_box clearfix">
								<h4>尼康（Nikon） D3400 入门单反相机（AF-P DX 尼克尔 18-55mm f/3.5-5.6G）</h4>
								<div class="about_good">
									<div class="gtype">类型：<span>设备</span></div>
									<div class="sold">销量：<span>100</span></div>
								</div>
								<strong class="price">￥97674</strong>
							</div>
						</router-link>
					</li>
					<li class="clearfix">
						<router-link to="/goods_detail">
							<div class="img_box">
								<img src="../assets/img/nikon.jpg"  height="70" width="70" />
							</div>
							<div class="content_box clearfix">
								<h4>尼康（Nikon） D3400 入门单反相机（AF-P DX 尼克尔 18-55mm f/3.5-5.6G）</h4>
								<div class="about_good">
									<div class="gtype">类型：<span>设备</span></div>
									<div class="sold">销量：<span>100</span></div>
								</div>
								<strong class="price">￥97674</strong>
							</div>
						</router-link>
					</li>
				</ul>
			</div>

		</mt-search>
	</div>
</template>
<style lang="scss" scoped>
@import "../assets/common.scss";

.mint-header{
	background-color: #222;
}
.fa{
	margin: 0 0.3rem 0 1.6rem;
}
.search-header{
	width: 98%;
	margin: 3px auto;
	border: 1px solid #999; 
	border-radius: 5px;
	.mint-field{
		min-height: 30px;
	}
}
.mint-cell{border: 1px solid #999; border-radius: 5px;}
.index_limit_list{
		background-color: #fff;
		ul{
			padding: 5px 0;
			li{
				padding: 5px 2.5%; display: block; width: 95%;
				.img_box{width: 20%; height: 69px; background-color: #ccc; float: left; overflow: hidden;}
				.content_box{
					width: 76%; float:left; padding: 5px 0 0 10px;
					h4{font-size: 0.8em; width: 100%; text-align: left; margin-bottom: 6px;color: #000;}
					.about_good{float: left;}
					.sold, .gtype{color: #bcbcbc; font-size: 0.75em;display: block;}
					// .sold{color: #bcbcbc; font-size: 0.75em;}
					.price{float: right; height: 16px; padding-left: 20px; font-size: 0.75em;color: red;}
				}
			}
		}
	}
</style>