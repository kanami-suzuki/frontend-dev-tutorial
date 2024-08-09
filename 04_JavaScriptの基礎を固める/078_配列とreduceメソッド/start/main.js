//reduceメソッド
//配列の中身を足し合わせたり、文字列を結合したりするときに使用する
const arry = [1, 2, 3, 4, 5];

arry.reduce(function (accu, curr) {
  console.log(accu, curr);
  return accu + curr;
});
//第一引数
//第二引数