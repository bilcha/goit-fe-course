const btnStart = document.querySelector('.start');
const btnStop = document.querySelector('.stop');

class Timer {
  constructor (startTime, stopTime) {
    this.startTime = startTime;
    this.stopTime = stopTime;
    this.interval = stopTime - startTime;
    this.running = false;
    }
  start(){
    if (!this.running) {
      console.log('Timer started');
      this.startTime = Date.now();
      this.running = true;
    } else {
       console.log ('Timer is already running!')
      }
  }
  stop(){
    if (this.running) {
      this.running = false;
      this.stopTime = Date.now();
      this.interval = this.stopTime - this.startTime;
      console.log(`Timer stopped! Interval: ${this.interval / 1000} sec`);
    } else {
       console.log('Press start button')
      }
    } 
  getTime(){
    return this.interval
  }
  static timeToNY(){
    let oneDay = 24*60*60*1000; 
    let secondDate = new Date(new Date().getFullYear()+1,0,1);
    let firstDate = new Date();
    return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
  }
}

let timer1 = new Timer (0, 0);
let timer2 = new Timer (0, 1000);
let timer3 = new Timer (0, 10000);

console.log(`timer1: ${JSON.stringify(timer1)};\n timer2: ${JSON.stringify(timer2)};\n timer3: ${JSON.stringify(timer3)}`)

console.log(`${Timer.timeToNY()} days to New Year!`);


let stopwatch = new Timer (0, 0);

btnStart.addEventListener('click', function(){
  stopwatch.start()
});
btnStop.addEventListener('click', function(){
  stopwatch.stop();
});