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