<template>
    
  <div>
          
    <header>
      <div class="wrapper">
        <div class="sui-navbar">
          <div class="navbar-inner">
            <a href="/" class="sui-brand"><img src="~/assets/img/ustc_logo.png" alt="社交"/></a>
            <ul class="sui-nav">
              <router-link tag="li" to="/" active-class="active" exact><a>首页</a></router-link>
              <router-link tag="li" to="/qa" active-class="active"><a>问答</a></router-link>
              <router-link tag="li" to="/gathering" active-class="active"><a>活动</a></router-link>
              <!--<router-link tag="li" to="/friend" active-class="active"><a>交友</a></router-link>-->
              <router-link tag="li" to="/spit" active-class="active"><a>吐槽</a></router-link>
              <router-link tag="li" to="/recruit" active-class="active"><a>招聘</a></router-link>
            </ul>
            <form class="sui-form sui-form pull-left">
              <input type="text" placeholder="输入关键词..."/>
              <span class="btn-search fa fa-search"></span>
            </form>
            <div class="sui-nav pull-right info" v-if="user.name!==undefined">
              <li><a href="/manager" class="notice">{{user.name}}</a></li>
              <li><a @click="logout" class="notice">退出登陆</a></li>
              <li><a href="/manager"  class="homego"><img :src="user.avatar" width="50px" height="50px" :alt="user.name" /></a></li>
            </div>
            <div class="sui-nav pull-right info" v-if="user.name===undefined">
              <router-link to="/login"><li style="font-size: 15px">登陆</li></router-link>
            </div>
            <!--<div class="sui-nav pull-right info">
              &lt;!&ndash;<li><a href="~/assets/other-notice.html" target="_blank" class="notice">通知</a></li>
              <li><a href="~/assets/other-notice.html" target="_blank" class="notice">{{user.name}}</a></li>&ndash;&gt;
              <li class="hover"><span class="fa fa-plus "></span>
                <ul class="hoverinfo">
                  <li><i class="fa fa-share-alt" aria-hidden="true"></i> <a href="~/assets/headline-submit.html">去分享</a>
                  </li>
                  <li><i class="fa fa-question-circle" aria-hidden="true"></i> <a href="~/assets/qa-submit.html"
                                                                                  target="_blank">提问题</a></li>
                  <li><i class="fa fa-comments" aria-hidden="true"></i><a href="~/assets/spit-submit.html"
                                                                          target="_blank">去吐槽</a></li>
                  <li><i class="fa fa-heartbeat" aria-hidden="true"></i> <a href="~/assets/makeFriends-submit.html"
                                                                            target="_blank">发约会</a></li>
                </ul>
              </li>
              &lt;!&ndash;<li><a href="~/assets/person-homepage.html" target="_blank" class="homego"><img
                src="~/assets/img/widget-photo.png" alt="用户头像"/></a></li>&ndash;&gt;
            </div>-->
          </div>
        </div>
      </div>
    </header>
            
    <nuxt/>
          
    <footer>
      <div class="footer">
        <div class="wrapper">
          <div class="footer-bottom">
            <div class="link">
              <dl>
                <dt>
                  网站相关
                </dt>
                <dd>
                  关于我们
                </dd>
                <dd>
                  服务条款
                </dd>
                <dd>
                  帮助中心
                </dd>
                <!--<dd>
                  编辑器语法
                </dd>-->
              </dl>
              <dl>
                <dt>
                  常用链接
                </dt>
                <dd>
                  Github
                </dd>
                <dd>
                  LeetCode
                </dd>
              </dl>
              <dl>
                <dt>
                  联系我们
                </dt>
                <dd>
                  联系我们
                </dd>
                <dd>
                  加入我们
                </dd>
                <dd>
                  建议反馈
                </dd>
              </dl>
              <dl>
                <dt>
                  关注我们
                </dt>
                <dd>
                  微博
                </dd>
                <dd>
                  微信公众号
                </dd>
              </dl>
              <div class="xuke">
                <!--<h3>内容许可</h3>
                <p>除特别说明外，用户内容均采用知识共享署名-非商业性使用-禁止演绎4.0 国际许可协议 (CC BY-NC-ND 4.0) 进行许可</p>
                <p>本站由 传智研究院 提供更新服务</p>-->
                <p>
                  版权所有 ©2019 中国科学技术大学
                  地址：安徽省合肥市金寨路 96 号，邮政编码：230026
                  联系我们 皖ICP备05002528号
                </p>
              </div>
            </div>
            <p class="Copyright">Copyright &copy; 2019 中国科学技术大学 当前版本 1.0.0</p>
          </div>
        </div>
      </div>
    </footer>
      
  </div>
</template>
<script>
  import '~/assets/plugins/normalize-css/normalize.css'
  import '~/assets/plugins/yui/cssgrids-min.css'
  import '~/assets/plugins/sui/sui.min.css'
  import '~/assets/plugins/sui/sui-append.min.css'
  import '~/assets/plugins/font-awesome/css/font-awesome.min.css'
  import '~/assets/css/widget-base.css'
  import '~/assets/css/widget-head-foot.css'
  import {getUser,removeUser} from "../utils/auth"

  export default {
    data(){
      return {
        user:{}
      }
    },
    created(){
      this.user = getUser()
    },
    methods:{
      logout(){
        removeUser()
        location.href='/'
      }
    }
  }
</script>
