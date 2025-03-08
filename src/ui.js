export function updateTimerDisplay(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    document.getElementById("timer").textContent = 
        `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

