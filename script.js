let time = 0;
let countdown;
const display = document.getElementById("display");

function setTimer(seconds) {
  time = seconds;
  updateDisplay(time);
  clearInterval(countdown);
}

function setCustomTime() {
  const custom = document.getElementById("custom").value;
  if (custom && custom > 0) {
    setTimer(parseInt(custom));
  }
}

function updateDisplay(seconds) {
  const m = String(Math.floor(seconds / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  display.textContent = `${m}:${s}`;
}

function startTimer() {
  if (time > 0) {
    clearInterval(countdown);
    countdown = setInterval(() => {
      if (time > 0) {
        time--;
        updateDisplay(time);
      } else {
        clearInterval(countdown);
        const sound = document.getElementById("alarmSound");
        if (sound) sound.play().catch(e => console.log("Error al reproducir:", e));
        alert("¡Tiempo terminado!");
      }
    }, 1000);
  }
}

function resetTimer() {
  clearInterval(countdown);
  time = 0;
  updateDisplay(0);
}
