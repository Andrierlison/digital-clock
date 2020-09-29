setInterval(function clock() {
  let clock = new Date();
  let hours = clock.getHours();
  let minutes = clock.getMinutes();
  let seconds = clock.getSeconds();
  document.getElementById("hours").innerText = hours + " hours";
  document.getElementById("minutes").innerText = minutes + " minutes";
  document.getElementById("seconds").innerText = seconds + " seconds";
}, 100);
