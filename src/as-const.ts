/**
 * as const
 */
// TypeScriptの型入門 - Qiita - https://qiita.com/uhyo/items/e2fdef2d3236b9bfe74a#new%E3%82%B7%E3%82%B0%E3%83%8D%E3%83%81%E3%83%A3
// TypeScript3.4 の const assertion - Qiita - https://qiita.com/Takepepe/items/f39c249ed31e546ecb7c

const foo2 = '123' as const

// TypeScript3.4 の const assertion - Qiita - https://qiita.com/Takepepe/items/f39c249ed31e546ecb7c
// TypeScript - WideningLiteralTypes - - Qiita - https://qiita.com/Takepepe/items/2c06f65a51a12ffe4d61
const widening = 'LITERAL_TYPES_TEST'
const nonwidening = 'LITERAL_TYPES_TEST' as const
const check = {
  widening,
  nonwidening,
}
check.widening = 'hoge'
// error TS2322: Type '"foo"' is not assignable to type '"LITERAL_TYPES_TEST"'
// check.nonwidening = 'foo'

// obj は { foo: string; bar: number[] } 型
const obj = {
  foo: '123',
  bar: [1, 2, 3],
}

/*
 obj2 は
 {
     readonly foo: "123";
     readonly bar: readonly [1, 2, 3];
 }
 型
*/
const obj2 = {
  foo: '123',
  bar: [1, 2, 3],
} as const

export {}
