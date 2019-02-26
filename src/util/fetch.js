import axios from 'axios'

axios.default.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

const fetch = axios.create({
  timeout: 1000 * 60
})

// 请求拦截
fetch.interceptors.request.use(config => {
  // loading......
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截
fetch.interceptors.response.use(config => {
  return config
}, error => {
  // error message
  return Promise.resolve(error)
})

export default fetch
