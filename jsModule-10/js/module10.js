
const lang = "qwerty";
const string = "qryte";
const charsArr = string.split("").reverse();
const timerOutput = document.querySelector(".timer");
const exercise = document.querySelector(".exercise");
const lsKey = 'keyKPS';
let bestScore;
let inputData;
let storedKPS = localStorage.getItem(lsKey);

const timer = {
  id: ""
};

exercise.innerHTML = string;

function init(){
  sec = 0;
  inputData = document.createElement("input");
    inputData.classList.add("inputData");
    timerOutput.after(inputData);

  bestScore = document.createElement("div");
    bestScore.classList.add("bestScore");
    exercise.before(bestScore);
    bestScore.innerHTML = storedKPS;
  
  bestScoreDiscr = document.createElement("p");
    bestScoreDiscr.textContent = "Best score(symb/sec):";
    bestScore.before(bestScoreDiscr);

};
init();

function tick(){
  sec++;
  timerOutput.childNodes[0].nodeValue = sec;
 };

inputData.addEventListener("keypress", keypress);

function keypress(event){
  
   let c = keyCodeToChar(event.which);    

  if (c == charsArr[charsArr.length - 1]){
    charsArr.pop();
    if (timer.id == "" ) {
    timer.id = setInterval(tick, 1000);
  }
  }
  else {
    event.preventDefault();
    };
  if (charsArr.length == 0){
          
   if (timer.id != "") {          
      clearInterval(timer.id);
      timer.id = "";
      let currentKPS = parseInt(timerOutput.innerHTML)/string.length;

      setTimeout(() => {
        alert(`your score: ${currentKPS}`);
      }, 1000);

      if ((storedKPS == null) || (storedKPS > currentKPS)){
        localStorage.setItem(lsKey, currentKPS);
      }
   }
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

  