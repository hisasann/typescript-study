/**
 * ジェネリックス
 */

// func の型
function func<T>(obj: T): void {}
func<string>('a')

const f: <T>(obj: T) => void = func
f<number>(1)

function identity<T>(value: T): T {
  return value
}
console.log(identity<number>(3))
// 型引数 `func<number>(3)の<number>部分` は省略できます（型推論）
const value = identity(3)

// error TS2322: Type '3' is not assignable to type 'string'.
// const str: string = value

function fn<T extends { x: number }>(value: T): number {
  return value.x + 1
}
fn({
  x: 0,
  y: 1,
})

export {}
