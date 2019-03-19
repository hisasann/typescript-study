// 型名をFoo<S, T>のようにする、すなわち名前のあとに< >で囲った名前の列を与えることで、型の定義の中でそれらの名前を型変数として使うことができます。
interface Foo<S, T> {
  foo: S
  bar: T
}

const obj: Foo<number, string> = {
  foo: 3,
  bar: 'hi'
}

// func の型
function func<T>(obj: T): void {}

const f: <T>(obj: T) => void = func

// 型引数（func<number>(3)の<number>部分）は省略できます。
function identity<T>(value: T): T {
  return value
}

const value = identity(3)
// エラー: Type '3' is not assignable to type 'string'.
// const str: string = value

export {}
