const btnStart = document.querySelector('.start');
const btnStop = document.querySelector('.stop');


function IntrvalCount() {
  this.running = false;
  this.startTime = 0;
  this.stopTime = 0;
  this.interval = 0;
};
let timer = new IntrvalCount();

IntrvalCount.prototype.start = function () {
  if (!this.running) {
  console.log('Timer started');
  this.startTime = Date.now();
  this.running = true;
  } else {
    console.log ('Timer is already running!')
  }
};
IntrvalCount.prototype.stop = function () {
  if (this.running) {
    this.running = false;
    this.stopTime = Date.now();
    this.interval = this.stopTime - this.startTime;
    console.log(`Timer stopped! Interval: ${this.interval / 1000} sec`);
  } else {
    console.log('Press start button')
  }
};

btnStart.addEventListener('click', timer.start.bind(timer));
btnStop.addEventListener('click', timer.stop.bind(timer));