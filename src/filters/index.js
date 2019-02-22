/**
 * 过滤器
 */

// 首字母大写
export function capitalize (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
}
