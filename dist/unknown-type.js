/**
 * unknown 型
 */
// TypeScriptの型入門 - Qiita - https://qiita.com/uhyo/items/e2fdef2d3236b9bfe74a#unknown
// unknown型の値はどんな値なのか分からないため、できることが制限されているのです
// 例えば、数値の足し算をすることもできませんし、プロパティアクセスもできません
var u = 3
// error TS2571: Object is of type 'unknown'
// const sum = u + 5;
// error TS2571: Object is of type 'unknown'
// const p = u.prop;
if (typeof u === 'number') {
  // この中ではuはnumber型
  var foo_1 = u + 5
}
export {}
