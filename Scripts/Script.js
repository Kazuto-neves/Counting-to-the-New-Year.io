function countdownToNewYear() {
  var currentDate = new Date();
  var nextNewYear = new Date(currentDate.getFullYear() + 1, 0, 1);

  if (newYear(currentDate)) {
    printNewYear();
    return;
  } else {
    if (
      (nextNewYear.getFullYear() % 4 === 0 &&
        nextNewYear.getFullYear() % 100 !== 0) ||
      nextNewYear.getFullYear() % 400 === 0
    ) {
      nextNewYear.setFullYear(currentDate.getFullYear() + 1);
    }

    var difference = nextNewYear - currentDate;
    var YearNew = currentDate.getFullYear() + 1;

    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = formatClock(
      Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    var minutes = formatClock(
      Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    );
    var seconds = formatClock(Math.floor((difference % (1000 * 60)) / 1000));

    document.getElementById("DaysMissing").innerHTML =
      "Faltam " + days + " dias.<br>";
    document.getElementById("Time").innerHTML =
      hours + ":" + minutes + ":" + seconds;
    document.getElementById("Year").innerHTML = "Para " + YearNew;
    document.getElementById("YearNew").innerHTML = "";
  }
}

function formatClock(num) {
  return num <= 9 ? "0" + num : num;
}

function newYear(currentDate) {
  return currentDate.getMonth() === 0 && currentDate.getDate() === 1
    ? true
    : false;
}

function printNewYear() {
  var currentDate = new Date();
  document.getElementById("YearNew").innerHTML =
    "Happy " + currentDate.getFullYear() + "!";
  document.getElementById("DaysMissing").innerHTML = "";
  document.getElementById("Time").innerHTML = "";
  document.getElementById("Year").innerHTML = "";
}

function range() {
  return Math.floor(Math.random() * 50) + 1;
}

function createFirework(range) {
  var currentDate = new Date();
  const fireworkContainer = document.getElementsByTagName("body")[0];
  if (newYear(currentDate)) {
    for (let i = 0; i < range; i++) {
      const firework = document.createElement("div");
      firework.className = "firework";
      fireworkContainer.appendChild(firework);
    }
  }
}

function song() {
  var currentDate = new Date();
  const SONG = document.getElementById("song");
  if (newYear(currentDate)) {
    SONG.src = "../Song/firework-show-short-64657.mp3";
    SONG.play();
  }
}

countdownToNewYear();
setInterval(countdownToNewYear, 1000);

createFirework(range());
setInterval(createFirework, 1000);

song();
setInterval(song, 20000);
