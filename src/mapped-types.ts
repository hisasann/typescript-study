/**
 * Mapped Types
 */
// TypeScript 2.1のkeyofとかMapped typesがアツい - Qiita - https://qiita.com/Quramy/items/e27a7756170d06bef22a

interface Item {
  a: string
  b: number
  c: boolean
}

type T1 = { [P in 'x' | 'y']: number } // { x: number, y: number }
type T2 = { [P in 'x' | 'y']: P } // { x: "x", y: "y" }
type T3 = { [P in 'a' | 'b']: Item[P] } // { a: string, b: number }
type T4 = { [P in keyof Item]: Date } // { a: Date, b: Date, c: Date }
type T5 = { [P in keyof Item]: Item[P] } // { a: string, b: number, c: boolean }
type T6 = { readonly [P in keyof Item]: Item[P] } // { readonly a: string, readonly b: number, readonly c: boolean }
type T7 = { [P in keyof Item]: Item[P][] } // { a: string[], b: number[], c: boolean[] }

interface User {
  age: number
}

type Freeze<T> = { readonly [P in keyof T]: T[P] }

let frozenUser: Freeze<User>
// frozenUser.age = 18; // error TS2540: Cannot assign to 'age' because it is a constant or a read-only property.

export {}
