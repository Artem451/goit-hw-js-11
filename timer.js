class CountdownTimer  {
  constructor ({selector, targetDate}){
    this.selector = selector
    this.targetDate = targetDate
  }
  get timer () {

    const statrTimer = this.targetDate
    const dayValue = document.querySelector('[data-value="days"]')
    const hourValue = document.querySelector('[data-value="hours"]')
    const minsValue = document.querySelector('[data-value="mins"]')
    const secValue = document.querySelector('[data-value="secs"]')
     setInterval (() => {
        const curentTime = Date.now()
        const deltaTime = statrTimer - curentTime
        const timerComp = timerComponents(deltaTime)

        dayValue.innerHTML = timerComp.days
        hourValue.innerHTML = ('0' + timerComp.hours).slice(-2)
        minsValue.innerHTML = ('0' + timerComp.mins).slice(-2)
        secValue.innerHTML = ('0' + timerComp.secs).slice(-2)

        return console.log(timerComp)
      },1000) 
    }
}


function timerComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

    const secs = Math.floor((time % (1000 * 60)) / 1000);

    return {days, hours, mins, secs};
}

let time = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Aug 19, 2021'),
  });
time.timer()
