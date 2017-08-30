<template>
	<div>
		<headbox title="文章标题" back="true"></headbox>
		<div class="title_box clearfix">
			<h3>{{article.title}}</h3>
			<p>{{article.author}}</p>
			<span>{{article.date}}</span>
		</div>
		<div class="content" v-html="article.content">
		</div>
	</div>
</template>

<script type="es6">
import headbox from '../components/header'
import cube from '../router/kuayu.js'
export default {
	data() {
		return{
			article: [],
		}
	},
	components:{
		headbox
	},
	mounted() {
		this.init()
	},
	methods: {
		init: function() {
			let id = this.$route.params.id
			this.$http.jsonp(cube+'/public/api/article/getArticle', {params:{id:id}}).then((rtnD)=>{
				this.article = rtnD.body.result
				this.article.date = new Date(parseInt(this.article.date) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ")
			})
		}
	},
}

</script>

<style lang="scss" scoped>
*{margin: 0; padding: 0; text-decoration: none; color: #333; list-style: none; background-color: #eee;}
.clearfix:after{content:"."; display:block; height:0; clear:both; visibility:hidden;}
.title_box{
	h3{color: #000; text-align: left; margin: 10px 0; text-indent: 20px;}
	p{width: 50%; color: #666; font-size: 0.75em; text-align: left; float: left; text-indent: 20px;}
	span{display: block; float: right; color: #666; margin-right: 20px;}
}
.content{margin-top: 20px; color: #000; padding: 10px; text-align: left;}
</style>