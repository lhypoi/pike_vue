<template>
<div>
	<mt-header title="重置密码">
		<router-link to="/login" slot="left">
		<mt-button icon="back"></mt-button>
		</router-link>
	</mt-header>
	<div class="reg_box">
		<mt-field label="+86" placeholder="请输入你的手机号" type="tel"></mt-field>
		<mt-field v-model="captcha" placeholder="图形验证码" class="yanzheng">
		  <a href="#" class="captcha">获取验证码</a>
		</mt-field>
		<mt-field placeholder="设置登录密码(6-32位数字和字母)" type="password">
		  <img src="../assets/img/biyan.png" height="25" width="35">
		</mt-field>
		<mt-button type="default" size="large" style="margin:4.3% 10%;font-weight: bold;">重置密码</mt-button>
	</div>
</div>
</template>
<style lang="scss">
@import "../assets/common.scss";
.mint-header{
	background-color: #000;
}
.mint-header-title{
	color: #888;
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
	font-size: 3.6%;
	a{
		color: $theme_color;
	}
}
</style>