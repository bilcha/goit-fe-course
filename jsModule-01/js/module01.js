const row1='qwertyuiop[]\\';
const row2="asdfghjkl;'";
const row3='zxcvbnm,./';

const len1=row1.length;
const len2=row2.length;
const len3=row3.length;

let firstChar1=row1.charAt(0);
let lastChar1=row1.charAt(len1-1);

let firstChar2=row2.charAt(0);
let lastChar2=row2.charAt(len2-1);

let firstChar3=row3.charAt(0);
let lastChar3=row3.charAt(len3-1);

let c1=row1.indexOf("[");
let c2=row1.indexOf("]");

const result=`Первый ряд клавиатуры: ${row1} (длина ${len1} символов), первый символ "${firstChar1}" последний - "${lastChar1}". Символ "[" расположен на позиции ${c1}, "]" на позиции ${c2}
Второй ряд клавиатуры: ${row2} (длина ${len2} символов), первый символ "${firstChar2}" последний - "${lastChar2}"\nТретий ряд клавиатуры: ${row3} (длина ${len3} символов), первый символ "${firstChar3}" последний - "${lastChar3}".`;

console.log(result);

