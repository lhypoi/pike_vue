<template>
	<div>
		<div class="send_box">
			<mt-field v-model="message" placeholder="评论..." lable="comment">
				<div class="like_box" v-if="like=='true'">
					<img :src=like_icon v-on:click="do_like(state)" :class=active />
				</div>
			</mt-field>
		</div>
	</div>
</template>

<script type="es6">
import headbox from '../components/header'
import list from '../components/comment_list'
import Axios from 'axios'
export default {
	data(){
		return {
			message:'',
			like_icon: require('../assets/img/like_icon.jpg'),
			state: 0,
			active: '',
		}
	},
	props: ['like'],
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
@keyframes change{
	0% {transform: scale(1);}
	50% {transform: scale(1.2);}
	100% {transform: scale(1);}
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