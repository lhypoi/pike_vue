<template>
	<div>
		<div class="list">
			<div class="title clearfix">
        <router-link :to="'/personal/'+item.user_id">
          <div class="head_photo">
            <img v-bind:src="item.user_photo ? item.user_photo : defaultUserPhoto" />
          </div>
          <h4>{{item.user_name}}</h4>
        </router-link>

				<span>{{new Date(parseInt(item.update_time) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ')}}</span>
			</div>
			<div class="img_box">
				<img v-lazy="'http://localhost:82' + item.works_src" alt="">
			</div>
			<div class="content">
				<h5>{{item.works_title}}</h5>
				<p>{{item.works_profile|substr}}</p>
				<div class="tags clearfix">
					<span>{{item.works_tags}}</span>
				</div>
			</div>
			<div class="foot_box clearfix">
                <div class="para clearfix">
                    <span v-for="(item, index) in item.works_para.split(',')">
                        <b>{{paraKey[index]}}:</b>{{item}}
                    </span>
                </div>
				<p class="comment_box">
					<img src="../assets/img/comment_icon.jpg" />&nbsp;8
				</p>
				<p class="like_box">
					<img :src=like_icon v-on:click="do_like(state)" :class=active />&nbsp;8
				</p>
				<p class="share_box">
					<img src="../assets/img/share_icon.jpg" />&nbsp;&nbsp;&nbsp;&nbsp;分享
				</p>
			</div>
		</div>
	</div>
</template>

<script type="es6">
import Vue from 'vue'
export default {
  data() {
    return{
	  like_icon: require('../assets/img/like_icon.jpg'),
      state: 0,
      active: '',
      defaultUserPhoto: require('../assets/img/head_photo.jpg'),
      paraKey: ['相机', '光圈', '快门' ,'感光度']
    }
  },
  props:['item'],
  mounted() {

  },
  methods: {
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
Vue.filter('substr', function(str) {
	return str.substr(0, 35) + '...';
})

</script>

<style lang="scss" scoped>
*{margin: 0; padding: 0;}
.clearfix:after{content:"."; display:block; height:0; clear:both; visibility:hidden;}
.list{margin-top: 1rem;background-color: #fff}
.title{
	height: 4.5rem;
    .head_photo {
        width: 3rem;
        height: 3rem;
        border-radius: 3rem;
        overflow: hidden;
        margin: 0.75rem;
        float: left;
        img {
            width: 100%;
            height: 100%;
        }
    }
	h4{width: 12rem; line-height: 3em; font-size: 1.5em; color: #000; text-align: left; float: left;}
	span{display: block; color: #888; line-height: 3em; font-size: 1.5em; float: right; margin-right: 0.75rem;}
}
.img_box{
	width: 100%;
	img{width: 100%; display: block;}
}
.content{
	padding: 0.5rem 1.5rem;
	h5{color: #111; font-size: 1.2em; text-align: left; line-height: 2em;}
	p{width: 100%; display: block; word-wrap: break-word; word-break: normal; text-align: left; color: #222; line-height: 2em; font-size:1em;}
	.tags{
		width: 100%;
		span{display: block; padding: 0.5em; line-height: 1em; background-color: #666; color: #eee; float: left; margin-right: 2em; border-radius: 0.5em;}
	}
}
.foot_box{
    background-color: #000;
    padding: 0.5rem 1.5rem 1rem 1.5rem;
	p.comment_box, p.like_box, p.share_box{
		position: relative; height: 2em; display: block; width: 20%; float: left; color: #ccc; line-height: 2em;
		img{width:2em; position: absolute; left: 0em}
		.active{animation: change 1s ease;}
	}
    .para{
        width: 100%;
        margin-bottom: 1rem;
        span{
            line-height: 2em;
            display: block;
            width: 50%;
            color: #ccc;
            float: left;
            text-align: left;
        }
    }
}
</style>