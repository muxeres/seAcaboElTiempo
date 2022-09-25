let elementHour = document.querySelector("#hour"),
    elementMinute = document.querySelector("#minutes"),
    elementSecond = document.querySelector("#seconds");
let hours = 0,
    second = 0,
    minute = 0;

let degHours = 0, 
    degSecond = 0, 
    degMinute = 0;

function getSecondsSinceStartOfDay() {
    
    hours = new Date().getHours()
    second = new Date().getSeconds()
    minute = new Date().getMinutes()
    return {hours,minute,second}
}
    
setInterval( function() {
    let time = getSecondsSinceStartOfDay();
    // your code here
    degHours = (time.hours)*30 +180
    degMinute = (time.minute)*6 +180
    degSecond = (time.second)*6 +180
    console.log(degMinute );
    elementHour.style.transform = `rotate(${degHours}deg)`
    elementMinute.style.transform = `rotate(${degMinute}deg)`
    elementSecond.style.transform = `rotate(${degSecond}deg)`

}, 1000);
// CG