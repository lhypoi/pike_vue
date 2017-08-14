<template>
	<div>
		<div class="banner">
			<ul>
				<li v-for='sd in swapData' :style="'z-index:'+ sd.index+ '; opacity:'+ sd.opacity">
					<a>{{sd.title}}</a>
				</li>
			</ul>
		</div>
		<div class="nav" id="nav">
			<ul class="clearfix cnt" v-touchmmh="slide" style="transition:all 0.1s linear">
				<li>
					<a>
						<img src="../assets/img/menu_icon_1.jpg" />
						<p>作品</p>
					</a>
				</li>
				<li>
					<a>
						<img src="../assets/img/menu_icon_2.jpg" />
						<p>图片</p>
					</a>
				</li>
				<li>
					<a>
						<img src="../assets/img/menu_icon_3.jpg" />
						<p>技巧</p>
					</a>
				</li>
				<li>
					<a>
						<img src="../assets/img/menu_icon_4.jpg" />
						<p>活动</p>
					</a>
				</li>
				<li>
					<a>
						<img src="../assets/img/menu_icon_5.jpg" />
						<p>极限</p>
					</a>
				</li>
				<li>
					<a>
						<img src="../assets/img/menu_icon_6.jpg" />
						<p>对话</p>
					</a>
				</li>
				<li>
					<a>
						<img src="../assets/img/menu_icon_7.jpg" />
						<p>红人</p>
					</a>
				</li>
			</ul>
		</div>
		<div class="content">
			<div class="index_recommend clearfix">
				<div class="index_recommend_left">
					<div class="icon_box">
						<img src="../assets/img/content_icon_1.jpg" />
					</div>
					<p>勋章作品</p>
				</div>
				<div class="index_recommend_right">
					<div class="icon_box">
						<img src="../assets/img/content_icon_2.jpg" />
					</div>
					<p>编辑推荐</p>
				</div>
			</div>
			<h3 class="clearfix">
				<span>摄影技巧</span>
				<a><img src="../assets/img/more.jpg" /></a>
			</h3>
			<div class="index_limit_list">
				<ul>
					<li class="clearfix">
						<div class="img_box">图片</div>
						<div class="content_box clearfix">
							<h4>培养摄影眼的4个核心要点</h4>
							<div class="date">2017-08-08</div>
							<div class="view">97674</div>
						</div>
					</li>
					<li class="clearfix">
						<div class="img_box">图片</div>
						<div class="content_box clearfix">
							<h4>培养摄影眼的4个核心要点</h4>
							<div class="date">2017-08-08</div>
							<div class="view">97674</div>
						</div>
					</li>
					<li class="clearfix">
						<div class="img_box">图片</div>
						<div class="content_box clearfix">
							<h4>培养摄影眼的4个核心要点</h4>
							<div class="date">2017-08-08</div>
							<div class="view">97674</div>
						</div>
					</li>
				</ul>
			</div>
			<h3 class="clearfix">
				<span>热门活动</span>
				<a><img src="../assets/img/more.jpg" /></a>
			</h3>
			<div class="index_impress_list">
				<ul class="clearfix" v-touchmmh="slide" style="transition:all 0.1s linear">
					<li>
						图片
						<span>手机摄影月赛|未成文的诗</span>
					</li>
					<li>
						图片
						<span>手机摄影月赛|未成文的诗</span>
					</li>
					<li>
						图片
						<span>手机摄影月赛|未成文的诗</span>
					</li>
					<li class="last">
						图片
						<span>手机摄影月赛|未成文的诗</span>
					</li>
				</ul>
			</div>
			<h3 class="clearfix">
				<span>极限摄影</span>
				<a><img src="../assets/img/more.jpg" /></a>
			</h3>
			<div class="index_impress_list">
				<ul class="clearfix" v-touchmmh="slide" style="transition:all 0.1s linear">
					<li>
						图片
						<span>细节决定成败之二--微距中的“余弦定理”</span>
					</li>
					<li>
						图片
						<span>细节决定成败之二--微距中的“余弦定理”</span>
					</li>
					<li>
						图片
						<span>细节决定成败之二--微距中的“余弦定理”</span>
					</li>
					<li class="last">
						图片
						<span>细节决定成败之二--微距中的“余弦定理”</span>
					</li>
				</ul>
			</div>
			<h3 class="clearfix">
				<span>人物对话</span>
				<a><img src="../assets/img/more.jpg" /></a>
			</h3>
			<div class="index_impress_list">
				<ul class="clearfix" v-touchmmh="slide" style="transition:all 0.1s linear">
					<li>
						图片
						<span>他把世间色彩都收入囊中</span>
					</li>
					<li>
						图片
						<span>他把世间色彩都收入囊中</span>
					</li>
					<li>
						图片
						<span>他把世间色彩都收入囊中</span>
					</li>
					<li class="last">
						图片
						<span>他把世间色彩都收入囊中</span>
					</li>
				</ul>
			</div>
			<h3 class="clearfix">
				<span>视觉漫游</span>
				<a><img src="../assets/img/more.jpg" /></a>
			</h3>
			<div class="index_impress_list">
				<ul class="clearfix" v-touchmmh="slide" style="transition:all 0.1s linear">
					<li>
						图片
						<span>他把世间色彩都收入囊中</span>
					</li>
					<li>
						图片
						<span>他把世间色彩都收入囊中</span>
					</li>
					<li>
						图片
						<span>他把世间色彩都收入囊中</span>
					</li>
					<li class="last">
						图片
						<span>他把世间色彩都收入囊中</span>
					</li>
				</ul>
			</div>
			<h3 class="clearfix">
				<span>红人推荐</span>
				<a><img src="../assets/img/more.jpg" /></a>
			</h3>
			<div class="index_best_list">
				<ul class="clearfix" v-touchmmh="slide" style="transition:all 0.1s linear">
					<li>
						<div class="best">
						</div>
					</li>
					<li>
						<div class="best">
						</div>
					</li>
					<li>
						<div class="best">
						</div>
					</li>
					<li class="last">
						<div class="best">
						</div>
					</li>
					<li class="last">
						<div class="best">
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script type="es6">
import Vue from 'vue';
Vue.directive('touchmmh', function (el, binding) {
  var oDiv = el
  var x = 0
  var left
  oDiv.addEventListener('touchstart', function (e) {
    if (e.touches.length > 1) {
      return false
    }
	left = oDiv.offsetLeft
    x = e.touches[0].clientX + Math.abs(left)
    e.preventDefault()
  }, false)
  oDiv.addEventListener('touchmove', function (e) {
    var touch = e.touches[0]
    var mx = touch.clientX - x
    if(oDiv.offsetWidth + mx <= oDiv.parentNode.offsetWidth) {
	  oDiv.style.left = oDiv.parentNode.offsetWidth - oDiv.offsetWidth + 'px'
	  return;
	} else if(mx >= 0) {
	  oDiv.style.left = 0 + 'px'
	  return
	} else {
      oDiv.style.left = mx + 'px'
	}
  }, false)
  oDiv.addEventListener('touchend', function (ev) {
    left = oDiv.offsetLeft
	oDiv.style.left = left + 'px'
  }, false)
})
export default {
	data() {
		return{
			slide:'',
			swap_1:'',
			swapData:[{
				title: '图片1',
				index: 1,
				opacity: 1
			},{
				title: '图片2',
				index: 2,
				opacity: 1
			},{
				title: '图片3',
				index: 3,
				opacity: 1
			},{
				title: '图片4',
				index: 4,
				opacity: 1
			}]
		}
	},
	created() {
		var _this = this;
		var DataLength = _this.swapData.length;
		var i = 3;
		var timer = setInterval(()=> {
			if(_this.swapData[i].index >= DataLength) {
				var o_timer = setInterval(()=> {
					if(_this.swapData[i].opacity > 0) {
						_this.swapData[i].opacity -= 0.2;
					} else {
						clearInterval(o_timer);
					}
				}, 200);
				
				_this.swapData[i].index = 1;
				_this.swapData[i].opacity = 1;
				for(var j = 0; j < DataLength; j ++) {
					if(j != i) {
						_this.swapData[j].index += 1;
					}
				}
			}
			i --;
			if(i < 0) {
				i = 3;
			}
		}, 7000)
	},
	
	mounted:function(){
		//this.init()
	},
	methods:{
		init(){
			//slide()
		}
	},
	
}
//
//function slide(){
//	var startPos,endPos;
//	var isScrolling;
//	var slider=document.getElementById('slider');
//	
//	slider.addEventListener('touchstart', start, false);
//	slider.addEventListener('touchmove', move, false);
//	slider.addEventListener('touchend', end, false);
//	
//	function start(event) {
//		var touch = event.targetTouches[0];     //touches数组对象获得屏幕上所有的touch，取第一个touch
//        startPos = {x:touch.pageX,y:touch.pageY,time:+new Date};    //取第一个touch的坐标值
//        isScrolling = 0;   //这个参数判断是垂直滚动还是水平滚动
//	}
//	
//	function move(event) {
//		//当屏幕有多个touch或者页面被缩放过，就不执行move操作
//        if(event.targetTouches.length > 1 || event.scale && event.scale !== 1) return;
//		var touch = event.targetTouches[0];
//		endPos = {x:touch.pageX - startPos.x,y:touch.pageY - startPos.y};
//		isScrolling = Math.abs(endPos.x) < Math.abs(endPos.y) ? 1:0;    //isScrolling为1时，表示纵向滑动，0为横向滑动
//		if(isScrolling === 0){
//			if(slider.offsetWidth + endPos.x <= oDiv.parentNode.offsetWidth) {
//				slider.className = 'cnt f-anim';
//				slider.style.left = document.getElementById('slider').style.offsetWidth - oDiv.parentNode.offsetWidth + 'px';
//				return;
//			}
//			if(endPos.x >= 0) {
//				slider.className = 'cnt f-anim';
//				slider.style.left = 0 + 'px';
//				return;
//			}
//			event.preventDefault();      //阻止触摸事件的默认行为，即阻止滚屏
//			slider.className = 'cnt';
//			slider.style.left = endPos.x + 'px';
//		}
//	}
//	
//	function end() {
//		var duration = +new Date - startPos.time;    //滑动的持续时间
//		if(isScrolling === 0){    //当为水平滚动时
//			if(Number(duration) > 10){     
//				//判断是左移还是右移，当偏移量大于10时执行
//				if(endPos.x > 10){
//					if(this.index !== 0) this.index -= parseInt(Math.abs(endPos.x/76));
//				}else if(endPos.x < -10){
//					if(slider.offsetWidth + endPos.x <= oDiv.parentNode.offsetWidth) {
//						slider.className = 'cnt f-anim';
//						slider.style.left = document.getElementById('slider').style.offsetWidth - oDiv.parentNode.offsetWidth + 'px';
//					}else{
//						slider.className = 'cnt f-anim';
//						slider.style.left = endPos.x + 'px';
//					}
//					this.index += parseInt(Math.abs(endPos.x/76));
//				}
//			}
//		}
//	}
//}





	//var slider = {
//    //判断设备是否支持touch事件
//    touch:('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch,
//    slider:document.getElementById('slider'),
//    //事件
//    events:{
//        index:0,     //显示元素的索引
//        slider:document.getElementById('slider'),     //this为slider对象
//       // handleEvent:function(event){
////            var self = this;     //this指events对象
////            if(event.type == 'touchstart'){
////                self.start(event);
////				
////            }else if(event.type == 'touchmove'){
////                self.move(event);
////            }else if(event.type == 'touchend'){
////                self.end(event);
////            }
////        },
//        //滑动开始
//        start:function(event){
//			console.log(2)
//            var touch = event.targetTouches[0];     //touches数组对象获得屏幕上所有的touch，取第一个touch
//             startPos = {x:touch.pageX,y:touch.pageY,time:+new Date};    //取第一个touch的坐标值
//             isScrolling = 0;   //这个参数判断是垂直滚动还是水平滚动
//			//this.slider.addEventListener('touchmove',this,false);
//            //this.slider.addEventListener('touchend',this,false);
//        },
//        //移动
//        move:function(event){console.log(3)
//            //当屏幕有多个touch或者页面被缩放过，就不执行move操作
//            if(event.targetTouches.length > 1 || event.scale && event.scale !== 1) return;
//            var touch = event.targetTouches[0];
//            endPos = {x:touch.pageX - startPos.x,y:touch.pageY - startPos.y};
//            isScrolling = Math.abs(endPos.x) < Math.abs(endPos.y) ? 1:0;    //isScrolling为1时，表示纵向滑动，0为横向滑动
//            if(isScrolling === 0){
//				if(document.getElementById('slider').offsetWidth + endPos.x <= oDiv.parentNode.offsetWidth) {
//					document.getElementById('slider').className = 'cnt f-anim';
//                	document.getElementById('slider').style.left = document.getElementById('slider').style.offsetWidth - oDiv.parentNode.offsetWidth + 'px';
//					return;
//				}
//				if(endPos.x >= 0) {
//					document.getElementById('slider').className = 'cnt f-anim';
//                	document.getElementById('slider').style.left = 0 + 'px';
//					return;
//				}
//                event.preventDefault();      //阻止触摸事件的默认行为，即阻止滚屏
//                document.getElementById('slider').className = 'cnt';
//                document.getElementById('slider').style.left = endPos.x + 'px';
//            }
//        },
//        //滑动释放
//        end:function(event){
//            var duration = +new Date - startPos.time;    //滑动的持续时间
//            if(isScrolling === 0){    //当为水平滚动时
//                if(Number(duration) > 10){     
//                    //判断是左移还是右移，当偏移量大于10时执行
//                    if(endPos.x > 10){
//                        if(this.index !== 0) this.index -= parseInt(Math.abs(endPos.x/76));
//                    }else if(endPos.x < -10){
//						if(document.getElementById('slider').offsetWidth + endPos.x <= oDiv.parentNode.offsetWidth) {
//							document.getElementById('slider').className = 'cnt f-anim';
//                			document.getElementById('slider').style.left = document.getElementById('slider').style.offsetWidth - oDiv.parentNode.offsetWidth + 'px';
//						}else{
//							document.getElementById('slider').className = 'cnt f-anim';
//                			document.getElementById('slider').style.left = endPos.x + 'px';
//						}
//                        this.index += parseInt(Math.abs(endPos.x/76));
//						
//                    }
//                }
//                
//            }
//            //解绑事件
//       // document.getElementById('slider').removeEventListener('touchmove',this,false);
//       //     document.getElementById('slider').removeEventListener('touchend',this,false);
//        }
//    },
//    
//    //初始化
//    init:function(){
//        var self = this;     //this指slider对象
//		//alert(oDiv.parentNode.offsetWidth)
//		console.log(self)
//		document.getElementById('slider').addEventListener('touchstart',self.events.start,false);
//		 document.getElementById('slider').addEventListener('touchmove',self.events.move);
//		document.getElementById('slider').addEventListener('touchend',self.events.end);
//        
//    }

</script>

<style lang="scss" scoped>
@import "../assets/css/index.scss";
*{margin: 0; padding: 0; text-decoration: none; color: #333; list-style: none;}
.clearfix:after{content:"."; display:block; height:0; clear:both; visibility:hidden;}
/*轮播器*/
.banner{
	height: 125px; background-color: #ccc;
	ul{
		width: 100%; position: relative;
		li{
			width: 100%; background-color: #ccc; position: absolute; height: 125px;
			a{width: 100%; height: 125px;}
		}
		li:first-child{background-color: #f00;}
		li:last-child{background-color: #87CEFA;}
	}
}
/*导航*/
.nav{
	height: 90px; padding: 10px 0; background-color: #fff; overflow: hidden;
	ul{
		width: 532px; position: relative; left: 0;
		li{
			float: left; padding: 0 20px;
			a{
				display: block; font-size: 14px;
				img{margin-bottom: 10px;}
			}
		}
	}
}
.f-anim{-webkit-transition:left .2s linear;}
/*内容*/
.content{
	.index_recommend{
		height: 155px; width: 95%; margin: 20px auto 0;
		.index_recommend_left, .index_recommend_right{
			width: 48.5%; height: 155px; background-color: #fff;
		}
		.index_recommend_left{@include left_right(left)}
		.index_recommend_right{@include left_right(right)}
		.icon_box{
			width: 100%; height: 100px; position: relative; background-color: #ccc;
			img{position: absolute; display: block; border: 3px solid #fff; border-radius: 25px; width: 20%; left: 0; right: 0; margin: 0 auto; top: 84px;}
		}
		p{font-size: 14px; margin-top: 25px; font-weight: bold;}
	}
	
	h3{
		margin-top: 20px; padding: 15px 10px; background-color: #fff; display: block; line-height: 14px; font-size: 16px; border-bottom: 1px solid #f3f3f3; font-weight: bold;
		span{float: left;}
		a{color: #2c72ac; float: right;}
	}
	
	.index_limit_list{
		background-color: #fff;
		ul{
			padding: 5px 0;
			li{
				padding: 5px 10px; display: block; width: 100%;
				.img_box{width: 69px; height: 69px; background-color: #ccc; float: left;}
				.content_box{
					width: 76%; float:left; padding: 10px 0 0 10px;
					h4{font-size: 14px; width: 100%; text-align: left; margin-bottom: 26px;}
					.date{float: left; color: #bcbcbc; font-size: 12px;}
					.view{float: right; height: 16px; padding-left: 20px; background: url(../assets/img/eye_icon.jpg) no-repeat; font-size: 12px;}
				}
			}
		}
	}
	
	.index_impress_list{
		background-color: #fff; overflow: hidden;
		ul{
			padding: 10px 0; width: 860px; position: relative; left: 0;
			li{
				width: 200px; height: 115px; background-color: #ccc; float: left; margin-right: 20px; position: relative;
				span{font-size: 14px; color: #fff; display: block; position: absolute; left: 10px; bottom: 10px; text-align: left;}
			}
			li.last{margin-right: 0;}
		}
	}
	
	.index_best_list{
		height: 355px; background-color: #fff;
		width: 100%;
		ul{
			padding: 10px 0; position: relative; left: 0; width: 500%;
			li{
				width: 16%; height: 335px; float: left; position: relative; padding: 10px 2%; margin: 0 2%;
				span{font-size: 14px; color: #fff; display: block; position: absolute; left: 10px; bottom: 10px; text-align: left;}
				.best{
					width: 100%; height: 315px; border: 1px solid #eee;
				}
			}
		}
	}
}

</style>