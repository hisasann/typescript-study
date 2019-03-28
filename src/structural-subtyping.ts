/**
 * Structural Subtyping（構造的部分型）（DuckTyping）
 */
// https://qiita.com/tell-k/items/1a93acbb42e39377cd48
// Structural Subtyping(構造的部分型) は、型の構造に着目して、それが派生型であるかどうか判定する
// 型自身が、自らの型を公称しなくても構造的に一致するのであれば、それは派生型として認識する

// --------------------------
interface MyObj {
  foo: string
  bar: number
}

interface MyObj2 {
  foo: string
}

// 一般にこのような場合 MyObj は MyObj2 の部分型であると言います
const a: MyObj = { foo: 'foo', bar: 3 }
const b: MyObj2 = a

// error TS2322: Type '{ foo: string; bar: number; }' is not assignable to type 'MyObj2'.
//  Object literal may only specify known properties, and 'bar' does not exist in type 'MyObj2'.
// const c: MyObj2 = { foo: 'foo', bar: 3 }

// --------------------------
interface IPig {
  bow(): string
}

class Pig implements IPig {
  public bow(): string {
    return 'Bow wow wow'
  }
}

// IPigとは何の関係もないが bowメソッドを持っている
// ので callBow は IPigの派生型として認識する
class Dandy {
  public bow(): string {
    return 'Goood'
  }
  public throwCard(): string {
    return 'Namerunaaaaa!!'
  }
}

function callBow(pig: IPig): void {
  console.log(pig.bow())
}

callBow(new Pig())
callBow(new Dandy())

// Dandy は IPigと全く関係ないクラスだが、IPigが備えるすべてのメソッドが実装されているので、派生型として認識され、callBow 関数が実行可能になる
// 静的にチェックできる DuckTyping と捉える事ができる

// --------------------------
interface Point2D {
  x: number
  y: number
}

const point = {
  x: 0,
  y: 0,
  z: 1 // z は interface に定義されていないが x と y が含まれているので Point2D とみなせる
}

declare function acceptPoint2D(point: Point2D)

acceptPoint2D(point)

export {}
