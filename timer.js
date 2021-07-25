const timer = {
    
}

function initTimer(id, time) {
  const timerSelector = document.querySelector('#timer-1')
  const dayValue = document.querySelector('[data-value="days"]')
  const hourValue = document.querySelector('[data-value="hours"]')
  const minsValue = document.querySelector('[data-value="mins"]')
  const secValue = document.querySelector('[data-value="secs"]')

  function timerUpdate() {
    const timerObj = timerComponents(time)

    dayValue.innerHTML = timerObj.daysdays
    hourValue.innerHTML = timerObj.hours
    minsValue.innerHTML = timerObj.mins
    secValue.innerHTML = timerObj.secs
  }

}

function timerComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

    const secs = Math.floor((time % (1000 * 60)) / 1000);

    return {days, hours, mins, secs};
}

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Aug 19, 2021'),
  });

