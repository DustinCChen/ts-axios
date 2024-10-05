import { isDate, isPlainObject } from './utils'

export function buildURL(url: string, params?: any): string {
  if (!params) {
    return url //保持url不变
  }
  /**
   * 将对象转为字符串
   * 遍历对象，将属性名和属性值拼接到url后面
   */
  const parts: string[] = []
  Object.keys(params).forEach(key => {
    const val = params[key]
    if (val === null || typeof val === 'undefined') {
      return
    }
    let values: string[]
    if (Array.isArray(val)) {
      values = val
      key += '[]'
    } else {
      values = [val]
    }
    values.forEach(val => {
      if (isDate(Date)) {
        val = val.toISOString()
      }
    })
  })
  // const serializedParams = serialize(params)

  // if (serializedParams) {
  //     const hashmarkIndex = url.indexOf('#')
  //     if (hashmarkIndex !== -1) {
  //         url = url.slice(0, hashmarkIndex)
  //     }
  //     url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
  // }

  // return url
}
