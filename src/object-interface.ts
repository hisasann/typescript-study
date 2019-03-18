interface MyObj {
  foo: string
  bar: number
}

// エラー:
// Type '{ foo: string; bar: string; }' is not assignable to type 'MyObj'.
//  Types of property 'bar' are incompatible.
//    Type 'string' is not assignable to type 'number'.
// const a: MyObj = {
//   foo: 'foo',
//   bar: 'BARBARBAR',
// }

// エラー:
// Type '{ foo: string; }' is not assignable to type 'MyObj'.
//  Property 'bar' is missing in type '{ foo: string; }'.
// const b: MyObj = {
//   foo: 'foo',
// }

// https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files
export {}
