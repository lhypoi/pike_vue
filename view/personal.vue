<template>
<div>
	<div class="personal_head" id="personal_head">
		<!-- 背景图 -->
		<img src="../assets/img/perhead.jpg" height="100%" width="100%" class="bg">
        <a @click="$router.go(-1)" class="back">
            <mt-button icon="back" size="small"></mt-button>
        </a>
		<img src="../assets/img/more1.png" class="more" @click="moreInfo()" v-if="self">
		<!-- 用户信息轮播图 -->
		<div class="info">
			<router-link to="#"><img src="../assets/img/userimg.jpg" height="11.2%" width="20%" class="userimg"></router-link>
			<div class="wenzi">{{this.curUserInfo.user_name}}</div>
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
            <mt-navbar v-model="selected" class="menu_tab">
              <mt-tab-item id="0">
                作品
              </mt-tab-item>
              <mt-tab-item id="1">
                关注
              </mt-tab-item>
              <mt-tab-item id="2">
                收藏
              </mt-tab-item>
            </mt-navbar>
		</div>
		<!-- 作品列表 -->
		<div class="list">
          <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
            <mt-tab-container v-model="selected">
                <!-- 作品 -->
                <mt-tab-container-item id="0" :class="{'works_allload' : !allLoaded}">
                    <div class="worksList clearfix">
                      <router-link v-bind:to="'works/work/'+photo.works_id" v-for="photo in worksInfo"  :key="photo.works_id">
                          <img v-lazy="'http://localhost:82'+photo.works_src" alt="">
                          <br>
                          <br>
                          <p>发于： {{new Date(parseInt(photo.update_time) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ')}}</p>
                          <p>浏览数： {{photo.works_browse ? photo.works_browse : 0}}</p>
                      </router-link>
                    </div>
                </mt-tab-container-item>
            </mt-tab-container>
          </mt-loadmore>
		</div>
		<!-- 底部 -->
		<footbox active=3  v-if="self"></footbox>
		<!-- 弹出框 -->
		<mt-popup v-model="popupVisible" position="bottom" popup-transition="popup-fade" class="actionsheet" style="z-index: 2025;">
	        <div class="actionsheet-list">
	       		<router-link to="#" @click.native="alertSet">
					<img src="../assets/img/set.jpg" height="56" width="56">
					<div class="title">设置</div>
				</router-link>
				<router-link to="#" @click.native="alertEdit">
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
import Vue from 'vue'
import footbox from '../components/footer';
import { Actionsheet } from 'mint-ui';
import iosAlertView from 'vue-ios-alertview'

Vue.use(iosAlertView)
	export default{
        name: 'personal_head',
		data(){
			return{
                selected: '0',
				popupVisible: false,
                self: false,
                curUserInfo: {},
                worksInfo: [],
                selected: '0',
                allLoaded: false
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
        	},
            alertSet: function(e){
                let _this = this
                _this.$iosAlertView({
                  title: '设置',
                  buttons: [
                    {
                      text: '退出当前用户',
                      onClick: function(){
                        _this.$iosConfirm('确定退出当前用户？')
                        .then(function () {
                            localStorage.removeItem('userInfo')
                            _this.$router.push({path: '/preview'});
                        }, function () {
                        })
                      }
                    }
                  ]
                });
            },
            alertEdit: function(e){
                let _this = this
                _this.$iosAlertView({
                  title: '编辑资料',
                  buttons: [
                    {
                      text: '更换昵称',
                      onClick: function(){
                         _this.$iosPrompt({
                          text: '修改昵称',
                          placeholder: '请输入新昵称'
                        }).then(function (value) {
                            console.log(value)
                            _this.$http.get("/api/quser/useredit", {
                                params: {
                                    user_id: _this.$route.params.uid,
                                    user_name: value
                                }
                            }).then(function (rtnD) {
                                console.log(rtnD)
                                localStorage.setItem('userInfo', JSON.stringify(rtnD.data.rearray))
                                this.curUserInfo = rtnD.data.rearray
                                _this.$iosAlert(rtnD.data.msg)
                            })
                        });
                      }
                    },
                    {
                      text: '更换密码',
                      onClick: function(){
                        _this.$iosPrompt({
                          text: '修改密码',
                          placeholder: '请输入新密码'
                        }).then(function (value) {
                            console.log(value)
                            _this.$http.get("/api/quser/useredit", {
                                params: {
                                    user_id: _this.$route.params.uid,
                                    user_pwd: value
                                }
                            }).then(function (rtnD) {
                                console.log(rtnD)
                                localStorage.setItem('userInfo', JSON.stringify(rtnD.data.rearray))
                                this.curUserInfo = rtnD.data.rearray
                                _this.$iosAlert(rtnD.data.msg)
                            })
                        });
                      }
                    },
                    {
                      text: '修改头像',
                      onClick: function(){
                        _this.$iosRemind({
                          text: '此功能内测中',
                          remindDuration: 1000
                        });
                      }
                    }
                  ]
                });

            },
            getWorks: function() {
                this.$http.get("/api/quser/userworks", {
                    params: {
                        user_id: this.$route.params.uid
                    }
                }).then(function (rtnD) {
                    this.worksInfo.push(...rtnD.data.rearray)
                    this.$refs.loadmore.onBottomLoaded()
                    this.allLoaded  = true
                })
            },
            loadBottom: function () {
                console.log(2)
                // this.$refs.loadmore.onBottomLoaded()
            }
    	},
        mounted () {
            // 获取用户数据
            let tempUser = JSON.parse(localStorage.getItem('userInfo'))
            if (parseInt(this.$route.params.uid) === tempUser.user_id) {
                this.self = true
                this.curUserInfo = tempUser
            } else {
                this.$http.get("/api/quser/userinfo", {
                    params: {
                        user_id: this.$route.params.uid
                    }
                }).then(function (rtnD) {
                    this.curUserInfo = rtnD.data.rearray
                })
            }
            this.getWorks()
        },
        computed: {

        },
    	beforeRouteEnter (to, from, next) {
    		if (!localStorage.getItem('userInfo')) {
    			next('/preview')
    		} else {
    			next()
    		}
    	}
	}
</script>
<style lang="scss">
@import "../assets/common.scss";
.personal_head{
	width: 100%;
	color: #fff;
    .back{
        position: absolute;
        top: 1%;
        left: 1%;
    }
    .bg{
        margin:0;
        padding:0;
    }
    .work{
        .menu_tab{
          font-size: 1.5em;
          height: 3.75rem;
          background-color: #222;
          color: #fff;
          .mint-tab-item {
            font-size: 1em !important;
            padding: 0;
            img{
              height: 1em;
            }
          }
          .mint-tab-item-label{
            font-size: 1em !important;
            line-height: 2.5em;
          }
          a{
            color: #888;
          }
          a.is-selected{
            color: #fff !important;
            border-bottom: 2px solid #fff !important;
            margin-bottom: 2px !important;
          }
        }
    }
    .list{
        margin-top:3px;
          .works_allload{
            margin-bottom: 1rem;
          }
        width: 100%;
          .worksList{
            list-style-type: none;
            margin: 0;
            padding: 0;
            flex-flow: row wrap;
            display: flex;
            align-items: center;
            a{
              flex: 1 1 40%;
              display:block;
              padding: 0.5rem;
              margin: 0.5rem;
              border: 1px solid #000;
              img{
                width: 100%;
              }
              p{
                color: #222;
                text-align: left;
              }
            }
          }
          .mint-tab-container-item > div:nth-child(2) {
            margin-top: -1rem;
          }
    }
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
    .info{
        .userimg{
            position: absolute;
            top: 8%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
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
    }
    .mint-header{
        background-color: rgba(0, 0, 0, 0);
    }
    .more{
        position: absolute;
        top: 1%;
        right: 1%;
    }
}


*{margin: 0; padding: 0; text-decoration: none; list-style: none;}

</style>