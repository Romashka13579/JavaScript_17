var adderTextlineByLink = document.querySelector('.adder-textline-by-link');
var adderBtnByLink = document.querySelector('.adder-btn-by-link');
var cardsHolder = document.querySelector('.cards-holder');
var holderCards = document.querySelectorAll('.holder-card');

var holderCard = holderCards[0];

adderBtnByLink.addEventListener('click', () => {
    if(adderTextlineByLink.value != ""){
        var holderCardClone = holderCard.cloneNode(true);
        holderCardClone.querySelector('.holder-card-name').innerHTML = adderTextlineByLink.value;
        cardsHolder.append(holderCardClone);
        var holderCards = document.querySelectorAll('.holder-card');
    }
});

var headerBurger = document.querySelector('.header-burger');
var headerBurgerLines = document.querySelectorAll('.header-burger-line');
burgerclicked = false;

headerBurger.addEventListener('click', () => {
    if(burgerclicked == false){
        headerBurgerLines[0].style.transform = "translateY(14px) rotate(-45deg)";
        headerBurgerLines[1].style.opacity = 0;
        headerBurgerLines[2].style.transform = "translateY(-14px) rotate(45deg)";
        burgerclicked = true;
    }
    else{
        headerBurgerLines[0].style.transform = "translateY(0px) rotate(0deg)";
        headerBurgerLines[1].style.opacity = 1;
        headerBurgerLines[2].style.transform = "translateY(0px) rotate(0deg)";
        burgerclicked = false;
    }
})

// var xhr = new XMLHttpRequest();

// xhr.open("GET", "https://cybersoft.neocities.org/index.html", true);
// xhr.responseType = "document";

// xhr.onload = function(){
//     if(xhr.readyState == 4 && xhr.status == 200){
//         var response = xhr.responseXML.querySelector('.home-web-bottom-button');

//         console.log(response.textContent);
//     }
// }

// xhr.onerror = function(){
//     console.log("shit");
// }

// xhr.send();

