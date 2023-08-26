const countdownContainer = document.querySelector('.contador');
const daysSpan = countdownContainer.querySelector('.days');
const hoursSpan = countdownContainer.querySelector('.hours');
const minutesSpan = countdownContainer.querySelector('.minutes');
const secondsSpan = countdownContainer.querySelector('.seconds');

function updateCountdown() {
  const targetDate = new Date('2024-01-01T21:29:59'); // Cambia a la fecha objetivo
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  daysSpan.textContent = days;
  hoursSpan.textContent = hours;
  minutesSpan.textContent = minutes;
  secondsSpan.textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);