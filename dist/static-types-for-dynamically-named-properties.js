/**
 * 索引付けされた型問合せ（indexed type query）
 */
function getProperty(obj, key) {
  return obj[key] // 型はT[K]と推論
}
function setProperty(obj, key, value) {
  obj[key] = value
}
var x = { foo: 10, bar: 'hello!' }
var foo = getProperty(x, 'foo') // number
var bar = getProperty(x, 'bar') // string
export {}
