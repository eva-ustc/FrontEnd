<template>
  <!--<div class="home-content">
    <ul class="sui-nav nav-tabs nav-large">
      <li :class="type=='new'?'active':''"><a @click="type='new'">我的提问</a></li>
      <li active-class="active"><a href="#one" data-toggle="tab">我的提问</a></li>
      <li active-class="active"><a href="#two" data-toggle="tab">我的回答</a></li>
    </ul>
    <div class="tab-content tab-wraped">
      <div id="one" class="tab-pane active">
        <ul class="question-list">
          <li><span class="fl good"><span class="num">12</span> 有用</span> <span class="title"><a
            href="#">我的提问有关PHP初级进阶的问题</a></span> <span class="fr date">4月6日</span> <span class="clearfix"></span></li>
          <li><span class="fl good"><span class="num">12</span> 有用</span> <span class="title"><a
            href="#">有关JAVA初级进阶的问题</a></span> <span class="fr date">4月6日</span> <span class="clearfix"></span></li>
          <li><span class="fl good"><span class="num">12</span> 有用</span> <span class="title"><a
            href="#">有关HTML5初级进阶的问题</a></span> <span class="fr date">4月6日</span> <span class="clearfix"></span></li>
          <li><span class="fl good"><span class="num">12</span> 有用</span> <span class="title"><a
            href="#">有关C++初级进阶的问题</a></span> <span class="fr date">4月6日</span> <span class="clearfix"></span></li>
          <li><span class="fl good"><span class="num">12</span> 有用</span> <span class="title"><a href="#">有关python初级进阶的问题</a></span>
            <span class="fr date">4月6日</span> <span class="clearfix"></span></li>
        </ul>
      </div>
      <div id="two" class="tab-pane">
        <ul class="question-list">
          <li><span class="fl good"> <span class="num">8</span> 有用</span> <span class="title"><a
            href="#">我的回答有关PHP初级进阶的问题</a></span> <span class="fr date">2017-07-05 15:08</span> <span
            class="clearfix"></span></li>
          <li><span class="fl good"> <span class="num">7</span> 有用</span> <span class="title"><a
            href="#">有关JAVA初级进阶的问题</a></span> <span class="fr date">2017-07-05 15:08</span> <span
            class="clearfix"></span></li>
          <li><span class="fl good"> <span class="num">6</span> 有用</span> <span class="title"><a
            href="#">有关HTML5初级进阶的问题</a></span> <span class="fr date">2017-07-05 15:08</span> <span
            class="clearfix"></span></li>
          <li><span class="fl good"> <span class="num">12</span> 有用</span> <span class="title"><a
            href="#">有关C++初级进阶的问题</a></span> <span class="fr date">2017-07-05 15:08</span> <span
            class="clearfix"></span></li>
          <li><span class="fl good"> <span class="num">12</span> 有用</span> <span class="title"><a href="#">有关python初级进阶的问题</a></span>
            <span class="fr date">2017-07-05 15:08</span> <span class="clearfix"></span></li>
        </ul>
      </div>
    </div>
    <div class="activities">
      <h4 class="tit"><span>我的动态</span></h4>
      <ul class="activities-content">
        <li>
          <div class="index-title">
            <span class="author">本杰明</span>
            <span class="operate">关注了标签</span> &middot;
            <span class="time">3小时前</span>
          </div>
          <div class="guanzhuname">
            <span class="tag">php</span>
            <span class="tagnum">100</span> 关注
          </div>
          <div class="intro">
            PHP，是英文超文本预处理语言 Hypertext Preprocessor 的缩写。PHP 是一种开源的通用计算机脚本语言，尤其适用于网络开发并可嵌入HTML中使用。PHP
            的语法借鉴吸收C语言、Java和Perl等流行计算机语言的特点，易于一般程序员学习。
          </div>
        </li>
        <li>
          <div class="index-title">
            <span class="author">本杰明</span>
            <span class="operate">回答了问题</span> &middot;
            <span class="time">3小时前</span>
          </div>
          <div class="question">
            <p class="title">网页链接如何直接打开微信，并进入公众号关注页面</p>
            <p class="content">现在针对这个微信是屏蔽的，你可以选择通过连接到一个其他的公众号文章中进行关注。</p>
          </div>
          <div class="qa-num">
            <span>关注<i>1</i></span>
            <span>回答<i>2</i></span>
          </div>
        </li>
        <li>
          <div class="index-title">
            <span class="author">本杰明</span>
            <span class="operate">收藏了文章</span> &middot;
            <span class="time">3小时前</span>
          </div>
          <div class="question">
            <p class="title">网页链接如何直接打开微信，并进入公众号关注页面</p>
          </div>
          <div class="qa-num">
            <span><a href="#">http://baidu.com</a></span>
          </div>
        </li>
        <li>
          <div class="index-title">
            <span class="author">本杰明</span>
            <span class="operate">收藏了文章</span> &middot;
            <span class="time">3小时前</span>
          </div>
          <div class="question">
            <p class="title">网页链接如何直接打开微信，并进入公众号关注页面</p>
          </div>
          <div class="qa-num">
            <span><a href="#">http://baidu.com</a></span>
          </div>
        </li>
        <li>
          <div class="index-title">
            <span class="author">本杰明</span>
            <span class="operate">回答了问题</span> &middot;
            <span class="time">3小时前</span>
          </div>
          <div class="question">
            <p class="title">网页链接如何直接打开微信，并进入公众号关注页面</p>
            <p class="content">现在针对这个微信是屏蔽的，你可以选择通过连接到一个其他的公众号文章中进行关注。</p>
          </div>
          <div class="qa-num">
            <span>关注<i>1</i></span>
            <span>回答<i>2</i></span>
          </div>
        </li>
      </ul>
    </div>
  </div>-->
  <div class="home-content">

    <div class="activities account-type">
      <h4 class="tit"><span>账户设置</span></h4>
      <div class="account-main">


        <div class="account-person">
          <h3>个人账号</h3>
          <ul class="account-info">
            <li><span class="gray index">名字</span>
              <span class="info" v-show="!name_input">{{user.nickname}}</span>
              <form v-show="name_input">
                <input type="text" placeholder="输入姓名" v-model="user.nickname"/>
                <button type='button' class="sui-btn btn-danger save-btn" @click="saveinfo_name()">保存</button>
                <button type='button' class="sui-btn btn-danger save-btn" @click="name_input=false">取消</button>
              </form>
              <span class="gray edit"><a class="fa fa-pencil" aria-hidden="true" @click="name_input=true">编辑</a> </span>
            </li>

            <li><span class="gray index">Email </span>
              <span class="info" v-show="!email_input">{{user.email}}</span>
              <form v-show="email_input" > <!--class="sui-form form-inline"-->
                <input type="text" placeholder="输入邮箱" v-model="user.email"/>
                <button type='button' class="sui-btn btn-danger save-btn" @click="saveinfo_email()">保存</button>
                <button type='button' class="sui-btn btn-danger save-btn" @click="email_input=false">取消</button>
                <!--<button class="sui-btn btn-danger save-btn">保存</button>-->
              </form>
              <span class="gray edit"><a class="fa fa-pencil" aria-hidden="true" @click="email_input=true">编辑</a> </span>
            </li>
            <li><span class="gray index" >手机号码 </span>
              <span class="info" v-show="!phone_input">{{user.mobile}}</span>
              <form v-show="phone_input">
                <input type="text" placeholder="输入手机号码" v-model="user.mobile"/>
                <button type='button' class="sui-btn btn-danger save-btn" @click="saveinfo_phone()">保存</button>
                <button type='button' class="sui-btn btn-danger save-btn" @click="phone_input=false">取消</button>
                <!--<button class="sui-btn btn-danger save-btn">保存</button>-->
              </form>
              <span class="gray edit"><a class="fa fa-pencil" aria-hidden="true" @click="phone_input=true">编辑</a> </span>
            </li>
            <!--<li><span class="gray index">密码 </span> <span class="info">点击修改密码</span>
              <form class="sui-form form-inline">
                <input type="password" placeholder="输入新的密码"/>
                <button class="sui-btn btn-danger save-btn">保存</button>
              </form>
              <span class="gray edit"><a class="fa fa-pencil" aria-hidden="true">编辑</a> </span>
            </li>-->
          </ul>
        </div>
        <div class="account-other">
          <h3>第三方账号</h3>
          <ul class="account-info">
            <li><span class="gray index"><img src="~/assets/img/widget-weixin.png" width="20"/> 微信</span> <span
              class="name">已绑定，解绑</span> <span class="gray check"><i class="fa fa-square-o" aria-hidden="true"></i> 公开显示</span>
            </li>
            <li><span class="gray index"><img src="~/assets/img/widget-QQ.png" width="20"/> QQ</span> <span
              class="name bind">绑定账号</span> <span class="gray check"><i class="fa fa-square-o" aria-hidden="true"></i> 公开显示</span>
            </li>
            <li><span class="gray index"><img src="~/assets/img/widget-weibo.png" width="20"/> 新浪微博 </span> <span
              class="name">已绑定，解绑</span> <span class="gray check"><i class="fa fa-square-o" aria-hidden="true"></i> 公开显示</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  import '~/assets/css/page-sj-person-account.css'
  import userApi from '@/api/user'
  import {getUser} from '@/utils/auth'
  import axios from 'axios'

  export default {
    /*asyncData(){
		  return userApi.info().then(  res=>{
			  return {user: res.data.data }
		  })
	  },*/
    data() {
      return {
        user: {},
        name_input: false,
        email_input: false,
        phone_input: false
      }
    },
    created() {
      userApi.info().then(res => {
        this.user = res.data.data
      })
    },
    methods: {
      saveinfo_name() {
        userApi.saveinfo({'nickname': this.user.nickname}).then(res => {
          this.name_input = false
        })
      },
      saveinfo_email() {
        userApi.saveinfo({'email': this.user.email}).then(res => {
          this.email_input = false
        })
      },
      saveinfo_phone() {
        userApi.saveinfo({'mobile': this.user.mobile}).then(res => {
          this.phone_input = false
        })
      },
      test() {
        axios.get('http://127.0.0.1:8888/?code=1213132131').then(res => {
          alert(JSON.stringify(res.data))
        })
      }
    }
  }
</script>
