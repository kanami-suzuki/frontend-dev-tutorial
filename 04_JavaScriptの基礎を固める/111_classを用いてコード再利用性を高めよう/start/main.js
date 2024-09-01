//Classという演算子を使用して、文字分割の再利用性を高める
//animate-titleの他に別な文字列を追加した場合、その度にクラスを増やすのはプログラミング的に助長になってしまう
//なるべくコード量を減らすために、関数やClass演算子を使用する
//JavaScriptにおいてのClassとは、オブジェクト指向の概念を実現するための構文。同じプロパティやメソッドを持つオブジェクト(モノ)の設計図となるもの。パーツの制作ができる
//classの後にキーワードを指定してClassを宣言し、その中でプロパティやメソッドを定義する。クラス内で定義されたメソッドは、そのクラスから作成されたオブジェクトで使用することができる
//HTMLやCSSのクラスとは全く異なるので注意
document.addEventListener('DOMContentLoaded', function () {
    const tA1 = new TextAnimation2('.animate-title');
    const tA2 = new TextAnimation2('.animate-title-2');
    setTimeout(() => {
        tA1.animate();
        tA2.animate();
    }, 1000);
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
        //渡ってきた文字列を値に格納することもできる。thisを使用することによってnew演算子を用いて初期化を行なった変数に格納することができる
        console.log(this.el); //this.elに値値が代入されていない状態になっているundefined
        this.el = el;
        console.log(this); //this = TextAnimation
        console.log(this.el); //this.elに値が代入されている状態になっている
    }
    //メソッドを登録
    log() {
        console.log(this.el);
    }
}
//クラスを呼び出すときは「new クラス名」でクラスを呼び出す。
//クラス名の()内の値はconstructor関数の引数に渡される
//下記では呼び出したクラスを変数に代入している
const ta = new TextAnimation('こんにちは')
//上記のように初期化することを「インスタンス化」と呼ぶ。インスタンス化とはオブジェクトの複製を作ること。オリジナルのオブジェクトをコピーしたモノ。
//let 変数名 = new オブジェクト名([引数])がインスタンス化の構文。new演算子を使用することがインスタンス化っぽい

//ta(new TextAnimation('こんにちは'))の中のlogを呼び出す。
//オブジェクトのキーと同じ
ta.log();

//文字列をクラスにまとめる
class TextAnimation2 {
    constructor(el) {
        //querySelector()に引数elを渡し、初期化できるようにする
        this.el = document.querySelector(el);
        this.chars = this.el.innerHTML.trim().split("");
        this.el.innerHTML = this._splitText();
    }
    //クラス内でアンダーバー(_)を先頭に使用するメソッドをプライベートメソッドという
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    //クラス内でアンダーバー(_)を使用しないメソッドをパブリックメソッドという
    animate() {
        this.el.classList.toggle('inview');
    }
}
//プライベートメソッドは、クラス内のみで呼び出すメソッド。外では呼び出さない(tA1.animate()など)。ただ、JSでは厳格にクラス内でしか呼ばれないということを担保しているわけではないため、明示的に使用しているだけとなる
//パブリックメソッドは外で呼び出してキーのように使用する