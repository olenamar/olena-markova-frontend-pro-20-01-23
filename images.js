const imgElement = document.body.getElementsByTagName('img')[0];

let numberRandom = imgRandom();

imgElement.src = `./img/${numberRandom}.jpg`;

function imgRandom() {
    return Math.round(Math.random() * 9);
}