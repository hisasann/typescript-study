/**
 * 索引付けされた型問合せ（indexed type query）
 */

// Static types for dynamically named properties by ahejlsberg · Pull Request #11929 · Microsoft/TypeScript - https://github.com/Microsoft/TypeScript/pull/11929

interface Thing {
  name: string
  width: number
  height: number
  inStock: boolean
}

type K1 = keyof Thing // 'name' | 'width' | 'height' | 'inStock'
type K2 = keyof Thing[] // 'length' | 'push' | 'pop' | 'concat' | ...
type K3 = keyof { [x: string]: Thing } // string

/**
 * 索引付けされたアクセス型（indexed access types） or ルックアップ型（lookup types）
 */

// 要素へのアクセスのように見えるが、実際には型が抽出されている
type P1 = Thing['name'] // string
type P2 = Thing['width' | 'height'] // number
type P3 = Thing['name' | 'inStock'] // string | boolean
type P4 = string['charAt'] // (pos: number) => string
type P5 = string[]['push'] // (...items: string[]) => number
type P6 = string[][0] // string

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key] // 型はT[K]と推論
}
function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value
}
const x = { foo: 10, bar: 'hello!' }
const foo = getProperty(x, 'foo') // number
const bar = getProperty(x, 'bar') // string
// let oops = getProperty(x, 'wargarbl'); // Error! 'wargarbl' is not 'foo' | 'bar'
// setProperty(x, 'foo', 'string'); // Error!, string expected number

export {}
