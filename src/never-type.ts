/**
 * never型
 */
// TypeScriptの型入門 - Qiita - https://qiita.com/uhyo/items/e2fdef2d3236b9bfe74a#never%E5%9E%8B

// switch文にdefaultケースが追加されました
// 実はこの中でobjの型はneverになっています
// なぜなら、それまでのcase文によってobjの可能性が全て調べ尽くされてしまったからです
// これが意味することは、実際にはdefault節が実行される可能性は無く、この中ではobjの値の候補が全く無いということです
// そのような状況を、objにnever型を与えることで表現しています。
interface Some<T> {
  type: 'Some'
  value: T
}

interface None {
  type: 'None'
}

type Option<T> = Some<T> | None

function map<T, U>(obj: Option<T>, f: (obj: T) => U): Option<U> | never {
  switch (obj.type) {
    case 'Some':
      return {
        type: 'Some',
        value: f(obj.value),
      }
    case 'None':
      return {
        type: 'None',
      }
    default:
      // ここでobjはnever型になっている
      return obj
  }
}

map(
  {
    type: 'Some',
    value: 'abc',
  } as Some<string>,
  (o): void => {
    console.log(o)
  }
)

// funcの返り値を変数resultに代入していますが、実際にはresultに何かが代入されることはあり得ません
// ゆえに、resultにはnever型を付けることができるのです
function func(): never {
  throw new Error('Hi')
}

const result: never = func()

export {}
