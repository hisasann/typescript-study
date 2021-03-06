/**
 * TaggedUnion
 */

type A = number
type B = string

interface TypeA {
  kind: 'type-a'
  typeAValue: A
}

interface TypeB {
  kind: 'type-b'
  typeBValue: B
}

type AValue = TypeA['typeAValue']
type BValue = TypeB['typeBValue']

function processAB(value: TypeA | TypeB): AValue | BValue {
  switch (value.kind) {
    case 'type-a':
      return value.typeAValue
    case 'type-b':
      return value.typeBValue
    default:
      throw new Error('Undefined type.')
  }
}

processAB({
  kind: 'type-a',
  typeAValue: 1,
})

processAB({
  kind: 'type-b',
  typeBValue: 'a',
})

// src/tagged-union.ts:36:3 - error TS2322: Type '"hoge"' is not assignable to type '"type-a" | "type-b"'.
//
// 36   kind: 'hoge',
// processAB({
//   kind: 'hoge',
//   typeCValue: false
// })

export {}
