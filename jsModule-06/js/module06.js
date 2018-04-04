const keyTrainer = {
  chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
  charCount: 0,
  task: [],
  userInput: "", 
  userErrors: 0,
  setCharCount: function(){
    while (!this.checkPositiveInteger(this.charCount)){
      let counter = prompt("Введите необходимое количество символов ", 0);
        if (counter == null) {
          return;
        };
      this.charCount = parseInt(counter);
    }
  },
  checkPositiveInteger: function (num){
    return (Math.sign(num) > 0) && Number.isInteger(num);
  },
  createTask: function (){
    const getRand = arr => arr[Math.floor(Math.random() * arr.length)];
    for (let i = 0; i < this.charCount; i++){
      this.task[i] = getRand(this.chars);
    }
  },  


startTask: function (){   
    if (this.task.length > 0) {
      let taskString = this.task.join("");
      this.userInput = prompt ("Наберите строку: " + taskString);
      if (this.userInput == null) {
            return;
        };
      let userInputArr = this.userInput.split('');
      this.userErrors = 0;
      for(let i = 0; i < this.task.length; i++){
        if(this.task[i] != userInputArr[i]){
          this.userErrors++;
          }
      }  
      if (userInputArr.length > this.task.length){
          this.userErrors = this.userErrors + (userInputArr.length - this.task.length);
          }
      if (keyTrainer.userErrors == 0){
        alert("Congrats!");
      } else{
        alert(`Количество ошибок: ${keyTrainer.userErrors}. Успехов в следующем упражнении!`);
      }
    }
  }
}
  
function run() {
  keyTrainer.setCharCount();
  keyTrainer.createTask();
  keyTrainer.startTask();
}

run();



      
    