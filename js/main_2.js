var adderTextlineByLink = document.querySelector('adder-textline-by-link');
var adderBtnByLink = document.querySelector('adder-btn-by-link');
var cardsHolder = document.querySelector('cards-holder');
var holderCards = document.querySelectorAll('holder-card');

adderBtnByLink.addEventListener('click', () => {
    if(adderTextlineByLink.value != ""){
        import { grabTxt } from './main.js'
        var holderCardClone = holderCards[0].cloneNode(true);
        holderCardClone.querySelector('holder-card-name').innerHTML = grabTxt;
        cardsHolder.append(holderCardClone);
        var holderCards = document.querySelectorAll('holder-card');
    }
});