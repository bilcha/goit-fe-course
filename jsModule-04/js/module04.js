const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

function addKeyboardLayout (stringAlfabet, lineBrOne, lineBrTwo) {
  const aArray = stringAlfabet.split("");
  let keyboard;
  return keyboard = [aArray.slice(0, aArray.indexOf(lineBrOne)), aArray.slice(aArray.indexOf(lineBrOne), aArray.indexOf(lineBrTwo)), aArray.slice(aArray.indexOf(lineBrTwo))];
}

const alphabetAr = addKeyboardLayout (alphabet, "a", "z");
console.log(alphabetAr);

function getRandCharInRow(row, i){
  let j = Math.floor(Math.random() * row[i].length);
  return row[i][j];
}
// проверка
console.log (getRandCharInRow(alphabetAr, 0));

function getRandCharInAlph() {
  var args = Array.from(arguments);
  let i = Math.floor(Math.random() * args.length);
  let k = Math.floor(Math.random() * args[i].length);
  return args[i][k];
}
// проверка
console.log (getRandCharInAlph(alphabet));

