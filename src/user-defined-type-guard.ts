/**
 * 型の保護
 */
// Deep Dive Into TypeScript - Speaker Deck - https://speakerdeck.com/brn/deep-dive-into-typescript?slide=40

function isString(x: any): x is string {
  return typeof x === 'string'
}

console.log(isString('a')) // true
console.log(isString(1)) // false
console.log(isString(false)) // false

export {}
