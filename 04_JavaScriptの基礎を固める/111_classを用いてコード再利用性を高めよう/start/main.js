//Classという演算子を使用して、文字分割の再利用性を高める
//animate-titleの他に別な文字列を追加した場合、その度にクラスを増やすのはプログラミング的に助長になってしまう
//なるべくコード量を減らすために、関数やClass演算子を使用する
//JavaScriptにおいてのClassとは、オブジェクト指向の概念を実現するための構文。同じプロパティやメソッドを持つオブジェクト(モノ)の設計図となるもの。パーツの制作ができる
//classの後にキーワードを指定してClassを宣言し、その中でプロパティやメソッドを定義する。クラス内で定義されたメソッドは、そのクラスから作成されたオブジェクトで使用することができる
//HTMLやCSSのクラスとは全く異なるので注意
document.addEventListener('DOMContentLoaded', function () {
    const el = document.querySelector('.animate-title');
    const el2 = document.querySelector('.animate-title-2');
    const str = el.innerHTML.trim().split("");
    const str2 = el2.innerHTML.trim().split("");

    // let concatStr = '';

    // for(let c of str) {
    //     c = c.replace(/\s+/, '&nbsp;');
    //     concatStr += `<span class="char">${c}</span>`;
    // }

    el.innerHTML = str.reduce((acc, curr) => {
        curr = curr.replace(/\s+/, '&nbsp;');
        return `${acc}<span class="char">${curr}</span>`;
    }, "");
    el2.innerHTML = str2.reduce((acc, curr) => {
        curr = curr.replace(/\s+/, '&nbsp;');
        return `${acc}<span class="char">${curr}</span>`;
    }, "");
});

//クラスを定義(宣言)する。関数のように()は使用しない
//ある程度の機能のまとまりを表現することができる
//クラスにはコンストラクタ(constructor)メソッド(関数)を登録することができる
//コンストラクタとは定義したクラス(下記だとtextAnimation)からオブジェクトを生成し、初期化する際に実行されるメソッド
//クラスの名前の最初は大文字を使う
class TextAnimation {
    //クラスを初期化するconstructor関数を記述する
    //constructorはクラスが呼び出される時に必ず実行する関数
    constructor(el) {
        this.el = el;
        console.log(this); //this = TextAnimation
    }
    log() {
        console.log(this.el);
    }
}
//クラスを呼び出すときは「new クラス名」でクラスを呼び出す。
//下記では呼び出したクラスを変数に代入している
const ta = new TextAnimation('こんにちは')
// alert(ta.el);
ta.log();