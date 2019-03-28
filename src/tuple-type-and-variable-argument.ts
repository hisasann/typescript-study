/**
 * タプル型と可変長引数
 */
// TypeScriptの型入門 - Qiita - https://qiita.com/uhyo/items/e2fdef2d3236b9bfe74a#%E3%82%BF%E3%83%97%E3%83%AB%E5%9E%8B%E3%81%A8%E5%8F%AF%E5%A4%89%E9%95%B7%E5%BC%95%E6%95%B0

// タプル型を関数の可変長引数
type Args = [
  string,
  number,
  boolean
]

const func = (...args: Args) => args[0]

const v = func('foo', 3, false)


// 可変長タプル

type Args2 = [
  string, ...number[]
]

const func2 = (f: string, ...args: Args2) => args[0]

const v1 = func2('foo', 'bar')
const v2 = func2('foo', 'bar', 1, 2, 3, 4)


// 関数呼び出しのspreadとタプル型

const func3 = (str: string, num: number, b: boolean) => str + num

const args3: [string, number, boolean] = ['foo', 3, false];

func3(...args3);

export {}
