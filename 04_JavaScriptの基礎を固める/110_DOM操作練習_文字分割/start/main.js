//HTMLの文書構造を読み込んだらイベントを実行する
document.addEventListener('DOMContentLoaded', () => {
  //animationのDOMを取得
  const el = document.querySelector('.animate-title');
  //animationの文字列だけを取得
  console.log(el.innerHTML);

  //余計なスペースが含まれているため、いらないスペースをなくす
  //一文字ずつアニメーションさせるために、文字列を配列に格納し、ループ処理する
  const elArry = el.innerHTML.trim().split('');

  for (let i = 0; i < elArry.length; i++) {

  }
})