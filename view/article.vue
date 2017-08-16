<template>
	<div>
		<headbox title="文章标题" back="true"></headbox>
		<div class="title_box clearfix">
			<h3>题目</h3>
			<p>作者</p>
			<span>日期</span>
		</div>
		<div class="content">
		内容
		</div>
	</div>
</template>

<script type="es6">
import headbox from '../components/header'
export default {
	components:{
	  headbox
	},
	created() {
		
	},
}

</script>

<style lang="scss" scoped>
*{margin: 0; padding: 0; text-decoration: none; color: #333; list-style: none;}
.clearfix:after{content:"."; display:block; height:0; clear:both; visibility:hidden;}
.title_box{
	h3{color: #fff; text-align: left; margin: 10px 0; text-indent: 20px;}
	p{width: 50%; color: #ccc; font-size: 0.75em; text-align: left; float: left; text-indent: 20px;}
	span{display: block; float: right; color: #ccc; margin-right: 20px;}
}
.content{margin-top: 20px; color: #fff;}
</style>