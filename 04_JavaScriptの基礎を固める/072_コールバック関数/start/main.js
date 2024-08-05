//コールバック関数
//親となる関数の引数として渡す関数
//ユーザーが何かアクションを起こしたタイミングで呼び出したり、
//同じ関数から違う計算式の結果を導き出したりすることができる
function hello(name) {
  console.log(name); //関数自体が渡される
  console.log(name()); //関数の実行結果が渡される
  console.log('hello' + name());
}
// nameには引数から渡ってきた値が設定されている

//引数には関数を渡すこともできる
function getName() {
  return '佐藤';
}

const firstName = function () {
  return 'Tom';
}
hello(getName);
hello(firstName);
hello(() => { //無名関数で直接代入することもできる
  return 'name'
  //helloの引数に関数を渡していることになるため、hello(name)のnameには無名関数が入っている
});
//hello()を実行するときにgetName()を渡しているので、引数nameにgetName関数を渡ってきていることになる
//getName()はhello()の中のname()で実行されている
//getName()の戻り値は「return '佐藤';」となるので、name()にreturn部分が入ることになる
//引数に渡す関数のことを「コールバック関数」と呼ぶ
//また、関数を変数として扱うことを「オブジェクトとして扱う」という

//コールバック関数は関数名の後に()をつけずに記述している
//hello(getName()); エラーになる
//hello()の中でgetName()と記述すると、getName()を実行するという意味になる
//getName()は既にhello関数の中でname()として実行されており、実行結果が引数nameに渡っている
//getName()を実行するとhello()の中で二重に同じ関数が実行されているということになる

//関数内の関数に引数を渡す場合
function hello2(name, lastName) {
  console.log(name); //関数自体が渡される
  console.log(name()); //関数の実行結果が渡される
  console.log('hello ' + name(lastName));
}
//第一引数に無名関数を記述し、第二引数を追加する
//第二引数に記述した文字列がhello2()の第二引数に渡ってくるので、name()の引数に第二引数を渡す
//すると、name()を実行した時の第一引数にhello2()の第二引数が格納されるので、hello2()の第一引数である関数の引数に第二引数を入れる
hello2(function (lastName) {
  return 'name ' + lastName;
}, 'tanaka');
//下記の書き方も同じ
const getFirstName = function (lastName) {
  return 'Tom ' + lastName;
}
hello2(getFirstName, 'fled');

//同じ関数で計算結果を変える
function doSumething(a, b, callback) {
  const result = callback(a, b); //第三引数を関数として扱い、第一引数と第二引数を引数として渡す
  console.log(result); //callback()を代入した引数を呼び出し
}

function multiply(c, d) {
  return c * d; //掛け算を返す
}

function plus(e, f) {
  return e + f; //足し算を返す
}
//doSumething()のcallback()にそれぞれの関数を入れる
doSumething(2, 2, multiply);
doSumething(2, 3, plus);