<template>
  <div id="app">
  	<!--<router-link to="/">首页</router-link>
	<router-link to="/login">登陆</router-link>
	<router-link to="/personal/1">个人页面</router-link>
	<router-link to="/personal/2">个人页面</router-link>-->
	<div class="header">
		<h1>POCO摄影</h1>
		<img src="./assets/img/search_icon.jpg" />
	</div>
	<div class="empty"></div>
    <router-view></router-view>
	<!--<div class="empty"></div>
	<div class="footer">
		<ul>
			<li>
				<img src="./assets/img/home_active.jpg" />
			</li>
			<li>
				<img src="./assets/img/collect_nonactive.jpg" />
			</li>
			<li>
				<img src="./assets/img/send_btn.jpg" class="send_btn" />
			</li>
			<li>
				<img src="./assets/img/message_nonactive.jpg" />
			</li>
			<li>
				<img src="./assets/img/personal_nonactive.jpg" />
			</li>
		</ul>
	</div>-->
  </div>
</template>

<script type="es6">
export default {
  name: 'app'
}
</script>

<style scoped>
@import "assets/common.scss";
*{margin: 0; padding: 0; text-decoration: none; color: #333; list-style: none;}
.header, .footer{width: 100%; height: 50px; background-color: #222222; text-align: center; position: relative; position: fixed; z-index: 999;}
.footer{bottom: 0;}
.header h1{height: 50px; line-height: 50px; color: #fff; font-size: 18px;}
.header img{position: absolute; top: 12px; right: 10px;}
.empty{padding-top: 50px;}
ul li{width: 20%; float: left; height: 50px;}
ul li img{margin-top: 11px;}
ul li img.send_btn{margin-top: 4px;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*margin-top: 60px;*/
  background-color: #000;
}
</style>
