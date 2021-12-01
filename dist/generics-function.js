/**
 * ジェネリックス
 */
// func の型
function func(obj) {}
func('a')
var f = func
f(1)
function identity(value) {
  return value
}
console.log(identity(3))
// 型引数 `func<number>(3)の<number>部分` は省略できます（型推論）
var value = identity(3)
// error TS2322: Type '3' is not assignable to type 'string'.
// const str: string = value
function fn(value) {
  return value.x + 1
}
fn({
  x: 0,
  y: 1,
})
export {}
