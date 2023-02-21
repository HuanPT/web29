const hours = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const times = document.querySelector(".time");
const dateNew = document.querySelector(".date");
const toggle = document.querySelector(".toggle");
const html = document.querySelector("html");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

toggle.addEventListener("click", (e) => {
  html.classList.toggle("dark");
  if (html.classList.contains("dark")) toggle.innerText = "Light Mode";
  else toggle.innerText = "Dark Mode";
});

// function setTime() {
//   const time = new Date();
//   const month = time.getMonth();
//   const day = time.getDay();
//   const date = time.getDate();
//   const hour = time.getHours();

//   const seconds = time.getSeconds();

//   const minutes = time.getMinutes();

//   const hoursForClock = hour % 12;
//   const amPm = hour >= 12 ? "PM" : "AM";

//   hours.style.transform = `translate(-50%,-100%) rotate(${scale(
//     hoursForClock,
//     0,
//     11,
//     0,
//     360
//   )}deg)`;

//   minute.style.transform = `translate(-50%,-100%) rotate(${scale(
//     minutes,
//     0,
//     59,
//     0,
//     360
//   )}deg)`;

//   second.style.transform = `translate(-50%,-100%) rotate(${scale(
//     seconds,
//     0,
//     59,
//     0,
//     360
//   )}deg)`;

//   times.innerText = `${hoursForClock} : ${
//     minutes < 10 ? `0${minutes}` : minutes
//   }: ${seconds < 10 ? `0${seconds}` : seconds} ${amPm}`;

//   const span = document.createElement("span");
//   span.className = "circle";
//   span.innerText = date;

//   dateNew.appendChild(span);
//   dateNew.innerText = `${days[day]}, ${months[month]}`;
// }
// const scale = (num, in_min, in_max, out_min, out_max) => {
//   return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
// };

// setTime();

// setInterval(setTime, 1000);

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondDegrees = (seconds / 60) * 360;
  second.style.transform = `translate(-50%,-100%) rotate(${secondDegrees}deg)`;

  const mins = now.getMinutes();
  const minDegrees = (mins / 60) * 360 + (seconds / 60) * 6;
  minute.style.transform = `translate(-50%,-100%) rotate(${minDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30;
  hours.style.transform = `translate(-50%,-100%) rotate(${hourDegrees}deg)`;
  const month = now.getMonth();
  const day = now.getDay();
  const date = now.getDate();

  const amPm = hour >= 12 ? "PM" : "AM";
  times.innerText = `${hour % 12} : ${mins < 10 ? `0${mins}` : mins}: ${
    seconds < 10 ? `0${seconds}` : seconds
  } ${amPm}`;

  const span = document.createElement("span");
  span.className = "date circle";
  span.innerText = date;

  dateNew.appendChild(span);
  dateNew.innerHTML = `${days[day]} ${months[month]}  <span class="circle">${date}</span>`;
}

setInterval(setDate, 1000);

setDate();
