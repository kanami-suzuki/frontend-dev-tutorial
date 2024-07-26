const arry = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arry.length; i++) {
    console.log(i);
}

//for_in
//for_inを使うと、iには配列のindex(個数)が格納される
//.lengthを使用するよりもコンパクトに書くことができる
for (let i in arry) {
    console.log(i, arry[i]);
}

//for_of
//for_ofを使うと、iには配列の値が格納される
//ofを使う時は添字という意味で使用される変数(i,j,k)はあまり使用が推奨されない
//valueを意味するvの方が開発者間ではわかりやすい
//for_ofは対応していないブラウザがあるため、注意が必要
for (let v of arry) {
    console.log(v);
}