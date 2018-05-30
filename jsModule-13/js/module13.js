
const form = document.querySelector("form");
const firstname = document.getElementById("first_name");
const lastname = document.getElementById("last_name");
const tel = document.getElementById("tel");
const submitBtn = document.getElementById("submit-btn");
const resultsList = document.querySelector(".results");
const fields = document.querySelectorAll(".validate");

submitBtn.addEventListener("click", validate);

let result = {};

function validate(evt){
  evt.preventDefault();
  let regTel = /^\+?(38)?0{1}[1-9]{1}[0-9]{8}$/;
  let regName = /^(([А-ЯЁ]{1}[а-яё]{1,29})|([A-Z]{1}[a-z]{1,29}))$/u;
  let telValid = regTel.test(tel.value);
  let nameValid = regName.test(firstname.value);
  let lastNameValid = regName.test(lastname.value);
  result = {
    firstname : nameValid,
    lastname  : lastNameValid,
    tel : telValid,
   }  
   showResults(result);

}

function showResults(results) {
  while (resultsList.hasChildNodes()) {   
    resultsList.removeChild(resultsList.firstChild);
  }   
  for (let key in results) {

    let list = document.createElement('li');
      if(results[key] == true){
        list.textContent = `SUCCESS: ${key} passed validation`;
        list.className = 'success';
       
      }
      else{
        list.textContent = `ERROR: ${key} failed validation`;
        list.className = 'error';
      }
    resultsList.appendChild(list);
  }
}
