//DOMContentLoadedとload
//DOMContentLoadedとは、DOMツリー(HTML)の文書構造のみを読み込んだ後に発火するイベント
//loadはDOMツリー(HTML)の文書構造とCSS、画像など全てのコンテンツを読み込んだ後に発火するイベント
const dcl = document.querySelector('.dcl');
const load = document.querySelector('.load');

//DOMContentLoadedはdocumentオブジェクトに対してイベントを設定している
document.addEventListener("DOMContentLoaded", function () {
    dcl.classList.add('done');
});

//loadはwindowオブジェクトに対してイベントを設定している
window.addEventListener("load", function () {
    load.classList.add('done');
});
//documentオブジェクトはDOM操作ができるもののことを指す。windowオブジェクトはブラウザのwindowを指す
//DOMContentLoadedはdocumentオブジェクトもwindowオブジェクト登録できるが、loadオブジェクトはwindowオブジェクトのみ登録することができる