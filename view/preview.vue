<template>
	<div class="pre_box">
    <img src="../../assets/img/320426.jpg" class="bg">

    <div class="title">
     <img src="../../assets/img/wenzi.png">
     <div class="detail">中国领先时尚摄影平台</div>
   </div>
   <div class="menu">
     <router-link to="/reg">立即注册</router-link>
     <router-link to="/login">账号登录</router-link>
   </div>
   <div class="bro"><router-link to="#">浏览精选</router-link></div>
 </div>
</template>
<script type="es6">

</script>
<style lang="scss">
  @import "../../assets/common.scss";
  html{
   background: #f3f3f3;
   font-size: 62.5%;
   position: relative;
 }
 .bg{
  opacity:0.7;
  height:100%;
  width:100%;
}
.title{
  position: absolute;
  top: 19%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 44%;
  img{
  	width: 35.8%;
  	height: 10%;
  }
}
.detail{
  margin-top: 4%;
  font-size: 14px;
  font-size: 1.4rem;
}
.menu{
  position: absolute;
  bottom: 15.3%;
  left: 50%;
  width: 47%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  a{
    display: block;
    float: left;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    padding: 0 6.1%;
    font-size: 14px;
    font-size: 1.4rem;
  }
  a:nth-of-type(odd){
    border-right: 1px solid #fff;
  }
}
.pre_box {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // margin: 0px;
  // padding: 0px;
}
.bro{
  position: absolute;
  bottom: 0%;
  border: 1px solid #fff;
  height: 7.2%;
  width: 100%;
  font-weight: bold;
  a{
  	display: block;
  	color: #fff;
    text-decoration: none;
    margin-top: 3.5%;
    font-size: 14px;
    font-size: 1.4rem;
  }
}

</style>