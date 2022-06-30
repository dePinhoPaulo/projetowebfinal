const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var Personagem = require('./model/personagems');
var Usuario = require('./model/usuarios');
const cool = require('cool-ascii-faces');

app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/cool', (req, res) => res.send(cool()))
  .listen(process.env.PORT || 5000, () => console.log(`Listening on ${ process.env.PORT || 5000 }`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.engine('html', require('ejs').renderFile);


app.post('/caduser', function (req, res) {
    var usuario = new Usuario({
      nome: req.body.nome,
      senha: req.body.senha,
      email: req.body.email
    })
  
    usuario.save(function (err) {
      if (err) {
        console.log(err);
      } else {
        res.render('../login.html');
      }
    })
  })
  
  app.post('/pokemon', function (req, res) {
    var personagems = new Personagem({
      nome: req.body.nomepokemon,
      tipo: req.body.tipopokemon,
      skill: req.body.skillpokemon,
      foto: req.body.fotopokemon,
    })
  
    pokemons.save(function (err) {
      if (err) {
        console.log(err);
      } else {
        res.render('../pokemons.html');
      }
    })
  })
