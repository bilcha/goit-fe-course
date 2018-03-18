const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

function addKeyboardLayout (stringAlfabet, lineBrOne, lineBrTwo) {
 const aArray = stringAlfabet.split("");
 const keyboard = [aArray.slice(0, aArray.indexOf(lineBrOne)), aArray.slice(aArray.indexOf(lineBrOne), aArray.indexOf(lineBrTwo)),  aArray.slice(aArray.indexOf(lineBrTwo))];
 return keyboard;
}
// проверка
const alphabetAr = addKeyboardLayout (alphabet, "a", "z");
console.log(alphabetAr);

function getRand(arrayName){
  let randIdx = Math.floor(Math.random() * arrayName.length);
  return randIdx;
}

function getRandCharInRow(arrayName, arrayIdx){
  let result = arrayName[arrayIdx][getRand(arrayName[arrayIdx])];
  return result;
}

// проверка
console.log (getRandCharInRow(alphabetAr, 0));

function getRandCharInAlph() {
  let arrayName = Array.from(arguments);
  let arrayIdx = getRand(arrayName);
  let result = arrayName[arrayIdx][getRand(arrayName[arrayIdx])];
  return result;
}

// // проверка
console.log (getRandCharInAlph(alphabet));


// // arrow func

// const addKeyboardLayout = (stringAlfabet, lineBrOne, lineBrTwo) => {
//  const aArray = stringAlfabet.split("");
//  return keyboard = [aArray.slice(0, aArray.indexOf(lineBrOne)), aArray.slice(aArray.indexOf(lineBrOne), aArray.indexOf(lineBrTwo)),  aArray.slice(aArray.indexOf(lineBrTwo))];
// }
// const getRand = arrayName => Math.floor(Math.random() * arrayName.length);

// const getRandCharInRow = (arrayName, arrayIdx) => arrayName[arrayIdx][getRand(arrayName[arrayIdx])];

// const getRandCharInAlph = (...rest) => {
// let arrayIdx = getRand(rest);
// return rest[arrayIdx][getRand(rest[arrayIdx])];
// }

// // проверка
// const alphabetAr = addKeyboardLayout (alphabet, "a", "z");
// console.log(alphabetAr);

// console.log (getRandCharInRow(alphabetAr, 0));

// console.log (getRandCharInAlph(alphabet));