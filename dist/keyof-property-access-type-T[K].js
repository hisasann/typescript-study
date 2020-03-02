/**
 * プロパティアクセス型 T[K]
 */
// TypeScriptの型入門 - Qiita - https://qiita.com/uhyo/items/e2fdef2d3236b9bfe74a#%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9%E5%9E%8B-tk
function pick(obj, key) {
    return obj[key];
}
var obj = {
    foo: 'string',
    bar: 123,
};
var str = pick(obj, 'foo');
var num = pick(obj, 'bar');
