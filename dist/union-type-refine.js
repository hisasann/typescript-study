/**
 * ユニオンタイプの絞り込み
 */
function useHogePiyo(obj) {
    // ここではobjはHoge | Piyo型
    if ('bar' in obj) {
        // barプロパティがあるのはHoge型なのでここではobjはHoge型
        console.log('Hoge', obj.bar);
    }
    else {
        // barプロパティがないのでここではobjはPiyo型
        console.log('Piyo', obj.baz);
    }
}
useHogePiyo({
    foo: 'a',
    bar: 1,
});
useHogePiyo({
    foo: 1,
    baz: false,
});
export {};
