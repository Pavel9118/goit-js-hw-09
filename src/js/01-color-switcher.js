const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
  bodyColor: document.querySelector('body'),
}
// console.log(refs.start);
// console.log(refs.stop);
// console.log(refs.bodyColor);


refs.start.addEventListener('click', onStart);
refs.stop.addEventListener('click', onStop);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

function onChangeBody() {
    const changeBodyColor = getRandomHexColor();
    document.body.style.backgroundColor = changeBodyColor;
  };

function onStart() {
  timerId = setInterval(onChangeBody, 1000);
  refs.start.disabled = true;
  refs.stop.disabled = false;


};

function onStop() {
  clearInterval(timerId);
  refs.start.disabled = false;
  refs.stop.disabled = true;
  
  
};






