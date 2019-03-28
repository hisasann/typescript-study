/**
 * nullチェック
 */
// TypeScriptの型入門 - Qiita - https://qiita.com/uhyo/items/e2fdef2d3236b9bfe74a#null%E3%83%81%E3%82%A7%E3%83%83%E3%82%AF

function func(value: string | null): number {
  if (value != null) {
    // value は null ではないので string 型に絞り込まれる
    return value.length;
  } else {
    return 0;
  }
}

func('a')
func(null)

export {}
