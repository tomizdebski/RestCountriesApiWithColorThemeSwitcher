const toggleLightDark = document.querySelector(".header__toggle");
const searchInput = document.querySelector(".containerSF__input");
const selectRegion = document.querySelector(".containerSF__option");
const toggleDarkLight = document.querySelector(".header__toggle");

const urlApi ="https://restcountries.com/v3.1/all";
const regions =['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

let modeDarkLight= "light";

const getCountry = (url) => {

    const cardContainer = document.querySelector(".card_container");
    const body = document.querySelector(".body");
    cardContainer.innerHTML='';
    

    fetch(url)
    .then((request) => request.json())
    .then(res => {
        
        res.map(el => {
            const card = document.createElement("div");
            card.className = "card";

            const img = document.createElement("img");
            img.className = "card__image";
            img.src = `${el.flags.svg}`;
            card.appendChild(img);

            const h3 = document.createElement("h3");
            h3.className = "card__name";
            h3.innerText = `${el.name.common}`;
            card.appendChild(h3);

            const paragrafPop = document.createElement("p");
            paragrafPop.className = "desc card__population";
            paragrafPop.innerText = `${el.population}`;
            card.appendChild(paragrafPop);

            const paragrafReg = document.createElement("p");
            paragrafReg.className = "desc card__region";
            paragrafReg.innerText = `${el.region}`;
            card.appendChild(paragrafReg);

            const paragrafCap = document.createElement("p");
            paragrafCap.className = "desc card__capital";
            paragrafCap.innerText = `${el.capital}`;
            card.appendChild(paragrafCap);

            cardContainer.appendChild(card);
        });
    });
}



document.addEventListener('DOMContentLoaded', function() {
    getCountry(urlApi);
});

selectRegion.addEventListener('change', (e) => {
    console.log(e.target.value);
    const urlRegion = `https://restcountries.com/v3.1/region/${e.target.value}`;
    getCountry(urlRegion);
});

const cardContainer = document.querySelector(".card_container");
cardContainer.addEventListener('click', (e) => {
    const containerSF = document.querySelector(".containerSF");
    containerSF.innerHTML = `<button class="button button-back"><- Back</button>`;
    console.log(e.target.outerHTML);
    cardContainer.innerHTML='';
    const card = document.createElement('div');
    card.className = "card-big";
    card.innerHTML = `${e.target.outerHTML}`;


    cardContainer.appendChild(card);
});


searchInput.addEventListener('change', (e) => {
    console.log(e.target.value);
    const url = `https://restcountries.com/v3.1/name/${e.target.value}`
    getCountry(url);
});

toggleDarkLight.addEventListener('click', (e) => {
    const header = document.querySelector(".header");
    const toggleLightDark = document.querySelector(".header__toggle");
    const cardContainer = document.querySelector('.card_container');
    const card = document.querySelectorAll('.card');
    const contSF = document.querySelector('.containerSF');
    const search = document.querySelector('.containerSF__input');
    const filter = document.querySelector('.containerSF__option');
    const buttonBack = document.querySelector('.button-back');
    console.log(buttonBack);
 
    
    if (modeDarkLight === "light") {
        modeDarkLight = "dark";
        toggleDarkLight.innerHTML = `<ion-icon  name="moon"></ion-icon>Dark mode`;
        header.classList.add("light");
        toggleLightDark.classList.add("light");
        cardContainer.classList.add("light-card_container");
        card.forEach(element => {
            element.classList.add("light");
        });
        contSF.classList.add("light-card_container");
        if(search) search.classList.add("light-card");
        if(filter) filter.classList.add("light-card");
        buttonBack.classList.add("light");



    }else if (modeDarkLight === "dark") {
        modeDarkLight = "light"
        toggleDarkLight.innerHTML = `<ion-icon name="sunny"></ion-icon>Light mode`;
        header.classList.remove("light");
        toggleLightDark.classList.remove("light");
        cardContainer.classList.remove("light-card_container");
        card.forEach(element => {
            element.classList.remove("light");
        });
        contSF.classList.remove("light-card_container");
        if(search) search.classList.remove("light-card");
        filter ? filter.classList.remove("light-card"): null;
        buttonBack.classList.remove("light");

    };
    
});









