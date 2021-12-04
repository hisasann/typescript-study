type A = {
  id: string
}

type B = {
  age: number
  gender: 0 | 1 | 2
}
type C = A & B
type Flatten<T> = {
  [P in keyof T]: T[P]
}
// これでようやく C の中身が展開される
type E = Flatten<C>

// ただし、オブジェクトがネストすると Flatten の効果が消える
type F = {
  Nest: Flatten<C>
}

// C 型に別のオブジェクトの型を混ぜた intersection 型を作る場合
type G<T> = {
  Nest: {
    [P in keyof T]: T[P]
  } & { createdAt: Date }
}
// 型情報は展開されている
type H = G<C>

// 上記の複数オブジェクトを混ぜる方法を type として定義してマージする型パズル
type CreatedAt = {
  createdAt: Date
}
type I<T> = {
  Nest: {
    [P in keyof T | keyof CreatedAt]: P extends keyof CreatedAt
      ? CreatedAt[P]
      : P extends keyof T
      ? T[P]
      : never
  }
}
type O = I<C>

// ジェネリックスで複数の型を受け取るパターン
// だいぶスッキリしてきた
type J<T, K> = {
  Nest: {
    [P in keyof T | keyof K]: P extends keyof K
      ? K[P]
      : P extends keyof T
      ? T[P]
      : never
  }
}
type N = J<C, CreatedAt>
