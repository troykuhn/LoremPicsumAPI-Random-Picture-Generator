const baseUrl = 'https://picsum.photos'
let randomSeed = Math.floor((Math.random() * 1084) + 1);
const section = document.querySelector('section');

let url = `${baseUrl}/id/${randomSeed}/info`

let searchForm = document.querySelector('form');
searchForm.addEventListener('submit', fetchResults);

function fetchResults(e) {
    e.preventDefault();

    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }

    
    fetch(url)
    .then(function (result) {
        console.log(result)
        return result.json();
    })
    .then(function (json) {
        console.log(json);
        displayResults(json);
    })
}

function displayResults(json) {

    let picture = json.id;
    console.log(picture);


    let img = document.createElement('img');
    img.src = json.download_url;
    section.appendChild(img)
}

