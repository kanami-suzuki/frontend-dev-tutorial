//なぜ関数を使うのか
//コンソールに名前を表示したい場合は、文字列をメソッド内に記述する
console.log('hello name');

//この時、名前を動的に変えたいとする
//変数
let name1 = 'suzuki';
console.log('hello ' + name1);

//この時、名前を一つだけでなく沢山の異なる名前を出力したい場合、毎回変数を記述するのは手間になる上にエラーの原因となる可能性がある
//そこで関数を使用する
function hello(name1) {
  // let name1 = 'suzuki'; 変数名を引数に入れる
  //name1に値を渡すことでコンソールに違う名前を出力することができる
  console.log('hello ' + name1);
}

//関数を実行
hello('tanaka');
hello('satou');
hello('ichikawa');

//関数を実行するときに引数()に値を入れると値が変数に格納され、値として使用できるようになる

//引数は複数渡すこともできる
function hello(name1, age1) {
  console.log('hello ' + name1 + ', ' + age1);
}
hello('tanaka', 21);
hello('satou', 30);
hello('ichikawa', 17);