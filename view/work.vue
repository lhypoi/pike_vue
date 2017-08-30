<template>
	<div class="work_p">
		<list v-bind:items="work_det"></list>
		<div class="comment_box">
			<ul v-for="comment_li in comment_list">
				<li class="comment_content clearfix">
				<div class="user_head">
					<div class="title">
						<router-link to="/personal"><img :src="comment_li.user_photo ? root_p+comment_li.user_photo : defaultUserPhoto" /></router-link>
					</div>
					<h3>{{comment_li.user_name}}</h3>
				</div>
					<div class="comment_detail clearfix">{{comment_li.comment}}</div>
				</li>
			</ul>
		</div>
		<send></send>
	</div>
</template>
<script type="es6">
import Vue from 'vue'
import axios from 'axios'
import cube from '../router/kuayu.js'
import list from './common/list.vue'
import send from '../components/send_comment.vue'
export default {
	components: {
		list,
		send,
	},
	data() {
		return{
			work_det:{},
			comment_list:[],
			root_p:'',
			defaultUserPhoto: require('../assets/img/head_photo.jpg')
		}
	},
	mounted(){
		this.getComment(),
		this.init()
		
	},
	methods: {
		init: function () {
			let works_id = this.$route.params.works_id;
			axios.get(cube+'/public/qworks/detail', {
	          params: {
	            works_id
	          }
	        }).then((response) => {
	        	this.work_det=response.data.status[0];
	        	this.work_det.comment_num=this.comment_list.length;
		        this.root_p=cube;
	        })
	    },
	    getComment: function () {
			axios.get(cube+'/public/comment', {
	          params: {
	            works_id:this.$route.params.works_id
	          }
	        }).then((response) => {
	        	this.comment_list=response.data.rearray;
	          console.log(this.comment_list);
	        })
		}
	}
}
</script>
<style lang="scss">
@import "../assets/common.scss";
.work_p{
	background-color: #000;
	height: 100%;
	padding-bottom: 48px;
	.comment_box{
		ul li.comment_content{
			min-height: 80px;
			height: 20%;
			color: #fff;
			border-bottom: 1px solid #ccc;
			.user_head{
				width: 100%;
				float: left;
				.title{
					float: left;
					margin: 5px 5%;
					width: 36px;
					height: 36px;
					overflow: hidden;
					border-radius: 50%;
				}
				h3{float: left;line-height: 36px;}
			}
			.comment_detail{
				float: left;
				width: 78%;
    			padding: 0 17% 10px 19%;
				text-align: left;
			}
		}
	}
	.title{
	height: 56px;
	.head_photo{width: 36px; height: 36px; border-radius: 50px; overflow: hidden; margin: 10px; float: left;}
	h4{width: 70%; height: 56px; line-height: 56px; font-size: 16px; color: #fff; text-align: left; float: left;}
	}
}
</style>