
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';





const refs = {
  inputDateEl: document.getElementById('datetime-picker'),
  timer: document.querySelector('.timer'),
  startBtn: document.querySelector('[data-start]'),
  dataDay: document.querySelector('[data-days]'),
  dataHour: document.querySelector('[data-hours]'),
  dataMinute: document.querySelector('[data-minutes]'),
  dataSecond: document.querySelector('[data-seconds]'),

};
let userTime = 'null';
refs.timer.style.display = "flex";
refs.timer.style.paddingTop = "50px";
refs.dataDay.style.fontSize = "50px";
refs.dataHour.style.fontSize = "50px";
refs.dataMinute.style.fontSize = "50px";
refs.dataSecond.style.fontSize = "50px";
refs.startBtn.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const newSelectedDateNow = new Date();
    userTime = selectedDates[0];
    const interval = userTime - newSelectedDateNow;
    console.log(interval);
    if (interval > 0) {
      refs.startBtn.disabled = false;
    } else {
      // window.alert("Please choose a date in the future");
      Notiflix.Notify.success('Please choose a date in the future');
      refs.startBtn.disabled = true;
}
  },
};

const fP = flatpickr(refs.inputDateEl, options); 

refs.startBtn.addEventListener('click', updateOnClick);

function updateOnClick() {
  intervalID = setInterval(countDownTime, 1000);
  // refs.inputDateEl.disabled = true;

};



function countDownTime() {
  const now = new Date();
  const difTime = fP.selectedDates[0] - now;
  // console.log(now);
  // console.log(fP.selectedDates[0]);
  // console.log(difTime);
  const time = convertMs(difTime);
  refs.dataDay.textContent = addLeadingZero(time.days);
  refs.dataHour.textContent = addLeadingZero(time.hours);
  refs.dataMinute.textContent = addLeadingZero(time.minutes);
  refs.dataSecond.textContent = addLeadingZero(time.seconds);
 
  if (difTime < 0) {
    console.log('DANGER!!!')
    refs.startBtn.disabled = true;
    clearInterval(intervalID);
  refs.dataDay.textContent = '00';
  refs.dataHour.textContent = '00';
  refs.dataMinute.textContent = '00';
  refs.dataSecond.textContent = '00';
    return;

}
  

};

function updateTime({ days, hours, minutes, seconds }) {
 refs.dataDay.textContent = addLeadingZero(time.days);
  refs.dataHour.textContent = addLeadingZero(time.hours);
  refs.dataMinute.textContent = addLeadingZero(time.minutes);
  refs.dataSecond.textContent = addLeadingZero(time.seconds); 
}

function addLeadingZero(value) {
  return String(value).padStart(2, "0");
};




function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
















