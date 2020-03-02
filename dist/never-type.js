/**
 * never型
 */
// TypeScriptの型入門 - Qiita - https://qiita.com/uhyo/items/e2fdef2d3236b9bfe74a#never%E5%9E%8B
function map(obj, f) {
    switch (obj.type) {
        case 'Some':
            return {
                type: 'Some',
                value: f(obj.value),
            };
        case 'None':
            return {
                type: 'None',
            };
        default:
            // ここでobjはnever型になっている
            return obj;
    }
}
map({
    type: 'Some',
    value: 'abc',
}, function (o) {
    console.log(o);
});
// funcの返り値を変数resultに代入していますが、実際にはresultに何かが代入されることはあり得ません
// ゆえに、resultにはnever型を付けることができるのです
function func() {
    throw new Error('Hi');
}
var result = func();
