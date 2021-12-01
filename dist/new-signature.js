/**
 * newシグネチャ
 */
// TypeScriptの型入門 - Qiita - https://qiita.com/uhyo/items/e2fdef2d3236b9bfe74a#new%E3%82%B7%E3%82%B0%E3%83%8D%E3%83%81%E3%83%A3
var Foo = /** @class */ (function () {
  function Foo(a) {}
  return Foo
})()
var F = Foo
var f = new F('a')
f.bar
export {}
