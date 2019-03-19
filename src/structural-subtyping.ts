// https://qiita.com/tell-k/items/1a93acbb42e39377cd48
// Structural Subtyping（構造的部分型）

interface MyObj {
  foo: string
  bar: number
}

interface MyObj2 {
  foo: string
}

// 一般にこのような場合MyObjはMyObj2の部分型であると言います。
const a: MyObj = { foo: 'foo', bar: 3 }
const b: MyObj2 = a

// エラー:
// Type '{ foo: string; bar: number; }' is not assignable to type 'MyObj2'.
//  Object literal may only specify known properties, and 'bar' does not exist in type 'MyObj2'.
// const c: MyObj2 = { foo: 'foo', bar: 3 }

export {}
