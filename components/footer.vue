<template>
  <div>
    <div class="empty"></div>
	<div class="footer">
		<ul>
			<li>
				<router-link to="/">
					<img :src="active==0?require('../assets/img/home_active.jpg'):require('../assets/img/home_nonactive.jpg')" />
				</router-link>
			</li>
			<li>
				<router-link to="/follow">
					<img :src="active==1?require('../assets/img/collect_active.jpg'):require('../assets/img/collect_nonactive.jpg')" />
				</router-link>
			</li>
			<li>
				<img src="../assets/img/send_btn.jpg" class="send_btn" />
			</li>
			<li>
				<router-link to="/message">
					<img :src="active==2?require('../assets/img/message_active.jpg'):require('../assets/img/message_nonactive.jpg')" />
				</router-link>
			</li>
			<li>
				<router-link to="/personal/12">
					<img :src="active==3?require('../assets/img/personal_active.jpg'):require('../assets/img/personal_nonactive.jpg')" />
				</router-link>
			</li>
		</ul>
	</div>
  </div>
</template>

<script type="es6">
export default {
  props:['active']
}
</script>

<style scoped>
.footer{width: 100%; height: 50px; background-color: #222222; text-align: center; position: relative; position: fixed; z-index: 999;}
ul li{width: 20%; float: left; height: 50px;}
ul li img{margin-top: 11px;}
ul li img.send_btn{margin-top: 4px;}
.footer{bottom: 0;}
.empty{padding-top: 50px;}
</style>
