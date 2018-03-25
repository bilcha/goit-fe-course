const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

function addKeyboardLayout (stringAlfabet, lineBrOne, lineBrTwo) {
 const aArray = stringAlfabet.split("");
 const keyboard = [aArray.slice(0, aArray.indexOf(lineBrOne)), aArray.slice(aArray.indexOf(lineBrOne), aArray.indexOf(lineBrTwo)),  aArray.slice(aArray.indexOf(lineBrTwo))];
 return keyboard;
}
// проверка
const alphabetAr = addKeyboardLayout (alphabet, "a", "z");
console.log(alphabetAr);

function getRand(arr){
  const randIdx = Math.floor(Math.random() * arr.length);
  return randIdx;
}

function getRandCharInRow(arr, arrayIdx, callback){
	const rowInArr = arr[arrayIdx];
 	const result = rowInArr[callback(rowInArr)];
 	return result;
}

// проверка
console.log (getRandCharInRow(alphabetAr, 0, getRand));


function getRandCharInAlph(arr, callback) {
	const arrayIdx = callback(arr);
  	const result = getRandCharInRow(arr, arrayIdx, callback);
  	return result;
}

// // проверка
console.log (getRandCharInAlph(alphabetAr, getRand));

// // arrow func

// const addKeyboardLayout = (stringAlfabet, lineBrOne, lineBrTwo) => {
//  const aArray = stringAlfabet.split("");
//  return keyboard = [aArray.slice(0, aArray.indexOf(lineBrOne)), aArray.slice(aArray.indexOf(lineBrOne), aArray.indexOf(lineBrTwo)),  aArray.slice(aArray.indexOf(lineBrTwo))];
// }
// const getRand = arr => Math.floor(Math.random() * arr.length);

// const getRandCharInRow = (arr, arrayIdx) => arr[arrayIdx][getRand(arr[arrayIdx])];

// const getRandCharInAlph = (...arr) => {
//   const arrayIdx = getRand(arr);
//   return arr[arrayIdx][getRand(arr[arrayIdx])];
// }

// // проверка
// const alphabetAr = addKeyboardLayout (alphabet, "a", "z");
// console.log(alphabetAr);

// console.log (getRandCharInRow(alphabetAr, 0));

// console.log (getRandCharInAlph(alphabet));