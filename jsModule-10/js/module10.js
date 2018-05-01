
const lang = "qwerty";
const string = "qryte";
const charsArr = string.split("").reverse();
const timerOutput = document.querySelector(".timer");
const exercise = document.querySelector(".exercise");
const kbd = document.querySelector(".keyboard");
const lsKey = 'keyKPS';
let buttons; 
const timer = {
  id: ""
};


exercise.innerHTML = string;

function init(){
  sec = 0;
  createRow(lang);
  buttons = document.querySelectorAll(".button");
};
init();


function tick(){
  sec++;
  timerOutput.childNodes[0].nodeValue = sec;
 };


function createRow (arr) {
  for (let i = 0; i < arr.length; i++) {

  let keyBtn = document.createElement("button");
    keyBtn.classList.add("button");
    keyBtn.textContent = arr[i];
    kbd.appendChild(keyBtn);
 }
}

window.addEventListener("keydown", keydown);
window.addEventListener("keyup", function() {
  buttons.forEach(function(btn) {
    btn.classList.remove('keyboard__btn--active')})
});

function keydown(event){
  if (timer.id == "" ) {
    timer.id = setInterval(tick, 1000);
  }
   let c = keyCodeToChar(event.which);    
   if (lang.indexOf(c) >= 0) {
      buttons.forEach(function(btn) {
        if (btn.innerHTML == c){
          btn.classList.toggle('keyboard__btn--active');
        }
    });
   }
  
  if (c == charsArr[charsArr.length - 1]){
    charsArr.pop();
  }
  if (charsArr.length == 0){
    clearInterval(timer.id);
    let storedKPS = localStorage.getItem(lsKey);
     console.log(storedKPS);
    let currentKPS = parseInt(timerOutput.innerHTML)/string.length;
    if ((storedKPS == null) || (storedKPS > currentKPS)){
      localStorage.setItem(lsKey, currentKPS);
      console.log(currentKPS)
    }
    return
  }
 }

function keyCodeToChar(keyCode) {

  const toASCII = {
        '188': '44',
        '109': '45',
        '190': '46',
        '191': '47',
        '192': '96',
        '220': '92',
        '222': '39',
        '221': '93',
        '219': '91',
        '173': '45',
        '187': '61', //IE Key codes
        '186': '59', //IE Key codes
        '189': '45'  //IE Key codes
    }

  let result = keyCode;
  if (toASCII.hasOwnProperty(result)) {
        result = toASCII[result];
    }  
    if (result >= 65 && result <= 90) {
        result = String.fromCharCode(result + 32);
    } else {
        result = String.fromCharCode(result);
    }
    return result;
}

    

