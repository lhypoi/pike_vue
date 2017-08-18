<template>
<div>
	<div class="head">
		<router-link to="/preview"><mt-button icon="back" class="back_for"></mt-button></router-link>
		<img src="../assets/img/reghead.jpg" height="100%" width="100%">
		<div class="wenzi">欢迎来到POCO摄影</div>
	</div>
	<!-- 登录盒子 -->
	<div class="log_box">
		<mt-field placeholder="手机号、邮箱或POCO账号" :state="user_name_state"  @keyup.native="checkName()" type="tel" v-model="user_name"></mt-field>
		<mt-field placeholder="密码" type="password" v-model="user_pwd">
		  <img src="../assets/img/biyan.png" height="25" width="35">
		</mt-field>
		<mt-button type="default" size="large" :disabled="user_name=='' || user_pwd==''" v-on:click="doLog()" style="margin:4.3% 10%;font-weight: bold;">登录</mt-button>
	</div>
	<div class="sign"><router-link to="/resetpwd">忘记密码</router-link></div>
</div>
</template>
<script type="es6">
import Axios from "axios"
import Vue from 'vue'
import {Toast} from 'mint-ui'

	export default{
		data(){
			return{
				user_name:'',
				user_pwd:'',
				user_name_state:""
			}
		},
		methods:{
			doLog:function  () {
				// 提交登录
 				this.$http.jsonp('http://localhost:86/public/api/user', {params:{user_name:this.user_name,user_pwd:this.user_pwd}}).then((res) => {
 					if (res.data.status == 1) {
						Toast("登录成功")
					}else{
						Toast("用户名和密码不正确")
					}
 				})
			},
			checkName:function () {
				// 获取用户名
				var user_name=this.user_name;
				if (/^\d{11}$/.test(user_name)) {
					this.user_name_state="success";
					console.log('用户名校验成功');
				}else{
					this.user_name_state="error";
				}
			}
		}
	}
</script>
<style lang="scss">
@import "../assets/common.scss";
html,body{
	font-size: 62.5%;
	background-color: #000;
}
.head{
	width: 100%;
	height: 28%;
	margin-bottom: 4.5%;
}
.back_for{
	position: absolute;
	top: 0%;
	left: 0%;
	background-color: rgba(255,255,255,0);
	color: #fff;
}
.mint-button--default{
	box-shadow: 0 0 0px rgba(0,0,0,0) !important;
}
.wenzi{
	position: absolute;
    top: 15%;
    left: 50%;
    width: 80%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
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
.captcha{
	display: block;
	margin: 0 20px;
	text-decoration: none;
	color: $theme_color;
	border-left: 1px solid #cccccc;
	width: 100%;
}
.sign{
	color: #ccc;
	width: 64%;
	text-align: center;
	height: 2.5%;
	margin: 2% auto;
	font-size: 1.2rem;
	a{
		color: #ccc;
	}
}
</style>