function getElement(param){
    var result = document.getElementById(param);
}

var hourHand = getElement('hour_hand');
var minuteHand = getElement('minute_hand');
var secondHand = getElement('second_hand');

function initClock(){
    var date = new Date();
    var hour = date.getHours()%12;
    var minute = date.getMinutes();
    var second = date.getSeconds();

    var hourDeg = (hour * 30) + (0.5 * minute) ;
    var minuteDeg = (minute * 6) + (0.1 * second);
    var secondDeg = second * 6;

    hourHand.style.transform = 'rotate(' + hourDeg + 'deg)';
    minuteHand.style.transform = 'rotate(' + minuteDeg + 'deg)';
    secondHand.style.transform = 'rotate(' + secondDeg + 'deg)';    

    setTimeout(initClock, 1000);
};

initClock();