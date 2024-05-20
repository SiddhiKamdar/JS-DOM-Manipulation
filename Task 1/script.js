var p = document.querySelector('p')
var btn = document.querySelector('button')
btn.addEventListener('click', function(){
    r = Math.ceil(Math.random()*255)
    g = Math.ceil(Math.random()*255)
    b = Math.ceil(Math.random()*255)
    p.style.color = "rgb("+r+","+g+","+b+")"
})