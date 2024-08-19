//イベントリスナについて
//Webサイト上で起こるあらゆるイベントのことをイベントリスナと呼ぶ(クリック、ホバーなど)
const btn = document.querySelector('#btn');

//addEventListener()イベントに関するメソッド
//第一引数に何のイベントかを登録し、第二引数にイベントの中身を関数で記述する
const hello = function () {
  alert('hello');
}
btn.addEventListener('click', hello);
btn.addEventListener('mouseenter', hello); //要素内にマウスがホバーされたら
//第二引数に直接関数を記述する方法もあるが、上記の方法だと複数回同じイベントを繰り返す際にコードの短縮をすることができる。一度のみであれば直接書いた方がコードが短く済む

//イベントの解除
//第一引数に解除したいイベント、第二引数にイベントの中身の関数が必要
btn.removeEventListener('mouseenter', hello);