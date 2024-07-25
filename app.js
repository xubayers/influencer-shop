// mobile device nav features start =>
let menu = document.querySelector(".menu");
let nav = document.querySelector(".nav-bar");
let crossBtn = document.querySelector(".cross-btn");
menu.addEventListener("click", function () {
    nav.setAttribute("class", "phone-menu");
    menu.setAttribute("class", "hide-menu");
    crossBtn.style.display = "block";
});
function crossFunc() {
    nav.removeAttribute("class", "phone-menu");
    menu.removeAttribute("class", "hide-menu");
    menu.setAttribute("class", "menu");
    crossBtn.style.display = "none";
}
crossBtn.addEventListener("click", crossFunc)
// mobile device nav features end =>
// loder 
const loader = document.querySelector('.ldr');
// pages
const main = document.querySelector(".main");
const spondor = document.querySelector(".sp");
const collection = document.querySelector(".coll");
const featureProdut = document.querySelector(".feat");

const product = document.querySelector('.products');
const logInPage = document.querySelector(".log-in");
const signInPage = document.querySelector(".sign-in");
// navigators
const goHome = document.querySelector(".go-home");
const goProd = document.querySelector(".go-prod");
const goSignIn = document.querySelector(".go-sign-in");
const goLogIn = document.querySelector(".go-log-in");

function navigatorColor(...argus) {
    let navs = argus;
    navs[0].setAttribute("class", "deActive")
    navs[1].setAttribute("class", "deActive")
    navs[2].setAttribute("class", "deActive")
    navs[3].setAttribute("class", "active")
}
function hideAndShowPage(...navs) {
    navs[0].style.display = 'none';
    navs[1].style.display = 'none';
    navs[2].style.display = 'none';

   if(navs[2], navs[3], navs[4], navs[5]) {
    navs[3].style.display = 'none';
    navs[5].style.display = 'none';
    navs[4].style.display = 'block';
    if(navs[6]) {
         navs[6].style.display = 'none';
    }
}
}
function homePageShow(...args) {
    args[0].style.display = 'block';
    args[1].style.display = 'block';
    args[2].style.display = 'block';
    args[3].style.display = 'block';
}
goHome.addEventListener('click', function () {
    navigatorColor(goSignIn, goProd, goLogIn, goHome)
    hideAndShowPage(logInPage, signInPage, product)
    homePageShow(main, spondor, collection, featureProdut)
    crossFunc()
})
goProd.addEventListener('click', function () {
    navigatorColor(goHome, goSignIn, goLogIn, goProd)
    hideAndShowPage(main, spondor, collection, featureProdut, product, logInPage, signInPage)
    crossFunc()
})
goSignIn.addEventListener('click', function () {
    navigatorColor(goHome, goProd, goLogIn, goSignIn)
    hideAndShowPage(main, spondor, collection, featureProdut, signInPage, logInPage, product)
    crossFunc()
})
goLogIn.addEventListener('click', function () {
    navigatorColor(goHome, goProd, goSignIn, goLogIn)
    hideAndShowPage(main, spondor, collection, featureProdut, logInPage, signInPage, product)
    crossFunc()
})
// dark and white mode
const dark = document.querySelector('.dark');
const white = document.querySelector('.white');
const head = document.querySelector('.head');
dark.addEventListener('click', function() {
    head.setAttribute('href', `./styles/dark.css`);
})
white.addEventListener('click', function() {
    head.removeAttribute("href", `./styles/dark.css`)
    console.log('clicked..')
})
// user form 
const name = document.querySelector('.name');
const email = document.querySelector('.email');
const gender = document.querySelector('.gender');
const form = document.querySelector('form');
