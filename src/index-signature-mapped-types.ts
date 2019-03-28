/**
 * インデックスシグネチャ
 */

// key が Mapped Types の場合
// TypeScriptのIndex Signature"{[key:string]:string}"で特定の文字だけのIndexを扱う | I am mitsuruog - https://blog.mitsuruog.info/2019/03/typescript-limited-set-of-index-signature
type Index = 'name' | 'address'

// Error: Property 'address' is missing in type '{ name: string; }' but required in type '{ name: string; address: string; }'.
const user: { [key in Index]?: string } = { name: 'mitsuruog' }

console.log(user['name']) // => mitsuruog

export {}
