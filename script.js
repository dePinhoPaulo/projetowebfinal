let botao = document.getElementById("botaologin");
let telalog = document.getElementById("telalogin");
let telapri = document.getElementById("header");
let telabusca = document.getElementById("busca");
let telacad = document.getElementById("telacadastro");


function fnlogin(){
  telalog.style.display='block';
  telapri.style.display='none';
  telabusca.style.display='none';
  telacad.style.display='none';
}

function cadastrar(){
  telalog.style.display='none';
  telapri.style.display='none';
  telabusca.style.display='none';
  telacad.style.display='block';
}

let inpmail = document.getElementById("email");
let insenha = document.getElementById("password");

let resultado = document.getElementById("resultado");

let token = localStorage.getItem("token");
  
if(token){
    telalog.style.display='none';
    telapri.style.display='none';
    telabusca.style.display='block';
    telacad.style.display='none';
}

////

///

function enviar(){
   
    let email = inpmail.value;
    let senha = insenha.value;

    telalog.style.display='none';
    telapri.style.display='block'; 
    telacad.style.display='none';

    console.log(JSON.stringify({
      email: inpmail.value,
      password: insenha.value,
    }));

    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, /",
        "Content-Type": "application/json",
      },
            body: JSON.stringify({
            email: inpmail.value,
            password: insenha.value,
          })
      })

      .then(function(respostadoserver){
        return respostadoserver.json()
      })

      .then(function(respostaconvertida){
        localStorage.setItem("token",respostaconvertida.token)
        console.log(respostaconvertida)
      })

}

////////////

const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

const searchInput = getElement('.search-input'),
      searchButton = getElement('.search-button'),
      container = getElement('.pokemon'),
      erroMessage = getElement('.error');

var pokeName,
    pokemon,
    card;


function getElement(element) {
  return document.querySelector(element);
}

function requestPokeInfo(url, name) {
  fetch(url + name)
    .then(response => response.json())
    .then(data => {
      pokemon = data;
    })
    .catch(err => console.log(err));
}

function createCard () {
  card = `
    <div class="pokemon-picture">
      <img src="${pokemon.sprites.front_default}" alt="Sprite of ${pokemon.name}">
    </div>
    <div class="pokemon-info">
        <h1 class="name">Name: ${pokemon.name}</h1>
        <h2 class="number">Nº ${pokemon.id}</h2>
        <h3 class="type">Type: ${pokemon.types.map(item => item.type.name).toString()}</h3>
        <h3 class="skill">Skills: ${pokemon.moves.map(item => ' ' + item.move.name).toString()}</h3>
        <h3 class="weight">Weight: ${pokemon.weight  / 10}kg</h3>
        <h3 class="height">Height: ${pokemon.height  / 10}m</h3>
    </div>`;
  return card;
}

function startApp(pokeName) {
  requestPokeInfo(baseUrl, pokeName);

  setTimeout(function () {
      container.innerHTML = createCard();
  }, 2000);
}

searchButton.addEventListener('click', event => {
  event.preventDefault();
  pokeName = searchInput.value.toLowerCase();
  startApp(pokeName);
});