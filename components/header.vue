<template>
	<div>
		<div class="header">
			<h1 v-if="title!=''">{{title}}</h1>
			<div class="fl icon-box"><i class="fa fa-search" style="color: #fff; font-size: 22px; font-weight: 100;"></i></div>
		</div>
		<div class="empty"></div>
	</div>
</template>

<script type="es6">
export default{
  props:['title']
}
</script>

<style scoped>
.header{width: 100%; height: 50px; background-color: #222222; text-align: center; position: relative; position: fixed; z-index: 999;}
.header h1{height: 50px; line-height: 50px; color: #fff; font-size: 18px;}
.header .icon-box{position: absolute; top: 12px; right: 10px;}
.empty{padding-top: 50px;}
</style>