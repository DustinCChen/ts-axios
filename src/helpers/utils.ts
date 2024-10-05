const toString = Object.prototype.toString
export function isDate(val: any): val is Date {
  // 谓词保护
  return toString.call(val) === '[object Date]'
}

export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}

export function isComplexObject(val: any): val is Object {
  return toString.call(val) === '[object Array]' || isPlainObject(val)
}
