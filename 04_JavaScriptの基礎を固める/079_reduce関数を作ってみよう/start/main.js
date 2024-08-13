const str = 'animation';
const strArry = str.split('');

function tag(accu, curr) {
    console.log(accu, curr);
    return `${accu}<${curr}>`;
}
//上記の関数を下記のreduce()の第一引数に渡している

function reduce(arry, callback, defaultValue) {
    let accu = defaultValue;

    for (let i = 0; i < arry.length; i++) {
        let curr = arry[i];
        accu = callback(accu, curr);
    }

    return accu;
}
const result = reduce(strArry, tag, "");
console.log(result);