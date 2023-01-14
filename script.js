const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setclock() {
  const dateTime = new Date();
  const seconds = dateTime.getSeconds();
  const minutes = dateTime.getMinutes();
  const hours = dateTime.getHours();
  const secondRotation = seconds * (360 / 60);
  const minuteRotation = (minutes * 360 + secondRotation) / 60;
  const hourRotation = (hours * 360 + minuteRotation) / 12;
  setRotation(secondHand, secondRotation);
  setRotation(minuteHand, minuteRotation);
  setRotation(hourHand, hourRotation);
}
function setRotation(element, setDegree) {
  element.style.setProperty("--rotation", setDegree);
}

setInterval(setclock, 1000);

setclock();
