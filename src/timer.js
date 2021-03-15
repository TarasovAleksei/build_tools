import { listenerStart, listenerStop } from './listener.js';
export const timer = document.getElementById('timer');
export const timerResult = document.getElementById('timer__result');
const timerStart = document.getElementById('timer__start');
const timerStop = document.getElementById('timer__stop');

timerStart.addEventListener('click', listenerStart);
timerStop.addEventListener('click', listenerStop);
