<template>
<div class="reg_page">
	<div class="head">
		<router-link to="/preview"><mt-button icon="back" class="back_for"></mt-button></router-link>
		<img src="../assets/img/reghead.jpg" height="100%" width="100%">
		<div class="wenzi">欢迎来到POCO摄影</div>
	</div>
	<div class="reg_box">
		<!-- 用户名框 -->
		<mt-field label="+86" placeholder="请输入你的手机号" type="tel" :state="user_name_state" @keyup.native="user_name_state =  /^\d{11}$/.test(user_name) ? 'success' : 'error'" v-model="user_name"></mt-field>
		<mt-field placeholder="请输入昵称" v-model="user_nickname" :state="user_nickname_state" @keyup.native="user_nickname_state = user_nickname.trim() ? 'success' : 'error'" >
		</mt-field>
		<mt-field placeholder="设置登录密码(8-20位数字和字母)" type="password" v-model="user_pwd" :state="user_pwd_state" @keyup.native="user_pwd_state = /^(\w){8,20}$/.test(user_pwd)  ? 'success' : 'error'">
		</mt-field>
		<mt-button type="primary" size="large" style="margin:4.3% 10%;font-weight: bold;" :disabled="user_nickname_state!='success' || user_pwd_state!='success' || user_name_state!='success'" v-on:click="doReg()">
			注册
		</mt-button>
	</div>
	<div class="sign">注册表明您已经同意POCO摄影的<a href="#">注册协议</a></div>
</div>
</template>
<script type="es6">
import Axios from 'axios'
import Vue from 'vue'
import {Toast} from 'mint-ui'

	export default{
		data(){
			return{
				user_name:'',
				user_name_state:'',
				user_pwd:'',
				user_pwd_state:'',
				user_nickname:'',
				user_nickname_state: ''
			}
		},
		methods:{
			doReg:function () {
				this.$http.post("/api/quser/reg", {
			 		user_phone:this.user_name,
					user_pwd:this.user_pwd,
					user_name:this.user_nickname
			 	}).then(function  (rtnD) {
			 		if (rtnD.data.status === '1') {
						Toast({
							message: rtnD.data.msg,
						  	iconClass: 'icon icon-success'
						})
			 		} else {
						Toast({
						  	message: rtnD.data.msg,
						  	iconClass: 'icon icon-success'
						})
						setTimeout(() => {
							localStorage.setItem('userInfo', JSON.stringify(rtnD.data.rearray))
							this.$router.push({path: '/personal/'+rtnD.data.rearray.user_id});
						}, 500);
			 		}
			 	})
			}
		},
		mounted () {

		}
	}
</script>
<style lang="scss">
@import "../assets/common.scss";
body,html{
	width: 100%;
	height: 100%;
	background-color: #000 !important;
	position: relative;
	font-size: 62.5%;
}
.reg_page{
	.head{
		width: 100%;
		height: 28%;
		margin-bottom: 4.5%;
		.back_for{
			position: absolute;
			top: 0%;
			left: 0%;
			background-color: rgba(255,255,255,0);
			color: #fff;
		}
		.wenzi{
			position: absolute;
		    top: 15%;
		    left: 50%;
		    color: #fff;
		    width: 80%;
		    transform: translate(-50%, -50%);
		    font-size: 2rem;
		}
	}
	.reg_box{
		.mint-button--default{
			box-shadow: 0 0 0px rgba(0,0,0,0) !important;
		}
		.mint-cell-wrapper{
			background-color: #fafafa;
		}
		.mint-field-core{
			background-color: #fafafa;
		}
		.mint-field{
			color: #3a99d9;
			margin: 3.3% 10%;
			border: 1px solid #ccc;
			border-radius: 4px;
			.mint-cell-title{
				width: 65px;
			}
			.mint-cell-text{
				display: block;
				width: 42px;
				padding:5%;
				border-right: 1px solid #cccccc;
				.yanzheng{
				}
			}
		}
		.mint-button--large {
		    display: block;
		    width: 80.5%;
		    margin-top: 2%;
		}
	}
	.sign{
		color: #fff;
		width: 80%;
		text-align: center;
		height: 2.5%;
		margin: 2% auto;
		font-size: 1rem;
		a{
			color: $theme_color;
		}
	}
}
</style>