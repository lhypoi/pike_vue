<template>
	<div>
		<div class="header">
			<ul class="clearfix">
				<span :style="'left:' + left + '%;'"></span>
				<li :class="{active:isActive==0}" v-on:click="on_active(0)">通知</li>
				<li :class="{active:isActive==1}" v-on:click="on_active(1)">私信</li>
			</ul>
		</div>
		<div class="empty"></div>
		<div class="message_box">
			<ul class="clearfix" :style="'right:' + right + '%;'">
				<li>
					<notice></notice>
				</li>
				<li>
					<private_msg></private_msg>
				</li>
			</ul>
		</div>
		<footbox active=2></footbox>
	</div>
</template>

<script type="es6">
import footbox from '../components/footer'
import notice from '../components/notice'
import private_msg from '../components/private_msg'
export default {
  data(){
    return {
      isActive: 0,
      left: 10,
	  right: 0,
      num: 0,
      timer: ''
    }
  },
  components: {
    notice, private_msg, footbox
  },
  methods: {
    on_active: function(num) {
      this.isActive = num
      this.num = num
      this.timer = setInterval(this.move, 5)
    },
    move: function() {
      if(this.num * 50 + 10 > this.left) {
        this.left += 1
		this.right += 2
      }else if(this.num * 50 + 10 < this.left) {
        this.left -= 1
		this.right -= 2
      }else{
        clearInterval(this.timer)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
	width: 100%; height: 50px; background-color: #222222; text-align: center; position: relative; position: fixed; z-index: 999;
	ul{
		color: #fff; font-size: 18px; display: block; margin: 0 auto; width: 60%; position: relative;
		span{width: 30%; height: 2px; position: absolute; display: block; background-color: #fff; bottom: -1px;}
		li{
			height: 30px; line-height: 30px; margin-top: 10px; float: left; display: block; width: 30%; padding: 0 10%; color: #666666;
		}
		li.active{color: #fff;}
	}
}
.message_box{
	overflow: hidden; width: 100%;
	ul{
		width: 200%; position: relative;
		li{width: 50%; display: block; float: left;}
	}
}
.empty{padding-top: 50px;}
</style>