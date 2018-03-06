const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

const aArray = alphabet.split("")


const firstRow = aArray.slice(0, aArray.indexOf(']'));
const secondRow = aArray.slice(aArray.indexOf('a'), aArray.indexOf("'"));
const thirdRow = aArray.slice(aArray.indexOf('z'));

const keyboard = [firstRow, secondRow, thirdRow];

// если отдельная переменная для каждого слова
let resHello = (`${keyboard[1][5]}${keyboard[0][2]}${keyboard[1][8]}${keyboard[1][8]}${keyboard[0][8]}`);
let resScript = (`${keyboard[1][6]}${keyboard[1][0]}${keyboard[2][3]}${keyboard[1][0]}${keyboard[1][1]}${keyboard[2][2]}${keyboard[0][3]}${keyboard[0][7]}${keyboard[0][9]}${keyboard[0][4]}`);
let resTrainer = (`${keyboard[0][4]}${keyboard[0][3]}${keyboard[1][0]}${keyboard[0][7]}${keyboard[2][5]}${keyboard[0][2]}${keyboard[0][3]}`);

// переиспользование переменной

// let result = (`${keyboard[1][5]}${keyboard[0][2]}${keyboard[1][8]}${keyboard[1][8]}${keyboard[0][8]}`);
// console.log(result)

// result = (`${keyboard[1][6]}${keyboard[1][0]}${keyboard[2][3]}${keyboard[1][0]}${keyboard[1][1]}${keyboard[2][2]}${keyboard[0][3]}${keyboard[0][7]}${keyboard[0][9]}${keyboard[0][4]}`);
// console.log(result)

// result = (`${keyboard[0][4]}${keyboard[0][3]}${keyboard[1][0]}${keyboard[0][7]}${keyboard[2][5]}${keyboard[0][2]}${keyboard[0][3]}`);
// console.log(result)