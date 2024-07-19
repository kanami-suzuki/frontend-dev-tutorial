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

//関数にはreturnという演算子が使用できる
//関数の中でreturnの後に関数が実行された結果を実行元に返却することができる

function hello2(name1, age1) {
  return name1 + ', ' + age1; //hello2()に実行された結果「name1 + ', ' + age1」を返却する
}
//返却される値を戻り値という
const returnValue = hello2('tanaka', 30); //変数に代入し、引数に値を入れる
console.log('hello ' + returnValue); //returnValueには値が入れられた戻り値(引数)の「name1 + ', ' + age1」が代入されている

//returnは必須ではないが、戻り値を使って関数内の処理で別な処理を行うことができる
//returnがない場合は関数内の処理を呼び出すことのみとなる
//また、関数内に外で呼び出せる式がない場合、returnがないと値が返ってこない
function num1(a, b, c) {
  // console.log(a + b + c);
  a + b + c;
}
console.log(num1(1, 2, 3)); //undefined
console.log(num1(4, 5, 6)); //undefined
const total1 = num1(1, 2, 3) + num1(4, 5, 6);
console.log(total1); //NaN

function num2(a, b, c) {
  // console.log(a + b + c);
  return a + b + c;
}
console.log(num2(1, 2, 3)); //6
console.log(num2(4, 5, 6)); //15
const total2 = num2(1, 2, 3) + num2(4, 5, 6);
console.log(total2); //21


//function以外での関数の呼び出し方法

//変数に代入(無名関数)
const hello3 = function (name1, age1) {
  console.log('hello ' + name1 + ', ' + age1);
}
hello3('tanaka', 21);