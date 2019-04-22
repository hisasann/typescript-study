// https://www.typescriptlang.org/docs/handbook/type-compatibility.html
interface Event {
  timestamp: number
}
interface MouseEvent extends Event {
  x: number
  y: number
}
interface KeyEvent extends Event {
  keyCode: number
}

function listenEvent(handler: (n: Event) => void): void {}

// Unsound, but useful and common
listenEvent((e: MouseEvent): void => console.log(e.x + ',' + e.y))

// Undesirable alternatives in presence of soundness
listenEvent(
  (e: Event): void =>
    console.log((e as MouseEvent).x + ',' + (e as MouseEvent).y)
)

listenEvent(
  (e: Event): void => {
    // MouseEvent がきたときは keyCode が undefined
    console.log((e as KeyEvent).keyCode)
    // KeyEvent がきたときは x が undefined
    console.log((e as MouseEvent).x)
  }
)

// Still disallowed (clear error). Type safety enforced for wholly incompatible types
// error TS2345: Argument of type '(e: number) => void' is not assignable to parameter of type '(n: Event) => void'.
//   Types of parameters 'e' and 'n' are incompatible.
//     Type 'Event' is not assignable to type 'number'.
// listenEvent((e: number) => console.log(e));

function makeLowerCase(s: string): string {
  return s.toLowerCase()
}
declare let foo: Promise<string | number>
// error TS2345: Argument of type '(s: string) => string' is not assignable to parameter of type '(value: string | number) => string | PromiseLike<string>'.
//  Types of parameters 's' and 'value' are incompatible.
//    Type 'string | number' is not assignable to type 'string'.
//      Type 'number' is not assignable to type 'string'.
foo.then(makeLowerCase) // this will fail if foo resolves to a number

// let x = (a: number) => 0;
// let y = (b: number, s: string) => 0;
//
// y = x; // OK
//  error TS2322: Type '(b: number, s: string) => number' is not assignable to type '(a: number) => number'.
// x = y; // Error

let items = [1, 2, 3]

// Don't force these extra parameters
items.forEach((item, index, array) => console.log(item))

// Should be OK!
items.forEach(item => console.log(item))

let x = (): any => ({ name: 'Alice' })
let y = (): any => ({ name: 'Alice', location: 'Seattle' })

x = y // OK
// error TS2322: Type '() => { name: string; }' is not assignable to type '() => { name: string; location: string; }'.
// Property 'location' is missing in type '{ name: string; }' but required in type '{ name: string; location: string; }'.
// y = x; // Error, because x() lacks a location property

// ジェネリックスの性質：共変性

class Base {
  public value = 1
}

class Derived extends Base {
  public otherValue = 2
}

class Another extends Base {
  public anotherValue = 3
}

declare let baseArr: Base[]
declare let derivedArr: Derived[]

// 共変性
baseArr = derivedArr

// ジェネリックスは反変性ではないので TypeScript ではエラーになる
// error TS2322: Type 'Base[]' is not assignable to type 'Derived[]'.
//   Property 'otherValue' is missing in type 'Base' but required in type 'Derived'.
// derivedArr = baseArr

// 関数パラメータの性質：双変性

declare let processBase: (base: Base) => void
declare let processDericed: (derived: Derived) => void

// TypeScript では 関数パラメータは双変性になっている
processDericed = processBase // 反変性
processBase = processDericed // 共変性

// ゆえに、ここでランタイムエラー
// processBase(new Another())
