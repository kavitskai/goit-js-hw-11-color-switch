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

const refs = {
    btnStart: document.querySelector('[data-action="start"]'),
    btnStop: document.querySelector('[data-action="stop"]'),
    body: document.body,
};

refs.btnStart.addEventListener('click', onStart);
refs.btnStop.addEventListener('click', onStop);

let timerId = null;

function onStart() {
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
  }, 1000);
  refs.btnStart.disabled = true;
}

function onStop() {
  clearInterval(timerId);
  refs.btnStart.disabled = false;
}
