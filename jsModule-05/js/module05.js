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
  langChoice = (langChoice == null) ? "-1" : langChoice;
  switch (langChoice) {
    case null: break;
    case "0":
      alert("You choose english");  
      keyboard.currentLang = keyboard.langs[0];
      break;
    case "1" :
      alert("Вы выбрали русский язык");
      keyboard.currentLang = keyboard.langs[1];
      break;
    case "2" : 
      alert("Ви вибрали українську мову"); 
      keyboard.currentLang = keyboard.langs[2];
      break;
    case "-1" :
      break;
    default :
      langChoice = null;
      alert("был выбран не доступный язык");
    }
} while (langChoice == null);

// проврка
console.log(keyboard.currentLang);

const getRand = arr => Math.floor(Math.random() * arr.length);

function getRandCharInAlph (langObj, callback){
  let rowArr = Object.values(langObj);
  const arrayIdx = callback(rowArr);       
  const result = rowArr[arrayIdx][callback(rowArr[arrayIdx])];              
  return result;  
}

// проверка
console.log(getRandCharInAlph(keyboard.layouts[keyboard.currentLang], getRand));