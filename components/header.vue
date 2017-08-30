<template>
	<div>
		<div class="header">
			<div v-if="back=='true'" class="fl icon-box_1">
				<a @click="$router.go(-1)">
					<i class="fa fa-chevron-left" style="color: #fff; font-size: 1.375em; font-weight: 100;"></i>
				</a>
			</div>
			<h1 v-if="title!=''">{{title}}</h1>
			<div v-if="search=='true'" class="fl icon-box_2">
				<router-link to="/search">
					<i class="fa fa-search" style="color: #fff; font-size: 1.375em; font-weight: 100;"></i>
				</router-link>
			</div>
			<div v-if="shop=='true'" class="fl icon-box_2">
				<router-link to="/order" slot="right">
	        		<i class="fa fa-calendar" aria-hidden="true" style="color: #fff; font-size: 1.375em; font-weight: 100;"></i>
	      		</router-link>
	      		<router-link to="/cart" slot="right">
	      			<i class="fa fa-shopping-basket" aria-hidden="true" style="color: #fff; font-size: 1.375em; font-weight: 100; margin-left: 20%;"></i>
	      		</router-link>
			</div>
		</div>
		<div class="empty"></div>
	</div>
</template>

<script type="es6">
export default{
  props:['title','search','back','shop']
}
</script>

<style lang="scss" scoped>
.header{
	width: 100%; height: 50px; background-color: #222222; text-align: center; position: relative; position: fixed; z-index: 999;
	h1{height: 50px; line-height: 50px; color: #fff; font-size: 1.2em;}
	.icon-box_1{position: absolute; top: 15px; left: 10px;}
	.icon-box_2{text-align: right; width: 20%; position: absolute; top: 15px; right: 10px;}
}
.empty{padding-top: 50px;}
</style>