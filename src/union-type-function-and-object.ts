/**
 * union型を持つ関数との関係
 */
// TypeScriptの型入門 - Qiita - https://qiita.com/uhyo/items/e2fdef2d3236b9bfe74a#union%E5%9E%8B%E3%82%92%E6%8C%81%E3%81%A4%E9%96%A2%E6%95%B0%E3%81%A8%E3%81%AE%E9%96%A2%E4%BF%82

type Func = (arg: number) => number

interface MyObj {
  prop: string
}

const obj: Func | MyObj = { prop: '' }

// error TS2349: Cannot invoke an expression whose type lacks a call signature. Type 'MyObj' has no compatible call signatures.
// obj(123)

export {}
