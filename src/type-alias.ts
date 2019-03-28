/**
 * タイプエイリアス
 */
// https://qiita.com/tkrkt/items/d01b96363e58a7df830e
// new Map<number, Ship>() など、ジェネリックスの型に意味をもたせるのに使うと読みやすくなるかもしれません

// 交差型
// 引数としてaとbの両方のプロパティを持つオブジェクトを受け取る
type AB = { a: string } & { b: string }
function logAB(arg: AB): void {
  console.log(arg.a + arg.b)
}

// 共用体型
// 引数としてnumberかstringを受け取る
type NumOrStr = number | string
function logLowerCase(arg: NumOrStr): void {
  if (typeof arg === 'number') {
    console.log(arg)
  } else {
    // この時点でargはstring確定
    console.log(arg.toLowerCase())
  }
}

// タプル型
type Tuple = [number, string]
const tuple: Tuple = [1, 'a'] // OK

// callback
// https://www.yoheim.net/blog.php?q=20180420
// numberの別名を定義
type ShipId = number

type ShipValue = Map<ShipId, string>

const map: ShipValue = new Map<1, 'a'>()

// コールバックの型を定義
type CallbackFunction = (ships: ShipValue) => void

function fetch(callback: CallbackFunction): void {
  callback(map)
}

export {}
