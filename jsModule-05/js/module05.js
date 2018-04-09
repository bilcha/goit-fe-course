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
  currentLang: null,
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


const getLang = () => {
  let langChoice = '';
  do{
    langChoice = prompt ("Выберете язык  en-0, ru-1, ua-2", 0);
    if (langChoice === null) return;

    let res = parseInt(langChoice);
    if (res in [0,1,2]) { 
      keyboard.currentLang = keyboard.langs[res];
      break
    } else { 
      alert("был выбран недоступный язык");
    }

  }while(true);
}

getLang();

// проверка
console.log(keyboard.currentLang);

const getRand = arr => Math.floor(Math.random() * arr.length);

function getRandCharInAlph (keyboardObj, callback){
  if (keyboardObj.currentLang == null) return "";
  let rowArr = Object.values(keyboardObj.layouts[keyboardObj.currentLang]);
  const arrayIdx = callback(rowArr);      
  const result = rowArr[arrayIdx][callback(rowArr[arrayIdx])];              
  return result; 
}


// проверка
console.log(getRandCharInAlph(keyboard, getRand));