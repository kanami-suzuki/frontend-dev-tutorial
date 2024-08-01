//一般的な関数定義
function hello(name) {
  console.log('hello' + name);
}
hello('鈴木');
hello('佐藤');

//デフォルトの引数を定義
function hello2(name = 'Tom') {
  console.log('hello' + name);
}
hello2('鈴木');
hello2('佐藤');
hello2();

//変数を定義する関数() 無名関数
const hello3 = function (name = '田中') {
  console.log('hello' + name);
}
hello3();
//変数を定義する関数は上から宣言していくので、呼び出しより後に関数を書くとエラーが出る
//一般的な関数はJSがファイル全体を確認してから実行処理に移るため、変数がない場合は呼び出しが先にあっても関数が実行される
hello4();

function hello4(name = '斎藤') {
  console.log('hello' + name);
}

//変数を使用した関数でアロー関数を作成する
const hello5 = (name = '名前') => {
  console.log('hello' + name);
}
hello5();
//関数の中身が１行の場合は{}を省略できる 
//const hello5 = (name = '田中') => console.log('hello' + name);
//また、変数が一つで、初期値がない場合は()も省略できる
//const hello5 = name => console.log('hello' + name);
//変数が複数の場合は()が必要になる
const hello6 = (name, age) => console.log('hello' + name + age);
hello6('佐々木', 20);

//中身の１行がreturnだった場合、returnも省略できる
const hello7 = a => 40;
console.log(hello7());
console.log(hello7() + hello7());

//アロー関数はfor文などを記述する際に役にたつ
const arry = [1, 2, 3, 4, 5, 6];
arry.forEach(value => console.log(value));