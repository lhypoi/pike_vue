<template>
	<div>
		<div class="list clearfix">
			<div class="left_box">
				<div class="head_photo">
					<img src="../../assets/img/head_photo.jpg" />
				</div>
			</div>
			<div class="content">
				<h5>系统通知</h5>
				<p>。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。</p>
				<span>08-09</span>
			</div>
		</div>
		<div class="send_box">
			<mt-field v-model="message" placeholder="评论..." lable="comment">
				<div class="like_box">
					<img :src=like_icon v-on:click="do_like(state)" :class=active />
				</div>
			</mt-field>
		</div>
	</div>
</template>

<script type="es6">
export default {
	data(){
		return {
			message:'',
			like_icon: require('../../assets/img/like_icon.jpg'),
			state: 0,
			active: ''
		}
	},
	methods: {
		do_like: function(state) {
			if(state == 0) {
				this.like_icon = require('../../assets/img/heart_icon.png')
				this.state = 1
				this.active = 'active'
			} else {
				this.like_icon = require('../../assets/img/like_icon.jpg')
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
@keyframes change{
	0% {transform: scale(1);}
	50% {transform: scale(1.2);}
	100% {transform: scale(1);}
}
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
	p{width: 100%; display: block; word-wrap: break-word; word-break: normal; text-align: left; color: #fff; line-height: 20px; font-size: 14px; margin-bottom: 15px;}
	span{display: block; color: #ccc; float: left;}
}
.send_box{
	width: 100%; position: fixed; bottom: 0;
	.mint-field{
		background-color: #000;
		input.mint-field-core{border: 1px solid #999; border-radius: 5px; height: 30px; width: 70%; text-indent: 5px;}
		.like_box{
			width: 35px; position: relative; height: 30px;
			img{width: 30px; position: absolute; top: 0; left: 5px;}
			.active{animation: change 1s ease;}
		}
	}
}

</style>