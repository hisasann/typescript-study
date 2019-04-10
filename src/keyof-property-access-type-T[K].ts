/**
 * プロパティアクセス型 T[K]
 */
// TypeScriptの型入門 - Qiita - https://qiita.com/uhyo/items/e2fdef2d3236b9bfe74a#%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E5%9E%8B-tk
function pick<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

const obj = {
  foo: 'string',
  bar: 123
}

const str: string = pick(obj, 'foo')
const num: number = pick(obj, 'bar')
//  error TS2345: Argument of type '"baz"' is not assignable to parameter of type '"foo" | "bar"'
// pick(obj, 'baz');

export {}
