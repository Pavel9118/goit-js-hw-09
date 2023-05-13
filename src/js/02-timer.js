
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
// require('flatpickr/dist/themes/material_green.css');




const refs = {
  inputDateEl: document.getElementById('datetime-picker'),
  timer: document.querySelector('.timer'),
  startBtn: document.querySelector('[data-start]'),
  dataDay: document.querySelector('[data-days]'),
  dataHour: document.querySelector('[data-hours]'),
  dataMinute: document.querySelector('[data-minutes]'),
  dataSecond: document.querySelector('[data-seconds]'),

};

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
    const interval = selectedDates[0] - newSelectedDateNow;
    console.log(interval);
    if (interval > 0) {
      refs.startBtn.disabled = false;
    } else {
      window.alert("Please choose a date in the future");
}
  },
};

const fP = flatpickr(refs.inputDateEl, options); 

refs.startBtn.addEventListener('click', updateOnClick);

function updateOnClick() {
  setInterval(countDownTime, 1000);
};



function countDownTime() {
  const now = new Date();
  const difTime = fP.selectedDates[0] - now;
  console.log(now);
  console.log(fP.selectedDates[0]);
  console.log(difTime);
  const time = convertMs(difTime);
  refs.dataDay.textContent = addYearZero(time.days);
  refs.dataHour.textContent = addLeadingZero(time.hours);
  refs.dataMinute.textContent = addLeadingZero(time.minutes);
  refs.dataSecond.textContent = addLeadingZero(time.seconds);

  

};

function addLeadingZero(value) {
  return String(value).padStart(2, "0");
};

function addYearZero(value) {
  if (value > 99) {
 return String(value).padStart(3, "0");
  } else {
    return String(value).padStart(2, "0");
  }
 
};

console.log("heloo");

















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
