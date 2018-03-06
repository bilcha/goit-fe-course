const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

const aArray = alphabet.split("")


const firstRow = aArray.slice(0, aArray.indexOf(']'));
const secondRow = aArray.slice(aArray.indexOf('a'), aArray.indexOf("'"));
const thirdRow = aArray.slice(aArray.indexOf('z'));

const keyboard = [firstRow, secondRow, thirdRow];


const resHello = `${keyboard[1][5]}${keyboard[0][2]}${keyboard[1][8]}${keyboard[1][8]}${keyboard[0][8]}`;
console.log (resHello);
const resScript = `${keyboard[1][6]}${keyboard[1][0]}${keyboard[2][3]}${keyboard[1][0]}${keyboard[1][1]}${keyboard[2][2]}${keyboard[0][3]}${keyboard[0][7]}${keyboard[0][9]}${keyboard[0][4]}`;
console.log (resScript);
const resTrainer = `${keyboard[0][4]}${keyboard[0][3]}${keyboard[1][0]}${keyboard[0][7]}${keyboard[2][5]}${keyboard[0][2]}${keyboard[0][3]}`;
console.log (resTrainer);
