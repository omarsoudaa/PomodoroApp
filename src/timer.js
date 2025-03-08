let timeLeft = 25 * 60;
let timer;
let isRunning = false;

export function startTimer(updateUI) {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateUI(timeLeft);
            } else {
                clearInterval(timer);
                isRunning = false;
                alert("session end!");
            }
        }, 1000);
    }
}

export function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

export function resetTimer(updateUI) {
    clearInterval(timer);
    timeLeft = 25 * 60;
    isRunning = false;
    updateUI(timeLeft);
}

