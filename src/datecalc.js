import { formatError } from './common.js';
import { diffDates, diffToHtml } from './diffdates.js';

export const dateCalcForm = document.getElementById('datecalc');
const dateCalcResult = document.getElementById('datecalc__result');

dateCalcForm.addEventListener('submit', handelCalcDates);

function handelCalcDates(event) {
  dateCalcResult.innerHTML = '';
  event.preventDefault();

  let { firstDate, secondDate } = event.target.elements;
  (firstDate = firstDate.value), (secondDate = secondDate.value);
  if (firstDate && secondDate)
    dateCalcResult.innerHTML = diffToHtml(diffDates(firstDate, secondDate));
  else dateCalcResult.innerHTML = formatError('Обе даты должны быть выбраны');
}
