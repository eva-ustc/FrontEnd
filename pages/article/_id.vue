<template>
  <div class="wrapper headline-content">
    <div class="fl left-list">
      <div class="problem-detail">
        <!-- title area  -->
        <div class="title-intro">
          <h2>{{pojo.title}}</h2>
          <div class="operate">
            <span class="fl author">{{pojo.userid}} 发布　　<span class="time">{{pojo.createtime}}</span></span>
            <span class="fr ">收藏</span>
          </div>
          <div class="clearfix"></div>
          <div class="content">
            <p>{{pojo.content}}</p>
          </div>
        </div>
        <!-- remark area -->
        <div class="answer-intro">
          <h4 class="answer-num">{{commentlist.length}}条评论</h4>
          <div class="comment-box">
            <form class="comment-form sui-form form-inline">
              <img src="~assets/img/widget-photo.jpg" alt="">
              <div class="input-prepend input-append input-box">
                <input id="appendedPrependedInput" type="text" class="span2 input-fat real-box"
                       placeholder="写下你的评论" v-model="content"><span style="cursor: pointer" class="add-on" @click="save">提交</span>
              </div>
            </form>
          </div>
          <div class="remark-list">
            <ul class="lists">
              <li class="item" v-for="(item,index) in commentlist" :key="index">
                <div class="fl img">
                  <img src="~assets/img/widget-photo.jpg" alt="">
                </div>
                <div class="fl text">
                  <p class="author"><span class="name">{{item.nickname}}</span> 发布</p>
                  <p class="word">{{item.content}}</p>
                </div>
                <div style="clear:both"></div>
                <!--<div class="edit-box">
                  <form class="comment-form">
                    <textarea row="1" placeholder="使用评论询问更多信息或提出修改意见，请不要在评论里回答问题"></textarea>
                    <button type="submit" class="sui-btn submit-comment">提交评论</button>
                  </form>
                </div>-->
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import '~/assets/css/page-sj-headline-detail.css'
  import articleApi from '@/api/article'
  import axios from 'axios'

  export default {
    asyncData({params}) {

      return axios.all([articleApi.findById(params.id), articleApi.commentlist(params.id)]).then(
        axios.spread(function (pojo, commentlist) {
          return {
            pojo: pojo.data.data,
            commentlist: commentlist.data.data
          }
        })
      )
    },
    data() {
      return {
        content: '',
      }
    },
    methods: {
      onEditorChange({editor, html, text}) {
        // console.log('editor change!', editor, html, text)
        this.content = html
      },
      save() {
        console.log('save...')
        articleApi.update(this.pojo.id,{content: this.content}).then(res => {
          this.$message({
            message: res.data.message,
            type: (res.data.flag ? 'success' : 'error')
          })
          if (res.data.flag) {
            //刷新数据
            articleApi.commentlist(this.pojo.id).then(res => {
              this.commentlist = res.data.data
            })
          }
        })
      }
    }
  }
</script>

<style>

  .quill-editor {
    min-height: 200px;
    max-height: 400px;
    overflow-y: auto;
  }
</style>
