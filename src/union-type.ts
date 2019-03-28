/**
 * ユニオンタイプ
 */

// パイプで複数の型を指定した型
type UnionType = string | number

const a: UnionType = 'a'
const b: UnionType = 1

// error TS2322: Type 'true' is not assignable to type 'UnionType'
// const c: UnionType = true

export {}
