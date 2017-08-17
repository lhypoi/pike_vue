<template>
	<div>
		<headbox title="购物车" back="true"></headbox>
		<div class="goods_box">
			<div v-if="empty==true" class="fl icon-box" style="padding-top: 2.8em">
				<i class="fa fa-shopping-cart" style="color: #ccc; font-size: 10em;"></i>
				<p style="color: #ccc; font-size: 1.5em; height: 2em; line-height: 2em;">购物车空空如也</p>
			</div>
			<div v-if="empty==false">
				<div class="edit_box clearfix">
					<div class="check_box">
						<input type="checkbox" id="checkbox0" value="0" />
						<label for="checkbox0" v-on:click="check(0)"></label>
					</div>
					<p v-on:click="do_edit">编辑</p>
				</div>
				<ul>
					<li class="clearfix">
						<div class="check_box">
							<input type="checkbox" id="checkbox1" value="1" />
							<label for="checkbox1" v-on:click="check(1)"></label>
						</div>
						<div class="img_box">
							<img src="../assets/img/photo.jpg" v-adjust="img_adjust" />
						</div>
						<div class="content_box clearfix">
							<h4>培养摄影眼的4个核心要点</h4>
							<div class="price" v-if="edit==false">￥{{numbers[0].price}}</div>
							<p v-if="edit==false">x{{numbers[0].nums}}</p>
							<div class="nums clearfix">
								<div class="fl icon-box" v-if="edit==true" v-on:click="minus(0)">
									<i class="fa fa-minus-circle"></i>
								</div>
								<input type="text" v-if="edit==true" :value=numbers[0].nums disabled />
								<div class="fl icon-box" v-if="edit==true" v-on:click="plus(0)">
									<i class="fa fa-plus-circle"></i>
								</div>
							</div>
						</div>
					</li>
					<li class="clearfix">
						<div class="check_box">
							<input type="checkbox" id="checkbox2" value="2" />
							<label for="checkbox2" v-on:click="check(2)"></label>
						</div>
						<div class="img_box">
							<img src="../assets/img/photo.jpg" v-adjust="img_adjust" />
						</div>
						<div class="content_box clearfix">
							<h4>培养摄影眼的4个核心要点</h4>
							<div class="price" v-if="edit==false">￥{{numbers[1].price}}</div>
							<p v-if="edit==false">x{{numbers[1].nums}}</p>
							<div class="nums clearfix">
								<div class="fl icon-box" v-if="edit==true" v-on:click="minus(1)">
									<i class="fa fa-minus-circle"></i>
								</div>
								<input type="text" v-if="edit==true" :value=numbers[1].nums disabled />
								<div class="fl icon-box" v-if="edit==true" v-on:click="plus(1)">
									<i class="fa fa-plus-circle"></i>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="cart_foot clearfix" v-if="empty==false">
			<p class="clearfix">
				合计：￥{{total}}
				<mt-button type="primary" size="small" v-if="edit==false">结算</mt-button>
				<mt-button type="danger" size="small" v-if="edit==true" v-on:click="del">删除</mt-button>
			</p>
		</div>
	</div>
</template>

<script type="es6">
import headbox from '../components/header'
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
			empty: false,
			edit: false,
			img_adjust:'',
			length: 2,
			numbers: [{
				nums: 1,
				price: 100
			},{
				nums: 2,
				price: 200
			}],
			max_store: 4,
			total: 0
		}
	},
	components:{
		headbox
	},
	mounted() {
		if(this.length < 0) {
			this.empty = true
		}
	},
	methods: {
		do_edit: function() {
			if(!this.edit) {
				this.edit = true
			}else {
				this.edit = false
			}
		},
		minus: function(index) {
			if(this.numbers[index].nums > 1) {
				this.numbers[index].nums -= 1
			}
		},
		plus: function(index) {
			if(this.numbers[index].nums < this.max_store) {
				this.numbers[index].nums += 1
			}
		},
		del: function() {
			let total_num = this.length;
			for(let i = 1; i <= this.length; i ++) {
				let id = 'checkbox' + i
				let box = document.getElementById(id)
				if(box.checked) {
					box.parentNode.parentNode.parentNode.removeChild(box.parentNode.parentNode)
					total_num -= 1
					this.numbers.splice(i-1, 1)
				}
			}
			this.total = 0
			this.length = total_num
			if(this.length == 0) {
				this.empty = true
			}
		},
		check: function(num) {
			if(num == 0) {
				let check_id = 'checkbox' + num
				let check_box = document.getElementById(check_id)
				if(!check_box.checked) {
					var total = 0
					this.numbers.forEach(function(val, index, arr) {
						total += arr[index].nums * arr[index].price
					})
					this.total = total
					check_box.nextElementSibling.style.backgroundColor='#4876FF'
					for(let i = 1; i <= this.length; i ++) {
						let id = 'checkbox' + i
						let box = document.getElementById(id)
						box.checked = "checked"
						box.nextElementSibling.style.backgroundColor='#4876FF'
					}
				}else{
					this.total = 0
					check_box.nextElementSibling.style.backgroundColor='#fff'
					for(let i = 1; i <= this.length; i ++) {
						let id = 'checkbox' + i
						let box = document.getElementById(id)
						box.checked = false
						box.nextElementSibling.style.backgroundColor='#fff'
					}
				}
			}else{
				let check_id = 'checkbox' + num
				let check_box = document.getElementById(check_id)
				if(!check_box.checked) {
					this.total += this.numbers[num-1].nums * this.numbers[num-1].price
					check_box.nextElementSibling.style.backgroundColor='#4876FF'
					let flag = 0;
					for(let i = 1; i <= this.length; i ++) {
						let id = 'checkbox' + i
						let box = document.getElementById(id)
						if(box.checked){
							flag += 1
						}
					}
					if(flag == this.length - 1) {
						let id = 'checkbox' + 0
						let box = document.getElementById(id)
						box.checked = "checked"
						box.nextElementSibling.style.backgroundColor='#4876FF'
					}
				}else{
					this.total -= this.numbers[num-1].nums * this.numbers[num-1].price
					check_box.nextElementSibling.style.backgroundColor='#fff'
					let id = 'checkbox' + 0
					let box = document.getElementById(id)
					box.checked = false
					box.nextElementSibling.style.backgroundColor='#fff'
				}
			}
		}
	}
}
</script>

<style lang="scss" scoped>
*{margin: 0; padding: 0; text-decoration: none; color: #333; list-style: none;}
.clearfix:after{content:"."; display:block; height:0; clear:both; visibility:hidden;}
.goods_box{
	width: 100%; min-height: 250px; background-color: #fff;
	.edit_box{
		height: 40px; line-height: 40px;
		p{width: 20%; float: right; display: block; font-size: 1.2em;}
		.check_box{
			float: left; height: 40px; line-height: 40px; width: 15%; position: relative;
			input[type=checkbox]{width: 1.5em; height: 1.5em; vertical-align: middle; visibility: hidden;}
			label{position: absolute; width: 1.5em; height: 1.5em; top: 20%; left: 30%; background: #fff; border:2px solid #ccc; border-radius: 1em;}
		}
	}
	ul{
		padding: 5px 2.5%;
		li{
			padding: 10px 2.5%; margin-bottom: 10px; display: block; width: 95%; height: 79px; border-radius: 5px; background-color: #ccc;
			.check_box{
				float: left; height: 79px; line-height: 79px; width: 15%; position: relative;
				input[type=checkbox]{width: 1.5em; height: 1.5em; vertical-align: middle; visibility: hidden;}
				label{position: absolute; width: 1.5em; height: 1.5em; top: 35%; left: 25%; background: #fff; border:2px solid #ccc; border-radius: 1em;}
			}
			.img_box{width: 20%; height: 79px; background-color: #ccc; float: left; overflow: hidden;}
			.content_box{
				width: 60%; float:left; padding-left: 5%; height: 79px;
				h4{font-size: 1em; width: 100%; text-align: left; margin-bottom: 40px;}
				.price{float: left; font-size: 0.8em;}
				p{text-align: right;}
				.nums{
					.icon-box{float: left; width: 10%; font-size: 1.25em; margin: 0 5%; height: 18px; line-height: 18px;}
					input{float: left; width: 25%; display: block; border: none; height: 18px; text-align: center;}
				}
			}
		}
	}
}
.cart_foot{
	height: 40px; line-height: 40px; background-color: #fff; border-top: 1px solid #999;
	p{
		text-align: left; text-indent: 5%; font-size: 1.5em;
		button{width: 20%; height: 30px; color: #fff; float: right; margin: 5px 5% 0 0;}
	}
}
</style>