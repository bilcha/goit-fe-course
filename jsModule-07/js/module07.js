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
  },
  createLayout: function () {
    
    let layout = this.currentLang ? this.layouts[this.currentLang] : this.layouts.en;
    
    const createRow = function(arr) {
      let rowDiv = document.createElement("div");
        rowDiv.classList.add("keyboard");
      for (let i = 0; i < arr.length; i++) {
        let keyDiv = document.createElement("div");
        keyDiv.textContent = arr[i];
        keyDiv.classList.add("key");
        keyDiv.style.width = "30px";
        keyDiv.style.height = "30px";        
        rowDiv.appendChild(keyDiv);
      }
      document.body.appendChild(rowDiv);  
    }
    
    createRow(layout.topRow);
    createRow(layout.middleRow);
    createRow(layout.bottomRow);
    
  }
}
keyboard.addLayout(createKeyboardLayout(alphabethEn, "a", "z"), "en");
keyboard.addLayout(createKeyboardLayout(alphabethRu, "ф", "я"), "ru");
keyboard.addLayout(createKeyboardLayout(alphabethUa, "ф", "я"), "ua");

// keyboard.currentLang = 'ua';

window.onload = keyboard.createLayout();