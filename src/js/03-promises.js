import Notiflix from 'notiflix';

const form = document.querySelector('.form');
form.addEventListener('submit', onBtnSubmit);

function onBtnSubmit(event) {
  event.preventDefault();

  let delay = Number(event.target.elements.delay.value);
  const step = Number(event.target.elements.step.value);
  const amount = Number(event.target.elements.amount.value);
  console.log(delay);
  if (delay < 0 || step < 0 || amount <= 0) {
    Notiflix.Notify.warning('Please enter a value greater than "0"');
    return;
  }
  if (isNaN(amount)) {
    Notiflix.Notify.warning('please enter');
    return;
  };
  
for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    delay += step;
  }
  };



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject({ position, delay })
      }
    }, delay);
  });
};





