//プログラミング上で条件に応じて制御を変えたい時がある
//そういった際にif文を使用する
if (false) { //()内に条件を記述し、その条件に一致する場合は{}内の処理が実行される
  console.log('this is true');
} else if (true) { //条件を複数設けたい場合はelse ifを使用する
  console.log('this is in else if block');
} else { //条件に当てはまらない場合はこちらの{}内の処理が実行される
  console.log('this is false');
}
//実際にif文を使用する場合は上記のようなboolean型ではなく、二つの条件が一致するかどうかを比較する
//イコールが二つの時はデータ型を考慮せずに値で比較する
if (1 == '1') { //trueになる
  console.log('this is true');
} else {
  console.log('this is false')
}
//イコールが三つの時はデータ型も考慮して厳密に比較する
if (1 === '1') { //falseになる
  console.log('this is true');
} else {
  console.log('this is false')
}
//他にboolean型でtrueは1を表すので1 == trueという式にすることもできる
if (1 == true) { //trueになる
  console.log('this is true');
} else {
  console.log('this is false')
}
if (1 === true) { //型が違うのでfalseになる
  console.log('this is true');
} else {
  console.log('this is false')
}
//Number()というコンストラクタ関数
//trueが1でfalseが0になる
const num = Number(true);
console.log(num); //trueで1になり、falseで0になる


//イコールでは(等しく)ないことを比較したい場合は!と=を組み合わせる
if (1 !== '1') { //厳密に比較するため、型が異なることになりtrue(等しくない)になる
  console.log('this is true');
} else {
  console.log('this is false')
}
if (1 != '1') { //厳密に比較しないため、数値が一致することになりfalse(等しい)になる
  console.log('this is true');
} else {
  console.log('this is false')
}

//複数の条件を組み合わせたい場合は論理演算子を使用する
if (0 == '0' && 0 === '0') { //&条件 falseになる
  console.log('this is true');
} else {
  console.log('this is false')
}
if (0 == '0' || 0 === '0') { //or条件 trueになる
  console.log('this is true');
} else {
  console.log('this is false')
}

//条件式を書かずにif文を記述することもある
const num1 = 10;
const bool = Boolean(num1);
console.log(bool); //値が入っていない(0やundefined、Nullなど)場合はfalseになる
if (num1) { //変数に値が設定されていればtrueになる
  console.log('this is true');
} else {
  console.log('this is false')
}
//not演算子
//最初に!をつけるとtrueはfalseになり、falseはtrueになる
if (!num1) { //変数に値が設定されていればtrueになる
  console.log('this is true');
} else {
  console.log('this is false')
}