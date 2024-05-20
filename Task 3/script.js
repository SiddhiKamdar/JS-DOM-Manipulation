var form = document.querySelector('form');
var input1 = document.querySelector('#input1')
var input2 = document.querySelector('#input2')
var h4 = document.querySelector('h4')

form.addEventListener('submit', function(ev){
    ev.preventDefault();
    if(input1.value.trim() === '' || input2.value.trim() === ''){
        h4.textContent = 'error, some fields are empty'
        h4.style.color = 'red'
    }
    else {
        h4.textContent = '';
    }
})