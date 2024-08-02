//コールバック関数
function hello(name) {
  console.log('hello' + name());
}
// nameには引数から渡ってきた値が設定されている

//引数には関数を渡すこともできる
function getName() {
  return '佐藤';
}
hello(getName);
//hello()を実行するときにgetName()を渡しているので、引数nameにgetName関数を渡ってきていることになる
//getName()はhello()の中のname()で実行されている
//getName()の戻り値は「return '佐藤';」となるので、name()にreturn部分が入ることになる
//引数に渡す関数のことを「コールバック関数」と呼ぶ