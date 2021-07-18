const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
     
  function colorSelect (array) {
      const color = array[randomIntegerFromInterval(0, colors.length - 1)]
      const bodyEl = document.querySelector('body')
      bodyEl.style.backgroundColor = `${color}` 
  }
  
  const startButton = document.querySelector('[data-action="start"]')
  const stopButton = document.querySelector('[data-action="stop"]')
  let intervalId = null
  startButton.addEventListener('click', () => {
    intervalId = setInterval(()=>{
        colorSelect(colors)
      }, 1000)
    })

  stopButton.addEventListener('click', () => {
    clearInterval(intervalId)
  })