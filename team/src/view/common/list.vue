<template>
	<div>
		<div class="list">
			<div class="title clearfix">
				<div class="head_photo">
					<img src="../../assets/img/head_photo.jpg" />
				</div>
				<h4>大大脸夏子</h4>
				<span>08-09</span>
			</div>
			<div class="img_box">
				<img src="../../assets/img/photo.jpg" />
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
				<p>
					<img src="../../assets/img/comment_icon.jpg" /> 8
				</p>
				<p>
					<img src="../../assets/img/like_icon.jpg" /> 8
				</p>
				<p>
					<img src="../../assets/img/share_icon.jpg" /> 分享
				</p>
			</div>
		</div>
		<div class="list">
			<div class="title clearfix">
				<div class="head_photo">
					<img src="../../assets/img/head_photo.jpg" />
				</div>
				<h4>大大脸夏子</h4>
				<span>08-09</span>
			</div>
			<div class="img_box">
				<img src="../../assets/img/photo.jpg" />
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
				<p>
					<img src="../../assets/img/comment_icon.jpg" /> 8
				</p>
				<p>
					<img src="../../assets/img/like_icon.jpg" /> 8
				</p>
				<p>
					<img src="../../assets/img/share_icon.jpg" /> 分享
				</p>
			</div>
		</div>
	</div>
</template>

<script type="es6">
export default {
  mounted() {
  	var content = document.getElementsByTagName('p');
	for(var i = 0; i < content.length; i ++) {
  		limit(content[i].innerText, content[i]);
	}
  }
}
function limit(txt, elm) {
	if(txt.length > 35) {
		var str = txt;
		str = str.substr(0, 35) + '...';
		elm.innerText = str;
	}
}
</script>

<style lang="scss" scoped>
*{margin: 0; padding: 0;}
.clearfix:after{content:"."; display:block; height:0; clear:both; visibility:hidden;}
.list{border-bottom: 1px solid #999;}
.title{
	height: 56px;
	.head_photo{width: 36px; height: 36px; border-radius: 50px; overflow: hidden; margin: 10px; float: left;}
	h4{width: 70%; height: 56px; line-height: 56px; font-size: 16px; color: #fff; text-align: left; float: left;}
	span{display: block; color: #ccc; height: 56px; line-height: 56px; float: left;}
}
.img_box{
	width: 100%;
	img{width: 100%; display: block;}
}
.content{
	padding: 10px; width: 100%;
	h5{color: #fff; font-size: 16px; text-align: left; height: 20px; line-height: 20px;}
	p{width: 100%; display: block; word-wrap: break-word; word-break: normal; text-align: left; color: #ccc; line-height: 20px; font-size: 14px;}
	.tags{
		width: 100%; margin-top: 14px;
		span{display: block; padding: 3px; background-color: #666; color: #eee; float: left; margin-right: 10px; border-radius: 5px;}
	}
}
.foot_box{
	margin-top: 24px; padding-bottom: 30px;
	p{
		display: block; width: 20%; float: left; color: #ccc;
		img{width: 22px;}
	}
}
</style>