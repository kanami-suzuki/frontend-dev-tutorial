//ループ処理
const arr = [1, 2, 3, 4, 5];

//関数に配列を入れ、ループ回数を引数に代入
//引数を設定し、ループする回数や書き出しなどを引数で記述
function forLoop(ary) {
  for (let i = 0; i < ary.length; i++) {
    console.log(ary[i]);
  }
}
//引数に配列を入れて値とループの回数を設定する
//引数に配列を入れることで、上記のfor文のary部分に配列が入り、ループ処理を行うことができる
forLoop(arr);
// forLoop(); 引数aryにはなんの値も入っていないため、エラーが出る

//コールバック関数に書き換え
const arr2 = [1, 2, 3, 4, 5];

//第二引数にcallbackを設定し、console.logをcallbackに書き換え
function forLoop2(ary2, callback) {
  for (let i = 0; i < ary2.length; i++) {
    callback(ary2[i]); //consoleをcallback引数に書き換え
  }
}

//コンソールを出力するための関数
//引数を渡すことで、コンソールにログが出力される
function log(val) {
  console.log(val);
}

//double()関数でlog()関数の中身を2倍にする記述をする
function double(v) {
  v = v * 2;
  log(v); //console.log(val * 2)
}

//forLoop()の第二引数callbackにlog()を入れる
//第一引数に配列を入れ、その配列がforLoop2の中のary2[i]部分に書き換わる
//第二引数にlog()を入れているので、callbackがconsole.logに書き換わり、
//引数valに配列が入ることになる
forLoop2(arr2, log); //console.log(arr2[i])
forLoop2(arr2, double); //console.log(arr2[i] * 2)