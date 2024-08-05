//ループ処理
const arr = [1, 2, 3, 4, 5];

//関数に配列を入れ、ループ回数を引数に代入
function forLoop(ary) {
  for (let i = 0; i < ary.length; i++) {
    console.log(ary[i]);
  }
}
//引数に配列を入れて値とループの回数を設定する
forLoop(arr);

//コールバック関数に書き換え
const arr2 = [1, 2, 3, 4, 5];

//第二引数にcallbackを設定し、console.logをcallbackに書き換え
function forLoop2(ary2, callback) {
  for (let i = 0; i < ary2.length; i++) {
    callback(ary2[i]);
  }
}

function log(val) {
  console.log(val);
}

function double(val) {
  val = val * 2;
  log(val);
}

//forLoop()の第二引数にlog()を入れる
forLoop2(arr2, log);
forLoop2(arr2, double);