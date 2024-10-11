const FLEX_CONTAINER = document.getElementById('flex-container');

function countdownToNewYear() {
    var currentDate = new Date();
    var nextNewYear = new Date(currentDate.getFullYear() + 1, 0, 1);

    if (newYear(currentDate)) {
        printNewYear();
        return;
    }

    var difference = nextNewYear - currentDate;
    var YearNew = currentDate.getFullYear() + 1;

    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = formatClock(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    var minutes = formatClock(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
    var seconds = formatClock(Math.floor((difference % (1000 * 60)) / 1000));

    document.getElementById("DaysMissing").innerHTML = "Faltam " + days + " dias.<br>";
    document.getElementById("Time").innerHTML = hours + ":" + minutes + ":" + seconds;
    document.getElementById("Year").innerHTML = "Para " + YearNew;
    document.getElementById("YearNew").innerHTML = "";
}

function formatClock(num) {
    return num <= 9 ? "0" + num : num;
}

function newYear(currentDate) {
    return currentDate.getMonth() === 0 && currentDate.getDate() === 1;
}

function printNewYear() {
    var currentDate = new Date();
    document.getElementById("YearNew").innerHTML = "Happy " + currentDate.getFullYear() + "!";
    document.getElementById("DaysMissing").innerHTML = "";
    document.getElementById("Time").innerHTML = "";
    document.getElementById("Year").innerHTML = "";
}

function createFirework() {
    var currentDate = new Date();
    const fireworkContainer = document.getElementById("firework-container");

    if (newYear(currentDate)) {
        const numFireworks = 5; // Number of fireworks to create
        const containerWidth = fireworkContainer.offsetWidth; // Largura do contêiner
        const containerHeight = fireworkContainer.offsetHeight; // Altura do contêiner

        for (let i = 0; i < numFireworks; i++) {
            const firework = document.createElement("div");
            firework.className = "firework";

            // Definir uma posição aleatória dentro dos limites do contêiner
            const randomLeft = Math.random() * containerWidth; // Posição horizontal
            const randomTop = Math.random() * containerHeight; // Posição vertical

            firework.style.position = 'absolute';
            firework.style.left = randomLeft + "px";
            firework.style.top = randomTop + "px";

            fireworkContainer.appendChild(firework);

            // Remover o fogo de artifício após 2 segundos (duração da animação)
            setTimeout(() => {
                firework.remove();
            }, 2000);
        }
    }
}



countdownToNewYear();
setInterval(countdownToNewYear, 1000);

// Set interval for creating fireworks every second
setInterval(createFirework, 1000);
