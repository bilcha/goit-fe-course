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
    this.layouts[lang][layoutRows[0]] = layout[0];
    this.layouts[lang][layoutRows[1]] = layout[1]; 
    this.layouts[lang][layoutRows[2]] = layout[2]; 
    if (this.langs.indexOf(lang) < 0){
      this.langs.push(lang);
    }
  }
}
keyboard.addLayout(createKeyboardLayout(alphabethEn, "a", "z"), "en");
keyboard.addLayout(createKeyboardLayout(alphabethRu, "ф", "я"), "ru");
keyboard.addLayout(createKeyboardLayout(alphabethUa, "ф", "я"), "ua");

doPrompt = function () {
  let langChoice = prompt ("Выберете язык  en-0, ru-1, ua-2", 0);
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
    default : 
      alert("был выбран не доступный язык");
      doPrompt();
    }
}

doPrompt();


// проврка
console.log(keyboard.currentLang);

let path = "layouts." + keyboard.currentLang;
let getCurrentLang = path.split('.').reduce(function(prev, curr) {       
        return prev ? prev[curr] : undefined}, keyboard);
// проверка
console.log(getCurrentLang);

const getRand = arr => Math.floor(Math.random() * arr.length);

const getRandCharInAlph = (langObj) => {
  let layoutRow = langObj[layoutRows[getRand(layoutRows)]]
  return layoutRow[getRand(layoutRow)];
}
// проверка
console.log(getRandCharInAlph(getCurrentLang));