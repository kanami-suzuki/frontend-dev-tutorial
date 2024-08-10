//reduceメソッド
//配列の中身を足し合わせたり、最小値・最大値を計算したり、文字列を結合したりするときに使用する
const arry = [1, 2, 3, 4, 5];

arry.reduce(function (accu, curr) {
  console.log(accu, curr);
  return accu + curr;
}, 0); //第二引数は第一引数(function)の第一引数(accu)の初期値として設定する。
//第一引数：累積値、前回の結果が入る。初期値には前回の結果が存在しないため、初期値で設定した値(配列の最初の要素)が入る。
//第二引数：要素