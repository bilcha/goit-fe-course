const keyTrainer = {
  chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
  charCount: 0,
  task: [],
  userInput: "", 
  userErrors: 0,
  setCharCount: function(){
    this.charCount = -1;
    while (!this.checkPositiveInteger(this.charCount)){
      let counter = prompt("Введите необходимое количество символов ", 0);
      this.charCount = parseInt(counter);
    }
  },
  checkPositiveInteger: function (num){
    return (Math.sign(num) > 0) && Number.isInteger(num) ? true : false;
  },
  createTask: function (){
    this.task = new Array(this.charCount);
    
    const getRand = arr => arr[Math.floor(Math.random() * arr.length)];
    for (let i = 0; i < this.charCount; i++){
      this.task[i] = getRand(this.chars);
    }
  },  
  startTask: function (){
    let taskString = this.task.join("");
    this.userInput = prompt ("Наберите строку: " + taskString);
    let userInputArr = this.userInput.split('');
    this.userErrors = 0;
    for(let i = 0; i < this.task.length; i++){
      if(this.task[i] != userInputArr[i]){
        this.userErrors++;
      }
    }
   }
 }

function run () {
  keyTrainer.setCharCount();
  console.log (keyTrainer.charCount);
  keyTrainer.createTask();
  console.log (keyTrainer.task);
  keyTrainer.startTask();
  console.log(keyTrainer.userErrors);
}

run();

if (keyTrainer.userErrors == 0){
  alert("Congrats!");
}
else{
  alert(`Количество ошибок: ${keyTrainer.userErrors}. Успехов в следующем упражнении!`);
}

      
    