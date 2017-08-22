<template>
<div>
	<div class="head">
		<!-- 背景图 -->
		<img src="../../assets/img/perhead.jpg" height="100%" width="100%" class="bg">
		<img src="../../assets/img/more1.png" class="more" @click="moreInfo">
		<!-- 用户信息轮播图 -->
		<div class="info">
			<router-link to="#"><img src="../../assets/img/userimg.jpg" height="11.2%" width="20%" class="userimg"></router-link>
			<div class="wenzi">用户名{{$route.params.uid}}</div>
		</div>
		<!-- 用户关注 -->
		<div class="about">
			<img src="../../assets/img/gendar1.png"><span>广州市</span>
			<div class="follow">
				关注 0&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;粉丝 0
			</div>
		</div>
		<!-- 作品 -->
		<div class="work">
			<router-link to="#">
				<div class="number">0</div>
				<div class="title">作品</div>
			</router-link>
			<router-link to="#">
				<div class="number">1</div>
				<div class="title">收录</div>
			</router-link>
			<router-link to="#">
				<div class="number">1</div>
				<div class="title">勋章</div>
			</router-link>
		</div>
		<!-- 作品列表 -->
		<div class="list">
			<div><img src="../../assets/img/file.jpg" height="121" width="120"></div>
			<div>还没有任何作品哦</div>
			<div>赶紧去发布自己的作品吧</div>
		</div>
		<div class="footer">
			<ul>
				<li>
					<img src="../../assets/img/home_nonactive.jpg" />
				</li>
				<li>
					<img src="../../assets/img/collect_nonactive.jpg" />
				</li>
				<li>
					<img src="../../assets/img/send_btn.jpg" class="send_btn" />
				</li>
				<li>
					<img src="../../assets/img/message_nonactive.jpg" />
				</li>
				<li>
					<img src="../../assets/img/personal_active.jpg" />
				</li>
			</ul>
		</div>
		<!-- 弹出框 -->
		<mt-popup v-model="popupVisible" position="bottom" popup-transition="popup-fade" class="actionsheet" style="z-index: 2025;">
	        <div v-for="it in slots" class="actionsheet-list">
	       		<router-link to="#">
					<!-- <div class="number" v-text="it.flex"><img src="../../assets/img/set.jpg" height="56" width="56"></div> -->
					<div v-text="it.flex"></div>
				</router-link>
	            <!-- <span v-text="it.flex"></span> -->
	        </div>
	        <a class="actionsheet-button">取消</a></div>
    	</mt-popup>

    	<!-- <mt-popup v-model="popupVisible" position="bottom" popup-transition="popup-fade">
			<div class="actionsheet" style="z-index: 2025;">
				<div class="actionsheet-list">
					<router-link to="#">
						<div class="number"><img src="../../assets/img/set.jpg" height="56" width="56"></div>
						<div class="title">设置</div>
					</router-link>
					<router-link to="#">
						<div class="number"><img src="../../assets/img/edit_data.jpg" height="58" width="56"></div>
						<div class="title">编辑资料</div>
					</router-link>
				</div>
				<a class="actionsheet-button">取消</a></div>
			</div>
		</mt-popup> -->
		
</div>
</template>
<script type="es6">
import { Actionsheet } from 'mint-ui';
	export default{
		data(){
			return{
				msg: '弹窗',
				popupVisible: false
				slots: [
					{
						flex: 1,
          				values: '设置',
          				className: 'title'
					},{
						flex: 2,
          				values: '编辑资料',
          				className: 'title'
					}
				]
			}
		},
		methods: {
			moreInfo: function() {
        		this.popupVisible = true
        	}
    	}
	}
</script>
<style lang="scss">
@import "../../assets/common.scss";
html{
	background-color: #f5f5f5;
	font-size: 62.5%;
}
.mint-header{
    background-color: rgba(0, 0, 0, 0);
}
.more{
	position: absolute;
    top: 1%;
    right: 1%;
}
.head{
	width: 100%;
	height: 36.6%;
}
.userimg{
	position: absolute;
    top: 8%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
}
.back_for{
	position: absolute;
	top: 0%;
	left: 0%;
	background-color: rgba(255,255,255,0);
	color: #fff;
}
.wenzi{
	position: absolute;
    top: 16%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
}
.about{
	position: absolute;
    top: 24%;
    left: 16%;
    transform: translate(-50%, -50%);
    font-size: 1.4rem;
    vertical-align: middle;
    img{
    	margin-left: 5%;
    }
    span{
		display: block;
	    height: 16%;
	    float: right;
	    margin: 4% 20% 0 0;
	    font-size: 1.4rem;
	    text-align: center;
    }
}
.work{
	width: 100%;
	height: 8%;
	text-align: center;
	font-size: 1.2rem;
	a{
		float: left;
		margin-top: 1%;
		width: 33%;
		color: #7d7d7d;
		.number{
			font-weight: bold;
			font-size: 1.8rem;
		}
	}
	a:not(:last-child){
		border-right: 1px solid #e5e5e5;
	}
}
.list{
	color: #979797;
	text-align: center;
	position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    img{
    	margin-bottom: 10%;
    }
}
*{margin: 0; padding: 0; text-decoration: none; list-style: none;}
.footer{width: 100%; height: 50px; background-color: #222222; text-align: center; position: relative; position: fixed; z-index: 999;}
.footer{bottom: 0;}
ul li{width: 20%; float: left; height: 50px;}
ul li img{margin-top: 11px;}
ul li img.send_btn{margin-top: 4px;}
.actionsheet{
	background-color: #fff;
	.actionsheet-list a{
		float: left;
		margin: 3%;
		color: #979797;
		text-align: center;
	}
	.actionsheet-button{
		float: left;
		color: #000;
		width: 100%;
		border-top: 5px solid #f5f5f5;
		text-align: center;
	}
}
</style>