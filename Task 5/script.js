var start = document.querySelector('#start')
var stop = document.querySelector('#stop')
var time = document.querySelector('h2')

var interval;
start.addEventListener('click', function(){
    var count = 1
    interval = setInterval(function(){
        time.textContent = count;
        count++;
    }, 1000);
})

stop.addEventListener('click', function(){
    clearInterval(interval)
})