var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function listenEvent(handler) { }
// Unsound, but useful and common
listenEvent(function (e) { return console.log(e.x + ',' + e.y); });
// Undesirable alternatives in presence of soundness
listenEvent(function (e) {
    return console.log(e.x + ',' + e.y);
});
listenEvent(function (e) {
    // MouseEvent がきたときは keyCode が undefined
    console.log(e.keyCode);
    // KeyEvent がきたときは x が undefined
    console.log(e.x);
});
// Still disallowed (clear error). Type safety enforced for wholly incompatible types
// error TS2345: Argument of type '(e: number) => void' is not assignable to parameter of type '(n: Event) => void'.
//   Types of parameters 'e' and 'n' are incompatible.
//     Type 'Event' is not assignable to type 'number'.
// listenEvent((e: number) => console.log(e));
function makeLowerCase(s) {
    return s.toLowerCase();
}
// error TS2345: Argument of type '(s: string) => string' is not assignable to parameter of type '(value: string | number) => string | PromiseLike<string>'.
//  Types of parameters 's' and 'value' are incompatible.
//    Type 'string | number' is not assignable to type 'string'.
//      Type 'number' is not assignable to type 'string'.
foo.then(makeLowerCase); // this will fail if foo resolves to a number
// let x = (a: number) => 0;
// let y = (b: number, s: string) => 0;
//
// y = x; // OK
//  error TS2322: Type '(b: number, s: string) => number' is not assignable to type '(a: number) => number'.
// x = y; // Error
var items = [1, 2, 3];
// Don't force these extra parameters
items.forEach(function (item, index, array) { return console.log(item); });
// Should be OK!
items.forEach(function (item) { return console.log(item); });
var x = function () { return ({ name: 'Alice' }); };
var y = function () { return ({ name: 'Alice', location: 'Seattle' }); };
x = y; // OK
// error TS2322: Type '() => { name: string; }' is not assignable to type '() => { name: string; location: string; }'.
// Property 'location' is missing in type '{ name: string; }' but required in type '{ name: string; location: string; }'.
// y = x; // Error, because x() lacks a location property
// ジェネリックスの性質：共変性
var Base = /** @class */ (function () {
    function Base() {
        this.value = 1;
    }
    return Base;
}());
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.otherValue = 2;
        return _this;
    }
    return Derived;
}(Base));
var Another = /** @class */ (function (_super) {
    __extends(Another, _super);
    function Another() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.anotherValue = 3;
        return _this;
    }
    return Another;
}(Base));
// 共変性
baseArr = derivedArr;
// TypeScript では 関数パラメータは双変性になっている
processDericed = processBase; // 反変性
processBase = processDericed; // 共変性
// ゆえに、ここでランタイムエラー
// processBase(new Another())
