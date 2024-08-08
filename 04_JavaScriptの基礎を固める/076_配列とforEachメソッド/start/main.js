//forEachについて
//配列の要素一つ一つに対して、何らかの処理を行いたい場合に使用するメソッド

const arry = [1, 2, 3, 4, 5];
arry.forEach(function (val) { //forEach内の関数もコールバック関数
  console.log(val);
})
//コールバック関数をメソッド(関数)に渡すと、そのメソッド内でコールバック関数が実行される

//forEachの第一引数には配列の値が入る
//第二引数には配列のindexが渡る
//第三引数には配列の中身全てがそのまま入る
arry.forEach(function (v, i, ary) {
  console.log(`${v},  ${i},  ${ary}`);
})

//記述が少なければ普通の関数のように簡略化もできる
arry.forEach(v => console.log(v));