<template>
  <div class="wrapper qa-content">
    <div class="qa-title">
      <div class="fl title">
        <h2>{{pojo.title}}</h2>
        <p>
          <span class="tag">JAVA</span>
          <span class="author"> {{pojo.nickname}} </span>
          <span>{{pojo.createtime}} 提问 · {{pojo.updatetime}} 更新</span>
        </p>
      </div>
      <div class="fr share">
        <h4>分享到：</h4>
        <ul class="share-go">
          <li><img src="~/assets/img/widget-weibo.png" alt=""></li>
          <li><img src="~/assets/img/widget-weixin.png" alt=""></li>
        </ul>

      </div>
      <div class="clearfix"></div>
    </div>
    <div class="fl left-list">
      <div class="problem-detail">
        <div class="title-intro">
          <!--<div class="sidebar">

            <button type="button" class="like" data-placement="right" data-toggle="tooltip"
                    title="问题对人有帮助，内容完整，我也想知道答案">
              <i class="fa fa-caret-up" aria-hidden="true"></i></button>
            <span class="count">0</span>
            <button type="button" class="hate" data-placement="right" data-toggle="tooltip"
                    title="问题没有实际价值，缺少关键内容，没有改进余地"><i class="fa fa-caret-down" aria-hidden="true"></i></button>

          </div>-->
          <div class="title">
            <div class="detail">
              <p>{{pojo.content}}</p>
            </div>
            <div class="clearfix"></div>
            <div class="operate">
              <span class="time">{{pojo.createtime}}提问</span>
              <span class="comment"><a href="#editor">评论</a></span>
              <!--<span class="edit">编辑</span>-->
              <span class="jubao">举报</span>
            </div>
            <div class="comment-box">
              <form class="comment-form">
                <textarea row="1" placeholder="使用评论询问更多信息或提出修改意见，请不要在评论里回答问题"></textarea>
                <button type="submit" class="sui-btn submit-comment">提交评论</button>
              </form>
              <div class="tips">
                <p>评论支持部分 Markdown 语法：**bold**_italic_[link](http://example.com)> 引用`code`- 列表。 同时，被你 @ 的用户也会收到通知</p>
              </div>
            </div>
          </div>
        </div>

        <div class="answer-intro">
          <h4 class="answer-num">{{total}}个回答</h4>
          <ul>
            <li v-for="(item,index) in commentlist" :key="index">
              <div class="sidebar">
                <button type="button" class="like" data-placement="right" data-toggle="tooltip"
                        title="问题对人有帮助，内容完整，我也想知道答案">
                  <i class="fa fa-caret-up" aria-hidden="true"></i></button>
                <span class="count">0</span>
                <button type="button" class="hate" data-placement="right" data-toggle="tooltip"
                        title="问题没有实际价值，缺少关键内容，没有改进余地"><i class="fa fa-caret-down" aria-hidden="true"></i></button>
              </div>
              <div class="title">
                <p>{{item.content}}</p>
                <div class="operate">
                  <div class="tool pull-left">
                    <span class="time">回复于 {{item.createtime}}</span>
                    <span class="comment">评论</span>
                    <!--<span class="edit">编辑</span>-->
                    <span class="jubao">举报</span>
                  </div>

                  <div class="myanswer pull-right">
                    <img src="~/assets/img/widget-photo.jpg" alt=""> <a href="#">我的回答</a>
                  </div>
                  <div class="clearfix"></div>
                </div>
                <div class="comment-box">
                  <form class="comment-form">
                    <textarea row="1" placeholder="使用评论询问更多信息或提出修改意见，请不要在评论里回答问题"></textarea>
                    <button type="submit" class="sui-btn submit-comment">提交评论</button>
                  </form>
                  <div class="tips">
                    <p>评论支持部分 Markdown 语法：**bold**_italic_[link](http://example.com)> 引用`code`- 列表。 同时，被你 @
                      的用户也会收到通知</p>
                  </div>
                </div>
              </div>
              <div class="clearfix"></div>
            </li>
          </ul>
        </div>

        <div id="editor" class="editor edit-answer">
          <div class="edit-tip">
            <h4>你有更好的想法?秀出你的答案吧</h4>
          </div>
          <div class="quill-editor"
               :content="content"
               @change="onEditorChange($event)"
               v-quill:myQuillEditor="editorOption">
          </div>

          <div class="btns">
            <button class="sui-btn btn-danger btn-release" @click="save">发布</button>
          </div>
          <div class="clearfix"></div>
        </div>

      </div>
    </div>
    <div class="fl right-tag">
      <div class="similar-problem">
        <h3 class="title">相似问题</h3>
        <ul class="problem-list">
          <li class="list-item">
            <p class="list-title">求一份浏览器中html css javascript jquery ajax的渲染顺序与原理！！</p>
            <p class="list-info"><a href="">1 回答</a> | 已解决</p>
          </li>
          <li class="list-item">
            <p class="list-title">求一份浏览器中html css javascript jquery ajax的渲染顺序与原理！！</p>
            <p class="list-info"><a href="">1 回答</a> | 已解决</p>
          </li>
          <li class="list-item">
            <p class="list-title">求一份浏览器中html css javascript jquery ajax的渲染顺序与原理！！</p>
            <p class="list-info"><a href="">1 回答</a> | 已解决</p>
          </li>
          <li class="list-item">
            <p class="list-title">求一份浏览器中html css javascript jquery ajax的渲染顺序与原理！！</p>
            <p class="list-info"><a href="">1 回答</a> | 已解决</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import '~/assets/css/page-sj-qa-detail.css'
  import problemApi from '../../api/problem'
  import replyApi from '../../api/reply'
  import axios from 'axios'

  export default {
    asyncData({params}) {

      return axios.all([problemApi.findById(params.id), replyApi.commentlist(params.id)]).then(
        axios.spread(function (pojo, commentlist) {
          return {
            pojo: pojo.data.data,
            total: commentlist.data.data.total,
            commentlist: commentlist.data.data.rows,
            problemId:params.id
          }
        })
      )
    },
    data() {
      return {
        content: '',
        editorOption: {
          // some quill options
          modules: {
            toolbar: [
              [{'size': ['small', false, 'large']}],
              ['bold', 'italic'],
              [{'list': 'ordered'}, {'list': 'bullet'}],
              ['link', 'image']
            ]
          }
        }
      }
    },
    methods: {
      onEditorChange({editor, html, text}) {
        // console.log('editor change!', editor, html, text)
        this.content = html
      },
      save() {
        replyApi.save({problemId:this.problemId,content: this.content}).then(res => {
          this.$message({
            message: res.data.message,
            type: (res.data.flag ? 'success' : 'error')
          })
          if (res.data.flag) {
            //刷新数据
            replyApi.commentlist(this.pojo.id).then(res => {
              this.commentlist = res.data.data.rows
            })
            this.content=''
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
