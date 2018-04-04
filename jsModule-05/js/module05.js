const alphabethEn = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
const alphabethRu = "йцукенгшщзхъфывапролджэячсмитьбю.";
const alphabethUa = "йцукенгшщзхїфівапролджєячсмитьбю.";
const layoutRows = ["topRow", "middleRow", "bottomRow"];


const createKeyboardLayout = (stringAlfabet, lineBrOne, lineBrTwo) => {
const aArray = stringAlfabet.split("");
return keyboardAr = [aArray.slice(0, aArray.indexOf(lineBrOne)), aArray.slice(aArray.indexOf(lineBrOne), aArray.indexOf(lineBrTwo)), aArray.slice(aArray.indexOf(lineBrTwo))];
};

const keyboard = {
  layouts: {},
  langs: [],
  currentLang: '',
  addLayout: function (layout, lang) {
    this.layouts[lang] = {};
    for (i = 0; i < 3; i++) {
    this.layouts[lang][layoutRows[i]] = layout[i];
    }
    if (this.langs.indexOf(lang) < 0){
      this.langs.push(lang);
    }    
  }
}
keyboard.addLayout(createKeyboardLayout(alphabethEn, "a", "z"), "en");
keyboard.addLayout(createKeyboardLayout(alphabethRu, "ф", "я"), "ru");
keyboard.addLayout(createKeyboardLayout(alphabethUa, "ф", "я"), "ua");

let langChoice;
do {
  langChoice = prompt ("Выберете язык  en-0, ru-1, ua-2", 0);
  if (langChoice == null) {
    langChoice = -1;
  } else {
    let res = parseInt(langChoice);
    if (res in [0,1,2]) { 
      keyboard.currentLang = keyboard.langs[res];
    } else { 
      alert("был выбран недоступный язык");
      langChoice = null
    }
  }
} while (langChoice == null);

// проврка
console.log(keyboard.currentLang);

const getRand = arr => Math.floor(Math.random() * arr.length);

function getRandCharInAlph (langObj, callback){
  if (langObj == null){
    return "";
  }
  let rowArr = Object.values(langObj);
  const arrayIdx = callback(rowArr);       
  const result = rowArr[arrayIdx][callback(rowArr[arrayIdx])];              
  return result; 
}

// проверка
console.log(getRandCharInAlph(keyboard.layouts[keyboard.currentLang], getRand));