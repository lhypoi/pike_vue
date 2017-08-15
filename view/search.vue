<template>
	<div>
		<headbox title="搜索" back="true"></headbox>
		<div class="search-header">
			<mt-field v-model="search" placeholder="搜索" lable="search">
				<div class="fl icon-box"><i class="fa fa-search" style="color: #999; font-size: 22px; font-weight: 100;"></i></div>
			</mt-field>
		</div>
		<div class="search-menu">
			<ul class="menu clearfix">
				<span :style="'left:' + left + '%;'"></span>
				<li :class="{active:isActive==0}" v-on:click="on_active(0)">
					标签
				</li>
				<li :class="{active:isActive==1}" v-on:click="on_active(1)">用户</li>
				<li :class="{active:isActive==2}" v-on:click="on_active(2)">专题</li>
			</ul>
			<ul class="content clearfix" :style="'left:' + right + '%;'">
				<li>
					<ol>
						<li>标签</li>
						<li>标签</li>
						<li>标签</li>
					</ol>
				</li>
				<li>
					<ol>
						<li>
							用户
							<div class="fl icon-box"><i class="fa fa-plus" style="color: #1E90FF; font-size: 22px; margin-top: 9px;"></i></div>
						</li>
						<li>
							用户
							<div class="fl icon-box"><i class="fa fa-plus" style="color: #1E90FF; font-size: 22px; margin-top: 9px;"></i></div>
						</li>
						<li>
							用户
							<div class="fl icon-box"><i class="fa fa-plus" style="color: #1E90FF; font-size: 22px; margin-top: 9px;"></i></div>
						</li>
					</ol>
				</li>
				<li>
					<ul>
						<li class="clearfix">
							<div class="img_box">图片</div>
							<div class="content_box clearfix">
								<h4>培养摄影眼的4个核心要点</h4>
								<div class="date">2017-08-08</div>
								<div class="view">97674</div>
							</div>
						</li>
						<li class="clearfix">
							<div class="img_box">图片</div>
							<div class="content_box clearfix">
								<h4>培养摄影眼的4个核心要点</h4>
								<div class="date">2017-08-08</div>
								<div class="view">97674</div>
							</div>
						</li>
						<li class="clearfix">
							<div class="img_box">图片</div>
							<div class="content_box clearfix">
								<h4>培养摄影眼的4个核心要点</h4>
								<div class="date">2017-08-08</div>
								<div class="view">97674</div>
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>

<script type="es6">
import headbox from '../components/header'
export default {
	data(){
		return {
			search:'',
			isActive: 0,
			left: 0,
			right: 0,
			num: 0,
			timer: ''
		}
	},
	components:{
	    headbox
	},
	methods: {
		on_active: function(num) {
			this.isActive = num
			this.num = num
			this.timer = setInterval(this.move, 5)
		},
		move: function() {
			if(this.num * 33 > this.left) {
				this.left += 1
				this.right -= 3.02
			}else if(this.num * 33 < this.left) {
				this.left -= 1
				this.right += 3.02
			}else{
				clearInterval(this.timer)
			}
		}
	}
}
</script>

<style lang="scss">
*{margin: 0; padding: 0;}
.clearfix:after{content:"."; display:block; height:0; clear:both; visibility:hidden;}
.search-header{
	.mint-cell-wrapper{width: 95%; margin: 10px auto; border: 1px solid #999; border-radius: 5px;}
}
.search-menu{
	margin-top: 10px; overflow: hidden;
	ul.menu{
		width: 100%; position: relative; border-bottom: 1px solid #ccc; background-color: #fff; margin-bottom: 10px;
		span{width: 33.3%; height: 2px; position: absolute; display: block; background-color: #1E90FF; bottom: -1px;}
		li{
			width: 33.3%; text-align: center; height: 40px; line-height: 40px; font-size: 14px; float: left; display: block;
		}
		li.active{color: #1E90FF;}
	}
	ul.content{
		width: 300%; position: relative; left: 0; background-color: #fff;
		li{
			float: left; display: block; width: 33.3%;
			ol{
				li{
					display: inline; width: 100%; height: 40px; line-height: 40px; font-size: 14px; text-align: left; border-bottom: 1px solid #ccc; text-indent: 10px;
					.icon-box{float: right; margin-right: 15px; text-indent: 0;}
				}
			}
			ul{
				padding: 5px 0;
				li{
					padding: 5px 2.5%; display: block; width: 95%;
					.img_box{width: 69px; height: 69px; background-color: #ccc; float: left;}
					.content_box{
						width: 76%; float:left; padding: 5px 0 0 10px;
						h4{font-size: 14px; width: 100%; text-align: left; margin-bottom: 26px;}
						.date{float: left; color: #bcbcbc; font-size: 12px;}
						.view{float: right; height: 16px; padding-left: 20px; background: url(../assets/img/eye_icon.jpg) no-repeat 0 -2px; font-size: 12px;}
					}
				}
			}
		}
	}
}
</style>