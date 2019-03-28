/**
 * オブジェクトインターフェイス
 */

interface MyObj {
  foo: string
  bar: number
}

// error TS2322: Type 'string' is not assignable to type 'number'
// const a: MyObj = {
//   foo: 'foo',
//   bar: 'BARBARBAR',
// }

// error TS2741: Property 'bar' is missing in type '{ foo: string; }' but required in type 'MyObj'
// const b: MyObj = {
//   foo: 'foo',
// }

export {}
