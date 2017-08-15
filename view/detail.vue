<template>
	<div>
		<headbox title="作品详情"></headbox>
		<div class="list">
			<div class="title clearfix">
				<div class="head_photo">
					<img src="../assets/img/head_photo.jpg" />
				</div>
				<h4>大大脸夏子</h4>
				<span>08-09</span>
			</div>
			<div class="img_box">
				
			</div>
			<div class="content">
				<h5>《醉玲珑》</h5>
				<p>。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。</p>
				<div class="tags clearfix">
					<span>光影霓裳</span>
					<span>光影霓裳</span>
				</div>
			</div>
			<div class="foot_box clearfix">
				<p class="comment_box">
					<img src="../assets/img/comment_icon.jpg" />&nbsp;&nbsp;8
				</p>
				<p class="like_box">
					<img :src=like_icon v-on:click="do_like(state)" :class=active />&nbsp;&nbsp;8
				</p>
				<p class="share_box">
					<img src="../assets/img/share_icon.jpg" />&nbsp;&nbsp;&nbsp;&nbsp;分享
				</p>
			</div>
		</div>
		<ul>
			<li v-for="item in comment_list">
				<commentlist item="item"></commentlist>
			</li>
		</ul>
		<send like="true"></send>
	</div>
</template>

<script type="es6">
import headbox from '../components/header'
import commentlist from '../components/comment_list'
import send from '../components/send_comment'
export default {
  data() {
    return{
	  like_icon: require('../assets/img/like_icon.jpg'),
      state: 0,
      active: '',
	  comment_list: []
    }
  },
  components: {
    headbox, commentlist, send
  },
  created() {
    
  },
  methods: {
    load: function() {
      Axios.get('/api/works', {params:{page:1}}).then((rtnData) => {
        this.comment_list.push(...rtnData.data.data)
        this.page ++
      })
    },
    do_like: function(state) {
      if(state == 0) {
        this.like_icon = require('../assets/img/heart_icon.png')
        this.state = 1
        this.active = 'active'
      } else {
        this.like_icon = require('../assets/img/like_icon.jpg')
        this.state = 0
        this.active = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
*{margin: 0; padding: 0;}
.clearfix:after{content:"."; display:block; height:0; clear:both; visibility:hidden;}
@keyframes change{
	0% {transform: scale(1);}
	50% {transform: scale(1.2);}
	100% {transform: scale(1);}
}
.list{border-bottom: 1px solid #999;}
.title{
	height: 56px;
	.head_photo{width: 36px; height: 36px; border-radius: 50px; overflow: hidden; margin: 10px; float: left;}
	h4{width: 70%; height: 56px; line-height: 56px; font-size: 16px; color: #fff; text-align: left; float: left;}
	span{display: block; color: #ccc; height: 56px; line-height: 56px; float: left;}
}
.img_box{
	width: 100%;
	ul{list-style: none;}
	img{width: 100%; display: block;}
}
.content{
	padding: 5%; width: 90%;
	h5{color: #fff; font-size: 16px; text-align: left; height: 20px; line-height: 20px;}
	p{width: 100%; display: block; word-wrap: break-word; word-break: normal; text-align: left; color: #ccc; line-height: 20px; font-size: 14px;}
	.tags{
		width: 100%; margin-top: 14px;
		span{display: block; padding: 3px; background-color: #666; color: #eee; float: left; margin-right: 10px; border-radius: 5px;}
	}
}
.foot_box{
	margin-top: 24px; padding-bottom: 30px;
	p.comment_box, p.like_box, p.share_box{
		position: relative; height: 22px; display: block; width: 20%; float: left; color: #ccc; line-height: 22px;
		img{width: 20px; position: absolute; left: 15%;}
		.active{animation: change 1s ease;}
	}
}
</style>