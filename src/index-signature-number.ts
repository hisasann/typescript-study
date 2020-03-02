/**
 * インデックスシグネチャ
 */

// key が number の場合
interface NumStrDictionary {
  [key: number]: string
}

//初期化
const dic: NumStrDictionary = {
  1: 'いち',
  2: 'に',
}
//更新
dic[10] = 'じゅう'

//取得
console.log(dic[1]) //いち
console.log(dic[10]) //じゅう
console.log(dic[3]) //undefined

export {}
