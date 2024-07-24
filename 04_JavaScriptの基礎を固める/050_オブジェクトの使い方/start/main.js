//オブジェクトの定義
//オブジェクトの定義の方法は2種類ある
//変数に{}を代入して初期化を行う
//{}
//{}の中に直接記述する方法と、{}の外で代入する方法がある
const person = {
  //key: value
  name2: 'tanaka'
};
person.name1 = 'satou';

//オブジェクトの作成
const person2 = {
  name3: ['suzuki', 'satou'], //オブジェクトの値には配列を格納することもできる
  age: 32,
  gender: 'male',
  interests: { //オブジェクトの中にオブジェクトを入れることもできる
    sports: 'soccer',
    music: 'piano'
  }
};
//オブジェクト名の後にドット(.)でオブジェクトのkeyを記述することをドット記法という
//この記法でオブジェクトの中身を取り出すことができる
console.log(person2.name3);
console.log(person2.name3[1]);
console.log(person2.age);
console.log(person2.gender);
console.log(person2.interests);
console.log(person2.interests.sports);
console.log(person2.interests.music);

//オブジェクトに既にあるkeyの値(value)を更新することもできる
//配列と同じようにconstでもオブジェクトの中身は変更することができる
person2.age = 12;
console.log(person2.age);

//ドット記法のほかにブラケット記法という書き方もある
//文字列としてキーを取得している
//そのため、キーを変数として扱うことができる
//キーの値が動的に変化する場合に活用することができる
const ageKey = 'age' //キーを変数に代入
person2[ageKey] = 15; //キーの部分に変数を入れる
console.log(person2.age);

//オブジェクトにはメソッドも格納することができる
const person3 = {
  name3: ['suzuki', 'satou'],
  getFllName: function () {
    console.log(this.name3[0], this.name3[1]); //getFllName()を呼び出すとコンソールにname3の全ての値が表示される
    //thisは直近の宣言されたオブジェクトを参照する
    //今回の場合はperson3オブジェクトのname3プロパティということになる
  }
}
person3.getFllName();