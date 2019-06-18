<template>
  <div class="answers">
    <h4><span>我的回答</span></h4>
    <ul class="answer-list">
      <li v-for="(item,index) in answerList" :key="index">
        <span class="fl good"> <span class="num"></span> 有用</span>
        <span class="title"><a href="#">{{item.content}}</a></span>
        <span class="fr date">{{item.createtime}}</span>
        <span class="clearfix"></span>
      </li>
    </ul>
  </div>
</template>
<script>
  import '~/assets/css/page-sj-person-myanswer.css'
  import userApi from '@/api/user'

  export default {
    asyncData() {
      return userApi.myanswer().then(res => {
        return {
          answerList: res.data.data.rows
        }
      })
    }

  }
</script>

