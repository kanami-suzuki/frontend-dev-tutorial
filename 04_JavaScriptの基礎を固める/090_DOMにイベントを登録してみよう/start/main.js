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
btn.removeEventListener('click', hello);
btn.removeEventListener('mouseenter', hello);

//this
const hello2 = function () {
  // btn.style.color = 'red'; 下記と同じ意味になる
  this.style.color = 'red';
  console.log(this) //<button id="btn">Change Title Color</button>
}
//通常thisは直前のオブジェクトを指すが、addEventListener()の第二引数に登録された関数内では、thisはイベントを行うHTMLのDOM要素を指す。今回は変数btnが該当する
btn.addEventListener('click', hello2);

//タイトルの色を変更する
//addEventListener()に登録していても関数には変わらないため、関数外の変数にアクセスすることができる
const h1 = document.querySelector('#main-title');
const hello3 = function () {
  h1.style.color = 'red';
}
btn.addEventListener('click', hello3);

//複数のイベントを登録する
//一つずつの記述にはなるが、ボタン一つに複数のイベントを登録することが可能。一つの関数にまとめてもOK
const changeBackColor = function () {
  h1.style.background = 'blue';
}
btn.addEventListener('click', changeBackColor);

//addEventListener()と同じ意味のイベントプロパティ
//onclickプロパティを使用すると、addEventListener('click')と同じ意味のイベントを実行することができる
//onclickプロパティは複数のイベントを登録することができないため、一つの関数内にまとめる必要がある。複数のイベントを登録した場合、後に登録したイベントが実行される
//また、イベントハンドラはHTMLのDOMに直接記述することもできる
//現在こちらの方法はあまりメジャーではない
const subTitle = document.querySelector('.sub-title');
const changeColor = () => {
  subTitle.style.color = 'green';
}
btn.onclick = changeColor;
//こちらの方法をイベントハンドラと呼ぶ
//addEventListener()を使用する方はイベントリスナと呼ぶ