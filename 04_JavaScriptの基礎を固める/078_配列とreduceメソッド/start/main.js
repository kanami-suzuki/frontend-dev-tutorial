//reduceメソッド
//配列の中身を足し合わせたり、最小値・最大値を計算したり、文字列を結合したりするときに使用する
const arry = [1, 2, 3, 4, 5];

arry.reduce(function (accu, curr) {
  console.log(accu, curr);
  return accu + curr;
}); //第二引数の初期値がないので、accuの初期値に配列の一つ目が入る

arry.reduce(function (accu, curr) {
  console.log(accu, curr);
  return accu + curr;
}, 0);

const addition = function (accu, curr) {
  console.log(accu, curr);
  return accu * curr;
}
arry.reduce(addition, 2);
//reduce()の引数の意味は以下のようになる
//第一引数：accumulation(蓄積)累積値、前のループの戻り値、足し合わせた数,前回の結果が入る。初期値には前回の結果が存在しないため、初期値で設定した値(配列の最初の要素)が入る。reduce()の第二引数に値が設定されていない場合、こちらの初期値には配列の一番最初の値が代入される
//第二引数：current(現在選択されている、操作や処理の対象となっているなどの意味)要素、配列の要素が入る

//reduce()の第二引数は第一引数(function)の第一引数(accu)に設定する値を入れる。

//文字列のreduce()
const str = 'animation';
const strArry = str.split();
console.log(strArry);
const strArry2 = str.split('');
console.log(strArry2);

const retult = strArry2.reduce((accu, curr) => {
  return accu + '<' + curr + '>'; //先頭のaのみ<>で囲まれない(初期値が設定されていないため)
})
console.log(retult);

//第一引数：accumulation(蓄積)の意味は配列のループ結果を第一引数に貯めて、貯めた最終的な結果をreturnで変数に返しているため
const retult2 = strArry2.reduce((accu, curr) => {
  console.log(accu); //蓄積の様子
  return `${accu} <${curr}> `; //accuの初期値に空文字を入れることで全ての文字が<>で囲まれる
}, '')
console.log(retult2);