
const copyClipboard = (event) =>{

    console.log(event.target.parentElement.children[1].innerText);
    const copyText = event.target.parentElement.children[1].innerText;
    navigator.clipboard.writeText(copyText);
}

const renderShort = (data) =>{

    const container = document.querySelector('.shorts');
    const element = document.createElement('div');
    element.classList.add('short');
    element.addEventListener('click', copyClipboard);
    element.innerHTML = `
        <div>${data.result.original_link}</div>
        <div>${data.result.short_link}</div>
        <div>Copy</div>
    `;
    container.appendChild(element);
}

const getApi = (url) =>{

    fetch(url)
        .then(response => response.json())
        .then(data => renderShort(data))
}

const getValue = () => document.querySelectorAll('input')[0].value;



const shortLink = (event) => {

    event.preventDefault();
    const value = getValue();
    const url = 'https://api.shrtco.de/v2/shorten?url=' + value ;
    document.querySelectorAll('input')[0].value = '';

    getApi(url);


    console.log('hee hee');
}


const init = (() => {
    const submit = document.querySelectorAll('input')[1];
    submit.addEventListener('click', shortLink);
})();