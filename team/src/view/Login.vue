<template>
	<div>
		<div class="center_box"></div>
		<div class="footer_box">
			<div class="btn_box">
				<router-link to="/login" class="login_btn">登陆</router-link>
				<router-link to="/reg" class="reg_btn">注册</router-link>
			</div>
		</div>
	</div>
</template>
<script type="es6">
</script>
<style lang="scss">
	@import "../assets/common.scss";
	.center_box{background-color: $topic_css; height: 100px;}
	.footer_box{color: $topic_css;}
	.btn_box{width: 75%; margin: 0 auto;}
	.reg_btn{@include btn_like(right)}
	.login_btn{@include btn_like(left, "#fff", $topic_css)}
</style>