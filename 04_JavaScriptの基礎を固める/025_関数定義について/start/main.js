const hello = function (name1, age) {
  // let name1 = 'ken';
  console.log('hello!' + name1 + age);
  return name1 + age;
};

// function hello(name1, age) {
//   // let name1 = 'ken';
//   console.log('hello!' + name1 + age);
//   return name1 + age;
// }

hello('Code Mafia', 10);
const returnVal = hello('Code Mafia2', 20);
console.log(returnVal);
