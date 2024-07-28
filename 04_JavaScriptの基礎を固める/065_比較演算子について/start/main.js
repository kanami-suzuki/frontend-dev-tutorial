//Number()というコンストラクタ関数
//trueが1でfalseが0になる
const num = Number(true);
console.log(num);

//if文でnumの値と数値が等しいかを比較する
//イコールが二つの時はデータ型を考慮せずに値で比較する
//イコールが三つの時はデータ型も考慮して厳密に比較する
if (1 == true) { //trueになる
  console.log('this is true');
} else {
  console.log('this is false')
}
if (1 === true) { //falseになる
  console.log('this is true');
} else {
  console.log('this is false')
}
//イコールでは(等しく)ない
if (1 !== true) {
  console.log('this is true');
} else {
  console.log('this is false')
}
if (1 != true) {
  console.log('this is true');
} else {
  console.log('this is false')
}