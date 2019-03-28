/**
 * intersection型（交差型）
 */
// TypeScriptの型入門 - Qiita - https://qiita.com/uhyo/items/e2fdef2d3236b9bfe74a#intersection%E5%9E%8B%E4%BA%A4%E5%B7%AE%E5%9E%8B

interface Hoge {
  foo: string
  bar: number
}
interface Piyo {
  foo: string
  baz: boolean
}

// 2つの型T, Uに対してT & Uと書くと、TでもありUでもあるような型を表します
const obj: Hoge & Piyo = {
  foo: 'foooooooo',
  bar: 3,
  baz: true
}

// Hoge & PiyoというのはHogeでもありPiyoでもある型を表します
// ですから、この型の値はstring型のプロパティfooとnumber型のプロパティbarを持ち、さらにboolean型のプロパティbazを持つ必要があります

export {}
