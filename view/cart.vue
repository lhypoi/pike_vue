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
						<input type="checkbox" id="checkbox0" value="0" :checked="select_all.length >= cartList.length" v-model=llo />
						<label for="checkbox0" v-on:click="check(0)" :style="'background-color: '+select_all_color"></label>
					</div>
					<p v-on:click="do_edit">{{state}}</p>
				</div>
				<ul>
					<li class="clearfix" v-for="(cart, index) in cartList">
						<div class="check_box">
							<input type="checkbox" :id="'checkbox' + (index + 1)" :value="cart"  v-model="select_all" />
							<label :for="'checkbox' + (index + 1)" :style="'background-color:'+check_style[index]" v-on:click="check(index+1)"></label>
						</div>
						<div class="img_box">
							<img :src="imgList[index].goods_img" v-adjust="img_adjust" />
						</div>
						<div class="content_box clearfix">
							<h4 v-text="limit(cart.goods_name)"></h4>
							<div class="price" v-if="edit==false">￥{{cart.goods_price}}</div>
							<p v-if="edit==false">x{{cart.goods_num}}</p>
							<div class="nums clearfix">
								<div class="fl icon-box" v-if="edit==true" v-on:click="minus(cart)">
									<i class="fa fa-minus-circle"></i>
								</div>
								<input type="text" v-if="edit==true" :value=cart.goods_num disabled />
								<div class="fl icon-box" v-if="edit==true" v-on:click="plus(cart)">
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
				<mt-button type="primary" size="small" v-if="edit==false" v-on:click="confirm">结算</mt-button>
				<mt-button type="danger" size="small" v-if="edit==true" v-on:click="del">删除</mt-button>
			</p>
		</div>
	</div>
</template>

<script type="es6">
import {mapMutations, mapState} from 'vuex'
import headbox from '../components/header'
import Vue from 'vue'
import {Toast} from 'mint-ui'
import cube from '../router/kuayu.js'
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
			llo: false,
			img_adjust: '',
			total: 0,
			state: '编辑',
			cartList: [],
			imgList: [],
			check_list: [],  //复选框状态
			check_style: [],  //复选框样式
			select_all: [],  //全选的状态
			select_all_color: '#fff',  //全选的样式
			check_goods: []  //存放商品信息
		}
	},
	components:{
		headbox
	},
	computed: {
		//...mapState(['cartList']),
		totalPrice: function() {
			let tPrice=0
			this.checkGoods.forEach((item)=>{
				tPrice += Number(item.cur_attr_info.price) * Number(item.num)
			})
			return tPrice
		},
		totalNum:function  () {
			let tNum=0
			this.checkGoods.forEach((item)=>{
					tNum+=Number(item.num)
			})
			return tNum
		},
	},
	mounted() {
		this.init()
	},
	methods: {
		//...mapMutations(['setBuyList']),
		init: function() {
			let u_id = JSON.parse(localStorage.getItem('userInfo')).user_id
			this.$http.jsonp(cube+'/public/api/goods/getCartInfo', {params:{id:u_id}}).then((rtnD)=>{
				this.cartList = rtnD.body.goods_attr
				this.imgList = JSON.parse(JSON.stringify(this.cartList))
				for(let i = 0; i < this.cartList.length; i ++) {
					let img = this.cartList[i].goods_img
					if(this.imgList[i].goods_img.indexOf(cube) < 0) {
						this.imgList[i].goods_img = cube + img
					}
				}
				for(let i = 0; i < this.cartList.length; i ++) {
					this.check_list.push(false)
					this.check_style.push('#fff')
				}
				if(this.cartList.length == 0) {
					this.empty = true
				}
			})
		},
		do_edit: function() {
			if(!this.edit) {
				this.state = '完成'
				this.edit = true
			}else {
				let u_id = localStorage.user_id
				for(let i = 0; i < this.cartList.length; i ++) {
					let g_id = this.cartList[i].goods_id
					let nums = this.cartList[i].goods_num
					this.$http.jsonp(cube+'/public/api/goods/updateCart', {params:{u_id:u_id, g_id: g_id, nums: nums}}).then((rtnD)=>{
						this.state = '编辑'
						this.edit = false
					})
				}
			}
		},
		minus: function(info) {
			if(info.goods_num > 1) {
				info.goods_num -= 1
			}
		},
		plus: function(info) {
			if(info.goods_num < info.goods_number) {
				info.goods_num += 1
			}
		},
		del: function() {
			for(let i = 0; i <= this.cartList.length; i ++) {
				let index = this.get_index(this.cartList[i])
				if(index > -1) {
					let id = 'checkbox' + (i + 1)
					let box = document.getElementById(id)
					if(box.checked) {
						box.parentNode.parentNode.parentNode.removeChild(box.parentNode.parentNode)
						let u_id = localStorage.user_id
						let g_id = this.cartList[i].goods_id
						this.$http.jsonp(cube+'/public/api/goods/delGoods', {params:{u_id:u_id, goods_id: g_id}}).then((rtnD)=>{
							console.log(rtnD)
							if(rtnD) {
								this.cartList.splice(i-1, 1)
								this.total = 0
								if(this.cartList.length == 0) {
									this.empty = true
								}
							}
						})
					}
				}
			}
		},
		all_select: function() {
			if(this.select_all.length >= this.cartList.length) {
				this.total = 0
				this.select_all_color = '#fff'
				this.select_all = []
				for(let i = 1; i <= this.cartList.length; i ++) {
					this.check_style[i-1] = '#fff'
					this.check_list[i-1] = false
				}
				this.check_goods = []
				this.llo = true
			}else{
				var total = 0
				this.cartList.forEach(function(val, index, arr) {
					total += arr[index].goods_num * arr[index].goods_price
				})
				this.total = total
				this.select_all_color = '#4876FF'
				this.cartList.forEach((item)=> {
					this.select_all.push(item)
					this.check_goods.push(item)
				})
				for(let i = 1; i <= this.cartList.length; i ++) {
					this.check_style[i-1] = '#4876FF'
					this.check_list[i-1] = true
				}
				this.llo = false
			}
		},
		check: function(num) {
			if(num == 0) {
				this.all_select()
			}else{
				if(!this.check_list[num-1]) {
					this.total += this.cartList[num-1].goods_num * this.cartList[num-1].goods_price
					this.check_list[num-1] = true
					this.check_style[num-1] = '#4876FF'
					let flag = 0;
					for(let i = 0; i < this.cartList.length; i ++) {
						if(this.check_list[i]){
							flag += 1
						}
					}

					if(flag == this.cartList.length) {
						this.llo = true
						this.select_all_color = '#4876FF'
					}
					this.check_goods.push(this.cartList[num-1])
				}else{
					this.total -= this.cartList[num-1].goods_num * this.cartList[num-1].goods_price
					this.check_list[num-1] = false
					this.check_style[num-1] = '#fff'
					this.select_all_color = '#fff'
					this.llo = false
					let index = this.get_index(this.cartList[num-1])
					if(index > -1) {
						this.check_goods.splice(index, 1)
					}
				}
			}
		},
		get_index: function(val) {
			for(let i = 0; i < this.check_goods.length; i ++) {
				if(this.check_goods[i] == val) {
					return i
				}
			}
			return -1
		},
		confirm: function() {
			let check_goods = this.check_goods
			if(check_goods.length) {
				let user_id = this.cartList[0].user_id
				let time = (new Date()).valueOf()
				let sn = time.toString() + user_id
				let total_num = 0
				let total_price = 0
				for(let i = 0; i < check_goods.length; i ++) {
					total_num += check_goods[i].goods_num
					total_price += check_goods[i].goods_num * this.check_goods[i].goods_price
				}
				let data = {}
				data.order_sn = sn
				data.total_num = total_num
				data.total_price = total_price
				data.time = time
				data.receive_id = user_id
				this.$http.jsonp(cube+'/public/api/goods/submitOrder', {params:{data: data}}).then((rtnD)=>{
					if(rtnD.body.result) {
						this.$http.jsonp(cube+'/public/api/goods/submitOrderGoods', {params:{data: check_goods, sn: sn}}).then((rtn)=>{
							this.$router.push({path: '/cart/confirm/' + sn})
						})
					}
				})
			}else{
				Toast('未选择结算商品')
			}
		},
		limit: function(txt) {
			var str = txt
			if(str.length > 20) {
				str = str.substr(0, 20) + '...'
			}
			return str
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
			label{position: absolute; width: 1.5em; height: 1.5em; top: 20%; left: 50%; background: #fff; border:2px solid #ccc; border-radius: 1em;}
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
	height: 45px; line-height: 45px; background-color: #fff; border-top: 1px solid #999;
	p{
		text-align: left; text-indent: 5%; font-size: 1.5em;
		button{width: 25%; height: 35px; color: #fff; float: right; margin: 5px 5% 0 0; font-size: 1em;}
	}
}
</style>