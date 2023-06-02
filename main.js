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

            card.innerHTML = `
                
                <img class="card__image" src=${el.flags.svg} alt="flag">
                <h3 class="card__name">${el.name.common}</h3>
                <p class="desc card__population">Population: ${el.population}</p>
                <p class="desc card__region">Region: ${el.region}</p>
                <p class="desc card__capital">Capital: ${el.capital}</p>
            `;
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

});









