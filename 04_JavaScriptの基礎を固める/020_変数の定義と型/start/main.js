//JSで変数を定義するときは、「var,let,const」といった演算子を使用する

let name1 = 'Tom';
name1 = 'Tim'; //上書きができる
console.log('hello' + name1);

const name2 = 'Tom';
//name2 = 'Tim'; //エラーとなる
console.log('hello' + name2);

//var,letを使用した場合は、後から上書きをすることが可能だが、
//constを使用した場合は後から上書きをすることはできない
//元々変数はvarだけだったが、JSのアップデートにより、letとconstができた
//そのため、現在ではvarではなくletとconstの使用が推奨されている

//データ型
//Number(数値)
//String(文字列)
//Boolean(真偽)
//Undefined(未定義)
//Null(空のオブジェクト)
//Symbol(JSのプリミティブ値(プロパティやメソッドを持たない値)の一つ。同じ値を作ることはできない)

//jsは動的型付け言語。変数に格納された値によって変数のデータ型が決まる
let variable = 'str';
console.log(typeof variable);
variable = 123;
console.log(typeof variable);
variable = true;
console.log(typeof variable);
variable = undefined;
console.log(typeof variable);

//静的型付け言語。宣言するときに変数の型を決定する
//int num = 12;
//numという変数は整数しか扱うことができない