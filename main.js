const startDate = document.getElementById("start-date");
const endDate = document.getElementById("end-date");
const button = document.getElementById("button");
const output = document.getElementById("output");
const startEr = document.getElementById("startEr");
const endEr = document.getElementById("endEr");
// console.log(startDate, endDate);

button.addEventListener("click", getDateValue);

function getDateValue(e) {
  if (!startDate.value || !endDate.value) {
    startEr.innerText = "please set date";
    endEr.innerText = "please set date";
  } else {
    startEr.innerText = "";
    endEr.innerText = "";
  }
  if (startDate.value) {
    startEr.innerText = "";
  }
  if (endDate.value) {
    endEr.innerText = "";
  }
  const startDateEl = new Date(startDate.value);
  const endDateEl = new Date(endDate.value);

  const value = endDateEl.getTime() - startDateEl.getTime();
  const result = value / (1000 * 60 * 60 * 24);

  console.log(result);

  output.innerHTML = `Difference between the two dates is ${result} `;
}

//oclock

const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

function displayTime() {
  let dateInterval = new Date();
  let hrs = dateInterval.getHours();
  let min = dateInterval.getMinutes();
  let sec = dateInterval.getSeconds();

  hour.innerText = `${hrs}:`;
  minute.innerText = `${min}:`;
  second.innerText = sec;

  if (dateInterval.getMinutes < 10 || dateInterval.getSeconds < 10) {
    minute.innerText = `0${min} :`;
    second.innerText = `0${sec}`;
  }
  if (dateInterval.getMinutes >= 10 || dateInterval.getSeconds >= 10) {
    minute.innerText = `${min} :`;
    second.innerText = `${sec}`;
  }
}

setInterval(displayTime, 1000);
