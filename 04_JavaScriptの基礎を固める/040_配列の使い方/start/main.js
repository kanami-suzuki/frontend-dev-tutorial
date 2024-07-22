//配列について
const arry = new Array(1, 2, 3, 4, 5, 6);
console.log(arry); //配列を取得
console.log(arry[2]); //配列の中の特定の値を取得
console.log(arry[5]);

//配列の値を変更
//constでも配列内の値を変更することは可能
arry[5] = 8;
console.log(arry[5]);

//既にある配列を新しい配列に置き換えることはできない
//arry = new Array(); エラーが出る

//配列の定義は上記が正しいが、一般的には省略して記述されることが多い
const arry2 = [1, 2, 3, 4, 5, 6];
console.log(arry2);
console.log(arry2[4]);

//JSの配列は一つの配列に複数のデータ型を格納することができる
const arry3 = [1, 2, 3, 4, 5, 6, 'hello', false];
console.log(arry3);
console.log(arry3.length); //配列の長さ(数)にアクセスできる
arry3.push('new Item'); //末尾に値を追加
console.log(arry3);
arry3.unshift('new Item'); //先頭に追加
console.log(arry3);
arry3.pop(); //末尾の値を削除
console.log(arry3);
const val = arry3.pop(); //削除した値を変数に格納することができる
console.log(val);
const val2 = arry3.shift(); //先頭の要素を削除して変数に格納
console.log(arry3);
console.log(val2);

//jsでは変数で大文字と小文字を区別する。そのため、ArrayはJSの予約語なので変数に使用できないが,小文字のarrayは変数に使用することができる