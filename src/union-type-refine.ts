/**
 * ユニオンタイプの絞り込み
 */

interface Hoge {
  foo: string
  bar: number
}
interface Piyo {
  foo: number
  baz: boolean
}

function hogePiyo(obj: Hoge | Piyo): void {
  // ここではobjはHoge | Piyo型
  if ('bar' in obj) {
    // barプロパティがあるのはHoge型なのでここではobjはHoge型
    console.log('Hoge', obj.bar)
  } else {
    // barプロパティがないのでここではobjはPiyo型
    console.log('Piyo', obj.baz)
  }
}

hogePiyo({
  foo: 'a',
  bar: 1,
} as Hoge)
hogePiyo({
  foo: 1,
  baz: false,
} as Piyo)

// ただし、 Piyo 型に bar が追加された場合
// 必ず Hoge 型として扱われてしまうので、注意が必要です
// つまりあまり使うのは好ましくないでしょう

export {}
