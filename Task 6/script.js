var home = document.querySelector('#home')
var about = document.querySelector('#about')
var contact = document.querySelector('#contact')
var hometext = document.querySelector('#hometext')
var abouttext = document.querySelector('#abouttext')
var contacttext = document.querySelector('#contacttext')

hometext.style.display = 'block'

home.addEventListener('click', function(){
    removeExistingText()
    hometext.style.display = 'block'
})
about.addEventListener('click', function(){
    removeExistingText()
    abouttext.style.display = 'block'
})
contact.addEventListener('click', function(){
    removeExistingText()
    contacttext.style.display = 'block'
})
function removeExistingText(){
    document.querySelectorAll('h3').forEach(function(h3){
        h3.style.display = 'none'
    })
}