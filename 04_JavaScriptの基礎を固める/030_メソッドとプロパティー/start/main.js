//プロパティ
let hello = 'hello world1';
console.log(hello); //helloを表示される
console.log(hello.length); //lengthというプロパティを使用すると文字数だけ取得できる
//変数を設定した時点で、プロパティという名前の領域が与えられる
//名前の記法はドット記法(.~)で記述することで、変数に格納されているプロパティに関わる値を取得することができる

//メソッド
let hello2 = 'hello world';
console.log(hello2);
console.log(hello2.toUpperCase()); //全て大文字で出力される
console.log(hello2.substring(0, 5)); //文字列を配列として0番目から数えて5文字目までを表示するメソッド
console.log(hello2.slice(0, 5)); //substring()と同じような機能を持つ
console.log(hello2.split('')); //文字を分割するメソッド。「''」だと全ての文字が一文字ずつ分割され、「' '」とすると半角スペースが空いている箇所で分割される
//ブラウザにあらかじめ登録されている特定の処理をメソッド(ネイティブのメソッド)と呼ぶ
//上記の場合は文字列のオブジェクトに対するメソッドとして使用されている
//あらかじめ登録されているメソッドだけでなく、独自で定義することができるメソッドも存在する