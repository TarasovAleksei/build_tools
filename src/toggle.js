import { dateCalcForm } from './datecalc.js';
import { timer } from './timer.js';

const dateButton = document.getElementById('dateButton');
const timerButton = document.getElementById('timerButton');

dateButton.addEventListener('click', () => {
  dateCalcForm.style.display = 'block';
  timer.style.display = 'none';
});
timerButton.addEventListener('click', () => {
  timer.style.display = 'block';
  dateCalcForm.style.display = 'none';
});
