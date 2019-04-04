/**
 * typeof
 */
// TypeScriptの型入門 - Qiita - https://qiita.com/uhyo/items/e2fdef2d3236b9bfe74a#typeof

let foo = 'str'

type FooType = typeof foo // FooTypeはstringになる

const str: FooType = 'abcdef'

export {}
