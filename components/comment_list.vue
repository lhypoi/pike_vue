<template>
	<div>
		<div class="list clearfix">
			<div class="left_box">
				<div class="head_photo">
					<img src="../assets/img/head_photo.jpg" />
				</div>
			</div>
			<div class="content">
				<h5>系统通知</h5>
				<p>。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。</p>
				<span>08-09</span>
			</div>
		</div>
	</div>
</template>

<script type="es6">
export default {
	data(){
		return {
			message:'',
			like_icon: require('../assets/img/like_icon.jpg'),
			state: 0,
			active: ''
		}
	},
	methods: {
		do_like: function(state) {
			if(state == 0) {
				this.like_icon = require('../assets/img/heart_icon.png')
				this.state = 1
				this.active = 'active'
			} else {
				this.like_icon = require('../assets/img/like_icon.jpg')
				this.state = 0
				this.active = ''
			}
		}
	}
}
</script>

<style lang="scss">
*{margin: 0; padding: 0;}
.clearfix:after{content:"."; display:block; height:0; clear:both; visibility:hidden;}
.list{padding: 10px; border-bottom: 1px solid #666;}
.left_box{
	position: relative; width: 56px; float: left;
	.head_photo{
		width: 36px; height: 36px; border-radius: 50px; margin: 10px; overflow: hidden;
	}
}
.content{
	padding: 10px; width: 70%; float: left;
	h5{color: #3175ae; font-size: 16px; text-align: left; height: 20px; line-height: 20px; margin-bottom: 12px;}
	p{width: 100%; display: block; word-wrap: break-word; word-break: normal; text-align: left; color: #333; line-height: 20px; font-size: 14px; margin-bottom: 15px;}
	span{display: block; color: #ccc; float: left;}
}

</style>