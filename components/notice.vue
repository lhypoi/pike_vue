<template>
	<div>
		<div class="list clearfix">
			<div class="left_box">
				<div class="head_photo">
					<img src="../assets/img/photo.jpg" v-adjust="img_adjust" />
				</div>
				<span>100</span>
			</div>
			<div class="content">
				<h5>系统通知</h5>
				<p>。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。</p>
				<span>08-09</span>
			</div>
		</div>
		<div class="list clearfix">
			<div class="left_box">
				<div class="head_photo">
					<img src="../assets/img/head_photo.jpg" />
				</div>
				<span>100</span>
			</div>
			<div class="content">
				<h5>系统通知</h5>
				<p>系统通知aaaaaaaaaa系统通知aaaaaaaqqqqqqaaaaaaaaaaaaaaaaaaaaaa</p>
				<span>08-09</span>
			</div>
		</div>
	</div>
</template>

<script type="es6">
import Vue from 'vue'
Vue.directive('adjust', function(el, binding) {
	//图片自适应
	var obj = el
	obj.addEventListener('load', function() {
		let img = new Image()
		img.src = el.getAttribute('src')
		let width = img.width
		let height = img.height
		let parent = el.parentNode
		if((width - parent.clientWidth) > (height - parent.clientHeight)) {
			el.style.height = parent.clientHeight + 'px';
			let rate = parent.clientHeight / height;
			if(width * rate < parent.clientWidth) {
				el.style.width = parent.clientWidth + 'px'
				rate = parent.clientWidth / (width * rate)
				el.style.height = (parent.clientHeight * rate) + 'px'
				el.style.marginTop = (-(parent.clientHeight * rate - parent.clientHeight) / 2) + 'px'
			}else{
				el.style.width = width * rate + 'px'
				el.style.marginLeft = (-(width * rate - parent.clientWidth) / 2) + 'px'
			}
		}else{
			el.style.width = parent.clientWidth;
			let rate = parent.clientWidth / width;
			if(height * rate < parent.clientHeight) {
				el.style.height = parent.clientHeight + 'px'
				rate = parent.clientHeight / (height * rate)
				el.style.width = (parent.clientWidth * rate) + 'px'
				el.style.marginLeft = (-(parent.clientWidth - parent.clientWidth) / 2) + 'px'
			}else{
				el.style.height = height * rate
				el.style.marginTop = (-(height * rate - parent.clientHeight) / 2) + 'px'
			}
		}
	})
})
export default {
  data() {
	return{
	  img_adjust:''
    }
  },
  mounted() {
  	var content = document.getElementsByTagName('p');
	for(var i = 0; i < content.length; i ++) {
  		limit(content[i].innerText, content[i]);
	}
  }
}
function limit(txt, elm) {
	if(txt.length > 30) {
		var str = txt;
		str = str.substr(0, 30) + '...';
		elm.innerText = str;
	}
}
</script>

<style lang="scss" scoped>
*{margin: 0; padding: 0;}
.clearfix:after{content:"."; display:block; height:0; clear:both; visibility:hidden;}
.list{height: 140px; padding: 10px; border-bottom: 1px solid #666;}
.left_box{
	position: relative; width: 56px; height: 120px; float: left;
	.head_photo{
		width: 36px; height: 36px; border-radius: 50px; margin: 10px; overflow: hidden;
	}
	span{position: absolute; background-color: #f00; padding: 1px 2px; border-radius: 10px; color: #fff; display: block; z-index: 2; top: -1px; right: -2px; font-size: 12px;}
}
.content{
	padding: 10px; width: 70%; float: left;
	h5{color: #3175ae; font-size: 16px; text-align: left; height: 20px; line-height: 20px; margin-bottom: 12px;}
	p{width: 100%; display: block; word-wrap: break-word; word-break: normal; text-align: left; color: #fff; line-height: 20px; font-size: 14px; height: 40px; overflow: hidden; margin-bottom: 15px;}
	span{display: block; color: #ccc; float: left;}
}
</style>