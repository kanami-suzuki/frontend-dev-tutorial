// //animationのDOMを取得
// const el = document.querySelector('.animate-title');

// //余計なスペースが含まれているため、いらないスペースをなくす
// //一文字ずつアニメーションさせるために、文字列を配列に格納し、ループ処理する
// const elArry = el.innerHTML.trim().split('');

// //span要素を新たに格納するため、変数el内を空にする
// el.innerHTML = '';

// for (let i = 0; i < elArry.length; i++) {
//   let span = document.createElement('span');
//   span.classList.add('char');
//   span.textContent = elArry[i];
//   el.appendChild(span);
// }

// const button = document.querySelector('.animationButton');
// button.addEventListener('click', () => {
//   el.classList.toggle('inview');
// })

//回答
//HTMLの文書構造を読み込んだらイベントを実行する
document.addEventListener('DOMContentLoaded', () => {
  //animationのDOMを取得
  const el = document.querySelector('.animate-title');
  //animationの文字列だけを取得
  console.log(el.innerHTML);

  //余計なスペースが含まれているため、いらないスペースをなくす
  //一文字ずつアニメーションさせるために、文字列を配列に格納し、ループ処理する
  // const str = el.innerHTML.trim();

  //reduceメソッドで使用するために配列に直す
  const str = el.innerHTML.trim().split('');

  //ループさせる変数を格納する変数を作成
  //初期値は空にする
  let concatStr = '';

  //文字列もループ処理することが可能
  //for...of文でループを回す
  //文字列が一文字ずつループされ、変数cに一文字ずつ格納される
  // for (let c of str) {
  //   //文字列に半角スペースが存在する場合、基本的にHTMLの半角スペースは無視されるため、replace()メソッドで半角スペース用の特殊文字に入れ替える
  //   c = c.replace(' ', '&nbsp;');

  //   //テンプレートリテラルでspan要素に変数cを入れると、文字列が入ったspan要素が出力される
  //   //concatStr = concatStr ~ とする理由はそうしないとループ外で最後の要素のみが出力されてしまうため
  //   concatStr += `<span class="char">${c}</span>`;
  // }

  //上記のコードをreduceメソッドに書き換える
  //reduce()に書き換えると、concatStr変数を作成して初期化する必要がなくなる
  //reduce()だとできることが限られているため、どういった実装しているのかがわかりやすい
  el.innerHTML = str.reduce((acc, curr) => {
    curr = curr.replace(' ', '&nbsp;');
    //変数concatStrをaccに置換する
    return `${acc}<span class="char">${curr}</span>`;
  }, '')

  // el.innerHTML = concatStr;
})