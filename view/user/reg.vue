<template>
<div>
	<div class="head">
		<router-link to="/"><mt-button icon="back" class="back_for"></mt-button></router-link>
		<img src="../../assets/img/reghead.jpg" height="100%" width="100%">
		<div class="wenzi">欢迎来到POCO摄影</div>
	</div>
	<div class="reg_box">
		<!-- 用户名框 -->
		<mt-field label="+86" placeholder="请输入你的手机号" type="tel" :state="user_name_state" @keyup.native="checkName()" v-model="user_name"></mt-field>

		<mt-field placeholder="图形验证码" class="yanzheng">
		  <a href="#" class="captcha">获取验证码</a>
		</mt-field>
		<mt-field placeholder="设置登录密码(6-32位数字和字母)" type="password" v-model="user_pwd">
		  <img src="../../assets/img/biyan.png" height="25" width="35">
		</mt-field>
		<mt-button type="primary" size="large" style="margin:4.3% 10%;font-weight: bold;" :disabled="user_name=='' || user_pwd=='' || user_name_state!='success'" v-on:click="doReg()">
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
				user_pwd:'',
				user_name_state:''
			}
		},
		methods:{
			checkName:function () {
				// 获取用户名
				var user_name=this.user_name;
				if (/^\d{11}$/.test(user_name)) {
					this.user_name_state="success";
					console.log('用户名校验成功');
				}else{
					this.user_name_state="error";
				}
			},
			doReg:function () {
				this.$http.jsonp("http://localhost:86/public/api/user", {params:{
			 	// 	user_name:this.user_name,
					// user_pwd:this.user_pwd
			 	}}).then(function  (rtnD) {
			 		Toast(rtnD.data.msg)
			 	})
			}

		}
	}
</script>
<style lang="scss">
@import "../../assets/common.scss";
html{
	position: relative;
	font-size: 62.5%;
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
    top: 20%;
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
	width: 80%;
	text-align: center;
	height: 2.5%;
	margin: 2% auto;
	font-size: 1rem;
	a{
		color: $theme_color;
	}
}
</style>