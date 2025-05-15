const newYear = '2025-01-01';

const secondsP = document.getElementById('sec');
const minutesP = document.getElementById('min');
const hoursP= document.getElementById('hours');
const daysP= document.getElementById('days');

function countdownUpdater() {
    const newYearDate =  new Date(newYear);
    const currentDate = new Date();
    const totalSeconds = (newYearDate - currentDate)/1000 ;

     const days = Math.floor(totalSeconds/ 3600 / 24);
    const hours =  Math.floor(totalSeconds/ 3600) % 24;
    const minutes =  Math.floor(totalSeconds/60) % 60;
    const seconds =  Math.floor(totalSeconds) % 60;

daysP.innerHTML= Format(days) ;
   secondsP.innerHTML= Format(seconds);
   minutesP.innerHTML= Format(minutes);
   hoursP.innerHTML= Format(hours);
   

}

function Format (time){
    return time < 10 ?  `0${time}` : time ;
}

countdownUpdater();

setInterval(
    countdownUpdater,1000
)


