//コンソールでdocumentと打ち、エンターを押すと、その時表示されているHTMLの情報がコンソールに表示される
//document.headやdocument.bodyでhead,bodyの情報のみを取得することもできる
//HTMLの情報はdocumentの配下にいるということがわかる
//documentにも独自のメソッドやプロパティがそれぞれあり、それらを使用することでHTMLの情報を参照したり、書き換えたりすることが可能となる
//その他にイベントの登録ができ、クリックやページの読み込みなどのユーザーが何かアクションを起こしたときに発火するイベントの登録も行うことができる
//上記のことがDOMAPI,DOMインターフェイスと呼ばれるもの

//bodyの中の子要素を配列で取得する
console.log(document.body.children);
//DOM(HTML)の中身は上記のように層のようになっており、この層のことをDOMツリーとも呼ぶ

//HTMLの中身を取得
//名前をつけている場合はquerySelector()メソッドを使用する。cssのようにシャープ(#)はid、ドット(.)はクラスを呼び出す
console.log(document.querySelector('#main-title'));
console.log(document.querySelector('.sub-title'));

//要素で呼び出す場合は何もつけずに要素名だけ指定する
console.log(document.querySelector('h1'));

//querySelector()で複数の同じクラスがあった場合は該当するクラスの一番初めの要素が呼び出される
//全て呼び出す場合はquerySelectorAll()で呼び出すと全ての一致するクラスが配列で呼び出される
console.log(document.querySelectorAll('.item'));

//要素名でも同じようなことができる
console.log(document.querySelectorAll('ul > li'));

//DOMを使用したHTMLの書き換え
const h1 = document.querySelector('#main-title');

//innerHTMLプロパティは要素の中身を書き換えることができる
// h1.innerHTML = 'AAAAA' //文字列が変更できる
// h1.innerHTML = 'AAAAA <small style="color: blue;">BBBB</small>' //タグの追加もできる。「AAAAA BBBB」とブラウザに表示される

//textContentプロパティは要素のテキストを書き換えることができる
// h1.textContent = 'Hello World';
// h1.textContent = 'AAAAA <small style="color: blue;">BBBB</small>'; //AAAAA <small style="color: blue;">BBBB</small>とブラウザに表示される

//styleプロパティでスタイルの情報を書き換える
h1.style.backgroundColor = '#ccc';
console.log(h1.style.backgroundColor);

//クラスにアクセス
h1.classList.add('underline'); //クラスを付与する
h1.classList.remove('underline'); //クラスを削除する
h1.classList.toggle('underline'); //クラスを付与したり削除したりする

//querySelector()の範囲を限定する
// const ul = document.querySelector('ul');
// ul.style.color = 'red';
// const firstList = ul.querySelector('li'); //ulの中の最初のliにquerySelector()でスタイルを指定する
// firstList.style.color = 'black';

//querySelectorAll()の複数要素にスタイルを適用
const li = document.querySelectorAll('li');
li.forEach(node => node.style.color = 'purple');