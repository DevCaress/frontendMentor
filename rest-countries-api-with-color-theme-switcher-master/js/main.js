let countries = [];
function createCard (countrie) {
    const element = document.createElement('div');
    element.classList.add('card')
    element.innerHTML =  `
        <div>
            <img src="${countrie.flags.png}" alt="">
            </div>
        <div>
            <p class="name">Name: <span>${countrie.name.common}</span></p>
            <p class="capital">Capital: <span>${countrie.capital ? countrie.capital[0]: null}</span></p>
            <p class="capital">Population: <span>${countrie.population}</span></p>
        </div>
    `;
    document.querySelector('.cards').appendChild(element)
}

function createUI(data){  
    console.log(data[0]);  
    data.map( (item) => createCard(item) )
}

function getData(ENDPOINT){
    fetch('https://restcountries.com/v3.1/' + ENDPOINT)
    .then(res => res.json())
    .then(data => createUI(data));
}



function init(){
    getData('all');
}

init();