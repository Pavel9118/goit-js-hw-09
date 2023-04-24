import Notiflix from 'notiflix';




const form = document.querySelector('.form');


form.addEventListener('submit', onBtnSubmit);


function onBtnSubmit(event) {
    event.preventDefault();

  // console.log(event.target.elements.delay.value);
  // console.log(event.target.elements.step.value);
  // console.log(event.target.elements.amount.value);
  // Notiflix.Notify.warning('Заповніть всі поля форми');
  // Notiflix.Notify.success('✅ Fulfilled');
  // Notiflix.Notify.failure('❌ Rejected');

  const delay = event.target.elements.delay.value;
  const step = event.target.elements.step.value;
  const amount = event.target.elements.amount.value;

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });

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
















