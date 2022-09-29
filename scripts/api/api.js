const timeStamp = '1664309270';
const apiKey = '9dba7503a25556294df09d603b40f159';
const  md5 = 'd3670145ca8b01118d04b03d2e420cbf';
const offSet = 100;
const heroes = [];
const campoPesquisa = document.querySelector('#pesquisa');
const items = document.querySelectorAll('personagem-text');
var n = 0;

for (var cont = 0; cont < 16; cont++) {
    console.log(n);

    fetch(`http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=100&offset=${n}`
).then((response) => {
    return response.json();
}).then((jsonParsed) => {
    const divHero = document.querySelector('#lista');

    jsonParsed.data.results.forEach(element => {
        const srcImage = element.thumbnail.path + '.' + element.thumbnail.extension
        const nameHero = element.name

    if (element.thumbnail.path == 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available' || element.thumbnail.path == 'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708' ) {
    return null;
    }

        createDivHero(srcImage, nameHero, divHero);
        heroes.push(element);
    });
    console.log(jsonParsed);
}) 
n = n + 100;
} 

function createDivHero(srcImage, nameHero, divToAppend) {
    const divPai = document.createElement('li')
    const divFilho = document.createElement('div')
    const textName = document.createElement('text')
    const img = document.createElement('img')

    textName.textContent = nameHero
    img.src = srcImage

    divFilho.appendChild(img)
    divFilho.appendChild(textName)
    divPai.appendChild(divFilho)
    divToAppend.appendChild(divPai)

    divPai.classList.add("personagem")
    img.classList.add("personagem-img")
    textName.classList.add("personagem-text")
}

campoPesquisa.addEventListener('keyup', function(e) {
  const divHero = document.querySelector('#lista');
  divHero.innerHTML = '';  
  const filteredHero = heroes.filter(hero => hero.name.toLowerCase().includes(e.target.value.toLowerCase()))
  .forEach(hero => {
    const srcImage = hero.thumbnail.path + '.' + hero.thumbnail.extension
    const nameHero = hero.name
    
    createDivHero(srcImage, nameHero, divHero)
  })
}); 