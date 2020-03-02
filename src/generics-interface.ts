/**
 * ジェネリックス
 */

// 型名を `Foo<S, T>` のようにする
// すなわち名前のあとに <> で囲った名前の列を与えることで、型の定義の中でそれらの名前を `型変数` として使うことができます
interface Foo<S, T> {
  foo: S
  bar: T
}

const obj: Foo<number, string> = {
  foo: 3,
  bar: 'hi',
}

export {}
