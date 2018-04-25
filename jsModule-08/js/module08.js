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
