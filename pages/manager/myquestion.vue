<template>
  <div class="questions">
    <h4><span>我的提问</span></h4>
    <ul class="question-list">
      <li v-for="(item,index) in questionList" :key="index">
        <span class="fl good"> <span class="num"></span> 有用</span>
        <span class="title"><a href="#">{{item.content}}</a></span>
        <span class="fr date">{{item.createtime}}</span>
        <span class="clearfix"></span>
      </li>
    </ul>
  </div>
</template>
<script>
  import '~/assets/css/page-sj-person-myquestion.css'
  import userApi from '@/api/user'

  export default {
    asyncData() {
      return userApi.myquestion().then(res => {
        return {
          questionList: res.data.data.rows
        }
      })
    }
  }
</script>

