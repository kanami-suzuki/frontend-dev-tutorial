//複雑なループ処理
//todoリスト
//配列の中にオブジェクトを記述
const todos = [{
    id: 1,
    title: 'Go to school',
    completed: true //todoなのでタスクが完了したかをbooleanで表す
  },
  {
    id: 2,
    title: 'Go to museum',
    completed: true
  },
  {
    id: 3,
    title: 'Go shopping',
    completed: false
  }
]

//todosの中身を取り出す
for (let i = 0; i < todos.length; i++) {
  console.log(i, todos[i]); //オブジェクトが取得される

  //completedがtrueのもののみconsoleに出力する
  let todo = todos[i];
  if (todo.completed === true) {
    console.log(i, todo.completed);
    console.log(i, todo.title);
  }
}

//for_in
for (let i in todos) {
  let todo = todos[i];
  if (todo.completed === false) {
    console.log(i, todo.title, 'in'); //インデックスを呼び出しているので、文字列ではなくなる？
  }
}

//for_of
for (let todo of todos) {
  if (todo.completed === true) {
    console.log(todo.id, 'of');
  }
}