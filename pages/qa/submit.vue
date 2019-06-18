<template>
  <!-- <div class="wrapper release-tc">
	 <div class="input-title">
	   <input type="text" placeholder="标题：一句话说清问题，用问号结尾" class="input-xfat input-xxlarge title">
	 </div>
	 <div class="tags-area">
	   <div class="input-tags">
		 <input type="text" placeholder="标签，如:php可使用逗号，分号； 来分隔" class="input-xfat input-xxlarge" id="tags">
	   </div>
	   <div class="tags-box">
		 <ul class="sui-tag tag-bordered">
		   <li class="tag-item">javascript</li>
		   <li class="tag-item">php</li>
		   <li class="tag-item">css</li>
		   <li class="tag-item">html</li>
		   <li class="tag-item">java</li>
		   <li class="tag-item">python</li>
		   <li class="tag-item">html5</li>
		   <li class="tag-item">node.js</li>
		   <li class="tag-item">c++</li>
		 </ul>
	   </div>
	 </div>
	<div class="release-box">
	 <h3>发布吐槽</h3>
	 <div class="editor">
	  <div class="quill-editor"
		  :content="content"
		  @change="onEditorChange($event)"
		  @blur="onEditorBlur($event)"
		  @focus="onEditorFocus($event)"
		  @ready="onEditorReady($event)"
		  v-quill:myQuillEditor="editorOption">
	  </div>

	  <div class="btns">
	   <button class="sui-btn btn-danger btn-release" @click="save">发布</button>
	  </div>
	  <div class="clearfix"></div>
	 </div>
	</div>
	<div class="clearfix"></div>
   </div>-->
  <div class="wrapper release-tc">
    <div class="release-box sui-form">
      <div class="input-title">
        <input type="text" v-model="title" placeholder="标题：一句话说清问题，用问号结尾" class="input-xfat input-xxlarge title">
      </div>
      <!--<div class="tags-area">
        <div class="input-tags">
          <input type="text" placeholder="标签，如:php可使用逗号，分号； 来分隔" class="input-xfat input-xxlarge" id="tags">
        </div>
        <div class="tags-box">
          <ul class="sui-tag tag-bordered">
            <li class="tag-item">javascript</li>
            <li class="tag-item">php</li>
            <li class="tag-item">css</li>
            <li class="tag-item">html</li>
            <li class="tag-item">java</li>
            <li class="tag-item">python</li>
            <li class="tag-item">html5</li>
            <li class="tag-item">node.js</li>
            <li class="tag-item">c++</li>
          </ul>
        </div>
      </div>-->
      <br>
      <div class="editor ">
        <div class="quill-editor"
             :content="content"
             @change="onEditorChange($event)"
             @blur="onEditorBlur($event)"
             @focus="onEditorFocus($event)"
             @ready="onEditorReady($event)"
             v-quill:myQuillEditor="editorOption">
        </div>

        <div class="btns">
          <button class="sui-btn btn-danger btn-release" @click="save">发布</button>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import '~/assets/css/page-sj-spit-submit.css'
  import problemApi from '@/api/problem'
  import {quillRedefine} from 'vue-quill-editor-upload'

  export default {
    data() {
      return {
        title: '',
        content: '',
        editorOption: {
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
    /*created(){
      this.editorOption=quillRedefine({
        uploadConfig:{
          action: 'http://localhost:3000/upload',
          res: (response) =>{
            return response.info
          },
          name: 'img'  //图片上传参数
        }
      })
    },*/
    mounted() {
      console.log('app init, my quill insrance object is:', this.myQuillEditor)
      /*setTimeout(() => {
        this.content = 'i am changed'
      }, 3000)*/
    },
    methods: {
      onEditorBlur(editor) {
        console.log('editor blur!', editor)
      },
      onEditorFocus(editor) {
        console.log('editor focus!', editor)
      },
      onEditorReady(editor) {
        console.log('editor ready!', editor)
      },
      onEditorChange({editor, html, text}) {
        console.log('editor change!', editor, html, text)
        this.content = html
      },
      save() {
        console.log(this.title);
        problemApi.save({title: this.title, content: this.content}).then(res => {
          this.$message({
            message: res.data.message,
            type: (res.data.flag ? 'success' : 'error')
          })
          if (res.data.flag) {
            this.$router.push('/qa')
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
