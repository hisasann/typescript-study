/**
 * デフォルト引数
 */
var hoge = function (a, b) {
    if (b === void 0) { b = true; }
    console.log(a, b);
};
hoge('a');
hoge('b', false);
export {};
