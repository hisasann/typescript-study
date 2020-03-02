/**
 * typeof
 */
// TypeScriptの型入門 - Qiita - https://qiita.com/uhyo/items/e2fdef2d3236b9bfe74a#typeof

const foo = 'str'

type FooType = typeof foo // FooTypeはstringになる

const str: FooType = 'str'

export {}
