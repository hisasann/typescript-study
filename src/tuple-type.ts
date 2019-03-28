/**
 * タプル型
 */
// タプル型は、要素の個数・型が決められた配列を表現することを可能にします
// 例えば、あなたが文字列と数値のペアを値として表現したいとした場合は次のようにします

// タプル型の宣言
let x: [string, number]

// 初期化
x = ['hello', 10] // OK

// 不適切な初期化
// error TS2322: Type 'string' is not assignable to type 'number'
// x = [10, "hello"];

export {}
