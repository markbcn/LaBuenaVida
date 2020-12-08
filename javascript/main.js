// funcion para cuando hacemos scroll, y cambie de color la brra del nav.
window.onscroll = function () {
    myFunction();
};

function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementsByClassName("main-nav")[0].classList.add('active')
    } else {
        document.getElementsByClassName("main-nav")[0].classList.remove('active')
    }
}

// funcion para los idiomas..

let actualLanguage = 'es'; // Idioma por defecto...

function setLanguaje(newLanguage) {
    const oldLanguageElements = document.getElementsByClassName(actualLanguage);
    
    for (element of oldLanguageElements) {   
        element.style.display = 'none';
    }
	
    actualLanguage = newLanguage;

    const newLanguageElements = document.getElementsByClassName(actualLanguage);
    for (element of newLanguageElements) {
        element.style.display = 'inline';
    }

    const newURL = window.location.protocol + '//' + window.location.host + window.location.pathname + '?lang=' + actualLanguage;
    window.history.replaceState({}, '', newURL);
}


const querystring = window.location.search; // Si la url és: https://miweb.es?lang=es , retorna ?lang=es
let urlParams = new URLSearchParams(querystring);

if (urlParams.get('lang')) actualLanguage = urlParams.get('lang');

const espLanguage = document.getElementsByClassName('es');
const enLanguage = document.getElementsByClassName('en');

if (actualLanguage === 'en') {
    for(element of enLanguage) {
        element.style.display = 'inline';
        }
    for(element of espLanguage){
        element.style.display = 'none';
    }
} else if (actualLanguage === 'es') {
    for(element of enLanguage) {
        element.style.display = 'none';
    }
    for(element of espLanguage){
        element.style.display = 'inline';
    }
}