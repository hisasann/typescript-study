/**
 * type of interface
 */
// TypeScriptのInterfaceとType aliasの比較 - Qiita - https://qiita.com/tkrkt/items/d01b96363e58a7df830e

// type は型の別名をつける
// interface は型を作る

interface MyType {
  a: number
}

interface MyInterface {
  a: number
}

const b: MyType = {
  a: 1
}

const c: MyInterface = {
  a: 2
}

export {}
