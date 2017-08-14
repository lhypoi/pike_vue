<template>
	<div>
		<headbox title="搜索"></headbox>
		<div class="search-header">
			<mt-field v-model="search" placeholder="搜索" lable="search">
				<div class="fl icon-box"><i class="fa fa-search" style="color: #999; font-size: 22px; font-weight: 100;"></i></div>
			</mt-field>
		</div>
		<div class="search-menu">
			<ul class="clearfix">
				<span :style="'left:' + left + '%;'"></span>
				<li :class="{active:isActive==0}" v-on:click="on_active(0)">
					标签
				</li>
				<li :class="{active:isActive==1}" v-on:click="on_active(1)">用户</li>
				<li :class="{active:isActive==2}" v-on:click="on_active(2)">专题</li>
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
			this.timer = setInterval(this.move, 10)
		},
		move: function() {
			if(this.num * 33 > this.left) {
				this.left += 1
			}else if(this.num * 33 < this.left) {
				this.left -= 1
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
	background-color: #fff; margin-top: 10px; border-bottom: 1px solid #999;
	ul{
		width: 100%; position: relative;
		span{width: 33%; height: 2px; position: absolute; display: block; background-color: #1E90FF; bottom: -1px;}
		li{
			width: 33%; text-align: center; height: 40px; line-height: 40px; font-size: 14px; float: left; display: block;
		}
		li.active{color: #1E90FF;}
	}
}
</style>