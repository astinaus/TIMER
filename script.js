const setTimeBtn = document.querySelectorAll('.set-btn');
const Btn = document.querySelectorAll('.btn');

let [hours, minutes, seconds] = [0, 0, 0];

setTimeBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (e.currentTarget.id === 'seconds') {
      seconds += 10;
      if (seconds > 59) {
        seconds = '0' + 0;
        minutes += 1;
      }
      e.currentTarget.textContent = seconds;
    }
  });
});
