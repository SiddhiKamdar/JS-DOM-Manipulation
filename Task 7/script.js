var prg = document.querySelector('#progress')
var h3 = document.querySelector('h3')
var count = 0;

var interval = setInterval(function(){
    if(count === 100){
        //h3.style.opacity = 1
        h3.textContent = 'Download Completed 👍'
        clearInterval(interval)
    }
    count++
    prg.style.width = count + '%'
},50)