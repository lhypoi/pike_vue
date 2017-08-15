<template>
	<div>
		<headbox title="作品评论"></headbox>
		<ul v-infinite-scroll="load" infinite-scroll-distance="10">
			<li v-for="item in comment_list">
				<list item="item"></list>
			</li>
		</ul>
		<send like="false"></send>
	</div>
</template>

<script type="es6">
import headbox from '../components/header'
import list from '../components/comment_list'
import send from '../components/send_comment'
import Axios from 'axios'
export default {
	data(){
		return {
			page: 1,
			comment_list: []
		}
	},
	components: {
    	headbox, list, send
  	},
	methods: {
		load: function() {
			Axios.get('/api/works', {params:{page:this.page}}).then((rtnData) => {
				this.comment_list.push(...rtnData.data.data)
				this.page ++
			})
		}
	}
}
</script>

<style lang="scss">
*{margin: 0; padding: 0;}
.clearfix:after{content:"."; display:block; height:0; clear:both; visibility:hidden;}
</style>