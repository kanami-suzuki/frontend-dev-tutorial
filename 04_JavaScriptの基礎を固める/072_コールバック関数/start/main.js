//コールバック関数
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