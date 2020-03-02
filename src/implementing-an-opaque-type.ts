/**
 * Valid な Email （String）型をどう定義するか
 */
// Implementing an opaque type in typescript - https://evertpot.com/opaque-ts-types/
// TypeScript 3.7の`asserts x is T`型はどのように危険なのか - Qiita - https://qiita.com/uhyo/items/b8d2ea6fbf6214fc4194

declare const validEmail: unique symbol

type Email = string & {
  [validEmail]: true
}

export type User = {
  firstName: string
  lastName: string
  email: Email
}

function save(user: User): void {}

function assertValidEmail(input: string): asserts input is Email {
  if (!input.includes('@')) {
    throw new Error(`The string: ${input} is not a valid email address`)
  }
}

const email = 'foo@example.org'
assertValidEmail(email)
const user: User = {
  firstName: 'Evert',
  lastName: 'Pot',
  email,
}

save(user)

export {}
