import request from '@/utils/request'
const group_name = 'qa'
const api_name = 'reply'
export default {
  commentlist(problemId){
    return request({
      url: `/${group_name}/${api_name}/commentlist/${problemId}`,
      method: 'get'
    })
  },
  save(pojo) {
    return request({
      url: `/${group_name}/${api_name}`,
      method: 'post',
      data: pojo
    })
  }
}
