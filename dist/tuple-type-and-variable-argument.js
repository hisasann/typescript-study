/**
 * タプル型と可変長引数
 */
// TypeScriptの型入門 - Qiita - https://qiita.com/uhyo/items/e2fdef2d3236b9bfe74a#%E3%82%BF%E3%83%97%E3%83%AB%E5%9E%8B%E3%81%A8%E5%8F%AF%E5%A4%89%E9%95%B7%E5%BC%95%E6%95%B0
var func = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args[0];
};
var v = func('foo', 3, false);
var func2 = function (f) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args[0];
};
var v1 = func2('foo', 'bar');
var v2 = func2('foo', 'bar', 1, 2, 3, 4);
// 関数呼び出しのspreadとタプル型
var func4 = function (str, num, b) { return str + num; };
var args4 = ['foo', 3, false];
func4.apply(void 0, args4);
