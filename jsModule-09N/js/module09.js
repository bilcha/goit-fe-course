const templateData = [
[{"q" : "do"}, {"w" : "re"}, {"e" : "mi"}, {"r" : "fa"}, {"t" : "sol"}, {"y" : "la"}, {"u" : "si"}, {"i" : "do"}, {"o" : "re"}, {"p" : "mi"}, {"[" : "fa"}, {"]" : "sol"}],
[{"a" : "do"}, {"s" : "re"}, {"d" : "mi"}, {"f" : "fa"}, {"g" : "sol"}, {"h" : "la"}, {"j" : "si"}, {"k" : "do"}, {"l" : "re"}, {";" : "mi"}, {"'" : "fa"}],
[{"z" : "do"}, {"x" : "re"}, {"c" : "mi"}, {"v" : "fa"}, {"b" : "sol"}, {"n" : "la"}, {"m" : "si"}, {"," : "do"}, {"." : "re"}, {"/" : "mi"}],
[{"space" : "do"}]
]

function renderKbd(kbd) {
const source = document.querySelector('#keyboardTpl').innerHTML.trim();
const compiled = _.template(source);
const result = compiled({
  data: kbd
  });
  const container = document.querySelector(".keyboard");
  container.innerHTML = result;
}

renderKbd(templateData);

const playSound = note => {
  const audio = document.querySelector(`audio[data-note=${note}]`);
  audio.currentTime = 0;
  audio.play();
};

const buttons = Array.from(document.querySelectorAll("button"));
const keys = "q wertyuiop[]asdfghjkl;'zxcvbnm,./".split("");


window.addEventListener("keydown", callback);
window.addEventListener("keyup", function() {
	btns.forEach(function(btn) {
		btn.classList.remove('keyboard__btn--active')})
});


const btns = document.querySelectorAll('.keyboard__btn');
const ckeckBox = document.querySelector('#slideThree');


function callback(event){
   let c = keyCodeToChar(event.which);    

    if (keys.indexOf(c) >= 0) {

    	if (c == " ") c= "space";     
    	
    	btns.forEach(function(btn) {
  			if (btn.innerHTML == c){
  				btn.classList.toggle('keyboard__btn--active');
  				if (ckeckBox.checked) {
  				playSound(btn.getAttribute('data-note'));
  				}
  			}
		});

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
