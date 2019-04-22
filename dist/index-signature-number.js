/**
 * インデックスシグネチャ
 */
//初期化
var dic = {
    1: 'いち',
    2: 'に'
};
//更新
dic[10] = 'じゅう';
//取得
console.log(dic[1]); //いち
console.log(dic[10]); //じゅう
console.log(dic[3]); //undefined
