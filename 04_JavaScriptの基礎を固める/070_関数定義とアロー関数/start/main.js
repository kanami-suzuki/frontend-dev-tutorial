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