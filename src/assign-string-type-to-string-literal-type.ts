/**
 * string 型を文字列リテラル型に代入
 */

const hoge = 'hoge'

// string 型と文字列リテラル型は全く別物のため代入できません
// error TS2322: Type 'string' is not assignable to type '"foo"'
// const foo: 'foo' = hoge

export {}
