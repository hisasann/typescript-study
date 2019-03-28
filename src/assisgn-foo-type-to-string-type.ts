/**
 * 文字列リテラル型を string 型に代入
 */

// `文字列リテラル型` というのは、型に文字列リテラルを指定できるという TypeScript 独自の機能
const foo: 'foo' = 'foo'
const hoge: string = foo

// https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files
export {}
