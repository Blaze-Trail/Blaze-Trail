// var countDown = () =>

function countDown() {
    var countDate = new Date('August 13, 2022 00:00:00').getTime();
    // console.log(countDate)
    var now = new Date().getTime();
    var gapDate = countDate - now;
    


   // how time works
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;

    //calculate
    var textDay = Math.floor(gapDate / day);
    var textHour = Math.floor((gapDate % day) / hour);
    var textMinute = Math.floor((gapDate % hour) / minute);
    var textSecond = Math.floor((gapDate % minute) / second);
    

    //update the html
    document.querySelector('.day').innerHTML = textDay;
    document.querySelector('.hour').innerHTML = textHour;
    document.querySelector('.minute').innerHTML = textMinute;
    document.querySelector('.second').innerHTML = textSecond;

    document.querySelector('span').innerHTML = textDay;

    //console.log(textMinute)
}

//document.querySelector('span').innerHTML = textDay;
setInterval(countDown, 1000)

//reactDOM.render(<h1>Hello World!</h1>, document.querySelector('root'))