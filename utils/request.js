import axios from 'axios'// 创建axios实例
import {getUser} from "./auth";

const service = axios.create({
  baseURL: 'https://www.easy-mock.com/mock/5cfce8654a477a721fb1aff2', // api的base_url
  timeout: 30000, // 请求超时时间
  headers: { 'Authorization':  "Bearer "+getUser().token }
})
export default service
