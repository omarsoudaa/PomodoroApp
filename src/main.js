import { startTimer, pauseTimer, resetTimer } from "./timer.js";
import { updateTimerDisplay } from "./ui.js";

document.getElementById("start").addEventListener("click", () => startTimer(updateTimerDisplay));
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", () => resetTimer(updateTimerDisplay));

updateTimerDisplay(25 * 60);

