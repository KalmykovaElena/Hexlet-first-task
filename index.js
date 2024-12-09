const input = document.getElementById('query'),
  button = document.getElementById('button'),
  timers = document.querySelector('.timers');

button.addEventListener('click', () => {
  const inputValue = input.value.trim();
  if (inputValue) {
    input.value = '';
    addNewTimer(inputValue);
    input.focus();
  } else {
    input.focus();
  }
});

function addNewTimer(number) {
  let currentValue = +number;
  const wrapper = createElement('div', 'wrapper');
  const timer = createElement('p', 'timer', currentValue);
  wrapper.appendChild(timer);
  const stopButton = createElement('button', 'button', 'stop');
  wrapper.appendChild(stopButton);
  timers.appendChild(wrapper);
  let timerInterval;
  const startTimer = () => {
    timerInterval = setInterval(() => {
      if (currentValue > 0) {
        currentValue -= 1;
        timer.textContent = currentValue;
      } else {
        clearInterval(timerInterval);
        wrapper.remove();
      }
    }, 1000);
  };
  stopButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    setTimeout(() => {
      wrapper.remove();
    }, 300);
  });
  startTimer();
}

function createElement(type, className, textContent) {
  const newElement = document.createElement(type);
  if (className) newElement.classList.add(className);
  if (textContent) newElement.textContent = textContent;
  return newElement;
}
