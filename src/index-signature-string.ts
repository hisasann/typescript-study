/**
 * インデックスシグネチャ
 */
// https://qiita.com/aakasaka/items/0b081c90b1b99b82143c

// key が string の場合
interface StrStrDictionary {
  [key: string]: string
}

const dic: StrStrDictionary = {}

dic.hoge = 'ほげ'
dic['huga'] = 'ふが'

console.log(dic['hoge']) //ほげ
console.log(dic.huga) //ふが

export {}
