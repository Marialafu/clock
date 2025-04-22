const hoursElement = document.getElementById('hours');
const daysElement = document.getElementById('days');
const rootStyles = document.documentElement.style

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
  let seconds = date.getSeconds();


  
 //DIGITAL CLOCK
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  hoursElement.textContent = `${date.getHours()} : ${minutes}`;
  daysElement.textContent = `${day} ${date.getDate()} ${month} ${date.getFullYear()}`;

  //ANALOGIC CLOCK
  let secondsDeg = seconds * 6;
  let minutesDeg = minutes * 0.5;
  let hoursDeg = hours * 30;

  if (secondsDeg === 360){
    secondsDeg = 0 * 6
  }
  if (minutesDeg === 360){
    minutesDeg = 0 * 0.5
  }
  if (hoursDeg === 360){
    hoursDeg = 0 * 30
  }

  rootStyles.setProperty('--deg-seconds', `${secondsDeg}deg`)
  rootStyles.setProperty('--deg-minutes', `${minutesDeg}deg`)
  rootStyles.setProperty('--deg-hours', `${hoursDeg}deg`)
  
  
  

};
setInterval(defineDigitalClock, 1000);

//30º por hora
//0.5º por minuto
