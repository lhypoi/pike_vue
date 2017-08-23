<template>
<div>
	<div class="personal_head">
		<!-- 背景图 -->
		<img src="../assets/img/perhead.jpg" height="100%" width="100%" class="bg">
		<img src="../assets/img/more1.png" class="more" @click="moreInfo()">
		<!-- 用户信息轮播图 -->
		<div class="info">
			<router-link to="#"><img src="../assets/img/userimg.jpg" height="11.2%" width="20%" class="userimg"></router-link>
			<div class="wenzi">用户名{{$route.params.uid}}</div>
			<!-- 用户关注 -->
			<div class="about">
				<img src="../assets/img/gendar1.png">
				<span>广州市</span>
			</div>
			<div class="follow">
				<span>关注 0</span>
				<span>粉丝 0</span>
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
			<div><img src="../assets/img/file.jpg" height="121" width="120"></div>
			<div>还没有任何作品哦</div>
			<div>赶紧去发布自己的作品吧</div>
		</div>
		<!-- 底部 -->
		<footbox active=3></footbox>
		<!-- 弹出框 -->
		<mt-popup v-model="popupVisible" position="bottom" popup-transition="popup-fade" class="actionsheet" style="z-index: 2025;">
	        <div class="actionsheet-list">
	       		<router-link to="#">
					<img src="../assets/img/set.jpg" height="56" width="56">
					<div class="title">设置</div>
				</router-link>
				<router-link to="#">
					<img src="../assets/img/edit_data.jpg" height="56" width="56">
					<div class="title">编辑资料</div>
				</router-link>
	        </div>
	        <a class="actionsheet-button" @click="moreInfo()">取消</a>
    	</mt-popup>

    </div>
</div>
</template>
<script type="es6">
import footbox from '../components/footer'
import { Actionsheet } from 'mint-ui';
	export default{
		data(){
			return{
				popupVisible: false,
			}
		},
		components: {
	        footbox
	    },
		methods: {
			moreInfo: function() {
				if(this.popupVisible==false){
					this.popupVisible = true;
				} else {
					this.popupVisible = false;
				}
        	}
    	}
	}
</script>
<style lang="scss" scoped>
@import "../assets/common.scss";
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
.personal_head{
	width: 100%;
	height: 36.6%;
	color: #fff;
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
    color: #fff;
    transform: translate(-50%, -50%);
    font-size: 2rem;
}
.about{
	position: absolute;
    top: 20%;
    width: 50%;
    font-size: 1.4rem;
    vertical-align: middle;
    img{
    	margin-left: 5%;
    	float: left;
    	width: 1.6rem;
    }
    span{
		display: block;
	    height: 16%;
	    float: left;
    	color: #fff;
	    font-size: 1.2rem;
	    text-align: center;
	    margin-left: 1rem;
    }
}
.follow{
	float: left;
	position: absolute;
    top: 24%;
    // left: 3%;
    width: 50%;
	span{
		display: block;
		width: 30%;
		float: left;
		color: #fff;
		font-size: 1.1rem;
		text-align: center;
		padding: 0 5%;
	}
	span:first-child{
		border-right: 1px solid #ccc;
	}
}
.work{
	width: 100%;
	height: 8%;
	text-align: center;
	font-size: 1.2rem;
	a{
		float: left;
		margin-top: 2%;
		width: 33%;
		color: #7d7d7d;
		.number{
			font-weight: bold;
			font-size: 1.8rem;
		}
	}
	a:not(:last-child){
		border-right: 1px solid #ccc;
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
.mt-swipe{
	position: absolute;
	top: 60%;
	left: 50%;
	height: 50px;
}
.actionsheet{
	width: 100%;
	height: 21%;
	background-color: #fff;
	.actionsheet-list a{
		float: left;
		margin: 3%;
		color: #979797;
		text-align: center;
		img{
			width: 56px;
			height: 56px;
		}
	}
	.actionsheet-button{
		float: left;
	    color: #000;
	    width: 100%;
	    height: 100%;
	    padding: 0.4rem 0;
	    font-size: 1.4rem;
	    border-top: 5px solid #f5f5f5;
	    text-align: center;
	}
}
</style>