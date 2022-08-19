const documentHours = document.getElementById("hours");
const documentMinutes = document.getElementById("minutes");
const documentSeconds = document.getElementById("seconds");

const clock = setInterval(function time() {
  let dateToday = new Date();
  let hours = dateToday.getHours();
  let minutes = dateToday.getMinutes();
  let seconds = dateToday.getSeconds();

  if (hours < 10) return (hours = "0" + hours);

  if (minutes < 10) return (minutes = "0" + minutes);

  if (seconds < 10) return (seconds = "0" + seconds);

  documentHours.textContent = hours;
  documentMinutes.textContent = minutes;
  documentSeconds.textContent = seconds;
});
