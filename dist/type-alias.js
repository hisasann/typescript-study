/**
 * タイプエイリアス
 */
// https://qiita.com/tkrkt/items/d01b96363e58a7df830e
// new Map<number, Ship>() など、ジェネリックスの型に意味をもたせるのに使うと読みやすくなるかもしれません
function logAB(arg) {
    console.log(arg.a + arg.b);
}
function logLowerCase(arg) {
    if (typeof arg === 'number') {
        console.log(arg);
    }
    else {
        // この時点でargはstring確定
        console.log(arg.toLowerCase());
    }
}
var tuple = [1, 'a']; // OK
var map = new Map();
function fetch(callback) {
    callback(map);
}
export {};
