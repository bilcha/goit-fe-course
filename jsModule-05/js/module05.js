const alphabethEn = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
const alphabethRu = "йцукенгшщзхъфывапролджэячсмитьбю.";
const alphabethUa = "йцукенгшщзхїфівапролджєячсмитьбю.";

const addKeyboardLayout = (stringAlfabet, lineBrOne, lineBrTwo) => {
const aArray = stringAlfabet.split("");
return keyboardAr = [aArray.slice(0, aArray.indexOf(lineBrOne)), aArray.slice(aArray.indexOf(lineBrOne), aArray.indexOf(lineBrTwo)), aArray.slice(aArray.indexOf(lineBrTwo))];
}
const alphabetArrEn = addKeyboardLayout (alphabethEn, "a", "z");
const alphabetArrRu = addKeyboardLayout (alphabethRu, "ф", "я");
const alphabetArrUa = addKeyboardLayout (alphabethUa, "ф", "я");
      
const keyboard = {
    layouts: {
        en: {
            topRow: alphabetArrEn[0],
            middleRow: alphabetArrEn[1],
            bottomRow: alphabetArrEn[2],
        },
        ru: {
            topRow: alphabetArrRu[0],
            middleRow: alphabetArrRu[1],
            bottomRow: alphabetArrRu[2],
        },
        ua: {
            topRow: alphabetArrUa[0],
            middleRow: alphabetArrUa[1],
            bottomRow: alphabetArrUa[2],
        }
    },
    langs: ['en', 'ru', 'ua'],
    currentLang: ''
};
let langChoice = prompt ("Выберете язык  en-0, ru-1, ua-2", 0);


switch (langChoice) {
  case "0":
    alert("You choose english");  
    keyboard.currentLang = keyboard.langs[langChoice];
    break;
  case "1" :
    alert("Вы выбрали русский язык");
    keyboard.currentLang = keyboard.langs[langChoice];
    break;
  case "2" : 
    alert("Ви вибрали українську мову"); 
    keyboard.currentLang = keyboard.langs[langChoice];
    break;
  default : 
     alert("был выбран не доступный язык");
    
}
// проврка
console.log(keyboard.currentLang);

let path = "layouts." + keyboard.currentLang;
let getCurrentLang = path.split('.').reduce(function(prev, curr) {       
        return prev ? prev[curr] : undefined}, keyboard);

const getRand = arr => Math.floor(Math.random() * arr.length);

const getRandCharInAlph = (arr) => {
let arrayIdx = getRand(arr);
return arr[arrayIdx][getRand(arr[arrayIdx])];
}
console.log(getRandCharInAlph(Object.values(getCurrentLang)));