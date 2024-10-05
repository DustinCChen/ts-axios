export type TMethod =
  | 'GET'
  | 'get'
  | 'POST'
  | 'post'
  | 'PUT'
  | 'put'
  | 'DELETE'
  | 'delete'
  | 'PATCH'
  | 'patch'
  | 'HEAD'
  | 'head'
  | 'OPTIONS'
  | 'options'

export interface AxiosRequestConfig {
  url: string
  method?: TMethod
  data?: any
  headers?: any
  params?: any
}
