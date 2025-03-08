export const defaultWorkTime = 25 * 60;
export const defaultBreakTime = 5 * 60;
export let currentWorkTime = defaultWorkTime;
export let currentBreakTime = defaultBreakTime;

export function setWorkTime(minutes) {
    currentWorkTime = minutes * 60;
}

export function setBreakTime(minutes) {
    currentBreakTime = minutes * 60;
}

