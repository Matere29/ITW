const firstName = 'John';
const age = 35;
//declared hobby as a constant
const hobby = 'Coding';

const logTwice = (parameter) => {
 //fixed console logging
  console.log(parameter)
  console.log(parameter)
}
//changed function name into myHobby to avoid hoisting
function myHobby () {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`)
}

myHobby()

