/**
 * Structural Subtyping（構造的部分型）（DuckTyping）
 */
// https://qiita.com/tell-k/items/1a93acbb42e39377cd48
// Structural Subtyping(構造的部分型) は、型の構造に着目して、それが派生型であるかどうか判定する
// 型自身が、自らの型を公称しなくても構造的に一致するのであれば、それは派生型として認識する
// 一般にこのような場合 MyObj は MyObj2 の部分型であると言います
var a = { foo: 'foo', bar: 3 };
var b = a;
var Pig = /** @class */ (function () {
    function Pig() {
    }
    Pig.prototype.bow = function () {
        return 'Bow wow wow';
    };
    return Pig;
}());
// IPigとは何の関係もないが bowメソッドを持っている
// ので callBow は IPigの派生型として認識する
var Dandy = /** @class */ (function () {
    function Dandy() {
    }
    Dandy.prototype.bow = function () {
        return 'Goood';
    };
    Dandy.prototype.throwCard = function () {
        return 'Namerunaaaaa!!';
    };
    return Dandy;
}());
function callBow(pig) {
    console.log(pig.bow());
}
callBow(new Pig());
callBow(new Dandy());
var point = {
    x: 0,
    y: 0,
    z: 1,
};
acceptPoint2D(point);
