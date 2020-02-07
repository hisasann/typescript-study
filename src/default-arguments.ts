/**
 * デフォルト引数
 */

const hoge = (a: string, b: boolean = true): void => {
  console.log(a, b)
}
hoge('a')
hoge('b', false)

// https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files
export {}
