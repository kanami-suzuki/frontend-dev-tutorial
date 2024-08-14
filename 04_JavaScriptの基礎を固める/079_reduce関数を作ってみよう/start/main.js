const str = 'animation';
//文字列をsplitで分割して配列にする
const strArry = str.split('');
console.log(strArry); //['a', 'n', 'i', 'm', 'a', 't', 'i', 'o', 'n']

function tag(accu, curr) {
    console.log(accu, curr);
    return `${accu}<${curr}>`;
}

//第一引数にarry(配列)、第二引数にコールバック関数、第三引数に初期値が渡るようにする
function reduce(arry, callback, defaultValue) {
    //デフォルトのvalueをaccuに格納
    let accu = defaultValue;

    //第一引数をarryに配列を代入するので、arryのfor文を書く
    for (let i = 0; i < arry.length; i++) {
        let curr = arry[i];
        //変数accu, currを第二引数のcallbackに入れる
        //上記のtag関数のaccu, currに入れる
        //callback(accu, curr); //この時点ではaccuには何も入っていないcurrに配列が入っている

        //文字列を結合したものを出したいので、accuにcallback(accu, curr);を入れる
        //初期値としてaccuを設定しており、accuは空の状態のため、ループごとに配列の文字列(callback)がaccuに代入されることになる
        accu = callback(accu, curr);
    }

    //文字列が結合したものがreturnとして返される
    return accu;
}

//第一引数にstrArry配列を代入
//第二引数にtag関数を代入
//第三引数に初期値を代入
const result = reduce(strArry, tag, "");
console.log(result);

//下と同じ
//const result = reduce((arry, callback){
//  for (let i = 0; i < arry.length; i++) {
//    let curr = arry[i];
//    accu = callback(accu, curr);
//  }
//}, "")