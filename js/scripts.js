const hoursElement = document.getElementById('hours');
const daysElement = document.getElementById('days');

const secondsHandElement = document.getElementById('seconds-hand');
const minutesHandElement = document.getElementById('minutes-hand');
const hoursHandElement = document.getElementById('hours-hand');

const weekDaysList = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado'
];
const monthsList = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Novimebre',
  'Diciembre'
];

const defineDigitalClock = () => {
  const date = new Date();
  let day = weekDaysList[date.getDay()];
  let month = monthsList[date.getMonth()];
  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  hoursElement.textContent = `${date.getHours()} : ${minutes}`;
  daysElement.textContent = `${day} ${date.getDate()} ${month} ${date.getFullYear()}`;
};

setInterval(defineDigitalClock, 1000);
