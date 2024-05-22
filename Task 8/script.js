var input  = document.querySelector('input');
var people = document.querySelector('.people');
var data = [
    { name: "Kim Taehyug", image: "./images/img1.jpg" },
    { name: "Kim Ji won", image: "./images/img2.jpg" },
    { name: "Kim Wo Bin", image: "./images/img3.jpg" },
    { name: "Lee Jung Suk", image: "./images/img4.jpg" },
    { name: "Lee Dong wook", image: "./images/img5.jpg" },
    { name: "Lee Min ho", image: "./images/img6.jpg" },
]
var pers = "";
data.forEach(function (elem) {
    pers += 
    `<div class="person">
        <div class="img">
            <img src=${elem.image} alt="">
        </div>
        <h4>${elem.name}</h4>
    </div>`
})
people.innerHTML = pers;
input.addEventListener("input", function(){
    var searchResult = data.filter(function(e){
        return e.name.toLowerCase().startsWith(input.value.toLowerCase())
    })
    var newRes = ""
    searchResult.forEach(function (elem) {
        newRes += 
        `<div class="person">
            <div class="img">
                <img src=${elem.image} alt="">
            </div>
            <h4>${elem.name}</h4>
        </div>`
    })
    people.innerHTML = newRes;
})