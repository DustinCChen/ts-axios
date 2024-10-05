import { AxiosRequestConfig } from './types'
export default function xhr(config: AxiosRequestConfig) {
  const { data = null, url, method = 'get' } = config
  const request = new XMLHttpRequest() //创建一个请求对象
  request.open(method.toUpperCase(), url, true)
  request.send(data)
  // request.onreadystatechange = function ()
}
