<template>
  <div>
    <div class="empty"></div>
	<div class="footer">
		<ul>
			<li>
				<img src="../assets/img/home_active.jpg" />
			</li>
			<li>
				<img src="../assets/img/collect_nonactive.jpg" />
			</li>
			<li>
				<img src="../assets/img/send_btn.jpg" class="send_btn" />
			</li>
			<li>
				<img src="../assets/img/message_nonactive.jpg" />
			</li>
			<li>
				<img src="../assets/img/personal_nonactive.jpg" />
			</li>
		</ul>
	</div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
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
