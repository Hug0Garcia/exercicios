<body>
    <div>O jogo termina em <span id="time">05:00</span> minutos!</div>
    <div>O jogo termina em <span id="cavalos">02:00</span> minutos!</div>
</body>



function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};

window.onload = function () {
    var twoMinutes = 60 * 2,
        display = document.querySelector('#cavalos');
    startTimer(twoMinutes, display);
};